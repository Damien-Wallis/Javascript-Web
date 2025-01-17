// Aufgabe 1

// Erstelle eine Funktion Decider. Decider erwartet 2 Argumente - eine Zahl und eine Callback-Funktion.
function Decider(number, callback) {
  console.log(number);
  // Wenn die Zahl > 100 ist, dann rufe die Callbackfunktion auf. Ansonsten nicht.
  if (number > 100) {
    callback();
  }
}

function test() {
  console.log("abc");
}

Decider(200, test);
