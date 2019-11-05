/*jshint esversion: 6 */

function crabAnimation() {
    if (frames % 7 === 0) {
      if (crab.animate === 3) {
        crab.animate = 0;
      } else {
        crab.animate++;
      }
    }
  }


  
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  ///////////////////////////////////
//START GAME FUNCTION
function startGame() {
    if (interval) return;
    interval = setInterval(update, 1000 / 60);
  }// end function start game


  window.onload = function() {
    startGame() ;
    // document.getElementById("start-button").onclick = function() {
  
      // };
    };// end of unload


    function update(){
        frames++;
        clearCanvas();
        ocean.draw();
        shark.draw();
        crab.draw();
        crabAnimation();
      }
  
  
  
  
  
  
