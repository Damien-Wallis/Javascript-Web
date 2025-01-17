//Aufgabe 2

// Die Funktion orderPizza nimmt den Namen der Pizza und einen Callback entgegen.
// Sie simuliert das Bestellen der Pizza.
// Wenn die Pizza fertig ist wird der Callback aufgerufen
function orderPizza(name, callback) {
  console.log("Pizza " + name);
  callback();
}

// Dem Callback wird ein zufälliger Preis mitgegeben.
function price() {
  let random = Math.random() * 5 + 7;
  let randomFloor = Math.floor(random);
  console.log("price: " + randomFloor);
}

orderPizza("Funghi", price);
