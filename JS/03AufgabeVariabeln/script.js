// Erstelle eine Variable banana mit dem Wert "Banane"
let banana = "Banane";

// Erstelle eine Variable apple mit dem Wert "Apple"
let apple = "Apple";

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
let bananaPricePerKilo = "2.14";

// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let applePricePerKilo = "3.43";

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
let appleWeight = "0.34";

// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
let bananaWeight = "0.22";

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
let bananaPerKilo = 1 / bananaWeight;
console.log("1kg Bananen sind: " + bananaPerKilo + " einzelne Bananen");

let applesPerKilo = 1 / appleWeight;
console.log("1kg Äpfel sind: " + applesPerKilo + " einzelne Äpfel");

let PricePerBanana = bananaPricePerKilo / bananaPerKilo;
console.log("Der Preis pro Banane beträgt: " + PricePerBanana + "€");

let PricePerApple = applePricePerKilo / applesPerKilo;
console.log("Der Preis pro Apfel beträgt: " + PricePerApple + "€");

// Preis von 8 Äpfeln
console.log("Der Preis von 8 Äpfeln beträgt: " + PricePerApple * 8);

// Preis von 17 Bananen
console.log("Der Preis von 17 Bananen beträgt: " + PricePerBanana * 17);

// Preis von 1 Tonne Äpfel
console.log(
  "Der Preis von 1Tonne Äpfeln beträgt: " + applePricePerKilo * 1000 + "€"
);

// Preis von 1 Tonne Bananen
console.log(
  "Der Preis von 1Tonne Bananen beträgt: " + bananaPricePerKilo * 1000 + "€"
);
