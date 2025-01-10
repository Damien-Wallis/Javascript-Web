// Erstelle eine Zufallszahl zwischen 5 und 10
let random = Math.random() * 5 + 5;
let randomFloor = Math.floor(random);
console.log(random);

// Wenn der Wert 10 ist gib aus Ten
switch (randomFloor) {
  case 10:
    console.log("Ten");
    break;
  case 9:
    console.log("Nine");
    break;
  case 8:
    console.log("Eight");
    break;
  case 7:
    console.log("Seven");
    break;
  case 6:
    console.log("Six");
    break;
  case 5:
    console.log("Five");
    break;
  case 4:
    console.log("Four");
    break;
  case 3:
    console.log("Three");
    break;
  case 2:
    console.log("Two");
    break;
  case 1:
    console.log("One");
    break;
}
