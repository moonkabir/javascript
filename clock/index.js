var clock = document.querySelector(".result");

function setTime() {
  var d = new Date();
  clock.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}

setInterval(setTime, 1000);