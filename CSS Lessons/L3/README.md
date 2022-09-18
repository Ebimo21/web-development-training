# CSS Flexbox
## CSS Flexbox Layout Module
Before the Flexbox Layout module, there were four layout modes:
- Block, for sections in a webpage
- Inline, for text
- Table, for two-dimensional table data
- Positioned, for explicit position of an element

The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.

## Flexbox Elements
To start using the Flexbox model, you need to first define a flex container.
The element above represents a flex container (the blue area) with three flex items.

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
```

```css
.flex-container {
  display: flex;
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}
```

## CSS Flex Container
### Parent Element (Container)
The code above shows a flex container (the blue area) with three flex items:
The flex container becomes flexible by setting the display property to flex:
The flex container properties are:
`flex-direction`
`flex-wrap`
`flex-flow`
`justify-content`
`align-items`
`align-content`

### The flex-direction Property
The `flex-direction` property defines in which direction the container wants to stack the flex items.
- The `column` value stacks the flex items vertically (from top to bottom):
- The `column-reverse` value stacks the flex items vertically (but from bottom to top):
- The `row` value stacks the flex items horizontally (from left to right):
- The `row-reverse` value stacks the flex items horizontally (but from right to left):

### The flex-wrap Property
The `flex-wrap` property specifies whether the flex items should wrap or not.
The examples below have 12 flex items, to better demonstrate the flex-wrap property.
- The `wrap` value specifies that the flex items will wrap (i.e move excess content to a new line)  if necessary:

- The `nowrap` value specifies that the flex items will not wrap (this is default):
- The `wrap-reverse` value specifies that the flexible items will wrap if necessary, in reverse order:

### The flex-flow Property
The `flex-flow` property is a shorthand property for setting both the `flex-direction` and `flex-wrap` properties.

```css
.flex-container {
  display: flex;
  flex-flow: row wrap;
}
``` 

### The justify-content Property
- The `justify-content` property is used to align the flex items:
- The `center` value aligns the flex items at the center of the container:
- The `flex-start` value aligns the flex items at the beginning of the container (this is default):
- The `flex-end` value aligns the flex items at the end of the container:
- The `space-around` value displays the flex items with space before, between, and after the lines:
- The `space-between` value displays the flex items with space between the lines:

### The align-items Property
- The `align-items` property is used to align the flex items.
- The `center` value aligns the flex items in the middle of the container:
- The `flex-start` value aligns the flex items at the top of the container:
- The `flex-end` value aligns the flex items at the bottom of the container:
- The `stretch` value stretches the flex items to fill the container (this is default):
- The `baseline` value aligns the flex items such as their baselines aligns:

### The align-content Property
- The `align-content` property is used to align the flex lines.
- The `space-between` value displays the flex lines with equal space between them:
- The `space-around` value displays the flex lines with space before, between, and after them:
- The `stretch value` stretches the flex lines to take up the remaining space (this is default):
- The `center` value displays display the flex lines in the middle of the container:
- The `flex-start` value displays the flex lines at the start of the container:
- The `flex-end` value displays the flex lines at the end of the container:
 
## CSS Flex Items
### Child Elements (Items)
The direct child elements of a flex container automatically becomes flexible (flex) items.
The flex item properties are:

- `order`
- `flex-grow`
- `flex-shrink`
- `flex-basis`
- `flex`
- `align-self`

### The `order` Property
- The `order property` specifies the order of the flex items.
- The `first flex` item in the code does not have to appear as the first item in the layout.
- The `order` value must be a number, default value is 0.
- The `order` property can change the order of the flex items:

### The `flex-grow` Property
- The `flex-grow` property specifies how much a flex item will grow relative to the rest of the flex items.
- The value must be a number, default value is 0

### The `flex-shrink` Property
- The `flex-shrink` property specifies how much a flex item will shrink relative to the rest of the flex items.
- The value must be a number, default value is 1.

### The `flex-basis` Property
- The `flex-basis` property specifies the initial length of a flex item

### The `flex` Property
The `flex` property is a shorthand property for the flex-grow, flex-shrink, and flex-basis properties.

### The `align-self` Property
- The `align-self` property specifies the alignment for the selected item inside the flexible container.
- The align-self property overrides the default alignment set by the container's align-items property.





### CSS `Border Style`
The `border-style` property specifies what kind of border to display.
The following values are allowed:
- dotted - Defines a dotted border
- dashed - Defines a dashed border
- solid - Defines a solid border
- double - Defines a double border
- groove - Defines a 3D grooved border. The effect depends on the border-color value
- ridge - Defines a 3D ridged border. The effect depends on the border-color value
- inset - Defines a 3D inset border. The effect depends on the border-color value
- outset - Defines a 3D outset border. The effect depends on the border-color value
- none - Defines no border
- hidden - Defines a hidden border

The `border-style` property can have from one to four values (for the top border, right border, bottom border, and the left border).
Note: None of the OTHER CSS border properties  will have ANY effect unless the border-style property is set!

### CSS `Border Width`
- The` border-width` property specifies the width of the four borders.
- The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick:
- The border-width property can have from one to four values (for the top border, right border, bottom border, and the left border):

### CSS `Border Color`
- The `border-color` property is used to set the color of the four borders.
`Note`: If border-color is not set, it inherits the color of the element.
- The border-color property can have from one to four values (for the top border, right border, bottom border, and the left border). 

### CSS Border - Individual Sides
In CSS, there are also properties for specifying each of the borders (top, right, bottom, and left) using border-style:
 
### CSS Border - Shorthand Property
Like you've seen in the previous page, there are many properties to consider when dealing with borders.
To shorten the code, it is also possible to specify all the individual border properties in one property.
The border property is a shorthand property for the following individual border properties:
border-width
border-style (required)
border-color
 
### CSS `Rounded Borders`
The `border-radius` property is used to add rounded borders to an element:
Tip: The `border-radius` property is actually a shorthand property for the border-top-left-radius, border-top-right-radius, border-bottom-right-radius and border-bottom-left-radius properties.
The border-radius property can have from one to four values. 
 
### CSS Margins
The `CSS margin` properties are used to create space around elements, outside of any defined borders.

With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).

Margin - Individual Sides
CSS has properties for specifying the margin for each side of an element:
margin-top
margin-right
margin-bottom
margin-left
To shorten the code, it is possible to specify all the margin properties in one property.
The margin property is a shorthand property for the following individual margin properties:
The auto Value
You can set the margin property to auto to horizontally center the element within its container.
The element will then take up the specified width, and the remaining space will be split equally between the left and right margins.
Margin Collapse
Top and bottom margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins.
This does not happen on left and right margins! Only top and bottom margins!
 
CSS Padding
The CSS padding properties are used to generate space around an element's content, inside of any defined borders.
With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).

Padding - Individual Sides
CSS has properties for specifying the padding for each side of an element:
padding-top
padding-right
padding-bottom
padding-left
To shorten the code, it is possible to specify all the padding properties in one property.
The padding property is a shorthand property for the following individual padding properties:
Padding and Element Width
The CSS width property specifies the width of the element's content area. The content area is the portion inside the padding, border, and margin of an element (the box model).
So, if an element has a specified width, the padding added to that element will be added to the total width of the element. This is often an undesirable result.
To keep the width at 300px, no matter the amount of padding, you can use the box-sizing property. This causes the element to maintain its actual width; if you increase the padding, the available content space will decrease.
 
CSS Setting height and width
The height and width properties are used to set the height and width of an element.
The height and width properties do not include padding, borders, or margins. It sets the height/width of the area inside the padding, border, and margin of the element.
Setting max-width
The max-width property is used to set the maximum width of an element.
The max-width can be specified in length values, like px, cm, etc., or in percent (%) of the containing block, or set to none (this is default. Means that there is no maximum width).
The problem with the <div> above occurs when the browser window is smaller than the width of the element (500px). The browser then adds a horizontal scrollbar to the page.
Using max-width instead, in this situation, will improve the browser's handling of small windows.
The CSS Box Model
In CSS, the term "box model" is used when talking about design and layout.
The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The image below illustrates the box model:
Explanation of the different parts:
Content - The content of the box, where text and images appear
Padding - Clears an area around the content. The padding is transparent
Border - A border that goes around the padding and content
Margin - Clears an area outside the border. The margin is transparent
The box model allows us to add a border around elements, and to define space between elements. 
Important: When you set the width and height properties of an element with CSS, you just set the width and height of the content area. To calculate the full size of an element, you must also add padding, borders and margins.
The total width of an element should be calculated like this:
Total element width = width + left padding + right padding + left border + right border + left margin + right margin
The total height of an element should be calculated like this:
Total element height = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin
 
An outline is a line that is drawn around elements, OUTSIDE the borders, to make the element "stand out".
CSS has the following outline properties:
outline-style
outline-color
outline-width
outline-offset
outline
Note: Outline differs from borders! Unlike border, the outline is drawn outside the element's border, and may overlap other content. Also, the outline is NOT a part of the element's dimensions; the element's total width and height is not affected by the width of the outline.
CSS Outline Offset
The outline-offset property adds space between an outline and the edge/border of an element. The space between an element and its outline is transparent.
The following example specifies an outline 15px outside the border edge:



CSS Layout - The position Property
The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).
Elements are then positioned using the top, bottom, left, and right properties. However, these properties will not work unless the position property is set first. They also work differently depending on the position value.
position: static;
HTML elements are positioned static by default.
Static positioned elements are not affected by the top, bottom, left, and right properties.
An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page:
position: relative;
An element with position: relative; is positioned relative to its normal position.
Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.
position: fixed;
An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
A fixed element does not leave a gap in the page where it would normally have been located.
position: absolute;
An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
Note: Absolute positioned elements are removed from the normal flow, and can overlap elements.
position: sticky;
An element with position: sticky; is positioned based on the user's scroll position.
A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).
CSS Layout - The z-index Property
When elements are positioned, they can overlap other elements.
The z-index property specifies the stack order of an element (which element should be placed in front of, or behind, the others).
An element can have a positive or negative stack order:
Without z-index
If two positioned elements overlap each other without a z-index specified, the element defined last in the HTML code will be shown on top.
CSS Layout - Overflow
CSS Overflow
The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.
The overflow property has the following values:
visible - Default. The overflow is not clipped. The content renders outside the element's box
hidden - The overflow is clipped, and the rest of the content will be invisible
scroll - The overflow is clipped, and a scrollbar is added to see the rest of the content
auto - Similar to scroll, but it adds scrollbars only when necessary
Note: The overflow property only works for block elements with a specified height.
overflow: visible
By default, the overflow is visible, meaning that it is not clipped and it renders outside the element's box:
overflow: hidden
With the hidden value, the overflow is clipped, and the rest of the content is hidden:
overflow: scroll
Setting the value to scroll, the overflow is clipped and a scrollbar is added to scroll inside the box. Note that this will add a scrollbar both horizontally and vertically (even if you do not need it):
overflow: scroll
Setting the value to scroll, the overflow is clipped and a scrollbar is added to scroll inside the box. Note that this will add a scrollbar both horizontally and vertically (even if you do not need it):
overflow-x and overflow-y
The overflow-x and overflow-y properties specifies whether to change the overflow of content just horizontally or vertically (or both):
overflow-x specifies what to do with the left/right edges of the content.
overflow-y specifies what to do with the top/bottom edges of the content.
