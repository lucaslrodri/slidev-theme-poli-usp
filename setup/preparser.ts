import { definePreparserSetup } from '@slidev/types'

function parseContent(content:string):string{
    let parsed_content = content;
    const rules: [RegExp, string][] = [
        [/==([^=\n]+)==(?:{([^}]+)})?|(`[^`\n]+`)|(?:`{3,}(?=[^`\n]*\n))(:?[^\n]*)(?:|(?:[\s\S]*?)\n)`{3,}/g, 'ma'],
        [/(=:=)(?:{([^}]+)})?|(`[^`\n]+`)|(?:`{3,}(?=[^`\n]*\n))(:?[^\n]*)(?:|(?:[\s\S]*?)\n)`{3,}/g,'=='],
        [/\|([^)\n]+)\)(?:{([^}]+)})?|(`[^`\n]+`)|(?:`{3,}(?=[^`\n]*\n))(:?[^\n]*)(?:|(?:[\s\S]*?)\n)`{3,}/g, 'label'],
        [/::\{([^}]+)\}|(`[^`\n]+`)|(?:`{3,}(?=[^`\n]*\n))(:?[^\n]*)(?:|(?:[\s\S]*?)\n)`{3,}/g, 'caption'],
        [/\!\!\[(.*)\](?:{([^}]+)})?\(([^)\s]+)?\s?(?:(?:"|')([^"')]+)(?:"|'))?\s?(?:{([^}]+)})?\)(?:{([^}]+)})?|(`[^`\n]+`)|(?:`{3,}(?=[^`\n]*\n))(:?[^\n]*)(?:|(?:[\s\S]*?)\n)`{3,}/g, 'image'],
        [/(^> ?.+?)((\r?\n\r?\n)|\Z)|(`[^`\n]+`)|(?:`{3,}(?=[^`\n]*\n))(:?[^\n]*)(?:|(?:[\s\S]*?)\n)`{3,}/gms, 'admonition'],
        [/\[([^\n\]]+)\]\(\)(?:{([^}]+)})?|(`[^`\n]+`)|(?:`{3,}(?=[^`\n]*\n))(:?[^\n]*)(?:|(?:[\s\S]*?)\n)`{3,}/g, 'un']
    ]

    const tags = {
        NOTE: {
            color: 'primary',
            icon: 'note'
        },
        TIP: {
            color: 'secondary',
            icon: 'tip'
        },
        IMPORTANT: {
            color: 'safe',
            icon: 'important'
        },
        WARNING: {
            color: 'danger',
            icon: 'warning'
        },
        QUOTE: {
            color: 'gray',
            icon: 'quote'
        },
        PRIMARY: {
            color: 'primary',
            centering: true
        },
        SECONDARY: {
            color: 'secondary',
            centering: true
        },
        SAFE: {
            color: 'safe',
            centering: true
        },
        DANGER: {
            color: 'danger',
            centering: true
        },
        GRAY: {
            color: 'gray',
            centering: true
        }
    }
    
    rules.forEach(([rule, template]) => {
        parsed_content += (template === 'admonition') ? '\n\n' : '';
        parsed_content = parsed_content.replace(rule, (match, p1, p2, p3, p4, p5, p6, p7, p8) => {
            if (template === 'caption'){
                if (p2 || p3){
                    return match;
                }
                if (p1){
                    return `:Caption{s="${p1.trim()}"}`
                }
            }else if (template === 'label'){
                if (p3 || p4){
                    return match;
                }
                if(p1){
                    const slot = p1.trim();
                    const params = p2 ? ` ${p2}` : '';
                    return `<Label${params}>${slot}</Label>`
                }
            }else if (template === 'admonition'){
                if (p1){                    
                    const filtered_match = p1.replace(/^> ?/gm, '').split(/\r?\n/);
                    if (filtered_match){
                        const raw_params = filtered_match[0].match(/\[!([^\]\n]*)\](?:{([^}]+)})? ?(.*)?/)
                        if (raw_params){
                            const tag = raw_params[1] ? raw_params[1] : '';
                            const params = raw_params[2] ? raw_params[2] : '';
                            const raw_title = raw_params[3] ? raw_params[3]: '';
                            const raw_slot = filtered_match.slice(1).join('\n');
                            const type = raw_slot? 'card' : 'topic';
                            const slot = raw_slot? raw_slot : raw_title;
                            const title = raw_slot ? raw_title : null;
                            if (tags[tag] !== undefined){
                                let default_params = tags[tag].icon ?` icon=${tags[tag].icon}`: ''
                                default_params += tags[tag].centering && raw_slot ?` centering`: ''
                                default_params += title? ` title="${title}"` : ''
                                default_params += params? ` ${params}` : ''
                                
                                return `::${type}{color=${tags[tag].color}${default_params}}\n${slot}\n::\n`
                            }else if (!raw_params[1]){
                                let default_params = title? `title="${title}"` : ''
                                default_params += params? (title? ' ' : '') + `${params}` : ''
                                return `::${type}{${default_params}}\n${slot}\n::\n`
                            }
                        }
                    }
                }
            }else if (template === 'image'){
                if (p7 || p8){
                    return match;
                }
                if (p3){
                    const url = p3;
                    const alt = p4 ? p4.trim() : '';
                    const title = p4 ? ` "${alt}"` : "";
                    const image_params = p5 ? `{${p5.trim()}}` : '';
                    const figure_params = p6 ? `{${p6.trim()}}` : '';
                    let fig_string = `::Figure${figure_params}\n#img\n![${alt}](${url}${title})${image_params}\n`
                    if (p1){
                        const caption_params = p2 ? `{${p2.trim()}}` : '';
                        const caption = p2? `[${p1.trim()}]${caption_params}` : p1.trim();
                        fig_string += `#caption\n${caption}\n`
                    }
                    return fig_string + '::'
                }
            }
            if (p1 === '=:='){
                return template;
            }
            if (p3 || p4){
                return match;
            }
            if (p1){
                const slot = p1.trim();
                const params = p2 ? ` ${p2}` : ''
                return `:${template}\{s='${slot}'${params}\}`
            }
            return match;
        })
    })
    return parsed_content;
}

// @ts-ignore
export default definePreparserSetup(() => {
    return [
      {
        transformSlide(content: string, _frontmatter: any) {
            return parseContent(content)
        },
      },
    ]
})