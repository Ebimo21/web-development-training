## Manipulating elements
### JavaScript CreateElement
To create an HTML element, you use the document.createElement() method:
```javascript
let element = document.createElement(htmlTag);
```

The document.createElement() accepts an HTML tag name and returns a new Node with the Element type.

### Javascript CreateTextNode
```javascript
// create a new text node and add it to the div
let text = document.createTextNode('CreateElement example');
div.appendChild(text);
```


### JavaScript appendChild
The appendChild() is a method of the Node interface. The appendChild() method allows you to add a node to the end of the list of child nodes of a specified parent node.

The following illustrates the syntax of the appendChild() method:
```javascript
parentNode.appendChild(childNode);
```
In this method, the childNode is the node to append to the given parent node. The appendChild() returns the appended child.

If the childNode is a reference to an existing node in the document, the appendChild() method moves the childNode from its current position to the new position.

```javascript
function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
// get the ul#menu
const menu = document.querySelector('#menu');
// add menu item
menu.appendChild(createMenuItem('Home'));
menu.appendChild(createMenuItem('Services'));
menu.appendChild(createMenuItem('About Us'));
```

### JavaScript textContent
To get the text content of a node and its descendants, you use the textContent property:
Suppose that you have the following HTML snippet:

```html
<div id="note">
    JavaScript textContent Demo!
    <span style="display:none">Hidden Text!</span>
    <!-- my comment -->
</div>    

```

The following example uses the textContent property to get the text of the <div> element:
```javascript
let note = document.getElementById('note');
console.log(note.textContent);
```

```console
<!-- Output -->
JavaScript textContent Demo!
Hidden Text!
```

#### textContent vs. innerText
On the other hand, the innerText takes the CSS style into account and returns only human-readable text. For example:

```javascript
let note = document.getElementById('note');
console.log(note.innerText);
```

```console
<!-- output -->
JavaScript textContent Demo!
```
As you can see, the hidden text and comments are not returned.

Since the innerText property uses the up-to-date CSS to compute the text, accessing it will trigger a reflow, which is computationally expensive.

#### Setting textContent for a node
Besides reading textContent, you can also use the textContent property to set the text for a node:

```javascript
node.textContent = newText;
```
When you set textContent on a node, all the node’s children will be removed and replaced by a single text node with the newText value. For example:


### JavaScript innerHTML
The innerHTML is a property of the Element that allows you to get or set the HTML markup contained within the element:

```javascript
element.innerHTML = 'new content';
element.innerHTML;
```

#### Reading the innerHTML property of an element
To get the HTML markup contained within an element, you use the following syntax:

```javascript
let content = element.innerHTML;
```


#### Setting the innerHTML property of an element
To set the value of innerHTML property, you use this syntax:

```javascript
element.innerHTML = newHTML;
```
The setting will replace the existing content of an element with the new content.