# HTML
## Review of Previous Lesson
## Question & Answer

# Deeper Dive Into HTML Element
## HTML Comments
HTML comments are not displayed in the browser, but they can help document your HTML source code.
You can add comments to your HTML source by using the following syntax:

```html 
<!-- Write your comments here -->
```

Comments are also great for debugging HTML, because you can comment out HTML lines of code, one at a time, to search for errors.

## HTML Heading `(<h1></h1>-<h6></h6>)`
HTML headings are titles or subtitles that you want to display on a webpage.

```html
<h1>This is a h1 Heading </h1>
<h2>This is a h2 Heading </h2>
<h3>This is a h3 Heading </h3>
<h4>This is a h4 Heading </h4>
<h5>This is a h5 Heading </h5>
<h6>This is a h6 Heading </h6>
```
<code>Display</code>
<h1>This is a h1 Heading </h1>
<h2>This is a h2 Heading </h2>
<h3>This is a h3 Heading </h3>
<h4>This is a h4 Heading </h4>
<h5>This is a h5 Heading </h5>
<h6>This is a h6 Heading </h6>

`<h1>` defines the most important heading. `<h6>` defines the least important heading.

`Note`: Browsers automatically add some white space (a margin) before and after a heading.
Search engines use the headings to index the structure and content of your web pages.
Users often skim a page by its headings. It is important to use headings to show the document structure.

## HTML Paragraph `<p></p>`
A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.

```html
<p>This is a paragraph </p>
```

<code>Display </code>
<p>This is a paragraph </p>

## HTML Preformatted Element `<pre></pre>`
The HTML `<pre>` element defines preformatted text.
The text inside a `<pre>` element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks:

```html
<pre>This will
     preserve the 
     
     spaces
</pre>
```

<code>Display </code>

<pre>This will
     preserve the 
     
     spaces
</pre>

## HTML Horizontal Line `<hr />`
The `<hr />` tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.

```html
<hr />
```

<code>Display</code>
<hr />

The `<hr />` tag is an empty tag, which means that it has no end tag.

## HTML Line Break `<br />`
The HTML `<br />` element defines a line break.

```html
<p>This is <br /> a broken paragraph </p>
```

<code>Display</code>

<p>This is <br /> a broken paragraph </p>

Use `<br />` if you want a line break (a new line) without starting a new paragraph:

## HTML Text Formatting
### Html `<b></b>` and `<strong></strong>` element
The HTML `<b>` element defines bold text, without any extra importance.

```html
<p>This text is <strong>bold</strong> </p>
```
<code> Display </code>
<p>This text is <strong>bold</strong> </p>

### HTML `<i></i>` and `<em></em>` element
The HTML `<i>` element defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.

```html
<p>This text is <em>italicised</em> </p>
```
<code> Display </code>
<p>This text is <em>italicised</em> </p>


### HTML `<mark></mark>` element
The HTML `<mark>` element defines text that should be marked or highlighted:

```html
<p>This text is <mark>marked</mark> </p>
```

<code> Display </code>
<p>This text is <mark>marked</mark> </p>


### HTML `<small></small>` element
The HTML `<small>` element defines smaller text:

```html
<p>This text is <small>small</small> </p>
```

<code> Display </code>
<p>This text is <small>small</small> </p>


### HTML `<sub></sub>` Element
The HTML `<sub>` element defines subscript text.

```html
<p>This text is a <sub>subscript</sub> </p>
```

<code> Display </code>
<p>This text is a <sub>subscript</sub> </p>


### HTML `<sup></sup>` Element
The HTML `<sup>` element defines superscript text.

```html
<p>This text is a <sup>supscript</sup> </p>
```

<code> Display </code>
<p>This text is a <sup>supscript</sup> </p>


## HTML Link `<a></a>`
Links are found in nearly all web pages. Links allow users to click their way from page to page.
`Note`: A link does not have to be text. A link can be an image or any other HTML element!

```html
<a href="url">link text</a>
```

<code> Display </code>
<a href="#">link text</a>

Use `mailto:` inside the href attribute to create a link that opens the user's email program (to let them send a new email):

```html
<a href="mailto:someone@example.com">Click to Send email</a>
```
<code>Display</code>
<a href="mailto:someone@example.com">Click to Send email</a>

## HTML Images `<img />`
The HTML `<img>` tag is used to embed an image in a web page. Images are not technically inserted into a web page; images are linked to web pages. The `<img>` tag creates a holding space for the referenced image.

```html
<img src="pic_trulli.jpg" alt="Italian Trulli">
```

## HTML Favicon
A favicon is a small image displayed next to the page title in the browser tab.
You can use any image you like as your favicon. You can also create your own favicon on sites like <a href="https://www.favicon.cc">Favicon</a>.

Add this line of code in the head section 

```html 
<link rel="icon" type="image/x-icon" href="/images/favicon.ico">
```

## HTML Lists `<ul></ul>` and `<ol></ol>`
HTML lists allow web developers to group a set of related items in lists.

### Types of Lists
#### Unordered HTML List `<ul></ul>`
An unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag.

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```  
<code> Display </code>
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>


#### Ordered HTML List `<ol></ol>`
An ordered list starts with the `<ol>` tag. Each list item starts with the `<li>` tag.

```html
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```
<code>Display</code>
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
 
## HTML Description List `<dl></dl>`
A description list is a list of terms, with a description of each term.
The `<dl>` tag defines the description list, the `<dt>` tag defines the term (name), and the `<dd>` tag describes each term:
```html
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```

<code>Display</code>
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>


## HTML Block and Inline Elements
Every HTML element has a default display value, depending on what type of element it is.
There are two display values: `block` and `inline`.

### Block Level Elements
- A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.
- A block-level element always takes up the full width available (stretches out to the left and right as far as it can).
- Two commonly used block elements are: `<p>` and `<div>`.

### Inline Elements
- An inline element does not start on a new line.
- An inline element only takes up as much width as necessary. For example a `<span>` element


## HTML `<div></div>` Element
The `<div>` element is often used as a container for other HTML elements.
The `<div>` element has no required attributes, but style, class and id are common.
When used together with CSS, the `<div>` element can be used to style blocks of content.
 
## HTML `<span>` Element
- The `<span>` element is an inline container used to mark up a part of a text, or a part of a document.
- The `<span>` element has no required attributes, but style, class and id are common.
When used together with CSS, the `<span>` element can be used to style parts of the text:

## HTML `<head></head>` Element
The HTML <head> element is a container for metadata (data about data) with the use of the following elements: `<title>`, `<style>`, `<meta>`, `<link>`, `<script>`, and `<base>`.

### HTML `<title></title>` Element
The `<title>` element defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.

### HTML `<style></style>` Element
The `<style>` element is used to define CSS style property for a single HTML page. We will get to learn CSS style later in this class.

### HTML `<link></link>` Element
The `<link>` element defines the relationship between the current document and an external resource.
The `<link>` tag is most often used to link to external style sheets:

### HTML `<meta></meta>` Element
The `<meta>` element is typically used to specify the character set, page description, keywords, author of the document, and viewport settings.

The metadata will not be displayed on the page, but are used by browsers (how to display content or reload page), by search engines (keywords), and other web services.

```html
<meta charset="UTF-8">
<meta name="description" content="Free Web tutorials">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="John Doe">
```

### Setting the View Port
The viewport is the user's visible area of a web page. It varies with the device - it will be smaller on a mobile phone than on a computer screen.
You should include the following <meta> element in all your web pages:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).
- The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.
 
### HTML `<script></script>` Element
The `<script>` element is used to define client-side JavaScripts.
 
## HTML Semantic Elements
Semantic elements = elements with a meaning. A semantic element clearly describes its meaning to both the browser and the developer.
Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.
Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.
List of Semantic Elements
```html 
<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>
```

## HTML `<form></form>` Element
An HTML form is used to collect user input. The user input is most often sent to a server for processing.

The HTML `<form>` element is used to create an HTML form for user input:
```html
<form>
<!-- form element -->
</form>
```

The `<form>` element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.

### The `<input></input>` Element
The HTML `<input>` element is the most used form element.
An `<input>` element can be displayed in many ways, depending on the type attribute.

Type attribute value can be:
#### Type: text
```html
<form>
    <label>Enter Text here:</label>
    <input type="text" />
</form>
```
<code>Display</code>
<form>
    <label>Enter Text here:</label>
    <input type="text" />
</form>

defines a single-line input field for text input.

#### Type: radio
```html
<form>
    <label>Select Option:</label>
    <input type="radio" name="item"><span>item1</span>
    <input type="radio" name="item"><span>item2</span>
    <input type="radio" name="item"><span>item3</span>
</form>
```
<code>Display</code>
<form>
    <label>Select Option:</label>
    <input type="radio" name="item"><span>item1</span>
    <input type="radio" name="item"><span>item2</span>
    <input type="radio" name="item"><span>item3</span>
</form>
    
Radio buttons let a user select ONE of a limited number of choices.

#### Type: checkbox
```html
<form>
    <label>Multi choice </label>
    <input type="checkbox">
    <input type="checkbox">
    <input type="checkbox">
</form>
```
<code>Display</code>
<form>
    <label>Multi choice </label>
    <input type="checkbox">
    <input type="checkbox">
    <input type="checkbox">
</form>

Checkboxes let a user select ZERO or MORE options of a limited number of choices.

#### Type: submit
```html
<form>
    <label>Multi choice </label>
    <input type="checkbox">
    <input type="checkbox">
    <input type="checkbox">

    <label>Select Option:</label>
    <input type="radio" name="item"><span>item1</span>
    <input type="radio" name="item"><span>item2</span>
    <input type="radio" name="item"><span>item3</span>

    <input type="submit" />
</form>
```

<code>Display</code>
<form>
    <label>Multi choice </label>
    <input type="checkbox">
    <input type="checkbox">
    <input type="checkbox">
    <label>Select Option:</label>
    <input type="radio" name="item"><span>item1</span>
    <input type="radio" name="item"><span>item2</span>
    <input type="radio" name="item"><span>item3</span>
    <input type="submit" />

</form>

defines a button for submitting the form data to a form-handler.
 
### The `<label></label>` Element
The `<label>` tag defines a label for many form elements.
The `<label>` element is useful for screen-reader users, because the screen-reader will read out loud the label when the user focus on the input element.
The for attribute of the `<label>` tag should be equal to the id attribute of the `<input>` element to bind them together.
 
### The `<select></select>` Element
The `<select>` element defines a drop-down list:

```html
<form>
    <label for="cars">Choose a car:</label>
    <select id="cars" name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
    </select>
</form>
```
<code>Display</code>
<form>
    <label for="cars">Choose a car:</label>
    <select id="cars" name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
    </select>
</form>

The `<option>` element defines an option that can be selected.
By default, the first item in the drop-down list is selected.
To define a pre-selected option, add the selected attribute to the option:
Use the multiple attribute to allow the user to select more than one value:
 
### The `<textarea></textarea>` Element
The `<textarea>` element defines a multi-line input field (a text area):

```html
<form>
    <textarea>
    </textarea>
</form>
```

 
### The `<button>` Element
The `<button>` element defines a clickable button:

```html
<form>
    <button type="button" onclick="alert('Hello World!')">Click Me!</button>
</form>
```
<code>Display</code>
<form>
    <button type="button" onclick="alert('Hello World!')">Click Me!</button>
</form>

### The `<fieldset>` and `<legend>` Element
The `<fieldset>` element is used to group related data in a form.
The `<legend>` element defines a caption for the `<fieldset>` element.

```html
<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>
```

<code>Display</code>
<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>