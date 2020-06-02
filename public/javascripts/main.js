class Car {
  constructor(parkingNum, carNum, enterTime, paymentTime) {
    this.parkingNum = parkingNum;
    this.carNum = carNum;
    this.enterTime = enterTime;
    this.paymentTime = paymentTime;
  }
  toString() {
    const myString =
      this.parkingNum +
      "/" +
      this.carNum +
      "/" +
      this.enterTime +
      "/" +
      this.paymentTime;
    return myString;
  }
}

class Payment {
  constructor(currentprice) {
    this.currentprice = currentprice;
  }
}

class Discount {
  constructor(item) {
    this.item = item;
  }
}
const PerMin = 20;
const Price = 1000;
const CARS_LS = "parkingCars";
let parkingCars = [];

const CAR_NUM_REGEX = /^[0-9]{2}[가-힣]{2}[0-9]{4}$/;
const carNuminput = document.querySelector("input");
const statusForm = document.getElementsByClassName("status");
function getPrice(parkingCar) {
  let timeNow = new Date();
  if (parkingCar.paymentTime !== null) {
    return (
      Math.floor(
        (timeNow - Date.parse(parkingCar.paymentTime)) / 1000 / 60 / PerMin
      ) * Price
    );
  } else {
    return (
      Math.floor(
        (timeNow - Date.parse(parkingCar.enterTime)) / 1000 / 60 / PerMin
      ) * Price
    );
  }
}

function setCar(res) {
  let userCar = new Car();
  userCar.parkingNum = res[0].parkingNumber;
  userCar.carNum = res[0].carNumber;
  userCar.enterTime = res[0].enteranceTime;
  userCar.paymentTime = null;
  if (res[0].paymentTime !== null) {
    userCar.paymentTime = res[0].paymentTime;
  }
  return userCar;
}
