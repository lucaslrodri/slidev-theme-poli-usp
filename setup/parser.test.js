const marker_examples = [
    '==Palavra== (==Palavra Palavra==) ==Palavra=={props} =:= ==Palavra Palavra=={props} ==Palavra Palavra=={props props}',
    '[Palavra]() [Palavra Palavra]() [Palavra](){props} [Palavra Palavra](){props} [Palavra Palavra](){props props} [Palavra Palavra](a) [Palavra Palavra](a){props}',
    '=:= `=:=` == =:={a}',
    '`==Palavra== ==Palavra Palavra== ==Palavra=={props}` =:= ==Palavra Palavra=={props} ```\n==Palavra Palavra=={props props}\n outro texto\n```',
    '`[Palavra]() [Palavra Palavra]() [Palavra](){props}` [Palavra Palavra](){props} ```\n[Palavra Palavra](){props props}\n outro texto\n```',
    '==Eiusmod ex incididunt== cillum ==magna nostrud=={prop1=val1 prop2="val 2"} esse amet in ==mollit occaecat quis minim==. Do labore ==quis fugiat=={prop=val prop2} fugiat [aliqua consectetur]() commodo. Sit laborum [nisi](){props} labore in anim in officia non.'
]

const admonition_example = 'RegExr was created by gskinner.com. \
\n\
> [!TIP]\n\
> Aliquip ut reprehenderit deserunt voluptate laboris.\n\
> \n\
> Labore incididunt nisi ea deserunt nulla deserunt ut aliquip.\n\
\n\
> Ullamco sint minim elit cillum ipsum labore.\n\
> Amet veniam eiusmod occaecat aute excepteur ad.\n\
\n\
> [!]{v-click color=primary}\n\
> Do nostrud laboris in et velit minim voluptate mollit veniam.\n\
\n\
> [!SECONDARY]{v-click}\n\
> \n\
> Do nostrud laboris in et velit minim voluptate mollit veniam.\n\
> \n\
\n\
\n\
> [!TIP]{v-click} Esse enim commodo\n\
> Do nulla exercitation mollit ut aliqua in eiusmod non.\n\
\n\
\n\
> [!]{v-click} Laboris nulla quis\n\
> Dolor excepteur ullamco proident aute sunt.\n\
\n\
> [!]{v-click color=primary}\n\
> Lorem excepteur incididunt aute deserunt nulla dolore nisi dolor et exercitation excepteur.\n\
> Qui occaecat sit veniam labore magna nostrud sit ea cillum. Lorem tempor labore amet anim esse incididunt laborum.\n\
\n\
> [!]{v-click color=primary} Dolor nulla amet dolor.\n\
\n\
\n\
> [!GRAY] Mollit ad culpa do nostrud.\n\
\n\
\n\
> [!TIP] Aute eu do consectetur exercitation.\n\
\n\
```\n\
> [!WARNING]\n\
> <p>Do nostrud laboris in et velit minim voluptate mollit veniam.</p>\n\
```\n\
> [!WARNING]{v-click}\n\
> Do nostrud laboris in et velit minim voluptate mollit veniam.'

const label_example = '|Exemplo 1)\n\
\n\
|Idade) Ilha)\n\
\n\
|Aviao){text="red"}\n\
\n\
RegExr was created by gskinner.com.\n\
\n\
|Parque) sdfsd fsdf sfsdf '

const images_example = [
    '!![Imagem de um rato](https://picsum.photos/id/863/512/512)',
    '!![Fonte: [Picsum](https://picsum.photos/id/863/512/512)](https://picsum.photos/id/863/512/512 "San Huan image"){class="h-56  shadow border rounded-xl"}',
    '!![Fonte: [Picsum](https://picsum.photos/id/863/512/512)]{class="font-bold"}(https://picsum.photos/id/863/512/512 "San Huan image"{class="h-56 shadow border rounded-xl"})',
    '!![](https://picsum.photos/id/863/512/512)',
    '!![Fonte: Próprio autor](https://picsum.photos/id/863/512/512)',
    '!![Fonte: Internet](https://coelho.com/image "Imagem de um coelho")',
    '!![Fonte: Internet](https://coelho.com/image "Imagem de um coelho"){class="border rounded-xl"}',
    '!![Fonte: Internet](https://coelho.com/image){class="h-56"}',
    "!![ Fonte: [Picsum](https://picsum.photos/id/863/512/512) ]{text=bold}(https://coelho.com/image 'Imagem de um coelho'{class='border rounded-xl'}){class=h-56}",
    "!![ Fonte: Internet ]{text=xl}(https://coelho.com/image {class='border rounded-xl'}){class=h-56}",
    '`!![Fonte: Internet](https://coelho.com/image){class="h-56"}`',
    '```\n!![](https://coelho.com/image "Fonte: Internet"){class="h-56"}\n```\n```\n`x=`\nfasfdas\n```\n'
]

const caption_example = ['::{Uma legenda de tabela.}', '::{Uma legenda.    }']

//const REGEX_GLOBAL = /=([a-z]?)=\s*([^=]*[^ ])?\s*==/g;

function parseContent(content){
    let parsed_content = content;
    const rules = [
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


// for (let i=0; i< marker_examples.length; i++){
//     console.log(parseContent(marker_examples[i]))
// }

// console.log(parseContent(admonition_example))

// for (let i=0; i< images_example.length; i++){
//     console.log(parseContent(images_example[i]))
// }

console.log(parseContent(label_example))

for (let i=0; i< caption_example.length; i++){
    console.log(parseContent(caption_example[i]))
}