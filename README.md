# Parking-Mini-project

90Factory Mini-Project
(2020.02.24 ~ 2020.03.13)

# 개요

<h3>Frontend : HTML / CSS / JS</h3>
<h3>Backend : Node.js(Express)</h3>

# 설계

<h4> 시나리오 설계 </h4>
<img src="./Design/ParkingCalculateSystem.jpg">
<h4> UML 설계 </h4>
<img src="./Design/ParkingUml.jpg">
<h4> DB 설계 </h4>
<img src="./Design/ParkingDB.jpg">

# Details

<h4> 간단한 반응형 구현 </h4>
<img src="./Screenshot/Responsive.jpg">

<h4> Ajax 를 활용한 DB Controll 및 Server Communication</h4>
<img src="./Screenshot/Ajax.jpg">
<img src="./Screenshot/DBcontroll.jpg">

<h4> 간단한 DB 와 서버 구현<h4>
<img src="./Screenshot/DB.jpg">
<img src="./Screenshot/Server.jpg">

# 설명서

서버 구동방법 : (node.js 설치 후)
/Parking 에서
npm start

서버 구동 후
http://localhost:5600/ 으로 접속

요금 : 20분에 1000원
차량번호 형식 : /00지역0000/

입차 : 현재 입차중인 차량은 입차가 불가능 합니다
(출차해야 다시 입차가능)

정산 : 주차가격이 0원인 차량은 정산완료 입니다
(정산시 확인을 누르면 바로 결제가 완료됩니다)

출차 : 0원인 차량은 정산후 출차가능으로 변경됩니다.

Admin 입장방법 : 화면에서 "ADM" 입력 (※대문자주의)
Admin 입차 : 차량을 입차합니다.
Admin 정산 : 정산시간을 현재시간으로 설정합니다.
Admin 출차 : 정산에 상관없이 차량을 출차 시킵니다.
Admin 검색 : 차량번호의 일부 또는 전체 검색시 차량을 찾을 수 있습니다.
