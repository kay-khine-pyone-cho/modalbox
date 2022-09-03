var getmodal = document.getElementById("signupmodal");
var getbtnsignup = document.getElementById("btn-signup");
var getbtnfullscreen = document.getElementById("btn-fullscreen");
var getbtnclosescreen = document.getElementById("btn-closescreen");
var getbtnclose = document.querySelector(".btn-close");

getbtnsignup.addEventListener("click", function () {
  getmodal.style.display = "block";
});
getbtnclose.addEventListener("click", function () {
  getmodal.style.display = "none";
});
window.onclick = function (e) {
  //   console.log(e.target);
  if (e.target === getmodal) {
    getmodal.style.display = "none";
  }
};
var getde = document.documentElement;
console.log(getde);
getbtnfullscreen.addEventListener("click", function () {
  //   getde.requestFullscreen();
  if (getde.requestFullscreen) {
    getde.requestFullscreen();
  } else if (getde.msRequestFullScreen) {
    getde.msRequestFullScreen();
  } else if (getde.webkitRequestFullScreen) {
    getde.webkitRequestFullScreen();
  }
  getbtnclosescreen.style.display = "inline-block";
});
getbtnclosescreen.addEventListener("click", function () {
  //   document.exitFullscreen();
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
  getbtnclosescreen.style.display = "none";
});
