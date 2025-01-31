let num1 = parseFloat(document.getElementById("number1").value);
let num2 = parseFloat(document.getElementById("number2").value);
function sum() {
  let result = num1 + num2;
  console.log("Summe von " + num1 + " und " + num2 + ": " + result);
}

function difference() {
  let result = num1 - num2;
  console.log("Differenz von " + num1 + " und " + num2 + ": " + result);
}

function product() {
  let result = num1 * num2;
  console.log("Produkt von " + num1 + " und " + num2 + ": " + result);
}
