/*
 How well you understand functions in javascript, bruh?
*/

// 1. create a function called "getMyName" that returns your name. It takes no arguments.
function getMyName() {
  const name = "hey";
  return name;
}
// 2. Create a function called "add". It takes 2 numbers as arguments and returns its sum.

function add(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// 3. Create a function called "subtractWithCheck". This time:
//  - It can expect any 2 arguments
//  - It should return the difference of the 2 arguments if they are numbers
//  - If one of the arguments is not a number, it should return "Yo dawg you can't subtract us!"

function subtractWithCheck(a, b) {
  let diff = a - b;

  if (a !== Number || b !== Number) {
    console.log("Yo dawg you can't subtract us!");
  } else {
    return diff;
  }
}
// 4. now call the functions with some arguments of your choice.
// 4.1 assign results to variables.
// 4.2 print the results to the console.
const diff1 = subtractWithCheck(10, "b");
console.log(diff1);
const diff2 = subtractWithCheck(10, 2);
console.log(diff2);
// 5. Create a function called getAge. It takes a person object as an argument.
//   - It should return the person's name and age as one single string, like "John is 26".
//   - The person's shape is { id: number, bornIn: number, name: string }
// 5.1 Call the function with a person argument of your choosing.
const person = {
  id: 1,
  bornIn: 1992,
  name: "Visard",
};

function getAge(person) {
  return `${person.name} is ${2022 - person.bornIn}`;
}

// 6. Yo, this is a brain picker. Move on for now if you can't solve it ;P
// Create a function called "getGreet" that takes a boolean (you can call it `shouldCapitalise`) and:
//   - returns a function that greets the person with the given string.
//   - if `shouldCapitalise` is true, it should greet the person with a capitalised name.
// 6.1 Using this new function, say hello to yourself in uppercase, and console.log it
const shouldCapitalise = true;

function getGreet(shouldCapitalise, name) {
  if (shouldCapitalise) {
    return "hey" + "" + name.toUpperCase();
  } else {
    console.log("You are a zombie ");
  }
}
