//Ex1.10
function calculate(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "/" && num2 === 0) {
    return "Cannot divide by zero";
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    return "Invalid operator";
  }
}

//For the special case of division - we could nested if:
//.
//.
//    else if (operator === "/") {
//     if (num2 === 0) {
//         return "Cannot divide by zero";
//     } else num1 / num2;
//   }
//.
//.

console.log(calculate(5, 8, "+"));
console.log(calculate(5, 8, "-"));
console.log(calculate(10, 2, "/"));
console.log(calculate(10, 0, "/"));
console.log(calculate(0, 2, "/"));

//14

//A
function computerStatusCode(spaceSuitsOn, shuttleCabinReady) {
  if (spaceSuitsOn && shuttleCabinReady) {
    console.log("Crew Ready");
  } else {
    console.log("Crew Not Ready");
  }
}
