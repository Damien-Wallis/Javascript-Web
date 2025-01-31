function buttonClicked() {
  console.log("Button clicked!");
  let num1 = parseFloat(document.getElementById("number1").value);
  let num2 = parseFloat(document.getElementById("number2").value);
  console.log(num1);
  console.log(num2);

  let result = num1 + num2;

  console.log(result);
}
