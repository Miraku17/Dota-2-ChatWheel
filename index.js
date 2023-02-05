var numberOfDrums = document.querySelectorAll(".drum").length;

for (let index = 0; index < numberOfDrums; index++) {
  document
    .querySelectorAll(".drum")
    [index].addEventListener("click", function () {
      // if(index===0){
      //     var perfect = new Audio("sounds2/perfect.mp3");
      //     perfect.play();
      // }else if(index===1){
      //     var next = new Audio("sounds2/next-level-play.mp3");
      //     next.play();
      // }
      // else if(index===2){
      //     var ceb = new Audio("sounds2/ceb.mp3");
      //     ceb.play();
      // }

      switch (index) {
        case 0:
          var perfect = new Audio("sounds2/perfect.mp3");
          perfect.play();
          break;
        case 1:
          var next = new Audio("sounds2/next-level-play.mp3");
          next.play();
          break;
        case 2:
          var ceb = new Audio("sounds2/ceb.mp3");
          ceb.play();
          break;
        case 3:
          var ding = new Audio("sounds2/ding.mp3");
          ding.play();
          break;
        case 4:
          var eyona = new Audio("sounds2/eyona.mp3");
          eyona.play();
          break;
        case 5:
          var echo = new Audio("sounds2/echoslam.mp3");
          echo.play();
          break;
        case 6:
          var magic = new Audio("sounds2/magic.mp3");
          magic.play();
          break;
      }

      this.style.color = "green";
    });
}
