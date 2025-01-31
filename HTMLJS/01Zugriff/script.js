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

function quotient() {
  if (num2 != 0) {
    let result = num1 / num2;
    console.log("Quotient von " + num1 + " und " + num2 + ": " + result);
  } else {
    console.log("Division durch 0 ist nicht möglich.");
  }
}
