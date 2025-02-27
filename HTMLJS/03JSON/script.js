let data = [
  { firstname: "Damien", lastname: "Wallis", points: 86 },
  { firstname: "Ahmed", lastname: "Raschid", points: 0 },
  { firstname: "Tino", lastname: "DiBari", points: 30 },
];

function loadPeople() {
  let html = "";
  data.forEach((element) => {
    html += "<div>" + element.firstname + " " + element.lastname + "<div>";
  });

  document.getElementById("content").innerHTML = html;
}

loadPeople();
