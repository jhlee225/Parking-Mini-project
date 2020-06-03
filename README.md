# Parking-Mini-project

90Factory Mini-Project
(2020.02.24 ~ 2020.03.13)

HTML CSS JavaScript 를 막 배운 코린이 첫 풀스택 프로젝트

주차정산시스템을 소재로 웹기반 어플리케이션을 만들었습니다.

차량 입차시 차량을 DB에 저장하며 시간의 경과에 따라 가격이 형성되고

주차비를 계산했을 때 출차를 할수 있게 해주는 시스템입니다.

Refactoring to Vol 2
(2020.06.02 ~ )

리팩토링 이슈

- View 와 Public 을 제거후 프론트 단 리팩토링

- JQuery 완전 제거, Axios 모듈화하여 Ajax 사용

- Controller에 Store 개설하여 상태 관리

- Hash 방식의 SPA 화면 구축

## 개요

### 아키텍쳐

### `Frontend`

HTML / CSS / JS

### `Backend`

Node.js(Express)

### `DB`

mySQL

### 설계

### `시나리오 설계`

<img src="./Design/ParkingCalculateSystem.jpg">

### `UML 설계`

<img src="./Design/ParkingUml.jpg">

### `DB 설계`

<img src="./Design/ParkingDB.jpg">

## 개발

- HTML CSS JavaScript JQuery 를 이용하여 프론트 엔드 개발

- express-generator 를 사용하여 서버 개발 및 RESTFul API 개발

- MySQL로 데이터베이스 구축

- 제이쿼리를 사용하여 Ajax로 서버에 요청

## 상세

### `간단한 반응형 구현`

<img src="./Screenshot/Responsive.jpg">

### `Ajax 를 활용한 DB Controll 및 Server Communication`

<img src="./Screenshot/Ajax.jpg">
<img src="./Screenshot/DBcontroll.jpg">

### `간단한 DB 와 서버 구현`

<img src="./Screenshot/DB.jpg">
<img src="./Screenshot/Server.jpg">

## 설명서

### `서버 구동방법`

(node.js 설치 후)
/Parking 에서
npm start

서버 구동 후
http://localhost:5600/ 으로 접속

### `USER`

요금 : 20분에 1000원
차량번호 형식 : /00지역0000/

입차 : 현재 입차중인 차량은 입차가 불가능 합니다
(출차해야 다시 입차가능)

정산 : 주차가격이 0원인 차량은 정산완료 입니다
(정산시 확인을 누르면 바로 결제가 완료됩니다)

출차 : 0원인 차량은 정산후 출차가능으로 변경됩니다.

### `ADMIN`

Admin 입장방법 : 화면에서 "ADM" 입력 (※대문자주의)

Admin 입차 : 차량을 입차합니다.

Admin 정산 : 정산시간을 현재시간으로 설정합니다.

Admin 출차 : 정산에 상관없이 차량을 출차 시킵니다.

Admin 검색 : 차량번호의 일부 또는 전체 검색시 차량을 찾을 수 있습니다.

## 작동 화면 녹화

<iframe width="640" height="360" src="https://youtu.be/gMjhM3T_0n0" frameborder="0" gesture="media" allowfullscreen=""></iframe>
