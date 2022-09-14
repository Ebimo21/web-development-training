# CASCADING STYLE SHEET
## WHAT IS CSS?
CSS is the language we use to style an HTML document.
CSS describes how HTML elements should be displayed.

## What is CSS
- CSS stands for Cascading Style Sheets
- CSS describes how HTML elements are to be displayed on screen, paper, or in other media
- CSS saves a lot of work. It can control the layout of multiple web pages all at once
- External stylesheets are stored in CSS files

## How To Add CSS
When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet.

### Three Ways to Insert CSS
There are three ways of inserting a style sheet:
- External CSS
- Internal CSS
- Inline CSS
- Multiple Style Sheets

If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used. 

Cascading Order
What style will be used when there is more than one style specified for an HTML element?
All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:
Inline style (inside an HTML element)
External and internal style sheets (in the head section)
Browser default

So, an inline style has the highest priority, and will override external and internal styles and browser defaults.

### CSS Comments
Comments are used to explain the code, and may help when you edit the source code at a later date.
Comments are ignored by browsers.
A CSS comment is placed inside the `<style>` element, and starts with /* and ends with */


### Linking CSS File to HTML file

```html
    <link href={location_of_the_css_file} type={type_of_file} rel="relationship" />
    <link href="assets/style.css" type="text/css" rel="stylesheet" />
```

## CSS Syntax
A CSS rule consists of a selector and a declaration block.

The selector points to the HTML element you want to style.
The declaration block contains one or more declarations separated by semicolons.
Each declaration includes a CSS property name and a value, separated by a colon.
Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

```css
*{
    padding: 10px;
    margin: 20px;
    background-color: pink;
}

```

## CSS Selectors
CSS selectors are used to `"find"` (or select) the HTML elements you want to style.
We can divide CSS selectors into five categories:

- Simple selectors (select elements based on name, id, class)
- Combinator selectors (select elements based on a specific relationship between them)
- Pseudo-class selectors (select elements based on a certain state)
- Pseudo-elements selectors (select and style a part of an element)
- Attribute selectors (select elements based on an attribute or attribute value)

### CSS Simple Selectors
### The CSS element Selector
The element selector selects HTML elements based on the element name.

### The CSS id Selector
The id selector uses the id attribute of an HTML element to select a specific element.
The id of an element is unique within a page, so the id selector is used to select one unique element!
To select an element with a specific id, write a hash (#) character, followed by the id of the element.

### The CSS class Selector
The class selector selects HTML elements with a specific class attribute.
To select elements with a specific class, write a period (.) character, followed by the class name.

## The CSS Universal Selector
The universal selector (*) selects all HTML elements on the page.

## The CSS Grouping Selector
The grouping selector selects all the HTML elements with the same style definitions.
Look at the following CSS code (the h1, h2, and p elements have the same style definitions):
It will be better to group the selectors, to minimize the code.
To group selectors, separate each selector with a comma.

