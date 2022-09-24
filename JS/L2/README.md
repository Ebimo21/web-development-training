# JAVASCRIPT
## JavaScript Functions
When developing an application, you often need to perform the same action in many places. For example, you may want to show a message whenever an error occurs.

To avoid repeating the same code all over places, you can use a function to wrap that code and reuse it.

### Declare a function
To declare a function, you use the function keyword, followed by the function name, a list of parameters, and the function body as follows:

```javascript
function say(message) {
    console.log(message);
}
```

### Calling a function
To use a function, you need to call it. Calling a function is also known as invoking a function. To call a function, you use its name followed by arguments enclosing in parentheses like this:

```javascript
say("Thi is the message")
```

### Parameters vs. Arguments
The terms parameters and arguments are often used interchangeably. However, they are essentially different.

When declaring a function, you specify the parameters. However, when calling a function, you pass the arguments that are corresponding to the parameters.

For example, in the say() function, the message is the parameter and the `Thi is the message` string is an argument that corresponds to the message parameter.

### Returning a value
Every function in JavaScript implicitly returns undefined unless you explicitly specify a return value.

To specify a return value for a function, you use the return statement followed by an expression or a value, like this:

```javascript
function add(a, b) {
    return a + b;
}
```

### Storing functions in variables
Functions are first-class citizens in JavaScript. In other words, you can treat functions like values of other types.

```javascript
function add(a, b) {
    return a + b;
}

let sum = add;
```

### Passing a function to another function
Because functions are values, you can pass a function as an argument into another function.

The following declares the average() function that takes three arguments. The third argument is a function:

```javascript
function add(a, b) {
    return a + b;
}

let sum = add;

function average(a, b, fn) {
    return fn(a, b) / 2;
}

let result = average(10, 20, sum);

console.log(result); 
```
