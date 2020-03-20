document.querySelector(".submit").addEventListener("click", function() {
  var inputdata = carNuminput.value;
  if (CAR_NUM_REGEX.test(inputdata) === true) {
    $.post("/check", { title: inputdata }, function(res) {
      if (res === "0") {
        $.post("/enterCar", { title: inputdata }, function(res) {
          alert(inputdata + "입차 완료!");
        });
      } else {
        alert("이미 존재하는 차량입니다!");
      }
    });
  } else {
    alert("차량 번호의 형식이 옳지 않습니다!");
  }
});
