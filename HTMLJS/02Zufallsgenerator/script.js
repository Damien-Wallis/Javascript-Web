function generateRandomNumber() {
  let minimum = document.getElementById("minimum").value;
  let maximum = document.getElementById("maximum").value;

  let amountOfRandomNumber = parseInt(maximum) - parseInt(minimum);
  let randomNumber = Math.floor(Math.random() * amountOfRandomNumber) + parseInt(minimum);
  document.getElementById("result").innerHTML = randomNumber;
  console.log(randomNumber);
}
