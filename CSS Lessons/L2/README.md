# CASCADING STYLE SHEET (CSS)
## CSS Units
CSS has several different units for expressing a length.

Many CSS properties take `"length"` values, such as `width`, `margin`, `padding`, `font-size`, etc.

Length is a number followed by a length unit, such as `10px`, `2em`, etc.

Note: A whitespace cannot appear between the number and the unit. However, if the value is 0, the unit can be omitted.

For some CSS properties, negative lengths are allowed.

## CSS Colors
Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.

## CSS Text
### Text Color
The `color` property is used to set the color of the text.

### Text Alignment
The `text-align` property is used to set the horizontal alignment of a text.

A text can be `left` or `right` aligned, `centered`, or `justified`.

### CSS Text Decoration
In this lesson you will learn about the following properties:
### Add a Decoration Line to Text
The `text-decoration-line` property is used to add a decoration line to text.

### Text Transformation
The `text-transform` property is used to specify uppercase and lowercase letters in a text.
It can be used to turn everything into uppercase or lowercase letters, or capitalize the first letter of each word:

## CSS Fonts
Choosing the right font has a huge impact on how the readers experience a website.
The right font can create a strong identity for your brand.

Using a font that is easy to read is important. The font adds value to your text. It is also important to choose the correct color and text size for the font.

### The CSS font-family Property
In CSS, we use the font-family property to specify the font of a text.

`Note`: If the font name is more than one word, it must be in quotation marks, like: `"Times New Roman"`.

Best Web Safe Fonts for HTML and CSS
The following list are the best web safe fonts for HTML and CSS:
- Arial (sans-serif)
- Verdana (sans-serif)
- Helvetica (sans-serif)
- Tahoma (sans-serif)
- Trebuchet MS (sans-serif)
- Times New Roman (serif)
- Georgia (serif)
- Garamond (serif)
- Courier New (monospace)
-Brush Script MT (cursive)

### Font Style
The `font-style` property is mostly used to specify italic text.
This property has two values:
normal - The text is shown normally
italic - The text is shown in italics

### Font Weight
The `font-weight` property specifies the weight or thickness of a font:

### Font Size
The font-size property sets the size of the text.

Being able to manage the text size is important in web design. However, you should not use font size adjustments to make paragraphs look like headings, or headings look like paragraphs.

Always use the proper HTML tags, like <h1> - <h6> for headings and <p> for paragraphs.
The font-size value can be an absolute, or relative size.

Absolute size:
Sets the text to a specified size

### Responsive Font Size
The text size can be set with a vw unit, which means the "viewport width".
That way the text size will follow the size of the browser window:

### Google Fonts
If you do not want to use any of the standard fonts in HTML, you can use Google Fonts.
Google Fonts are free to use, and have more than 1000 fonts to choose from.

### How To Use Google Fonts
Just add a special style sheet link in the `<head>` section and then refer to the font in the CSS.

## How To Add Icons
The simplest way to add an icon to your HTML page, is with an icon library, such as Font Awesome.

Add the name of the specified icon class to any inline HTML element (like <i> or <span>).
All the icons in the icon libraries below, are scalable vectors that can be customized with CSS (size, color, shadow, etc.)

### Font Awesome Icons
To use the Font Awesome icons, go to fontawesome.com, sign in, and get a code to add in the <head> section of your HTML page:
<script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>

<!-- Personal Reading -->
##### `<student study start>`
## HTML Lists and CSS List Properties
In HTML, there are two main types of lists:
unordered lists (<ul>) - the list items are marked with bullets
ordered lists (<ol>) - the list items are marked with numbers or letters
The CSS list properties allow you to:
Set different list item markers for ordered lists
Set different list item markers for unordered lists
Set an image as the list item marker
Add background colors to lists and list items
 
 
Different List Item Markers
The list-style-type property specifies the type of list item marker.
Values: Circle, square, upper-roman, lower-alpha
An Image as The List Item Marker
The list-style-image property specifies an image as the list item marker:
ul {
  list-style-image: url('sqpurple.gif');
}
 
Position The List Item Markers
The list-style-position property specifies the position of the list-item markers (bullet points).
"list-style-position: outside;" means that the bullet points will be outside the list item. The start of each line of a list item will be aligned vertically. This is default:
"list-style-position: inside;" means that the bullet points will be inside the list item. As it is part of the list item, it will be part of the text and push the text at the start:
 
Remove Default Settings
The list-style-type:none property can also be used to remove the markers/bullets. Note that the list also has default margin and padding. To remove this, add margin:0 and padding:0 to <ul> or <ol>:
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
List - Shorthand property
The list-style property is a shorthand property. It is used to set all the list properties in one declaration:
ul {
  list-style: square inside url("sqpurple.gif");
}

##### `<student study end>`
<!-- Personal Reading -->


## CSS Layout - The display Property
### The display Property
The `display` property specifies if/how an element is displayed.
Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is block or inline.

### Block-level Elements
A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).
Examples of block-level elements:
`<div>`
`<h1> - <h6>`
`<p>`
`<form>`
`<header>`
`<footer>`
`<section>`

### Inline Elements
An inline element does not start on a new line and only takes up as much width as necessary.
This is an inline `<span>` element inside a paragraph.

#### Examples of inline elements:
`<span>`
`<a>`
`<img>`

### Display: none;
display: none; is commonly used with JavaScript to hide and show elements without deleting and recreating them. Take a look at our last example on this page if you want to know how this can be achieved.

### Override The Default Display Value
As mentioned, every element has a default display value. However, you can override this.
Changing an inline element to a block element, or vice versa, can be useful for making the page look a specific way, and still follow the web standards.

Hide an Element - display:none or visibility:hidden?
Hiding an element can be done by setting the display property to none. The element will be hidden, and the page will be displayed as if the element is not there:

visibility:hidden; also hides an element.
However, the element will still take up the same space as before. The element will be hidden, but still affect the layout:

## CSS Layout - width and max-width
### Using width, max-width and margin: auto;
As mentioned earlier, a block-level element always takes up the full width available (stretches out to the left and right as far as it can).

Setting the width of a block-level element will prevent it from stretching out to the edges of its container. Then, you can set the margins to auto, to horizontally center the element within its container. The element will take up the specified width, and the remaining space will be split equally between the two margins:

Note: The problem with the <div> above occurs when the browser window is smaller than the width of the element. The browser then adds a horizontal scrollbar to the page.
Using max-width instead, in this situation, will improve the browser's handling of small windows. This is important when making a site usable on small devices:
