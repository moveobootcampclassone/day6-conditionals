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

function describeColor(color) {
  switch (color) {
  }
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
