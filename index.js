var numberOfDrums = document.querySelectorAll(".drum").length;

for (let index = 0; index < numberOfDrums; index++) {
  document.querySelectorAll(".drum")[index].addEventListener("click", function () {


        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });


}

document.addEventListener("keypress",function(event){

        makeSound(event.key);
        buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case "w":
          var perfect = new Audio("sounds2/perfect.mp3");
          perfect.play();
          break;
        case "a":
          var next = new Audio("sounds2/next-level-play.mp3");
          next.play();
          break;
        case "s":
          var ceb = new Audio("sounds2/ceb.mp3");
          ceb.play();
          break;
        case "d":
          var ding = new Audio("sounds2/ding.mp3");
          ding.play();
          break;
        case "j":
          var eyona = new Audio("sounds2/eyona.mp3");
          eyona.play();
          break;
        case "k":
          var echo = new Audio("sounds2/echoslam.mp3");
          echo.play();
          break;
        case "l":
          var magic = new Audio("sounds2/magic.mp3");
          magic.play();
          break;
      }
}

function buttonAnimation(key){

  var active = document.querySelector("."+ key);

  active.classList.add("pressed");

  setTimeout(function(){
    active.classList.remove("pressed");
  },100);
}
