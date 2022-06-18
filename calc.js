num1 = parseInt(prompt("enter first number: "));
num2 = parseInt(prompt("enter second number: "));
operator = prompt("enter operator: ");

if (operator == "+") {
  console.log(num1 + num2);
} else if (operator == "-") {
  console.log(num1 - num2);
} else if (operator == "*") {
  console.log(num1 * num2);
} else if (operator == "/") {
  console.log(num1 / num2);
}
