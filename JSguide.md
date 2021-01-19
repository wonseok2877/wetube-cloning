<link href="mdstyle.css" rel="stylesheet"></link>

# 0. What is JAVASCRIPT?

### ref : **[javascript.info](https://javascript.info/)**

### ref : [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)

## 0-1. what can in-browser javascript do?

: In-browser JavaScript can do everything related to webpage manipulation, interaction with the user, and the webserver.

- Add new HTML to the page, change the existing content, modify styles.
- <mark>React</mark> to user actions, run on mouse clicks, pointer movements, key presses.
- Send requests over the network to remote <mark>servers</mark>, download and upload files (so-called AJAX and COMET technologies).
- Get and set cookies, ask questions to the visitor, show messages.
  Remember the <mark>data</mark> on the client-side (“local storage”).
- the only programming language to build <mark>front-end</mark> of websites. makes your website interactive, very powerful.

1. Specification(ECMAscript)
   : ES6 is just a updated version specification. What is specification? JAVASCRIPT is centralized so that somebody update, works on all the browser. And each browsers (chrome, safari, firefox) read javascript depend on the version of specification.

2. <mark style="background-color: wheat">vanilla javascript

   : a language called javascript with no library or framework. Just the raw javascript!
   Many people don't know about vanilla, the **core of javascript**. This is why we should learn!
   it's fast, lightweight, cross-platform. So after you learn vanilla, you can go next to react.js things with no problems.

## 0-2. how javascript is this much powerful?

: 어떻게 javascript를 이용해서 특정 url을 호출하는지 궁금할거야. 바로 이 부분이 javascript가 이렇게 강력해진 이유다. javascript는 웹사이트로 request를 보내고 respond를 통해서 data를 얻을 수 있는데, **가져온 data를 refresh없이도 웹사이트에 적용시킬 수 있기 때문이야.**

> behind the scenes, javascript is getting informations all the time.

JavaScript programs can be inserted almost anywhere into an HTML document using the `<script>` tag.
The `<script>` tag contains JavaScript code which is automatically executed when the browser processes the tag.

## 0-3. DOM (: Document Object Module)

### document

javascript에서 기본적으로 html을 document라는 이름으로 인식한다. document is also an huuuuge object.
getElementById, getElementByTagname, .....

- If you need to get access to an element using `querySelector()` to find the element using any selector.

```js
document.getElementByTagname("h1")[0] // the first h1 element
document.querySelector("h1) //the first h1 element
```
### 좀 더 복잡한 선택자
아래 예제처럼 정말 강력한 선택자도 사용할 수 있습니다. 예제의 결과는 클래스가 "user-panel main"인 `<div>(<div class="user-panel main">)` 안의, 이름이 "login"인 `<input>` 중 첫 번째 요소입니다.
```js
var el = document.querySelector("div.user-panel.main input[name=login]");
```
### it's all about object !

> Remember ! All the things that you selected from your page using javascript, **are going to be objects !!**

javascript will bring all the elements(tags) in your html, and gonna **turn them into objects**. and we can change html contents using javascript!

> we are manipulating html elements through javascript !

`anything.innerHTML("Fuck");` -> hmtl 페이지속 anything이라는 element속에 "Fuck"이라는 text가 들어감.

`console.dir(anything)` ->

    id: "combine"
    innerHTML: "Hi! mthfuckers!"
    innerText: "Hi! mthfuckers!"
    .
    .
    etc

`console.dir(document)` ->

    #document
    URL: "file:///C:/Users/wslee/coding-master/javascript-hominid/basic/homin2.html"
    all: HTMLAllCollection(46)
    0: html
    1: head
    4: title
    5: link
    6: body
    7: div
    8: span
    charset: "UTF-8"
    doctype: html
    .
    .
    etc

- `querySelector` : returns the first element of node, among the all children inside.

## 0-4. Application Programming Interfaces (APIs)

Browser APIs are built into your web browser, and are able to expose data from the surrounding computer environment, or do useful complex things. For example:

The <mark>DOM</mark> (Document Object Model) API allows you to manipulate HTML and CSS, creating, removing and changing HTML, dynamically applying new styles to your page, etc. Every time you see a popup window appear on a page, or some new content displayed (as we saw above in our simple demo) for example, that's the DOM in action.
The <mark>Geolocation API</mark> retrieves geographical information. This is how Google Maps is able to find your location and plot it on a map.
The <mark>Canvas</mark> and <mark>WebGL APIs</mark> allow you to create animated 2D and 3D graphics. People are doing some amazing things using these web technologies —see Chrome Experiments and webglsamples.
Audio and Video APIs like HTMLMediaElement and WebRTC allow you to do really interesting things with multimedia, such as play audio and video right in a web page, or grab video from your web camera and display it on someone else's computer (try our simple Snapshot demo to get the idea).

## why we should seperate files?

As a rule, only the simplest scripts are put into HTML. More complex ones reside in separate files.

The benefit of a separate file is that the **browser will download it and store it in its cache**.

Other pages that reference the same script will take it from the cache instead of downloading it, so the file is actually downloaded only once.

**That reduces traffic and makes pages faster.**

> it's very important, that you **always try to read the errors**. programmer need to be able to understand the errors. Because most of the information is in the errors - nicolas

# 1. Data types

### eight data types

JavaScript provides eight different data types which are `undefined`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number`, and `object`.

```js
typeof undefined
-> "undefined"

typeof 0
-> "number"

typeof 10n
-> "bigint"

typeof true
-> "boolean"

typeof "foo"
->"string"

typeof console
-> object

typeof console.log
-> function
```

## 1-1. understanding javascript

computing process

- create -> initialize -> use
- execute order : javascript executes expressions top to bottom.

When JavaScript variables are declared, they have an initial value of `undefined`. If you do a mathematical operation on an undefined variable your result will be `NaN` which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of "undefined".

### declare

`let` – is a modern variable declaration.

`var` – is an old-school variable declaration.

`const` – is like let, but the value of the variable can’t be changed.

Programming languages that allow such things, such as JavaScript, are called **“dynamically typed”**, meaning that there exist data types, but variables are not bound to any of them.

- Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.

### Type Conversions

Most of the time, operators and functions automatically convert the values given to them to the right type.

For example, `alert` automatically converts any value to a string to show it. Mathematical operations convert values to numbers. or `if` statements.
There are also cases when we need to explicitly convert a value to the expected type.

### Basic Operators

In JavaScript, you can store a value in a variable with the assignment operator `=`.
`+`
`-`
`*`
`/`
`++`
`--`

The remainder operator `%` gives the remainder of the division of two numbers.

    17 % 2 = 1 (17 is Odd)
    48 % 2 = 0 (48 is Even)

Compound Assignment With Augmented Addition : `+=`, `-=`, `*=`, `/=`

    let myVar = 1;
    myVar += 50;
    console.log(myVar); // Returns 51
    myVar -= 20; // 31
    myVar *= 100 // 3100
    myVar /= 10 // 310

## 1-2 Comparison Operator

There are many comparison operators in JavaScript. All of these operators return a boolean `true` or `false` value.

### Equality Operator

```js
1 == 1; // true
1 == true; // true
1 == 2; // false
1 == "1"; // true
"3" == 3; // true

"안녕 잣밥들아!"[3] == ["잣"];
// true
```

#### undertanding boolean as `0` and `1`

For boolean values, true becomes 1 and false becomes 0.

```js
true == 1; // true
false == 0; // true
23 == true; // false
```

#### Comparison with null and undefined

```js
null === undefined; // false
null == undefined; // true
```

null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

### Strict Equality Operator

the strict equality operator does not perform a **type conversion**.

```js
3 === 3; // true
3 === "3"; // false
"안녕 잣밥들아!"[3] === "잣";
// true
"안녕 잣밥들아!"[3] === ["잣"];
// false
```

type conversion is just a conversion. only converts when it is compared, right?

```js
typeof 10;
// "number"
typeof "10";
// "string"
typeof 10 == typeof "10";
false;
typeof 10 === typeof "10";
false;
```

### Inequality Operator & Strict Inequality Operator

The inequality operator (`!=`) is the opposite of the equality operator.

```js
1 != 2; // true
1 != "698342"; // true
1 != "1"; // false
```

```js
3 !== 3; // false
3 !== "3"; // true
4 !== 3; // true
```

### Greater,Less Than Operator & Greater,Less Than Or Equal To Operator

The greater than operator (`>`)compares the values of two numbers. If the number to the left is greater than the number to the right, it returns `true`. Otherwise, it returns `false`.
greater than operator will convert data types of values while comparing.

```js
5 > 3; // true
7 > "3"; // true
"200" < 300; // true
```

```js
6 >= 6; // true
7 >= "3"; // true
"100" <= 1000; // true
```

#### String comparison : Unicode order

To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

In other words, strings are compared letter-by-letter.

```js
"Z" > "A"; // true
"Glow" > "Glee"; // true
"Bee" > "Be"; // true
```

The algorithm to compare two strings is simple:

1. Compare the first character of both strings.
2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
4. Repeat until the end of either string.
5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

### Logical And Operator

The logical and operator `(&&)` returns true if and only if the operands to the left and right of it are true.

```js
true && true = true;
true && false = false;
false && true = false;
false && false = false;

function logicalAndOperator(num) {
  if (num > 5 && num < 10) {
    return "Yes";
  }
  return "No";
}

logicalAndOperator(6); // "Yes"
logicalAndOperator(600); // "No"
```

### Logical Or Operator

The logical or operator (||) returns true if either of the operands is true.

```js
true || true = true;
true || false = true;
false || true = true;
false || false = false;

function logicalAndOperator(num) {
  if (num < 5 || num > 10) {
    return "Outside";
  }
  return "Inside";
}

logicalAndOperator(6); // "Inside"
logicalAndOperator(600); // "Outside"
```

## 1-2. Numbers

### toString(base)

The method num.toString(base) returns a string representation of num in the numeral system with the given base.

```js
let num = 255;

alert(num.toString(16));
// ff
alert(num.toString(2));
// 11111111
```

### Built-in Math object

#### rounding

: One of the most used operations when working with numbers is rounding.

There are several **built-in functions** for rounding:

`Math.floor`
Rounds down: 3.1 becomes 3, and -1.1 becomes -2.

`Math.ceil`
Rounds up: 3.1 becomes 4, and -1.1 becomes -1.

`Math.round`
Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4 and -1.1 becomes -1.

`Math.trunc`
Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.

#### other Math functions

`Math.random()`
Returns a random number from 0 to 1 (not including 1).

`Math.max(a, b, c...)` / `Math.min(a, b, c...)`
Returns the greatest/smallest from the arbitrary number of arguments.

`Math.pow`

`Math.sqrt`

[more functions - mdn](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math)

## 1-3. Strings

### String length

The length property has the string length:

    alert( `My\n`.length ); // 3

Please note that str.length is a numeric property, not a function. There is no need to add parenthesis after it.

### Accessing characters

To get a character at position pos, use square brackets `[pos]`.The first character starts from the zero position.

we can get the number of characters in string data with `.length`

```js
let str = `Hello`;

// the first character
"Hello"[0] // H
alert( str[0] ); // H

// the last character
"Hello".length // 5
str.length // 5
alert( str[str.length - 1] ); // o

// iterate over characters
for (let char of "Hello") {
  alert(char); // H,e,l,l,o  }
```

searching for a substring : str.indexOf

```js
let str = "What up my boo!";

str.indexOf("What"); // 0
str.indexOf("what"); // not defined
str.indexOf("up"); // 7
str.indexOf("my"); // 10
str.indexOf("boo"); // 13
```

modern methods : includes, startsWith, endsWith

`str.includes(substr, pos)` returns true/false depending on whether str contains substr within. and `str.startsWith`, `str.endsWith` shows you what the character of string starts or ends.

```js
let str = "What up my boo!";

str.includes("What"); //true
str.includes("what"); //false
str.includes("up"); //true

str.startsWith("W");
//only the true
str.endsWith("!");
//only the true
```

Getting a substring

There are 3 methods in JavaScript to get a substring: substring, substr and slice.

`str.slice(start, end)`
`str.substring(start, end)`
`str.substr(start, length)`

```js
let str = "pythagorean";

str.slice(0, 3); // "pyt"
str.slice(2, 7); // "thago"
str.slice(5); // "gorean"
str.slice(-9, -4); // "thago"

str.substring(2, 6); // "thag"
str.substring(6, 2); // "thag"

str.substr(5, 5); // "gorea"
```

### Constructing Strings with operators

: we can use `+`, `+=`

```js
var myStr = "hi" + "wonseok"; // "hiwonseok"
myStr += " nice"; // "hiwonseok nice"
var fullStr = myStr + " to meet you"; // "hiwonseok nice to meet you"
```

## 1-4. Boolan

They are basically little **on-off switches**, where `true` is "on" and `false` is "off." These two states are mutually exclusive.

# 2. Object

## array

### data structure as ordered collection

: Objects allow you to store keyed collections of values. That’s fine.

But quite often we find that we need an **ordered collection**, where we have a 1st, a 2nd, a 3rd element and so on. For example, we need that to store a list of something: users, goods, HTML elements etc.

It is not convenient to use an object here, because it provides no methods to manage the order of elements. We can’t **insert a new property “between” the existing ones**. Objects are just not meant for such use.

### basic usage

You can nest arrays within other arrays.
We can access the data inside arrays using indexes.

```js
const daysOfWeek = ["Mon", "tue", ... ,"sun" ]
//(7) ["Mon", "tue", "wed", "thu", "fri", "sat", "sun"]

const myMeal = [["breakfast", 8, "cereal"], ["lunch", 12, "chicken"] ["dinner", 18, "soup"]]
//(3) [Array(3), Array(3), Array(3)]

myMeal[0] //(3) ["breakfast", 8, "cereal"]
```

### Modify Array Data

Unlike strings, the entries of arrays are mutable and can be changed freely.

#### With Indexes

```js
myMeal[0] = ["early breakfast", 7, "ceral"];
//0: (3) ["early breakfast", 7, "cereal"]
myMeal[0][2] = ["noodles"]; //0: (3) ["early breakfast", 7, "noodles"]
```

### Manipulate Arrays

`.push()` takes one or more parameters and "pushes" them onto the end of the array.

We can store this "popped off" value by assigning it to a variable. In other words, `.pop()` removes the last element from an array and returns that element.

`.shift()` works just like .pop(), except it removes the first element instead of the last.

`unshift()` adds the element at the beginning of the array.

```js
const arr1 = [100, 101, 102];
arr1.push(105); // (4) [100, 101, 102, 105]
arr1.push(["wow", "array", "is so much flexible", "!"]);
//(5) [100, 101, 102, 105, Array(4)]

arr1.push(106);
arr1.pop(); // 106
arr1; // (5) [100, 101, 102, 105, Array(4)]
var poppedData = arr1.pop(); //(4) ["wow", "array", "is so much flexible", "!"]
arr1; // (4) [100, 101, 102, 105]

arr1.shift(); // 100
arr1; // (3) [101, 102, 105]
var shiftedData = arr1.shift(); // 101

arr1.unshift("Come back!");
```

- `objects` : definition blah blah
  for example, in `console.log`, console is an object and log is a function which is a sort of key o r content.

- An object
  is capable of <mark>storing multiple values</mark> as properties.
  One of the best things about objects is that we can store a **function** as one of its properties.

## functions including object

```js
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
};

calculator.plus(100, 1); // 101
calculator.minus(100, 1); // 99
```

> objects have maaaany key functions.

console.error()
console.name()
Math.random()
Math.etc...()

## 1-3. a primitive as an object

- The “object wrappers” are different for each primitive type and are called: String, Number, Boolean and Symbol. Thus, they provide different sets of methods.

```js
let str = "Hello";

alert(str.toUpperCase());

// HELLO
```

The special object is destroyed, leaving the primitive `str` alone.
**So primitives can provide methods, but they still remain lightweight.**

<mark>The JavaScript engine highly optimizes this process.</mark> It may even skip the creation of the extra object at all. But it must still adhere to the specification and behave as if it creates one.

Formally, these methods work via temporary objects, but JavaScript engines are well tuned to optimize that internally, so they are not expensive to call.

# 3. Functions

## 3-1. WTF is this?

### repetition and reusable

Functions are the **main “building blocks”** of the program. They allow the code to be called many times without repetition.

### built-in functions

`console.log(console.log)` ->

     ƒ log() { [native code] }

`console.log(profileWonseok.favfood)` ->

    (2) [{…}, {…}]
    0: {name: "Tom Yam Kung", fatty: false}
    1: {name: "Hamburger", fatty: true}
    length: 2
    proto: Array(0)

`console.log(console)` ->

    console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

everything is **function** here! log is a key function of console, and console is a huge object.

> console.log(console). -> a big **function**. (built-in function) interesting! <br>I think it's result gives you a very good view of the inside that how javascript is made.

- function functions as many time as you want.

- argument : almost a variable, which putted in a function. To use a valid argument, we should make function prepared.
  `function sayHello(Wonseok){ }`  
  we can guess that, ( ) means the space for arguments, and also tells it is a function.

```js
function sayHello(anyyyything) {
  console.log("Hellooooo", anyyyything);
}
```

      -> this is the way to make a function that reads data from outside.

## 3-2. variables and values of function

### variables : global scope & local scope

as you see below, variables which is declared in a function cannot be used in outside. But in opposite, function has full access to the outer variable. It can modify it as well.

```js
function showMessage() {
  let message = "hello I'm javascript!";
  alert(message);
}
showMessage(); // hello I'm javascript!
alert(message);
// error : variable not defined

let myName = "Wonseok";
function sayHi() {
  let greeting = "Hello" + myName;
  alert(greeting);
}
sayHi();
// Hello Wonseok
```
The **scope** of a variable is the region of your program in which it is defined. JavaScript variables have only two scopes.

Global Variables − A global variable has a global scope which means it can be defined anywhere in your JavaScript code.

Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.

### 통찰. global scope & local scope
```js
// 바깥에서 선언된 경우
const nowTime = new Date().getTime();
  const christmasTime = new Date("2021.12.25").getTime();
  const dDayTime 어쩌구 저쩌구 변수 선언...
function dDayCounting() {
clockTitle.innerText = `${dDayDay}일 ${dDayHour}시간 ${dDayMinute}분 ${dDaySecond}초`
}
// 초마다 업데이트되는 setinterval 함수 실행
function init() {
  dDayCounting();
  setInterval(dDayCounting, 1000);
}
init();
```
```js
// 함수 안에서 선언된 경우
function dDayCounting() {
  const nowTime = new Date().getTime();
  const christmasTime = new Date("2021.12.25").getTime();
  const dDayTime 어쩌구 저쩌구 변수 선언...
clockTitle.innerText = `${dDayDay}일 ${dDayHour}시간 ${dDayMinute}분 ${dDaySecond}초`
}
// 초마다 업데이트되는 setinterval 함수 실행
function init() {
  dDayCounting();
  setInterval(dDayCounting, 1000);
}
init();
```
함수 밖에서 선언되면 굳어지기 때문이 아닐까요 함수안에서 선언하게  되면 setinterval이 매초마다 계속 선언을하고 그걸 보여주는 거라고 이해하고있습니다 저는

> 아 그렇네요! 매초 함수가 실행되면서 그 안의 변수들이 업데이트 되는거군요. 그렇다면 매번 조건이나 값이 바뀌는 경우에 묶여있는 변수들은 함수 안에다가 꼭 넣어야 겠다는 결론이 나오네요.

### parameter (arguments)

Parameters are local variables that act as **placeholders for the values** that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. In short, they are the actual values.

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
testFun("it's", "reusable!");
// console : it's reusable
testFun(100, 200);
// console : 100 200
```
## 3-3. executing
### return

`return` is value of function. the output. You can use a `return` statement to send a value back out of a function.

`return` ->

```js
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5);
undefined;

plusThree(100);
// 103
answer;
// 8
```

#### Returning Boolean Values

```js
if (10 === 15) {
  true;
} else {
  false;
}
// false

function isEqual(a, b) {
  return a === b;
}
isLess(10, 15);
// false
```

#### return is an exit point.

return is an exit point.When a return statement is reached, the execution of the current function stops and control returns to the calling location.

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye");
  return "shit";
}
myFun();
// Hello
// "World"
// no more executing
```
#### ()
```js
parenthesis = function(){
  console.log("hi")
}

parenthesis() // executes when it fulfills certain condition
parenthesis // executes right now 
```
### Assignment with a Returned Value

```js
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7); // 2
```

#### applying

```js
function nextInLine(arr, item) {
  arr.push(item);
  var shifted = arr.shift();
  return shifted;
}
var myArr = [1, 2, 3, 4, 5];

nextInline(myArr, 999);
// return : 1 (shifted)
myArr; // [2,3,4,5,999]
```


# 4. Statements

## +. IF & ELSE

> ifelse is used in eeeeevery programming languages! in same structure and same concept.

### Boolean conversion

The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

A number `0`, an empty string `""`, `null`, `undefined`, and `NaN` all become `false`. Because of that they are called “falsy” values.
Other values become `true`, so they are called “truthy”.

`if`는 지정한 condition이 true일 경우에만 실행된다. false라면 `else`로 간다. 중간에 conditional을 더 넣고 싶다면, `if else`를 넣어주면 끝.

The keyword `if` tells JavaScript to execute the code in the`{ }` under certain conditions, defined in the `( )`. These conditions are known as **Boolean conditions** and they may only be `true` or `false`.

With an `else` statement, an alternate block of code can be executed after `if`.

```js
function test(myCondition) {
  if (myCondition) {
    return "It was true";
  } else {
    return "It was false";
  }
}

test(0);
// "It was false"
test(1);
// "It was true"
test(1 === 2);
// "It was false
test(true);
//// "It was true"
```

### Else If Statements

If you have multiple conditions that need to be addressed, you can chain if statements together with `else if` statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first.

```js
function bar(x) {
  if (x < 200) {
    return "Less than two";
  } else if (x < 100) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}

bar(110);
// "Less than two"
bar(10);
// "Less than two", which is not expected.
```

### Conditional operator '?'

```js
18 > 100 ? "correct" : "wrong";
// "wrong"
18 > 10 ? "correct" : "wrong";
// "correct"
```

## Switch

### meaning

If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a `break` is encountered.

`case` values are tested with strict equality (`===`). The `break` tells JavaScript to stop executing statements.

```js
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

caseInSwitch(1);
// "alpha" : return the switched answer
caseInSwitch(100);
//  "" : which is assigned at the first
```

## +. EVENT & event handlers

reference : [MDN](https://developer.mozilla.org/ko/docs/Web/Events)
: anything that happens in website such as submit, click, resizing, etc

> template 상에서 정보를 보낼 때, 특히 무언가 일어나는 일을 인식해야 할 때 필수적이다.

## +. function grammer

`handleResize()` -> call the function immediately, at the first time.
`handleResize` -> call the function by conditions, when you needed.

## +. local storage
### session storage & local storage
Storage objects are simple key-value stores, similar to objects, but they stay intact through page loads. The keys and the values are always strings

sessionStorage maintains a separate storage area for each given origin that's available for the duration of the page session (as long as the browser is open, including page reloads and restores).

localStorage does the same thing, but persists even when the browser is closed and reopened.

Ref : [localStorage in JavaScript](https://blog.logrocket.com/localstorage-javascript-complete-guide/#webstorageapi)

Ref : [web storage API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

Ref : [web storage](https://mdn.github.io/dom-examples/web-storage/)

you can save small piece of information of javascript, in you computer. URLs를 기반으로 작동.

`localStorage.setItem("fuck", true);`
`localStorage.getItem("fuck");` ->

### setItem & getItem
key 에 대한 value를 저장하고 불러온다.

## +. preventDefault

: 사용자가 event 조건을 충족시켰을 때 보통 event는 root에서 일어난다. 여기선 html속의 form에서 일어남. 그래서 default가 refresh로 되어있으므로 javascript에서 ㄹㅇ submit의 효과를 주려면 preventDefault를 사용해서 바꿔야 한다.

> event는 bubble같아서, 하나만 일어나도 웹사이트 자체가 react 한다. -니꼬

submit(form)

## +. JSON

: javascript object notation.

- it's a utility to send objects in javascript. 데이터를 전달할 때 javascipt가 그걸 다룰 수 있도록 object로 바꿔주는 기능인 셈. so with JSON, we can make objects into strings or strings int objects !

## +. filter, forEach

# Loops

:We often need to repeat actions.

For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.

Loops are a way to repeat the same code multiple times.

## while loop

:While the condition is truthy, the code from the loop body is executed.

```js
let i = 0;
while (i < 3) {
  alert(i);
  i++;
}
//// shows 0, then 1, then 2 in the alert
```

Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.

```js
let a = 10;
while (a) {
  alert(a);
  a--;
}
// 10, 9, 8, ... and 0, then variable a becomes falsy, so the while loop will stop.
let b = 8;
while (b) alert(b--); // it can be a single-line code
```

## for loop

    for (begin; condition; step)

# Front-End
## form action
[javascripttutorial](https://www.javascripttutorial.net/javascript-dom/javascript-form/)
```html
<!-- html -->
<form action="/signup" method="post" id="signup"> 
</form>
```
```pug
//- pug
form(action=routes.join, method="post")
```
The `form` element has two important attributes: action and method.

> `action` is a URL that will process the form submission.

method is the HTTP method to submit the form with. Typically, it is the `post` or `get` method. The `post` method sends data to the server as the request body while the get method appends the form data to the action URL with a `?` operator.

```js
// create form element in javascript 

function post(path, params, method='post') {

  // The rest of this code assumes you are not using a library.
  // It can be made less wordy if you use one.
  const form = document.createElement('form');
  form.method = method;
  form.action = path;

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement('input');
      hiddenField.type = 'hidden';
      hiddenField.name = key;
      hiddenField.value = params[key];

      form.appendChild(hiddenField);
    }
  }

  document.body.appendChild(form);
  form.submit();
}
```
