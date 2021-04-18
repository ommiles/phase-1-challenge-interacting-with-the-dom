// CODE FROM FLATIRON SCHOOL

/* Fun facts about the JavaScript identifier used to prefix the _toConsumableArray function: The dollar sign ($) and the underscore (_) characters are JavaScript identifiers, which just means that they identify an object in the same way a name would. The objects they identify include things such as variables, functions, properties, events, and objects. https://www.thoughtco.com/and-in-javascript-2037515 */

/* The .isArray() method was introduced in ES5 and determines whether the passed value is an array (since it's typeof is technically an object).  We also use the Array constructor to coerce variable a into an array.  a is a parameter that stores either the HTML button els when the pause button is clicked, or stores an array of our li items related to the heart button el; all depending on the event that is eventually invoking _toConsumableArray.  They go through an incrementing for loop.  b and c are declared before the loop begins, as long as b is less than the lenght of a, we will increment the counter variable (a).  c is returned as our ul el for our heart function later on. */

function _toConsumableArray(a) {
    if (Array.isArray(a)) {
        for (var b = 0, c = Array(a.length); b < a.length; b++)
        c[b] = a[b];
        return c
    }
    return Array.from(a)
}

/* playing is a variable that toggles a value true or false.  This means our value is coerced from a number to boolean. timer is an anonymous function that runs a setInterval function.  The setInterval function grabs our h1 element with an id of counter and stores it in a variable named a.  We take the inner text of the h1 counter el and parse it into an integer.  The setInterval function increments is repeated every 1000 millisecconds (written as 1e3). */

// ! In JavaScript, we can shorten a number by appending the letter "e" to it and specifying the zeroes count.  In other words, e multiplies the number by 1 with the given zeroes count. 1e3 equals 1000. :)  E() is an inbuilt function in JavaScript which is used to get the value of ep, where p is any given number. The number e is a mathematical constant having an approximate value equal to 2.718. https://www.geeksforgeeks.org/javascript-math-e-function/#:~:text=E()%20is%20an%20inbuilt,approximate%20value%20equal%20to%202.718 !

// let playing = !0
// let timer = () => {
//     return setInterval(function() {
//         let a = document.getElementById("counter")
//         let b = parseInt(a.innerText)
//         a.innerText = b + 1
//     }, 1e3)
// }

/* We grab multiple elemnts from the DOM, including each of our 4 buttons and also our first form el. Our interval variable stores the falue of the timer function in it, which is 1, as set by the timer function.  The code below is another (maybe less efficient way) to do this:

let interval = timer()
let minus = document.getElementById("minus")
let plus = document.getElementById("plus")
let heart = document.getElementById("heart")
let pause = document.getElementById("pause")
let commentForm = document.getElementsByTagName("form")[0]

*/

var playing = !0
, timer = function() {
    return setInterval(function() {
        var a = document.getElementById("counter")
        , b = parseInt(a.innerText);
        a.innerText = b + 1
    }, 1e3)
}
, interval = timer()
, minus = document.getElementById("minus")
, plus = document.getElementById("plus")
, heart = document.getElementById("heart")
, pause = document.getElementById("pause")
, commentForm = document.getElementsByTagName("form")[0];

/* The minus event listener listens for a click and when the event occurs, the current count that is in the h1 counter is grabbed and stored in a variable named a.  Then that number is then parsed into an integer, subtracted by one, and stored as the new h1 counter integer. */

minus.addEventListener("click", function() {
    var a = document.getElementById("counter")
    , b = parseInt(a.innerText);
    a.innerText = b - 1
}),

/* The plus event listener listens for a click and when the event occurs, the current count that is in the h1 counter is grabbed and stored in a variable named a.  Then that number is then parsed into an integer, added by one, and stored as the new h1 counter integer. */

plus.addEventListener("click", function() {
    var a = document.getElementById("counter")
    , b = parseInt(a.innerText);
    a.innerText = b + 1
}),

/* The heart event listener grabs our same h1 counter el, stores it in variable a, and parses it's innerText string into an integer.  We then grab the ul el and set that to variable c.  Lastly, we set a void operator to variable d.  "void discards the return value from the function and explicitly returns undefined." https://stackoverflow.com/questions/666936/what-is-the-point-of-void-operator-in-javascript */

/* With an if statement, we create an empty array, pass the ul el's children to the toConsumableArray function, and concatenate the each li child to a new array.  Then, the map method creates a new array that parses those li children into integers, uses a dataset property to create a data-num attribute on each li el that is equivalent to the inner text of our h1 counter el. */

/* If any of the items from the newly mapped array include the value of b (the current innertext of our h1 counter el), we grab the li by data-num value, equivalent to the innerText integer that was just rendered at the time of the click event.  That li is stored in variable d.  Variable e is equivalent to that li el's first child's inner text (all the same number!). Lastly, the innerHTML of our li el is set in a string and will display the incrementing number of likes for a specific number during the 1 second interval.  If any of the items in the newly mapped array don't include the value of b, we create a string of text for the single like and append that li el to our ul(c). */

heart.addEventListener("click", function() {
    var a = document.getElementById("counter")
    , b = parseInt(a.innerText)
    , c = document.querySelector(".likes")
    , d = void 0;
    if ([].concat(_toConsumableArray(c.children)).map(function(a) {
        return parseInt(a.dataset.num)
    }).includes(b)) {
        d = document.querySelector('[data-num="' + b + '"]');
        var e = parseInt(d.children[0].innerText);
        d.innerHTML = b + " has been liked <span>" + (e + 1) + "</span> times"
    } else
        (d = document.createElement("li")).setAttribute("data-num", b),
        d.innerHTML = b + " has been liked <span>1</span> time",
        c.appendChild(d)
}),

/* We fire an anonymous function to handle our pause button click event.  The next few things happen by way of a ternary operator:
We use our playing variable from above and if true, clear our interval using the clearInterval method and also change the button text to resume. "The ID value returned by setInterval() is used as the parameter for the clearInterval() method." https://www.w3schools.com/jsref/met_win_clearinterval.asp  If our playing variable if false, we toggle our timer function "back on" and return the innerText for our event target button to pause.  We create an array, concatenating our button elements, and pass them through a for each loop.  For each of our list els, we toggle a disabled attribute on pause and set the id to pause. */

pause.addEventListener("click", function() {
    playing ? (playing = !1,
    clearInterval(interval),
    this.innerText = "resume") : (playing = !0,
    interval = timer(),
    this.innerText = "pause"),
    [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a) {
        "pause" !== a.id && (a.disabled = !playing)
    })
}),

/* Our submit event on commentForm fires a function that prevents the default submit action of refreshing our page.  It also renders the form input value to the DOM by using the this method to grab the first child of our html form element.  b.value="" is a method to clear the input area of the recently entered text.  We render the comment to the DOM by appending the comment as a paragraph to a div.  */

commentForm.addEventListener("submit", function(a) {
    a.preventDefault();
    var b = this.children[0]
    , c = b.value;
    b.value = "";
    var d = document.querySelector(".comments")
    , e = document.createElement("p");
    e.innerText = c,
    d.appendChild(e)
});

