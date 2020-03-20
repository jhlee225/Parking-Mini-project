document.querySelector(".submit").addEventListener("click", function() {
  var inputdata = carNuminput.value;

  if (CAR_NUM_REGEX.test(inputdata) === true) {
    $.post("/check", { title: inputdata }, function(res) {
      if (res === "0") {
        alert("존재하지 않는 차량입니다!");
      } else {
        $.post("/exitCar", { title: inputdata }, function(res) {
          alert(inputdata + "출차 완료!");
        });
      }
    });
  } else {
    alert("차량 번호의 형식이 옳지 않습니다!");
  }
});
