// var days = 28
// switch (days){
//     case 28:
//         months = "February";
//     case 30:
//         months = "September, April, June, November";
//     case 31:
//         months = "January, May, July, August, October, December";
// }
// console.log("There are "+ days+ "days in " +months+ ".")
// var tier = "nsfw deck";
// var output = "You’ll receive "

// switch (tier) {
//   case "deck of legends":
//     output += "a custom card, ";
//   case "collector's deck":
//     output += "a signed version of the Exploding Kittens deck, ";
//   case "nsfw deck":
//     output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
//   default:
//     output += "one copy of the Exploding Kittens card game.";
// }

// console.log(output);

// var isGoing = false;
// var decision = isGoing? "ferrari":"lamboghini"
// console.log("I\'m going out today with my " + decision + ".")

// your code goes here
// var education = "a Doctoral degree"
// switch (education) {
//     case "no high school diploma":
//         salary = "25,636";
//         break;
//     case "a high school diploma":
//         salary = "35,256";
//         break;
//     case "an Associate's degree":
//         salary = "41,496";
//         break;
//     case "a Bachelor's degree":
//         salary = "59,124";
//         break;
//     case "a Master's degree":
//         salary = "69,732";
//         break;
//     case "a Professional degree":
//         salary = "89,960";
//         break;
//     case "a Doctoral degree":
//         salary = "84,396";
//         break;
// }
// console.log("In 2015, a person with "+education+" earned an average of $"+salary.toLocaleString("en-US")+"/year.");
// var x = 1;
// while (x <= 10000){
//     console.log (x + " mississippi!!");
//     x += 100;
// }

// while (true) {
//     console.log("true is never false, so I will never stop!");
// }
// var x = 0;

// while (x < 1) {
//   console.log('Oops! x is never incremented from 0, so it will ALWAYS be less than 1');
// }


// var x = 1;

// // while loop with a stop condition
// while (x <= 100) {
//     if (x % 3 === 0 && x % 5 === 0) {
//         console.log("JuliaJames");
//     }else if (x % 5 === 0) {
//         console.log("James");
//     }else if (x % 3 === 0) {
//         console.log("Julia");
//     }
//     else {
//         console.log(x);
//     }
//     // increment x at the end of each loop
//     x = x + 1 ; 
// }

// var num = 100
// while (num >=1){
//     if (num === 1){   //taking care of plurals
//         console.log(num);
//         console.log(num + " bottle of juice on the wall! " + num +" bottle of juice! Take one down, pass it around... "+ (num - 1) + " bottles of juice left on the wall!");
//     }else if (num === 2){ //plurals
//         console.log(num);
//         console.log(num + " bottles of juice on the wall! " + num +" bottles of juice! Take one down, pass it around... "+ (num - 1) + " bottle of juice left on the wall!");
//     }else{  // all others
//         console.log(num)
//         console.log(num + " bottles of juice on the wall! " + num +" bottles of juice! Take one down, pass it around... "+ (num - 1) + " bottles of juice left on the wall!");
//     }
//     num -=1
// }

//  Different kinds of loops
// const arr = [1,2,3,4,5];

// for i in range(0, len(arr), 1)
// for(let i = 0; i < arr.length; ++i) {
//   console.log(arr[i] ** arr[i]);
// }
// for num in arr (for-each loop)
// for(let num of arr) console.log(num ** num);  // without curly braces since it's single line.
// for(let num of arr){
//      console.log(num ** num); 
// }
// arr.forEach((num) => console.log(num ** num));
  
//   let i = 0;
//   while (i < arr.length) {
//     console.log(arr[i] ** arr[i]);
//     i++;
//   }


// for(let x = 10; x >= 1; --x){
//     console.log("hello " + x);
// }
// FINDING FACTORIAL OF A NUMBER
// var solution = 1;
// for (var x = 12; x >= 1; x--){   // or for(varx = 1; x <=12; x++)
//     solution = solution * x;
// }
// console.log(solution)


// var opinion = "This nanodegree is amazing";

// function showMessage(){
//     var message = "I am a Nigerian";
//     {
//         // let greet = "How are you?";
//     }
//     console.log(message);
//     // console.log(greet);
//     console.log(opinion);
// }
// showMessage()

// //Theatre seats and rows example for nested loop


// var row = 0;  // initial value of the row
// var seat = 0; // initial value of the seat within a row
// // One loop inside another is called Nested loop.
// // Outer `for` loop, to iterate over the rows
// for (let row = 0; row <= 25; row++){
//     // Inner `for` loop, to iterate over the seats within a row
//     // In this loop, the value of `row` variable would change only after 100 iterations
//     {for (let seats = 0; seats <= 99; seats++)
//     console.log(row + "-" + seats )
// }
// }


// function reverse_String(reverseMe){
//     var reversed = "";
//     for (var i = reverseMe.length - 1; i >= 0 ;i--){
//         reversed += reverseMe[i];
//         console.log(reverseMe[i])
//     }
//     return reversed;
// }
// console.log(reverse_String("Samson"));
// console.log("Hi my name has been reversed by this function: " + reverse_String("Samson"))


// accepts no parameters! parentheses are empty
// function sayHello() {
//     var message = "Hello!"
//     console.log(message); //prints
//     return message;  // return
// }

// // function returns "Hello!" and console.log prints the return value
// console.log(sayHello());
// sayHello()


// function findAverage(x, y) {
//     var answer = (x + y) / 2;
//     return answer;
//   }
  
// var avg = findAverage(5, 9);
// console.log(avg)


// // x and y are parameters in this function declaration
// function add(x, y) {
//     // function body
//     // Here, `sum` variable has a scope within the function. 
//     // Such variables defined within a function are called Local variables
//     // You can try giving it another name
//     var sum = x + y;
//     return sum; // return statement
//   }
  
//   // 1 and 2 are passed into the function as arguments, 
//   // and the result returned by the function is stored in a new variable `sum`
//   // Here, `sum` is another variable, different from the one used inside the function
//   var sum = add(1, 2);
//   console.log(sum)


  
// // function definition
// function laugh() {
//     // Take a variable with any name of your choice
//     var sound = "hahahahahahahahahaha!"
//     return sound;
// }


// // function calling
// // Don't forget to put a pair of `( )` along with the function name, while calling
// console.log(laugh());


// var sound = "" ; 
// function laugh(num) {
//     for (var x = 0 ; x < num ; x++) {
//         sound = sound + "ha" ;  
//     }
//     sound = sound +"!"; 
//     return sound; 
// }

// console.log(laugh(3)) ;


// function isPrime(int){
//     for (var x = 2; x < int ; x++){
//     if (int % x === 0){
//         console.log(int + " is not a prime number, and is divisible by "+ x);
//         return false;
//     }
//     }
//     return true;
//     }
// console.log(isPrime(49));


// // returns the sum of two numbers
// function add(x, y) {
//   return x + y;
// }


// // returns the value of a number divided by 2
// function divideByTwo(num) {
//   return num / 2;
// }


// var sum = add(5, 7); // call the "add" function and store the returned value in the "sum" variable
// console.log(sum)
// var average = divideByTwo(sum); // call the "divideByTwo" function and store the returned value in the "average" variable
// console.log(average)

// var x = 1;

// function addTwo() {
//  var x = x + 2;
//   console.log(x);
// }

// addTwo();
// x = x + 1;
// console.log(x);

// hoisting
// console.log(findAverage(5, 9));

// function findAverage(x, y){
//   var answer = (x * y) / 2 ;
//   return answer;
// }


// function sayGreeting(){
//   console.log(greetting);
//   var greetting = "hello";
// }

// sayGreeting();


// sayHi("Julia");

// function sayHi(name) {
//   console.log(greeting + " " + name);
//   var greeting;
// }


// function makeLine(length) {
//   var line = "";
//   for (var j = 1; j <= length; j++) {
//     line += "* "
//   }
//   return line + "\n";
// }
// function buildTriangle(length) {
//     // Let's build a huge string equivalent to the triangle
//     var triangle = "";

//     //Let's start from the topmost line
//     var lineNumber = 1;

//     for(lineNumber=1; lineNumber<=length; lineNumber++){
//         // We will not print one line at a time.
//         // Rather, we will make a huge string that will comprise the whole triangle
//         triangle = triangle + makeLine(lineNumber);
//     }
//     return triangle;
// }



// test your code by uncommenting the following line
// Note that the function buildTriangle() must return a string 
// because the console.log() accepts a string argument
// console.log(buildTriangle(10));


// var catSays = function(max) {
//   var catMessage = "";
//   for (var i = 0; i < max; i++) {
//     catMessage += "meow ";
//   }
//   return catMessage;
// }
// console.log(catSays(10));


// function longest(arr)
//   {
//     var max_str = arr[0].length;
//     var ans = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//         var maxi = arr[i].length;
//         if (maxi > max_str) {
//             ans = arr[i];
//             max_str = maxi;
//         }
//     }
//     return ans;
// }
// console.log(longest(["longest","van", "shebangpocolee","boy"]))


//// function expression catSays
// var catSays = function(max) {
//     var catMessage = "";
//     for (var i = 0; i < max; i++) {
//       catMessage += "meow ";
//     }
//     return catMessage;
//   };
  
//   // function declaration helloCat accepting a callback
//   function helloCat(callbackFunc) {
//     return "Hello " + callbackFunc(10);
//   }
  
//   // pass in catSays as a callback function
//   console.log(helloCat(catSays));


// var cry = function myFunction(){
//   var sound = "boohoo!";
//   return sound;
//   };

// // Call the function using the variable name, not the function name
// console.log(cry());

// // This statement is also acceptable, but it won't print anything on your console
// // cry();

// Function expression that assigns the function displayFavorite 
// // to the variable favoriteMovie
// var favoriteMovie = function displayFavorite(movieName) {
//   console.log("My favorite movie is " + movieName);
// };

// // Function declaration that has two parameters: a function for displaying
// // a message, along with a name of a movie
// function movies(messageFunction, name) {
//   messageFunction(name);
  
// }

// // Call the movies function, pass in the favoriteMovie function and name of movie
// console.log(movies(favoriteMovie, "Finding Nemo"));


// // function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
// function movies(messageFunction, name) {
//   messageFunction(name);
// }

// // call the movies function, pass in the function and name of movie
// movies(function displayFavorite(movieName) {
//   console.log("My favorite movie is " + movieName);
// }, "Finding Nemo");




// // Declare an empty string
// var sound = "" ; 

// // An anonymous function expression stored in the variable `laugh`
// var laugh = function(num) {

//     //Iterate
//     for (var x = 0 ; x < num ; x++) {
//         sound = sound + "ha" ;  
//     }
//     sound = sound +"!"; 
//     return sound; 
// }

// // It is essential that the function must return a string
// console.log(laugh(3)) ;



// emotions() function definition
// function emotions(myFunc, myString) {
//   console.log("I am " + myString + ", " + myFunc(1));
// }

// // Call the emotions() function with two arguments
// // Argument 1 - "happy" string
// // Argument 2 - an inline function expression
// emotions (function(num) {
//   var sound = ""; // Local variable
//   //Iterate
//   for (var i = 0 ; i < num ; i++) {
//       sound = sound + "ha" ;  
//   }
//   sound = sound +"!"; 
//   return sound; 
// }, "happy");



// // You can create an arrray in different ways
// // Method 1
// var udaciFamily = new Array("Julia", "James", "Yourname"); 
// console.log(udaciFamily)

// // Method 2
// var udaciFamily = ["Julia", "James", "Yourname"]; 
// console.log(udaciFamily)

// var udaciFamily = [];
// udaciFamily[0] = "Julia";
// udaciFamily[1] = "James";
// udaciFamily[2]= "Samson Olowoyo"
// console.log(udaciFamily)


// // Iterate over the array elements
// // We can find the size of an array using its `length` property
// // Remember that the indexing of elements in an array starts from 0
// for (var index = 0; index<udaciFamily.length; index++){
//   console.log(udaciFamily[index]);
// }

// // 'fruits' array created using String.prototype.split().
// const fruits = 'Apple, Banana'.split(', ');
// console.log(fruits.length);

// var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];



// my way
// prices[1]=4.50000;
// prices[3]=5.055555;
// prices[7]=6.0555555;
// // your code goes here
// console.log(prices)


// for (var index = 0; index<prices.length; index++){
//   //change the value of first element
//   if(index===0){
//       prices[index]=11;
//   }
//   //change the value of third element
//   else if(index===2){
//       prices[index]=33;
//   }
//   //change the value of seventh element
//   else if(index===6){
//       prices[index]=77;
//   }
// }
// console.log(prices);
// console.log(prices.length)

// let x = "jacobeelee"
// console.log(x.length);
// console.log(typeof(x));
// console.log(typeof(prices));
// prices.push(500)
// console.log(prices)


// var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled"];
// // donuts.push("cruzzler gozilla")
// // console.log(donuts)
// // donuts.pop();
// // console.log(donuts)
// // donuts.pop("glazed"); // won't work, still removes last element.
// // console.log(donuts)
// // donuts.splice(1,1, "racist bono", "pig donut");
// // console.log(donuts);
// // donuts.splice(0, 2,"foolish police");
// // console.log(donuts);
// // donuts.splice(-2, 0, "eat and die", "fuck off");
// // console.log(donuts);
// donuts.splice(1, 3, "eat and die", "fuck off");
// console.log(donuts);

// const fruits = ['Apple', 'Banana'];
// const fruitsString = fruits.join(', ');
// console.log(fruitsString);
// // "Apple, Banana"
// console.log(fruits.indexOf('Banana'));
// // 1
// console.log(fruits.includes('Banana')); // true
// console.log(fruits.includes('Cherry')); // false

// // If indexOf() doesn't return -1, the array contains the given item.
// fruits.indexOf('Banana') !== -1; // true
// fruits.indexOf('Cherry') !== -1; // false

// const fruits = ['Apple', 'Banana', 'Strawberry', 'Mango', 'Cherry'];
// const start = -3;
// const removedItems = fruits.splice(start);
// console.log(fruits);
// // ["Apple", "Banana"]
// console.log(removedItems);
// // ["Strawberry", "Mango", "Cherry"]


// var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

// function hasEnoughPlayers(arrayInstance) {
//     if (arrayInstance.length >= 7)
//         return true; // true is a boolean value. Do not return a string "true"
//     else 
//         return false; // false is also a boolean value. Do not return a string "false"
// }
// console.log(hasEnoughPlayers(team));

// var captain = "Mal";
// var second = "Zoe";
// var pilot = "Wash";
// var companion = "Inara";
// var mercenary = "Jayne";
// var mechanic = "Kaylee";
// // adding the variable name, adds the value to the array
// var crew = [captain, second, pilot, companion, mercenary, mechanic];
// console.log(crew);
// console.log(crew.reverse());
// console.log(crew.sort());
// // var doctor = "Simon";
// // var sister = "River";
// // var shepherd = "Book";

// // your code goes here
// crew.push(doctor, sister, shepherd);
// console.log(crew);


// // for loops

// var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// // the variable `i` is used to step through each element in the array
// for (var i = 0; i < donuts.length; i++) {
//     donuts[i] += " hole";
//     donuts[i] = donuts[i].toUpperCase();
// }
// console.log(donuts);


////For each loop
// var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
// function printDonuts(donut){
//   donut += " hole";
//   donut = donut.toUpperCase();
//   console.log(donut);
// }
// donuts.forEach(printDonuts);

// //can be changed to a inline function expression by

// var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// donuts.forEach(function (donut) {
//    donut += " hole";
//    donut = donut.toUpperCase();
//    console.log(donut);
// });


// words = ["cat", "in", "hat"];
// words.forEach(function(word, num, all) {
//   console.log("Word " + num + " in " + all.toString() + " is " + word);
// });


// Write your code here
var test = [12, 929, 11, 3, 29, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

// test.forEach(function(item, index, array){
//     if(item%3===0){
//         // The commented statements below would not be able to change the value of item
//         // because the `item` is a COPY of actual element, while actual is test[index]
//         // item = item + 100;
//         // console.log("The updated element is "+item+" and actual is "+test[index]);
//         test[index]=test[index]+100;
//     console.log("Array: " + array);
//     }
//     else {
//        console.log("Element "+item+" is not divisible by 3");
//     }
//     });
// console.log(test);

// test.forEach(function myAwesomeFunction(element, index, array) { //or remove test.forEach( here
//     console.log("Element: " + element);
//     console.log("Index: " + index);
//     console.log("Array: " + array);
// });  // remove ) here and add test.forEach(myAwesomeFunction) to make it function declaration style.

// console.log(test)

// var myArray = [1, 2, 3, 4, 5];
// for (var i= 0; i <= myArray.length; i+= 2){
//     console.log(myArray[i]);
//     if (i === 2){
//         break
//     }
// }


var myArray = [1, 2, 3, 4, 5];
var newArray = myArray.map(function(element){
    element += 100;
    return element;
});
console.log(myArray);
console.log(newArray);


var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
var totals = bills.map(function (element){
    element *= 1.15;
    element = element.toFixed(2);
    element = Number(element);
    return element;
});
console.log(bills);
console.log(totals);