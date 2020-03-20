document.querySelector(".enter").addEventListener("click", function() {
  var inputdata = carNuminput.value;
  if (CAR_NUM_REGEX.test(inputdata) === true) {
    $.post("/check", { title: inputdata }, function(res) {
      if (res === "0") {
        $.post("/enterCar", { title: inputdata }, function(res) {
          alert(inputdata + "입차 완료!");
          carNuminput.value = "";
          statusForm[0].innerText = "입력된 값이 없습니다";
        });
      } else {
        alert("이미 존재하는 차량입니다!");
      }
    });
  } else {
    alert("차량 번호의 형식이 옳지 않습니다!");
  }
});

$("input").on("change keyup paste", function() {
  var inputdata = carNuminput.value;
  if (CAR_NUM_REGEX.test(inputdata) === true) {
    $.post("/check", { title: inputdata }, function(res) {
      if (res === "0") {
        statusForm[0].innerText = "입차 가능한 차량입니다";
      } else {
        statusForm[0].innerText = "이미 존재하는 차량입니다";
      }
    });
  } else {
    statusForm[0].innerText = "차량 번호의 형식이 옳지 않습니다";
  }
  if (inputdata === "") {
    statusForm[0].innerText = "입력된 값이 없습니다";
  }
});
