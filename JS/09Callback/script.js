function greet(name, callback) {
  console.log("Hallo " + name);
  callback(); // Aufruf der Callback-Funktion
}

function sayGoodbye() {
  console.log("Auf Wiedersehen!");
}

// Übergabe von 'sayGoodbye' als Callback
greet("Damien", sayGoodbye);
