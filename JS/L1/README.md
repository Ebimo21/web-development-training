# What is JavaScript
## JavaScript History
In 1995, JavaScript was created by a Netscape developer named Brendan Eich. First, its name was Mocha. And then, its name was changed to LiveScript.

Netscape decided to change LiveScript to JavaScript to leverage Java’s fame, which was popular. The decision was made just before Netscape released its web browser product Netscape Navigator 2. As a result, JavaScript entered version 1.0.

## JavaScript Code Editors
To edit JavaScript source code, you need a plain text editor such as Notepad on Windows. However, to simplify and speed up typing of JavaScript code, you need a JavaScript code editor.

Besides basic editing features, a JavaScript code editor provides you with syntax highlighting, indentation, autocomplete, and brace matching functionality. Some editors also allow you to debug JavaScript.

## Insert Javascript Code
To insert JavaScript into an HTML page, you use the `<script>` element. There are two ways to use the `<script>` element in an HTML page:

- Embed JavaScript code directly into the HTML page.
- Reference an external JavaScript code file.

### Embed JavaScript code in an HTML page
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Hello World Example</title>
    <script>
        alert('Hello, World!');
    </script>
</head>
<body>
</body>
</html>
```

### Include an external JavaScript file
To include a JavaScript from an external file:

First, create a file whose extension is `.js` e.g., `app.js` then, use the path to the JavasScript source code file in the `src` attribute of the `<script>` element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Hello World Example</title>
    <script src="js/app.js"></script>
</head>
<body>

</body>
</html>
```

The following shows the contents of the `.js` file:
```javascript
alert('Hello, World!');
```

`Note`: to avoid javascript being run before the page is fully load, you include the JavaScript file just before the `</body>` tag as shown in this example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Hello World Example</title>
</head>
<body>
    <header>
        <!-- header content -->
    </header>

    <main>
        <!-- main content -->
    </main>

    <footer>
        <!-- footer content -->
    </footer>

   <!-- end of page content here-->
   <script src="js/service.js"></script>
   <script src="js/app.js"></script>
</body>
</html>
```

## Identifiers
An identifier is a name you choose for variables, parameters, functions, classes, etc. An identifier name starts with a letter `(a-z, or A-Z)`, an underscore`(_)`, or a dollar sign `($)` and is followed by a sequence of characters including `(a-z, A-Z)`, numbers `(0-9)`, underscores `(_)`, and dollar signs `($)`.

Identifiers are case-sensitive. For example, the `message` is different from the `Message`.

## Expressions
An expression is a piece of code that evaluates to a value. For example:
```javascript
2 + 1
```

## JavaScript Variables
Variables are containers for storing data (storing data values).
A variable is a label that references a value like a number or string. Before using a variable, you need to declare it.

### Declare a variable
To declare a variable, you use the var keyword followed by the variable name as follows:

```javascript
var message;
```
A variable name can be any valid identifier. By default, the `message` variable has a special value `undefined` if you have not assigned a value to it.

By convention, variable names use camelcase like `message`, `yourAge`, and `myName`.

JavaScript is a dynamically typed language. This means that you don’t need to specify the variable’s type in the declaration like other static typed languages such as Java or C#.

In recent version of javascript, you can use the `let` keyword to declare a variable like this, instead of `var`:

```javascript
let message;
```
It’s a good practice to use the let keyword to declare a variable. Later, you’ll learn the differences between var and let keywords. And you should not worry about it for now.

### Initialize a variable
Once you have declared a variable, you can initialize it with a value. To initialize a variable, you specify the variable name, followed by an equals sign `(=)` and a value.

For example, The following declares the message variable and initializes it with a literal string `"Hello"`:

```javascript
let message;
message = "Hello";
```

To declare and initialize a variable at the same time, you use the following syntax:
```javascript
let message = "Hello";
```

### Change a variable
Once you initialize a variable, you can change its value by assigning a different value. For example:

```javascript
let message = "Hello";
message = 'Bye';
```

### Constants
A constant holds a value that doesn’t change. To declare a constant, you use the const keyword. When defining a constant, you need to initialize it with a value. For example:

```javascript
const workday = 5;
```
Once defining a constant, you cannot change its value.

### When to Use JavaScript const?
If you want a general rule: always declare variables with const.
If you think the value of the variable can change, use let.

## JavaScript Data Types
JavaScript has the primitive data types:

- null: is a data type that also has only one value null
- undefined: when a variable is declared but not initialized
- boolean: has two literal values: `true` and `false` in lowercase
- number: represent both integer and floating-point (decimal) numbers.
- string: is a sequence of zero or more characters
- and a complex data type object: In JavaScript, an object is a collection of properties, where each property is defined as a key-value pair.



```javascript
let dataType1 = null;
let dataType2; //undefined
let dataType3 = true; //boolean
let dataType4 = 52; //number
let dataType5 = "This is a text" //string
let dataType6 = {
    firstName: 'John',//string
    age: 35 //number
}; //object
```
### JavaScript Objects
In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.

#### Accessing properties
To access a object’s property, you can use

- The dot notation `(.)`
- The array-like notation `([])`.


```javascript

let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}

// The following example uses the dot notation `(.)` to access the firstName and lastName properties of the contact object.

console.log(contact.firstName);
console.log(contact.lastName);

// The following example uses the array-like notation to access the email and phone properties of the contact object.
console.log(contact['phone']); // '(408)-555-9999'
console.log(contact['email']); // 'john.doe@example.com'
```
If you reference a property that does not exist, you’ll get an undefined


#### Modifying the value of a property
To change the value of a property, you use the assignment operator (=). For example:

```javascript
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

person.firstName = 'Jane';
```

#### Adding a new property to an object
You can add a property to an object after object creation.
The following statement adds the age property to the person object and assigns 25 to it:

```javascript
person.age = 25;
```

#### Deleting a property of an object
```javascript
// delete objectName.propertyName;
delete person.age;
```

#### Checking if a property exists
```javascript
propertyName in objectName
```

## JavaScript Arrays
In JavaScript, an array is an ordered list of values. Each value is called an element specified by an index:

A JavaScript array has the following characteristics:

First, an array can hold values of mixed types. For example, you can have an array that stores elements with the types number, string, boolean, and null.
Second, the size of an array is dynamic and auto-growing. In other words, you don’t need to specify the array size up front.

### Creating JavaScript arrays
The more preferred way to create an array is to use the array literal notation.
The array literal form uses the square brackets [] to wrap a comma-separated list of elements.

The following example creates the colors array that holds string elements:

```javascript
let colors = ['red', 'green', 'blue'];
```

### Accessing JavaScript array elements
JavaScript arrays are zero-based indexed. In other words, the first element of an array starts at index 0, the second element starts at index 1, and so on.

To access an element in an array, you specify an index in the square brackets []:

```javascript
let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];

console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'
```

To change the value of an element, you assign that value to the element like this:
```javascript
let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
mountains[2] = 'K2';
```

### Getting the array size
Typically, the length property of an array returns the number of elements. The following example shows how to use the length property:

```javascript
let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
console.log(mountains.length); // 3
```

### Basic operations on arrays
The following explains some basic operations on arrays. 

#### Adding an element to the end of an array
To add an element to the end of an array, you use the `push()` method:

```javascript
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.push('Red Sea');
```

3333 Adding an element to the beginning of an array
To add an element to the beginning of an array, you use the unshift() method:

```javascript
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.unshift('Red Sea');
```

#### Removing an element from the end of an array
To remove an element from the end of an array, you use the pop() method:

```javascript
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const lastElement = seas.pop();
console.log(lastElement); 
```

#### Removing an element from the beginning of an array
To remove an element from the beginning of an array, you use the shift() method:

```javascript
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const firstElement = seas.shift();

console.log(firstElement);
```

Finding an index of an element in the array
To find the index of an element, you use the indexOf() method:

```javascript
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
let index = seas.indexOf('North Sea');

console.log(index); // 2
```

### Check if a value is an array
To check if a value is an array, you use Array.isArray() method:

```javascript
console.log(Array.isArray(seas)); // true
```

## JavaScript Arithmetic Operators
JavaScript supports the following standard arithmetic operators:
- Addition `(+)`
- Subtraction `(-)`
- Multiplication `(*)`
- Division `(/)`
- Remainder `(%)`

## JavaScript Unary Operators Explained
Unary operators work on one value. The following table shows the unary operators and their meanings:

<table>
    <thead>
        <tr>
            <th>Unary Operators</th>
            <th>Name</th>
            <th>Meaning</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>+x</td>
            <td>Unary Plus</td>
            <td>Convert a value into a number</td>
        </tr>
        <tr>
            <td>-x</td>
            <td>Unary Minus</td>
            <td>Convert a value into a number and negate it</td>
        </tr>
        <tr>
            <td>++x</td>
            <td>Increment Operator (Prefix)</td>
            <td>Add one to the value</td>
        </tr>
        <tr>
            <td>&#8211;x</td>
            <td>Decrement Operator (Prefix)</td>
            <td>Subtract one from the value</td>
        </tr>
        <tr>
            <td>x++</td>
            <td>Increment Operator (Postfix)</td>
            <td> Add one to the value</td>
        </tr>
        <tr>
            <td>x&#8211;</td>
            <td>Decrement Operator (Postfix)</td>
            <td> Subtract one from the value</td>
        </tr>
    </tbody>
</table>

## JavaScript Comparison Operators
To compare two values, you use a comparison operator. The following table shows the comparison operators in JavaScript:
- Less than `(<)`
- Greater than `(>)`
- Less than or equal to `(<=)`
- Greater than or equal to `(>=)`
- Equal to `(==)`
- Not equal to `(!=)`

## JavaScript Logical Operators
JavaScript logical operators including the logical NOT operator `( !)`, the logical AND operator `( &&)` and the logical OR operator `( ||)`.

### The Logical NOT operator `(!)`
JavaScript uses an exclamation point `!` to represent the logical NOT operator. The `!` operator can be applied to a single value of any type, not just a Boolean value.

When you apply the `!` operator to a boolean value, the `!` returns true if the value is false and vice versa. For example:

```javascript
let eligible = false,
    required = true;

console.log(!eligible);//true
console.log(!required);//false
```

### The Logical AND operator (&&)
JavaScript uses the double ampersand `(&&)` to represent the logical AND operator. The following expression uses the `&&` operator:
```javascript
let result = a && b;
```
If `a` can be converted to true, the && operator returns the `b`; otherwise, it returns the `a`. In fact, this rule is applied to all boolean values.

### The Logical OR operator (||)
JavaScript uses the double pipe `||` to represent the logical OR operator. You can apply the `||` operator to two values of any type:

```javascript
let result = a || b;
```
If `a` can be converted to true, returns `a`; else, returns `b`. This rule is also applied to boolean values.

## JavaScript Logical Assignment Operators
ES2021 introduces three logical assignment operators including:

- Logical OR assignment operator (||=)
- Logical AND assignment operator (&&=)
- Nullish coalescing assignment operator (??=)

<table>
    <thead>
        <tr>
            <th>Logical Assignment Operators</th>
            <th>Logical Operators</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>x ||= y</td>
            <td>x || (x = y)</td>
        </tr>
        <tr>
            <td>x &amp;&amp;= y</td>
            <td>x &amp;&amp; (x = y)</td>
        </tr>
        <tr>
            <td>x ??= y</td>
            <td>x ?? (x = y);</td>
        </tr>
    </tbody>
</table>

### The Logical OR assignment operator
The logical OR assignment operator (||=) accepts two operands and assigns the right operand to the left operand if the left operand is falsy:

```javascript
// x ||= y

let title;
title ||= 'untitled';

console.log(title); // untitled
```

In this example, the title variable is `undefined`, therefore, it’s `falsy`. Since the title is falsy, the operator `||=` assigns the `'untitled'` to the title. The output shows the untitled as expected.

### The Logical AND assignment operator
The logical AND assignment operator only assigns y to x if x is truthy:
```javascript
let person = {
    firstName: 'Jane',
    lastName: 'Doe',
};

person.lastName &&= 'Smith';

console.log(person); //{firstName: 'Jane', lastName: 'Smith'}
```

### The nullish coalescing assignment operator
The nullish coalescing assignment operator only assigns y to x if x is null or undefined:
```javascript
let user = {
    username: 'Satoshi'
};
user.nickname ??= 'anonymous';

console.log(user); //{username: 'Satoshi', nickname:'anonymous'}
```

## Introduction to the JavaScript if statement
The if statement executes block if a condition is true. The following shows the syntax of the if statement:
```javascript
let age = 18;
if (age >= 18) {
  console.log('You can sign up'); //You can sign up
}
```

The condition can be a value or an expression. Typically, the condition evaluates to a Boolean value, which is true or false.

If the condition evaluates to true, the if statement executes the statement. Otherwise, the if statement passes the control to the next statement after it.

### Nested if statement
It’s possible to use an if statement inside another if statement. For example:
```javascript
let age = 16;
let state = 'CA';

if (state == 'CA') {
  if (age >= 16) {
    console.log('You can drive.');//You can drive. 
  }
}
```

In practice, you should avoid using nested if statements as much as possible. For example, you can use the && operator to combine the conditions and use an if statements as follows:

```javascript
let age = 16;
let state = 'CA';

if (state == 'CA' && age == 16) {
  console.log('You can drive.');
}
```

## JavaScript if else
The if statement executes a block if a condition is true. When the condition is false, it does nothing. But if you want to execute a statement if the condition is false, you can use an if...else statement.

```javascript
let age = 18;

if (age >= 18) {
  console.log('You can sign up.');
} else {
  console.log('You must be at least 18 to sign up.');
}
```

## JavaScript if else if
The if an if…else statements accept a single condition and execute the if or else block accordingly based on the condition.

To check multiple conditions and execute the corresponding block if a condition is true, you use the if...else...if statement like this:

```javascript
let month = 6;
let monthName;

if (month == 1) {
  monthName = 'Jan';
} else if (month == 2) {
  monthName = 'Feb';
} else if (month == 3) {
  monthName = 'Mar';
} else if (month == 4) {
  monthName = 'Apr';
} else if (month == 5) {
  monthName = 'May';
} else if (month == 6) {
  monthName = 'Jun';
} else if (month == 7) {
  monthName = 'Jul';
} else if (month == 8) {
  monthName = 'Aug';
} else if (month == 9) {
  monthName = 'Sep';
} else if (month == 10) {
  monthName = 'Oct';
} else if (month == 11) {
  monthName = 'Nov';
} else if (month == 12) {
  monthName = 'Dec';
} else {
  monthName = 'Invalid month';
}
console.log(monthName);
```

## JavaScript Ternary Operator
```javascript
// syntax
condition ? expressionIfTrue : expressionIfFalse;
```
```javascript
let age = 18;
let message;

message = age >= 16 ? 'You can drive.' : 'You cannot drive.';

console.log(message);
```


## JavaScript switch case
The switch statement evaluates an expression, compares its result with case values, and executes the statement associated with the matching case value.

The following illustrates the syntax of the switch statement:

```javascript
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}

```

How it works.

First, evaluate the expression inside the parentheses after the switch keyword.
Second, compare the result of the expression with the value1, value2, … in the case branches from top to bottom. The switch statement uses the strict comparison (===).
Third, execute the statement in the case branch where the result of the expression equals the value that follows the case keyword. The break statement exits the switch statement. If you skip the break statement, the code execution falls through the original case branch into the next one. If the result of the expression does not strictly equal to any value, the switch statement will execute the statement in the default branch.

The switch statement is like the if…else…if statement. But it has more readable syntax.

## JavaScript while Loop
The JavaScript while statement creates a loop that executes a block as long as a condition evaluates to true.
```javascript
let count = 1;
while (count < 10) {
    console.log(count);
    count +=2;
}
```

## JavaScript do…while Loop
The do...while loop statement creates a loop that executes a block until a condition evaluates to false. The following statement illustrates the syntax of the do...while loop:

Unlike the while loop, the do-while loop always executes the statement at least once before evaluating the expression.

```javascript
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 5)
```

## JavaScript for Loop
The for loop statement creates a loop with three optional expressions. The following illustrates the syntax of the for loop statement:

```javascript
for (let i = 1; i < 5; i++) {
  console.log(i);
}
```