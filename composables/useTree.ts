import { currentPage, tree, rawRoutes } from '@slidev/client/logic/nav.ts';
import type { TocItem } from '@slidev/types';

function getRoute(path: string | number){
    return rawRoutes.find(i => i.path === `${path}`)
}

function filterOnlyCurrentTree(tree:TocItem[]):TocItem[]{
    return tree.filter(
        (item: TocItem) => item.active || item.activeParent || item.hasActiveParent,
    )
    .map((item: TocItem) => ({
        ...item,
        children: filterOnlyCurrentTree(item.children),
    }))
}
function filterOnlySiblings(tree:TocItem[]):TocItem[]{
    const treehasActiveItem = tree.some(
        (item: TocItem) => item.active || item.activeParent || item.hasActiveParent,
      )
    return tree
    .filter(() => treehasActiveItem)
    .map((item: TocItem) => ({
        ...item,
        children: filterOnlySiblings(item.children),
    }))
}

function unfoldTree(tree: TocItem[], level=1): TocItem[]{
    return tree.reduce((acc, item) => {
        acc.push(item);
        if (item.children) {
            acc = acc.concat(unfoldTree(item.children, level + 1));
        }
        return acc;
    }, [] as TocItem[]);
}

export default function useTree(
    maxDepth: number = 2, 
    useLongTitle: boolean | string = false, 
    start: number = 1,
    mode: 'all' | 'onlyCurrentTree' | 'onlySiblings' = 'all',
    unfold = true
):TocItem[]{
    const filterTreeDepth = (tree:TocItem[], level=1): TocItem[] => {
        if (level > maxDepth) {
            return [];
        }
        return tree.reduce((acc, item) =>{
            const route = getRoute(item.path)
            const shortTitle = route?.meta?.slide?.frontmatter?.shortTitle;
            const title = shortTitle && !useLongTitle ? shortTitle : item.title;
            const fixedLevel = route?.meta?.slide?.level || 1;
            if (fixedLevel <= maxDepth && item.title && !item.hideInToc){
                acc.push({
                    ...item,
                    title,
                    level: fixedLevel,
                    children: filterTreeDepth(item.children, level + 1),
                })
            }
            return acc
        }, [] as TocItem[])
    }
    let rawTree = filterTreeDepth(tree.value)

    if (mode === 'onlyCurrentTree'){
        rawTree = filterOnlyCurrentTree(rawTree);
    }else if (mode === 'onlySiblings'){
        rawTree = filterOnlySiblings(rawTree);
    }


    if (!unfold){
        return start > 0 ? rawTree.slice(start) : rawTree;
    }

    const unfoldedTree = start > 0 ? unfoldTree(rawTree).slice(start) : unfoldTree(rawTree);

    
    let filteredTree = unfoldedTree.filter(item =>
        item.level && item.level <= maxDepth && item.title && !item.hideInToc
    )

    filteredTree[0].level = 1
    filteredTree[filteredTree.length-1].level = 1

    return filteredTree.map((item, index) => {
        const isActive = () => {
            const last = index === filteredTree.length - 1
            if (last && `${currentPage.value}` === item.path){
                return true;
            }
            const lastRoutePath = Number(rawRoutes[rawRoutes.length-1].path)
            if (last && currentPage.value >= Number(item.path) && currentPage.value <= lastRoutePath){
                return true;
            }
            if (`${currentPage.value}` === item.path){
                return true;
            }
            if (!last){
                if (currentPage.value >= Number(item.path) && currentPage.value < Number(filteredTree[index+1].path)){
                    return true;
                }
            }
            return false;
        }
        const active = isActive()
        return {...item, active}
    })
}