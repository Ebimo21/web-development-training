# CSS
## CSS Selectors
CSS selectors are used to "find" (or select) the HTML elements you want to style.
We can divide CSS selectors into five categories:
- Simple selectors (select elements based on name, id, class)
- Combinator selectors (select elements based on a specific relationship between them)
- Pseudo-class selectors (select elements based on a certain state)
- Pseudo-elements selectors (select and style a part of an element)
- Attribute selectors (select elements based on an attribute or attribute value)

### CSS Simple Selectors
#### The CSS element Selector
The element selector selects HTML elements based on the element name.

#### The CSS id Selector
The id selector uses the id attribute of an HTML element to select a specific element.
The id of an element is unique within a page, so the id selector is used to select one unique element!
To select an element with a specific id, write a hash (#) character, followed by the id of the element.

#### The CSS class Selector
The class selector selects HTML elements with a specific class attribute.
To select elements with a specific class, write a period (.) character, followed by the class name.

#### The CSS Universal Selector
The universal selector (*) selects all HTML elements on the page.


### The CSS Grouping Selector
The grouping selector selects all the HTML elements with the same style definitions.
Look at the following CSS code (the h1, h2, and p elements have the same style definitions):
It will be better to group the selectors, to minimize the code.
To group selectors, separate each selector with a comma.

### CSS Combinators
A combinator is something that explains the relationship between the selectors.
A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.

There are four different combinators in CSS:
- descendant selector (space)
- child selector (>)
- adjacent sibling selector (+)
- general sibling selector (~)

#### Descendant Selector
The descendant selector matches all elements that are descendants of a specified element.
The following example selects all `<p>` elements inside `<div>` elements: 

#### Child Selector `(>)`
The child selector selects all elements that are the children of a specified element.
The following example selects all `<p>` elements that are children of a `<div>` element:

#### Adjacent Sibling Selector `(+)`
The adjacent sibling selector is used to select an element that is directly after another specific element.
Sibling elements must have the same parent element, and "adjacent" means "immediately following".
The following example selects the first `<p>` element that are placed immediately after `<div>`elements:

General Sibling Selector (~)
The general sibling selector selects all elements that are next siblings of a specified element.
The following example selects all`<p>` elements that are next siblings of `<div>` elements:

### CSS Pseudo-classes
What are Pseudo-classes?
A pseudo-class is used to define a special state of an element.

For example, it can be used to:
- Style an element when a user mouses over it
- Style visited and unvisited links differently
- Style an element when it gets focus

Syntax
The syntax of pseudo-classes:
Anchor Pseudo-classes
Links can be displayed in different ways:
a:link {
  color: #FF0000;
}
 
/* visited link */
a:visited {
  color: #00FF00;
}
 
/* mouse over link */
a:hover {
  color: #FF00FF;
}
 
/* selected link */
a:active {
  color: #0000FF;
}Note: a:hover MUST come after a:link and a:visited in the CSS definition in order to be effective! a:active MUST come after a:hover in the CSS definition in order to be effective! Pseudo-class names are not case-sensitive.
Other pseudo-classes

- :first-child:  matches a specified element that is the first child of another element.
- :checked: Selects every checked `<input>` element
- :last-child: matches a specified element that is the lastchild of another element
- :nth-child(n): matches a specified element that is the (nth) child of another element
 
#### CSS Pseudo-elements
A CSS pseudo-element is used to style specified parts of an element.
For example, it can be used to:
Style the first letter, or line, of an element
Insert content before, or after, the content of an element
Syntax:
```css
selector::pseudo-element {
  property: value;
}

```
 
- ::first-line pseudo-element is used to add a special style to the first line of a text.
- ::first-letter pseudo-element is used to add a special style to the first letter of a text.
- ::before pseudo-element can be used to insert some content before the content of an element.
- ::after pseudo-element can be used to insert some content after the content of an element.
- ::marker pseudo-element selects the markers of list items.
- ::selection pseudo-element matches the portion of an element that is selected by a user.


### CSS Attribute Selectors
Style HTML Elements With Specific Attributes
It is possible to style HTML elements that have specific attributes or attribute values.

####  CSS `[attribute]` Selector
The `[attribute]` selector is used to select elements with a specified attribute.
The following example selects all `<a>` elements with a target attribute:

```css
a[target] {
  background-color: yellow;
}
```

#### CSS `[attribute="value"]` Selector
The `[attribute="value"]` selector is used to select elements with a specified attribute and value.
The following example selects all `<a>` elements with a target="_blank" attribute:
```css
a[target="_blank"] {
  background-color: yellow;
}
```

#### Styling Forms
The attribute selectors can be useful for styling forms without class or ID:
```css
input[type="text"] {
  width: 150px;
  display: block;
  margin-bottom: 10px;
  background-color: yellow;
}

input[type="button"] {
  width: 120px;
  margin-left: 35px;
  display: block;
}
```



## CSS Gradients
CSS gradients let you display smooth transitions between two or more specified colors.
CSS defines three types of gradients:
- Linear Gradients (goes down/up/left/right/diagonally)
- Radial Gradients (defined by their center)
- Conic Gradients (rotated around a center point)

<a href="https://cssgradient.io/">Make Beautiful Gradient </a>

## CSS Shadow Effects
With CSS you can add shadow to text and to elements.
You will learn about:
- box-shadow

### CSS box-shadow Property
The CSS box-shadow property is used to apply one or more shadows to an element.

<a href="https://neumorphism.io/">Neumorphism </a>
<a href="https://ui.glass/generator/">UI Glass </a>
<a href="https://box-shadow.dev/">Box Shadow </a>
