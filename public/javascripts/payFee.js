document.querySelector(".submit").addEventListener("click", function() {
  var inputdata = carNuminput.value;
  if (CAR_NUM_REGEX.test(inputdata) === true) {
    $.post("/check", { title: inputdata }, function(res) {
      if (res === "0") {
        alert("존재하지 않는 차량입니다!");
      } else {
        if (getPrice(setCar(res)) === 0) {
          alert("정산이 완료된 차량입니다!");
        } else {
          if (
            confirm(
              `${inputdata}/ ${getPrice(setCar(res))}원을 정산하시겠습니까?`
            ) === true
          ) {
            $.post("/payFee", { title: inputdata }, function(ress) {
              alert(`${inputdata}/${getPrice(setCar(res))}원 정산 완료!`);
            });
          } else {
            alert(`정산을 취소하였습니다`);
          }
        }
      }
    });
  } else {
    alert("차량 번호의 형식이 옳지 않습니다!");
  }
});
