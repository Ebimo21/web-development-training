# HYPERTEXT MARKUP LANGUAGE (HTML)
## What is HTML
HTML is the standard markup language for Web pages. HTML stands for **`Hyper Text Markup Language`**. HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way.

**Hyper Text:** Whenever you click on a link which brings you to a new webpage, you have clicked on a hypertext. HyperText is a way to link two or more web pages (HTML documents) with each other.

**Markup language:** A markup language is a computer language that is used to apply layout and formatting conventions to a text document. Markup language makes text more interactive and dynamic. It can turn text into images, tables, links, etc.

## What is HTML used for?
- HTML is used to describe the structure of a Web page
- HTML elements tell the browser how to display the content

## HTML History
In the late __1980's__ , a physicist, **Tim Berners-Lee** who was a contractor at __CERN__, proposed a system for CERN researchers. In __1989__, he wrote a memo proposing an internet based hypertext system.

Tim Berners-Lee is known as the father of HTML. The first available description of HTML was a document called "HTML Tags" proposed by Tim in late 1991. The latest version of HTML is HTML5, which we will learn later in this tutorial.

### HTML Versions
**HTML 1.0:** HTML 1.0(1991) was the barebones version of HTML language.

**HTML 2.0:** HTML 2.0(1995) was able to support extra features such as form-based file upload, form elements such as text box, option button, etc.

**HTML 3.2:** HTML 3.2(1997)  was capable of creating tables and providing support for extra options for form elements. It can also support a web page with complex mathematical equations. It became an official standard for any browser till January 1997. Today it is practically supported by most of the browsers.

**HTML 4.01:** HTML 4.01(1999) is a very stable version of HTML language. This version is the current official standard, and it provides added support for stylesheets (CSS) and scripting ability for various multimedia elements.

**HTML5:** HTML5(2008) is the newest version of HyperText Markup language. There are two major organizations one is W3C (World Wide Web Consortium), and another one is WHATWG( Web Hypertext Application Technology Working Group) which are involved in the development of HTML 5 version, and still, it is under development.

## How the Web Works
Webpages/Websites are just a bunch of text files and media content sitting on a special computer (server) that we can access once connecting to the same network (internet) as the special computer.

`Note:` It’s also worth noting that HTML is not considered a programming language as it can’t create dynamic functionality.

## How to Make a Website
- Create files written in HTML
- Host them on a server (server side)
- Access them on your web browser (client side)

## What does the Web Server do
- wait for request from a web browser (request to access a web page)
- server finds the resource and sends it to the browser

## What does the web browser do?
- makes a request to a web server
- wait for a response
- display the content (response) based on the HTML
 
## Writing your first HTML document
### Sample HTML Code

``` html
<!DOCTYPE html>
<html>
  <head>
    <title>Learning HTML</title>
  </head>
<body>

  <h1>My First HTML document!</h1>
  <p>Hello World.</p>

</body>
</html>
```

## Code Explained!
``` html 
The <!DOCTYPE html> declaration defines that this document is an HTML5 document
The <html> element is the <strong>root</strong> element of an HTML page. It can also include the <strong>lang</strong> attribute, setting the primary language of the document.
The <head> element contains meta information about the HTML page
The <title> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
The <body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
The <h1> element defines a large heading
The <p> element defines a paragraph

```

### HTML Broilerplate
``` html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning HTML</title>
</head>
<body>
    <h1>My First HTML document!</h1>
    <p>Hello World.</p>
</body>
</html>

```

## Web Browsers
The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly.
When the browser reads your HTML, it interprets all the tags that surround your text. Tags are just words or characters in angle brackets, like, `<head>, <p>, <h1>` and so on. The tags tell the browser about the structure and meaning of your text.
A browser does not display the HTML tags, but uses them to determine how to display the document.

## How to View HTML Source?
Have you ever seen a Web page and wondered "Hey! How did they do that?"

### View HTML Source Code:
Right-click in an HTML page and select `View Page Source` (in Chrome) or `View Source` (in Edge), or similar in other browsers. This will open a window containing the HTML source code of the page.

### Inspect an HTML Element:
- Right-click on an element (or a blank area)
- Choose "Inspect" or "Inspect Element" to see what elements are made up of (you will see both the HTML and the CSS).
`You can also edit the HTML or CSS on-the-fly in the Elements or Styles panel that opens.`

## Web Development Environment Setup
## HTML Editors
Web pages can be created and modified by using any text editors like `VSCode, WYSISYG, Notepad++, Notepad etc`. We shall be using VSCode in the course of the MasterClass.
`Download and install VSCode.`

## HTML Elements
An HTML element is defined by a start tag, some content, and an end tag. The HTML element is everything from the start tag to the end tag:

``` html
<tagname>Content goes here...</tagname>
```

## Tags Dissected
Okay, you’ve seen a bit of markup, so let’s zoom in and take a look at how tags really work.
Tags consist of the tag name surrounded by angle brackets; that is, the < and > characters. We call an opening tag and its closing tag matching tags. 

## Examples of some HTML elements:

``` html 

<h1>My First Heading</h1>
<p>My first paragraph.</p>

```

`Note: Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!`


## HTML Attributes
HTML attributes provide additional information about HTML elements.
- All HTML elements can have attributes
- Attributes provide additional information about elements
- Attributes are always specified in the start tag
- Attributes usually come in name/value pairs like: name="value"

For Example:
The `<a>` tag defines a hyperlink. The `href` attribute specifies the URL of the page the link goes to:

``` html
<a href="https://www.google.com">Visit Gooogle</a>
```

## List of common Attributes:
- `href`: The href attribute specifies the URL of the page the link goes to. Used with `<a>` tag.
- `src`: The src attribute specifies the path to the image to be displayed.
- `Width & height`: the width and height attributes, which specifies the width and height of the image (in pixels).
- `Alt`: specifies an alternate text for an image, if the image for some reason cannot be displayed. 
- `Style`: The style attribute is used to add styles to an element, such as color, font, size, and more.
- `Lang`: to declare the language of the Web page. This is meant to assist search engines and browsers.
- `Title`: The value of the title attribute will be displayed as a tooltip when you mouse over the element.

## Best Practices
- Use lowercase attributes
- Always quote attributes values
- Double quotes are the most common


## HTML Class Attribute
The HTML `class` attribute is used to specify a class for an HTML element.
Multiple HTML elements can share the same class.

The `class` attribute is often used to point to a class name in a stylesheet. It can also be used by JavaScript to access and manipulate elements with the specific class name. It is used to put specific elements in a class that we can interract with later.

`Tip: The class attribute can be used on any HTML element.`
`Note: The class name is case sensitive!`
HTML elements can belong to more than one class.
To define multiple classes, separate the class names with a space, e.g. 
``` html
<div class="city main">
```
The element will be styled according to all the classes specified.
Different HTML elements can point to the same class name.


## HTML id Attribute
The HTML `id` attribute is used to specify a unique id for an HTML element.
You cannot have more than one element with the same id in an HTML document.
The `id` attribute is used to point to a specific style declaration in a style sheet. It is also used by JavaScript to access and manipulate the element with the specific id.

`Note: The id name is case sensitive! The id name must contain at least one character, cannot start with a number, and must not contain whitespaces (spaces, tabs, etc.).`

`A class name can be used by multiple HTML elements, while an id name must only be used by one HTML element within the page.`

## Nested HTML Elements
HTML elements can be nested (this means that elements can contain other elements).
All HTML documents consist of nested HTML elements.
`Never omit the end tag`
Some HTML elements will display correctly, even if you forget the end tag. However, never rely on this! Unexpected results and errors may occur if you forget the end tag!

## Empty HTML Elements
HTML elements with no content are called empty elements.
The `<br>` tag defines a line break, and is an empty element without a closing tag:
`<p>`This is a `<br>` paragraph with a line break.`</p>`

## HTML is not Case Sensitive
HTML tags are not case sensitive: `<P>` means the same as `<p>`.
The HTML standard does not require lowercase tags, but W3C recommends lowercase in HTML, and demands lowercase for stricter document types like XHTML.

# ASSIGNMENT
- Research About `How Websites Work`
`OPTIONAL`: Read about the `Upcoming section`

# NEXT LECTURE: UPCOMING
## List of important Elements and we will be covering:

``` html 
<h1> - <h6>
<p>
<hr>
<a>
<img>
<ul>
<div>
<head>
<br>
<table>
<pre>
<b>
<strong>
<i>
<em>
<mark>
<small>
<del>
<ins>
<sub>
<sup>
<blockquote>
<q>
```