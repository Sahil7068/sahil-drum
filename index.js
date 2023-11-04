// for (let i = 0; i <= 7; i++)

let nod = document.querySelectorAll(".drum").length;
for (let i = 0; i < nod; i++)
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);

function handleClick() {
  //   this.style.color = "white";

  //   var audio1 = new Audio("this.sounds/tom-1.mp3");
  //   audio1.play();

  let btns = this.innerHTML;

  switch (btns) {
    case "s":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;
    case "L":
      var audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;

    case "w":
      var audio3 = new Audio("sounds/tom-3.mp3");
      audio3.play();
      break;

    case "o":
      var audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
      break;

    case "r":
      var audio5 = new Audio("sounds/snare.mp3");
      audio5.play();
      break;

    case "l":
      var audio6 = new Audio("sounds/kick-bass.mp3");
      audio6.play();
      break;

    case "d":
      var audio7 = new Audio("sounds/crash.mp3");
      audio7.play();
      break;
  }

  anima(btns);
}

function anima(current) {
  let actbtn = document.querySelector("." + current);
  actbtn.classList.add("pressed");

  setTimeout(function () {
    actbtn.classList.remove("pressed");
  }, 100);
}
