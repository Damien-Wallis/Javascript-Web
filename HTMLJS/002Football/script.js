loadFootballTable();

function loadFootballTable() {
  fetch("https://api.openligadb.de/getbltable/bl1/2024")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let html = "<div id = 'table'>";

      for (let i = 0; i < json.length; i++) {
        html += `<div data-teamId = "${json[i].teamInfoId}">${json[i].teamName}</div>`;
      }
      html += "</div>";
      document.getElementById("footballTable").innerHTML = html;
    });
}

document.getElementById("footballTable").addEventListener("click", (event) => {
  console.log("event", event.target);
});
