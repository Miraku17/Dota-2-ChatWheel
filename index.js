

var numberOfDrums = document.querySelectorAll(".drum").length;


for (let index = 0; index < numberOfDrums; index++) {
    
     document.querySelectorAll(".drum")[index].addEventListener("click",function(){
            
            if(index===0){
                var perfect = new Audio("sounds2/perfect.mp3");
                perfect.play();
            }else if(index===1){
                var next = new Audio("sounds2/next-level-play.mp3");
                next.play();
            }
            else if(index===2){
                var ceb = new Audio("sounds2/ceb.mp3");
                ceb.play();
            }
     });

 
}