---
theme: ./
transition: slide-left
author: Fulano
year: 2024
email: fulano@usp.br
departament: PPGEE
school: Polytechnic School - Electrical Engineering
mdc: true
maxTime: 2
progressMaxDepth: 2
background: https://source.unsplash.com/collection/94734566/1920x1080
---

# An introduction to the Poli-USP Theme of SliDEV

Electrical Engineering Graduate Program

---
layout: intro
cols: 3
---

### Table of contents

---
layout: section
---


# Layouts

Themes layouts

::cover::

!![Pexel: [Matheus Bertelli](https://www.pexels.com/photo/forced-perspective-photography-of-cars-running-on-road-below-smartphone-799443/).](https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg){class="border shadow rounded-xl"}

---


#### Default (Padrão)

This is a default layout.

::content::

The content always is inside of ==content== slot, use `::content::` to separate header from content slot.

The default layout is a particular case of align layout with properties `justify=strech` and `align=start`.

::bottom::

Use `::bottom::` to separate from content slot. Bottom slot is in the bottom part of the slide.

---
layout: align
shortTitle: Align (center)
---

## Layouts

#### Align (center)

::content::

In this case, the main content (content slot) is in the center of the slide, as shown in this sentence.

---
layout: align
align: end
shortTitle: Align (end)
---

## Layouts (Align)

#### Align (end)

::content::

In this case, the main content (content slot) is in the end of the slide.

---
layout: align
align: end
---

### Layouts (Align - Justify)

#### Justify (Stretch)

::content::

!![Source: [Picsum](https://picsum.photos/id/863/512/226).](https://picsum.photos/id/863/512/226 "Guy in the farm"){class="mt-4 rounded-xl shadow border"}

---
layout: align
justify: stretch
shortTitle: Align (Justify)
---

## Layouts (Align - Justify)

#### Justify (Stretch)

::content::

!![Source: [Picsum](https://picsum.photos/id/863/512/256).](https://picsum.photos/id/863/512/256 "Guy in the farm"){class="mt-2 rounded-xl shadow border"}

---
layout: align
placeContent: center
---

### Layouts (Align - Justify)

#### Justify (center)

::content::

!![Source: [Picsum](https://picsum.photos/id/863/512/256).](https://picsum.photos/id/863/512/256 "Guy in the farm"){class="rounded-xl shadow border"}

---
layout: align
justify: end
---

### Layouts (Align - Justify)

#### Justify (end)

::content::

!![Source: [Picsum](https://picsum.photos/id/863/512/256).](https://picsum.photos/id/863/512/256 "Guy in the farm"){class="rounded-xl shadow border"}


---
layout: center
shortTitle: Center
---

## Layouts (Center)

#### Center

::content::

In this case the main content is in the center.

Shorthand para o layout `align`

Com as propriedades:
- `justify: center`
- e `align: center`.

---
layout: full
shortTitle: Full
---

## Layouts (Full)

::content::

Same as `align` + `justify=stretch`

!![Source: [Picsum](https://picsum.photos/id/863/512/256).](https://picsum.photos/id/863/512/256 "Guy in the farm"){class="mt-2 rounded-xl shadow border"}

---
layout: cols
divider: true
shortTitle: Cols
widths: 1 | 2
---

## Layouts (Cols)

#### Cols (Divider)

::left::

> [!]{color=danger} 
> <h5>Left</h5>
> Left column

::middle::

> [!]{color=primary}
>
> <h5>Middle</h5>
> Center column

::right::

> [!]{color=safe}
>
> <h5>Right</h5>
> Right column

---
layout: cols
divider: true
align: center
widths: 1.25
---

### Layouts (Cols)

#### Cols - Align Center

::left::

> [!]{color=danger} 
> <h5>Left</h5>
> Left column

::right::

> [!]{color=safe}
>
> <h5>Right</h5>
> Right column

---
layout: cols
align: end
---

### Layouts (Cols)

#### Cols - Align End

::left::

> [!]{color=danger} 
> <h5>Left</h5>
> Left column

::middle::

> [!]{color=primary}
> <h5>Middle</h5>
> Middle column

::right::

> [!]{color=safe}
> <h5>Right</h5>
> Right column

::bottom::

> [!]{color=secondary text=center}
> Text below of the column (bottom slot)

---
layout: cols
align: stretch
---

### Layouts (Cols)

#### Cols - Align Stretch

::left::

> [!]{color=danger} 
> <h5>Left</h5>
> Left column

::middle::

> [!]{color=primary}
> <h5>Middle</h5>
> Middle column

::right::

> [!]{color=safe}
> <h5>Right</h5>
> Right column

::bottom::

> [!]{color=secondary text=center}
> Text below of columns


---
layout: two-cols
shortTitle: Two-cols
---

## Layouts (Two-cols)

#### Two-cols

::left::

#### Left

Left column.

> [!QUOTE]
> Card

::right::

#### Right

Column on the right.

> [!NOTE]
> Card

---
layout: two-cols
align: stretch
---

### Layouts (Two-cols)

#### Two-cols (Stretch)

::left::

:::Card{color=primary title=Left}

Et sit dolore occaecat ipsum laboris occaecat irure.

<!-- !![Source: [Picsum](https://picsum.photos/id/863/512/256).](https://picsum.photos/id/863/512/300 "Guy in the farm"){class="rounded-xl shadow border"} -->

:::


::right::

:::Card{color=secondary title=Right}

Nisi esse ex fugiat ea et. Do ipsum labore minim ea.

<!-- !![Source: [Picsum](https://picsum.photos/id/863/512/256).](https://picsum.photos/id/863/512/300 "Guy in the farm"){class="rounded-xl shadow border"} -->

:::

---
layout: two-cols
divider: true
widths: 1.25
---

### Layouts (Two cols)

#### Two-cols (Divider)

::left::

#### Left

Left column.

> [!]{color=danger}
> Card

::right::

#### Right

Right column.

> [!]{color=safe}
> Card

---
layout: grid
shortTitle: grid
---

## Layout (grid)

grid (auto)

::content::

> [!]{color=danger}
> <mdi-rocket-launch/> Rocket
> Ea tempor consequat deserunt id consectetur eiusmod.

> [!]{color=primary}
> <mdi-ice-cream/> Ice cream
> Mollit elit velit eiusmod nulla nostrud est deserunt amet ipsum.

> [!]{color=primary}
> <mdi-ice-cream/> Ice cream
> Dolore ut officia magna dolore est cupidatat elit dolor enim quis.

> [!]{color=primary}
> <mdi-ice-cream/> Ice cream
> In esse elit eiusmod veniam labore occaecat mollit exercitation.

> [!]{color=primary}
> <mdi-ice-cream/> Ice cream
> Qui ea reprehenderit nulla deserunt commodo.

> [!]{color=primary}
> <mdi-ice-cream/> Ice cream
> Ipsum ea exercitation deserunt duis duis Lorem labore nisi.


---
layout: grid
cols: 2
gap: 8
width: 36
align: center
justify: evenly
---

### Layout (grid)

grid (auto)

::content::

> [!]{color=danger}
> <mdi-rocket-launch/> Rocket

> [!]{color=primary}
> <mdi-ice-cream/> Ice cream

> [!]{color=primary}
> <mdi-ice-cream/> Ice cream

> [!]{color=primary}
> <mdi-ice-cream/> Ice cream

::bottom::

::Center

This text is in the center using `Center` component

::

---
layout: flex
width: 128
gap: 4
alignContent: center
justifyContent: center
justify: center
---

## Layout (flex)

Flex

::content::

> [!]{color=danger class="w-40"}
> <mdi-rocket-launch/> Rocket

> [!]{color=primary class="w-40"}
> <mdi-ice-cream/> Ice cream

> [!]{color=primary class="w-40"}
> <mdi-ice-cream/> Ice cream

> [!]{color=primary class="w-40"}
> <mdi-ice-cream/> Ice cream

> [!]{color=primary class="w-40"}
> <mdi-ice-cream/> Ice cream


---
layout: default
---

# Markdown

#### Listas

##### Bullets:
- Officia mollit sint laboris elit duis voluptate excepteur sunt exercitation.
- Cillum pariatur culpa magna elit.
- Ut nisi quis culpa fugiat eiusmod.

##### Numerated:
1. Laboris ut qui cupidatat tempor.
2. Ex nisi do id labore ad sunt sunt.

---
layout: default
---

### Markdown

#### Listas

##### Mixed:
3. Reprehenderit in exercitation enim nulla.
    - Do eu sint ipsum consectetur ad sint sit.
    - Laborum do commodo Lorem.
        - Do incididunt consequatr.
        - Laborum excepteur nostrud incididunt consequat.
    - Pariatur veniam officia.
4. Incididunt nisi adipisicing sunt qui consequat.
    - Cupidatat irure nulla.

---
layout: default
shortTitle: Links
---

## Markdown

#### Links

- [Link vazio]()
- [Link para o Google](https://www.google.com)

---
shortTitle: Blockquote
---

## Markdown
#### Blockquote

Follow the syntax of [Github Alerts](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing- and-formatting-syntax#alerts):

> This is a normal blockquote.

> [!]{v-click color=primary notEmph}
> This is a Blockquote with the `color=primary` property.
> 
> The `{!}{props...}` notation is used to create a Blockquote of type ==Card=={color=primary}.

> [!]{v-click notEmph}
> This is a Blockquote with the `v-click` and `notEmph` property.

---
shortTitle: Admonition
---

## Markdown
#### Blockquote - Admonition

We can use Admonition with the `![TYPE]` tag:

> [!TIP]
> This is an Admonition made with the tag `[!TIP]`.\
> There is one more paragraph in Admonition.

> [!WARNING]
> This is an Admonition made with the tag `[!WARNING]`.

> [!QUOTE]
> This is an Admonition made with the tag `[!QUOTE]`.

---

### Markdown
#### Blockquote - Admonition

Admonition examples with `v-click notEmph` property:

> [!TIP]{v-click notEmph}
> This is an Admonition made with the tag `[!TIP]`.\
> There is one more paragraph in Admonition.

> [!IMPORTANT]{v-click notEmph}
> This is an Admonition made with the `[!IMPORTANT]` tag.

> [!NOTE]{v-click notEmph}
> This is an Admonition made with the `[!NOTE]` tag.

---
shortTitle: Títulos em blocos
---

## Markdown
#### Blockquote - Títulos

Titles can be obtained by writing the text in the first line, right after the options:

> [!TIP]{v-click notEmph} Tip
> A pro-tip. Duis id sint ea cillum aliqua veniam eiusmod. Eu dolore proident dolore ad magna velit consectetur id nostrud.

> [!QUOTE]{v-click notEmph} Unknown author
> A beautiful phrase

---

### Markdown
#### Blockquote - Títulos

> [!WARNING]{v-click notEmph} Warning
> Don't do it!

> [!] Card with title.
> This is a `card` with a title.

---
shortTitle: Topics
---

### Markdown
#### Blockquote - Topics

Topics can be generated by writing a block without the body (A single line):

> [!WARNING]{v-click} Don't do it.

> [!QUOTE]{v-click notEmph} A beautiful text from an famous author.

> [!NOTE]{v-click title=Note} Note! Follow this steps.

---

## Markdown
#### Images - Figures with caption (Figure component)

<!-- ![Source: [Picsum](https://picsum.photos/id/863/512/512)](https://picsum.photos/id/863/512/512 "San Huan image"){class="h-56  shadow border rounded-xl"} -->

::Figure{class="h-56 w-112 rounded-xl shadow border"}
#img
![Guy in the farm](https://picsum.photos/id/863/512/256)
#caption
Source: [Picsum](https://picsum.photos/id/863/512/256).
::

---

### Markdown
#### Image (Caption outside)

::Figure{caption=outside}
#img
![Guy in the farm](https://picsum.photos/id/863/512/256){class="h-56 w-112 rounded shadow border"}
#caption
Fonte: [Picsum](https://picsum.photos/id/863/512/256).
::

---

### Markdown
#### Image

!![Source: [Picsum](https://picsum.photos/id/863/512/256).](https://picsum.photos/id/863/512/256 "Guy in the farm"){class="h-56 w-112 rounded-xl shadow border"}

---

### Markdown
#### Images (MDC !! syntax)

!![Source: [Picsum](https://picsum.photos/id/863/512/256).](https://picsum.photos/id/863/512/256 "Guy in the farm"{class="h-56 w-112 rounded shadow border"}){caption=outside}

---

### Markdown
#### Images

!![Fonte: [Imgur](https://i.imgur.com/jFKonXQ.jpg)](https://i.imgur.com/jFKonXQ.jpg "Red and white Chevrolet"){class="w-300px h-200px"}

---
layout: default
---
# Span do MDC

#### Syntax

**Follow the guide at [Span no MDC](https://content.nuxt.com/usage/markdown#span-text)**. That is, a Markdown notation is applied followed by a set of properties enclosed in braces `{prop1="..." prop2="..."}`

As per some examples below:


| Symbol                                        | Desc.  | Example                                     |
| --------------------------------------------- | ------ | ------------------------------------------- |
| `[Text]{text=primary}`                        | Normal | [text]{text=primary}                        |
| `_Text_{text=white bg=secondary}`             | Italic | _text_{text=white bg=secondary}             |
| `**Text**{class=underline decoration=danger}` | Bold   | **text**{class=underline decoration=danger} |

::{Table 1 | This is a caption using `::{label | caption}` shorthand.}
:Caption{s="Table 1: This is a caption using MDC component syntax."}

---
layout: default
shortTitle: CSS/UnoCSS
---
## Span do MDC

CSS/UnoCSS customization

::content::

We can use MDC Span in conjunction with Uno CSS, as indicated in the documentation for [MDC](https://sli.dev/guide/syntax#mdc-syntax) and [UnoCSS](https://sli .dev/custom/config-unocss).

|Note 1) The following Span MDC follows, `[text]{style="color:red;" class=text-red text="red"}`, has three properties that reflect the same thing, changing the text color to red. The first property uses CSS, the second Tailwind CSS and the third UnoCSS. Below are more examples:

> 1. `style="color: red;"`: [Text with danger color]{style="color: red;"}
> 2. `bg=secondary-200`: [Text marked with secondary-200]{bg=secondary-200}
> 3. `class=underline decoration="primary"`: This [is a underlined text]{class=underline decoration="primary"}

---

## Cores do tema

::content::

<Label>Note 2</Label> The theme colors follow the Tailwind CSS color standard, which are `danger`{text=danger}, `safe`{text=safe}, `primary`{text=primary}, `secondary`{text=secondary} , `grays`{text=grays}.

Just like in Tailwind CSS, colors vary according to tone, for example `grays-300`{text=grays-300}, `grays-500`{text=grays-500}, `grays-700`{text =grays-700}, where:

- Colors [below]{text=danger} of 500 represents the original color with transparency on a white background;
- Colors [greater]{text=safe} than 500 follow the original color with transparency on a dark background.

---
layout: default
---
# Marker

#### Color

We can highlight the text using the `<Marker></Marker>` tag, using different colors assigned through the `color` attribute as highlights:

<Marker>Default</Marker>, <Marker color="primary">Primary</Marker>, <Marker color="danger">Danger</Marker>, <Marker color="safe">Safe</Marker>, <Marker color="gray">Gray</Marker>


#### Mode

There are different ways of highlighting, such as: `underline` and `marker`. You can get the different shapes through the `mode` attribute

<p>
<Marker color="default" mode="marker">Default</Marker>, <Marker color="primary" mode="marker" bold>Primary</Marker>, <Marker color="danger" mode="underline">Danger</Marker>, <Marker color="safe" mode="marker" bold>Safe</Marker>, <Marker color="gray" mode="underline" bold>Gray</Marker>
</p>

---
layout: default
hideInToc: true
---

### Marker

#### Bold text

To add bold to the text, just use the `bold` property, (e.g.: `<Marker bold></Marker>`):

<Marker color="default" mode="underline" bold>Default</Marker>, <Marker color="primary" mode="underline" bold>Primary</Marker>, <Marker color="danger" mode="underline" bold>Danger</Marker>, <Marker color="safe" mode="underline" bold>Safe</Marker>, <Marker color="gray" mode="underline" bold>Gray</Marker>

---
layout: default
hideInToc: true
---

### Marker

#### MDC

The notation `:ma{s="slot" ...}` is used for the :ma{s=marker} type and `:un{s="slot" ...}` for the :un{ type s=underline}.

#### Markdown

Using Markdown syntax we have:

- `==Text=={props}` becomes `:ma{s="Text" props}`. I.e.: ==Text=={color=danger animated}.
    - To avoid conflicts: `=:=` becomes `==`
- `[Text](){props}` (Empty links) becomes `:un{s="Text" props}`. I.e.: [Text](){color=primary bold}.

---

layout: default

shortTitle: Animations
---
## Marker - Animations

#### Animations: Property animated

We can ==animate markings=={animated} or [underlines](){color=danger animated} using the `animated` property.

#### Animations: v-click

##### Caso 1: Animar após a aparição do parágrafo

We can :ma{s="animate markings" color=safe v-click} or :un{s=underlines color=danger v-after} using `v-click` in the :ma{s="Marker component" bold v- click color=primary}.

##### Caso 2: Animar durante a aparição do parágrafo

<p v-click>
We can <Marker color="safe" mode="marker">animate markings</Marker> or <Marker mode="underline" color="danger">underlines</Marker> using <code>v-click</code> in the <Marker color="primary" bold>Marker component</Marker>.
</p>


---
layout: default
shortTitle: Multi-line
---
## Marker - Multi-line

#### Normal

Lorem ==ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus tempor dui, quis faucibus orci sollicitudin in. Duis nec leo dignissim, tristique ipsum sed, rutrum massa==.

Lorem [ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus tempor dui, quis faucibus orci sollicitudin in. Duis nec leo dignissim, tristique ipsum sed, rutrum massa](){color=safe}.

---
layout: default
---
### Marker - Multi-line

#### Animated

Lorem ==ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus tempor dui, quis faucibus orci sollicitudin in. Duis nec leo dignissim, tristique ipsum sed, rutrum massa=={animated}.

Lorem [ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus tempor dui, quis faucibus orci sollicitudin in. Duis nec leo dignissim, tristique ipsum sed, rutrum massa](){color=safe animated}.

---
layout: default
---
# Cards

::content::

To generate a card you can use either the MDC `::card` notation or the html `<card></card>` notation:

<card>
This card was generated using HTML notation.
</card>


::Card

This card was added using MDC notation. Within the component it is possible to use Markdown, as indicated in the MDC documentation.


For example, we can use <kbd>Enter</kbd> to break the line. Or even use notations like `::card`, making writing easier.

::


---
layout: default
shortTitle: With titles
---
## Cards with titles

::Card{v-click=0}
<h4>Using H4 or H5</h4>

You can directly use the `<h4></h4>` or `<h5></h5>` html tag to get a title on the Card.
::

::Card{v-click}
<h5>H5 title</h5>

The `<h5></h5>` tag allows you to create a title without the yellow bar below the title.
::

::Card{title="Property Title" v-click}
Using the title property, adds a Title `<h4></h4>` to the card. Additionally, it **automatically** adds a bar at the top of the title.
::

---
layout: default
shortTitle: Background color
---

## Cards com cor de fundo

::Card{color="primary" v-click}
Exponential growth of renewable systems
::

::Card{color="secondary" v-click}
Wind energy represents a large proportion of installed systems
::

::Card{color="danger" v-click}
High penetration of intermittent sources
::

::Card{color="safe" v-click}
Need for reliable systems capable of operating in **adverse conditions**{.bg-green-500}
::

::Card{color="gray" v-click}
Need for reliable systems capable of operating in adverse conditions
::

---
layout: default
shortTitle: Disable emph.
---
## Disabling emphasis when active

::content::

You can disable the background change on the active item by using the `notEmph` property.

::Card{v-click notEmph}
<h4>Using H4 or H5</h4>

You can directly use the `<h4></h4>` or `<h5></h5>` html tag to get a title on the Card.
::

::Card{v-click notEmph}
<h5>H5 title</h5>

The `<h5></h5>` tag allows you to create a title without the yellow bar below the title.
::

---
layout: default
---

### Disabling emphasis when active

::Card{color="primary"}
Exponential growth of renewable systems
::

::Card{color="secondary" v-click notEmph}
Wind energy represents a large proportion of installed systems
::

::Card{color="danger" v-click notEmph}
High penetration of intermittent sources
::

::Card{color="safe" v-click notEmph}
Need for reliable systems capable of operating in **adverse conditions**{.bg-green-500}
::

::Card{color="gray" v-click notEmph}
Need for reliable systems capable of operating in adverse conditions
::

---

## Icons

::content::

We can add icons using the `icon` tag:

::Card{color="primary" icon="note" v-click}
**Note**: Exponential growth of renewable systems
::

::Card{color="gray" icon="quote" v-click}
**Fact**: Wind energy represents a large proportion of installed systems
::

::Card{color="danger" icon="warning" v-click}
**Urgency**: Need for reliable systems capable of operating in adverse conditions
::

---

### Icons

::Card{color="safe" icon="important" v-click}
**Solução:**<br>
Developing reliable controls
::

::Card{color="secondary" icon="tip" v-click}
**Dica:**<br>
Using R-MPC
::




---

## Other elements

::content::

Using MDC there is great flexibility over what is placed inside the Card slot. Below are some examples:

> #### Recipe example
> 1. Ingredients:
>    - 1 cup white sugar
>    - ½ cup unsalted butter
>    - ...
> 2. Lorem ipsum:
> 
>    ...

---
layout: default
shortTitle: Blockquote
---

## Cards vs Blockquote

- `Cards` and `blockquotes` are similar.
- In fact `Cards` are `blockquotes` with some customization capabilities.

::v-clicks
> In this example we have a blockquote
::

::card{v-click}
In this example we have a card.<br>
Card does not apply a `<p></p>` automatically, like a `bloquote`.
::

::card{centering v-click}
**"In this example we have a card with centered text."**
::

::card{centering color=safe-dark v-click class="text-safe-700"}
**"In this example we have another card with centered text**{text=safe-700} ==colored=={color=safe class='text-safe-700' bold animated}[."]{text='bold safe-700'}
::

---
shortTitle: Topics
---

## Cards vs Topics

::content::

`Topics` are Cards that can be placed in sequence as if they were topics. They can be of different colors.

::Topic{v-click}
Eu aute sint sit mollit ut do nostrud anim veniam quis magna in.
::

::Topic{v-click color=primary}
Laborum nisi esse esse anim Lorem.
::

::Topic{v-click color=safe}
Ipsum duis dolore enim sunt ipsum consequat adipisicing consequat duis consequat ipsum Lorem.
::

::Topic{v-click color=gray}
Ipsum duis dolore enim sunt ipsum consequat adipisicing consequat duis consequat ipsum Lorem.
::

---

### Cards vs Topics

::content::

Topics supports the same properties as Cards, including the different title types:

::Topic{v-click title="Mollit in deserunt"}
Ipsum duis dolore enim sunt ipsum consequat adipisicing consequat duis consequat ipsum Lorem.
::

::Topic{v-click color=danger}
<h5>Ex anim nisi consequat eiusmod do.</h5>
Quis consectetur velit dolor non magna deserunt irure Lorem id elit cupidatat veniam ea.
::

---

### Cards vs Topics

::content::

Icons are also supported:

::Topic{v-click color=secondary icon=tip}
Esse laboris tempor esse ipsum ullamco non laborum sint officia cupidatat esse.
::

::Topic{v-click color=primary icon=important}
Esse laboris tempor esse ipsum ullamco non laborum sint officia cupidatat esse.
::

::Topic{v-click color=gray icon=note}
Esse laboris tempor esse ipsum ullamco non laborum sint officia cupidatat esse.
::

---
clicks: 3
---

# Sliders

#### Clicks (Clicks > Items)

::block-slider{progress}
<div class="mx-4">
<img src="https://picsum.photos/id/863/512/512" class="w-48 h-56 my-4 mr-8 shadow border rounded-xl"/>
<div>
    <h4>A Day on the Farm</h4>
    <p>In the heart of the countryside, where rolling hills meet endless skies, lies a picturesque farm that embodies the essence of rural life. </p>
</div>
</div>

<div class="mx-4">
<img src="https://picsum.photos/id/871/512/512" class="w-48 h-56 mr-8 shadow border rounded-xl"/>
<div>
    <h4>A Coastal Symphony</h4>
    <p>Along the fringes of the world, where land meets the vast expanse of the ocean, lies the enchanting realm of the seacoast.</p>
</div>
</div>

<div class="mx-4">
<img src="https://picsum.photos/id/872/512/512" class="w-48 h-56 mr-8 shadow border rounded-xl"/>
<div>
    <h4>The Enchanting Hillscape</h4>
    <p>In the heart of the countryside, where the landscape undulates in a gentle rhythm, lies a tapestry of nature's artistry – the enchanting hillscape.</p>
</div>
</div>
::

---
clicks: 1
---

### Sliders

#### Clicks (Clicks < Items)

::block-slider{progress}
<div class="mx-4">
<img src="https://picsum.photos/id/863/512/512" class="w-48 h-56 my-4 mr-8 shadow border rounded-xl"/>
<div>
    <h4>A Day on the Farm</h4>
    <p>In the heart of the countryside, where rolling hills meet endless skies, lies a picturesque farm that embodies the essence of rural life. </p>
</div>
</div>

<div class="mx-4">
<img src="https://picsum.photos/id/871/512/512" class="w-48 h-56 mr-8 shadow border rounded-xl"/>
<div>
    <h4>A Coastal Symphony</h4>
    <p>Along the fringes of the world, where land meets the vast expanse of the ocean, lies the enchanting realm of the seacoast.</p>
</div>
</div>

<div class="mx-4">
<img src="https://picsum.photos/id/872/512/512" class="w-48 h-56 mr-8 shadow border rounded-xl"/>
<div>
    <h4>The Enchanting Hillscape</h4>
    <p>In the heart of the countryside, where the landscape undulates in a gentle rhythm, lies a tapestry of nature's artistry – the enchanting hillscape.</p>
</div>
</div>
::

---
clicks: 2
shortTitle: Progress
---

## Sliders

#### Progress (Clicks = Items)

::block-slider{progress}
<section class="mx-4">
<img src="https://picsum.photos/id/863/512/512" class="w-48 h-56 my-4 mr-8 shadow border rounded-xl"/>
<div>
    <h4>A Day on the Farm</h4>
    <p>In the heart of the countryside, where rolling hills meet endless skies, lies a picturesque farm that embodies the essence of rural life. </p>
</div>
</section>

<section class="mx-4">
<img src="https://picsum.photos/id/871/512/512" class="w-48 h-56 mr-8 shadow border rounded-xl"/>
<div>
    <h4>A Coastal Symphony</h4>
    <p>Along the fringes of the world, where land meets the vast expanse of the ocean, lies the enchanting realm of the seacoast.</p>
</div>
</section>

<section class="mx-4">
<img src="https://picsum.photos/id/872/512/512" class="w-48 h-56 mr-8 shadow border rounded-xl"/>
<div>
    <h4>The Enchanting Hillscape</h4>
    <p>In the heart of the countryside, where the landscape undulates in a gentle rhythm, lies a tapestry of nature's artistry – the enchanting hillscape.</p>
</div>
</section>
::

---
clicks: 2
shortTitle: ImageSliders
---

## Sliders

#### Image Sliders

:::block-slider{progress}
!![[A Day on the Farm](https://picsum.photos/id/863/900/600).](https://picsum.photos/id/863/900/600){class="h-64"}
!![[A Coastal Symphony](https://picsum.photos/id/871/900/600).](https://picsum.photos/id/871/900/600){class="h-64"}
!![[The Enchanting Hillscape](https://picsum.photos/id/872/900/600).](https://picsum.photos/id/872/900/600){class="h-64"}
:::

---
layout: two-cols
divider: true
align: center
---

### Sliders

::left::

> [!]{v-click=0} A day on the farm

> [!]{v-click} A Coastal Symphony

> [!]{v-click} The Enchanting Hillscape

::right::

:::block-slider
!![[A Day on the Farm](https://picsum.photos/id/863/900/900).](https://picsum.photos/id/863/900/980)
!![[A Coastal Symphony](https://picsum.photos/id/871/900/900).](https://picsum.photos/id/871/900/980)
!![[The Enchanting Hillscape](https://picsum.photos/id/872/900/900).](https://picsum.photos/id/872/900/980)
:::

<!-- !![A Day on the Farm](https://picsum.photos/id/863/1024/512) -->
<!-- !![A Coastal Symphony](https://picsum.photos/id/871/1024/512) -->
<!-- !![A Coastal Symphony](https://picsum.photos/id/872/1024/512) -->

---
layout: two-cols
align: center
widths: 0.5
---

### Sliders

::left::

<!-- <ol>
<li v-click="0">A day on the farm</li>
<li v-click>A Costal Symphony</li>
<li v-click>The Enchanting Hillscape</li>
</ol> -->

::v-clicks

1. A day on the farm
2. A Costal Symphony
3. The Enchanting Hillscape

::

::right::

:::block-slider{start=1}
!![[A Day on the Farm](https://picsum.photos/id/863/900/900).](https://picsum.photos/id/863/900/640)
!![[A Coastal Symphony](https://picsum.photos/id/871/900/900).](https://picsum.photos/id/871/900/640)
!![[The Enchanting Hillscape](https://picsum.photos/id/872/900/900).](https://picsum.photos/id/872/900/640)
:::

<!-- !![A Day on the Farm](https://picsum.photos/id/863/1024/512) -->
<!-- !![A Coastal Symphony](https://picsum.photos/id/871/1024/512) -->
<!-- !![A Coastal Symphony](https://picsum.photos/id/872/1024/512) -->

---

# Conclusion


---

## Conclusion 2

---

### Conclusion 

::content::

::Center{bg=red}
$$
x^2+2x+3
$$
::