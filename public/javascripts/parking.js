const mainTableForm = document.querySelector(".main_table tbody");

function getCars() {
  $.get("/getCars", function(res) {
    res.forEach(Element => {
      let userCar = setCar([Element]);
      paintTable(userCar);
    });
  });
}

function paintTable(parkingCar) {
  const mainTableForm = document.querySelector(".main_table tbody");
  const tr = document.createElement("tr");
  const carInfo = parkingCar.toString().split("/");

  for (let i = 0; i < carInfo.length; i++) {
    let td = document.createElement("td");
    td.innerText = carInfo[i];
    tr.appendChild(td);
  }
  let td = document.createElement("td");
  td.innerText = getPrice(parkingCar).toString() + "원";
  tr.appendChild(td);
  mainTableForm.appendChild(tr);
}

function init() {
  getCars();
}

init();
