const AdminForm = document.querySelector(".Admin");
let gets = [];
window.onkeypress = function() {
  gets.push(event.keyCode);
  if (gets[0] === 65) {
    if (gets[1] === 68) {
      if (gets[2] === 77) {
        AdminForm.style.setProperty("visibility", "visible");
      }
    }
  } else {
    gets.shift();
  }

  if (gets.length > 3) {
    gets.shift();
    gets.shift();
  }
};
