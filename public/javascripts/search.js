document.querySelector(".submit").addEventListener("click", function() {
  var inputdata = carNuminput.value;

  $.post("/check", { title: inputdata }, function(res) {
    $.post("/search", { title: inputdata }, function(res) {
      clearTable();
      if (res.length === 0) {
        alert("검색결과가 없습니다!");
      }
      res.forEach(Element => {
        let userCar = setCar([Element]);
        paintTable(userCar);
      });
    });
  });
});

function clearTable() {
  const mainTableForm = document.querySelector(".main_table tbody");
  while (1) {
    let tr = document.querySelector("tr");
    if (tr === null) {
      break;
    }
    mainTableForm.removeChild(tr);
  }
  const tr = document.createElement("tr");
  const tda = document.createElement("td");
  const tdb = document.createElement("td");
  const tdc = document.createElement("td");
  const tdd = document.createElement("td");
  const tde = document.createElement("td");

  tda.innerText = "P/N";
  tdb.innerText = "차량번호";
  tdc.innerText = "입차시간";
  tdd.innerText = "결제시간";
  tde.innerText = "가격";

  tr.appendChild(tda);
  tr.appendChild(tdb);
  tr.appendChild(tdc);
  tr.appendChild(tdd);
  tr.appendChild(tde);

  mainTableForm.appendChild(tr);
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
