if (true) {
  //do the code inside
}

if (false) {
  // don't do the code inside
}

// (3 == "3") -> true (value matches)
// (3 === "3") -> false (type don't match so it's false)
function test1() {
  if (3 == "3") {
    console.log("Yay!");
  }
  if (3 === "3") {
    console.log("Yay!");
  }
}

test1();

let userName; //userName is undefined

if (userName && 5 === 5) {
  // (false && true) -> false
  console.log("this is true");
  console.log("hello " + userName);
}

let expanse = 0;

// (expanse = 0 so it's falsy )
if (expanse) {
  console.log("You spent money!!!");
}

let rating = 3;

if (rating === 3) {
  console.log("The rating is 3");
}

// ! means not (!== is not equal)
if (rating !== 3) {
  console.log("The rating is not 3");
} else {
  console.log("The rating is 3");
}

// using else if and else
function getColor(sign) {
  if (sign === "stop" || sign === "flower") {
    console.log("red");
  } else if (sign === "slow") {
    console.log("yellow");
  } else if (sign === "go") {
    console.log("green");
  } else console.log("purple");
}

getColor("stop1"); // will print "purple"
getColor("flower"); // will print "red"
getColor("go"); // will print "green"

//Switch case
//check if number is 2 or 3 or 5 and console.log the result
function test2(num) {
  let secondNum = num * 2 + 8;
  switch (secondNum) {
    // similar to if (num === 2 => do something)
    case 2:
      console.log("The number is 2!");
    // break;
    // We cause this key word to make sure it don't check
    // the rest cases (exits the switch case)
    // return;
    // we can use "return" if we want to exit the function
    case 3:
      console.log("The number is 3!");
    // return;
    case 5:
      console.log("The number is 5!");
    // return;
    default:
      console.log("The number is none of them");
      break;
  }
  console.log("I wonder that number it is");
  // return;
}

// if (5 === 5) {
//   console.log("hey");
// } else if (5 === 5) {
//   console.log("hey2");
// }

test2(6);

// We can use combine cases
// switch (num) {
//   case 2:
//   case 3:
//     console.log("the number is 2 or 3");
//     break;
//   case 5:
//     console.log("the number is 5");
//     break;
// }

// let num = 20;
// let text;
// if (num > 18) {
//   text = "Yes";
// } else if (num == 18) text = "Wow";
// else "Too young";

//Ternery condition
const text1 = num > 18 ? "Yes" : "Too Young";
const text2 = num > 18 ? "Yes" : num === 18 ? "WoW!" : "Too young";
// const el = num > 18 ? <div>Hello Old Person!</div> : <p>Youngggg</p>;

function askAge() {
  let age = prompt("Please enter your age"); // result of prompt is always a string
  let ageToCheck = parseInt(age);
  console.log(ageToCheck, "ageToCheck");
  if (isNaN(ageToCheck)) {
    return alert("you tricked me!");
  }
  let textToDisplay =
    ageToCheck > 18 ? "Yes" : ageToCheck === 18 ? "WoW!" : "Too young";
  document.write(textToDisplay);
  return;
}
