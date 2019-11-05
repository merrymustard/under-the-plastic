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

  function sharkAnimation() {
    if (frames % 10 === 0) {
      if (shark.animate === 3) {
        shark.animate = 0;
      } else {
        shark.animate++;
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
        sharkAnimation();
        shark.draw();
        shark.x += shark.vx;
        shark.y += shark.vy;

        crabAnimation();
        crab.draw();
        crab.x += crab.vx;
        crab.y += crab.vy;
        crab.y += gravity;

      }


  



      document.onkeydown = e => {
        switch (e.keyCode) {
          case 65:
            crab.moveLeft();
            return;
          case 83:
            crab.moveRight();
            return;
          case 90:
            crab.jump();
            return;
            case 37:
        shark.moveLeft();
            return;
            case 39:
        shark.moveRight();
            return;
            case 38:
        shark.moveUp();
            return;
            case 40:
        shark.moveDown();
            return;
        }
      };
      
      document.onkeyup = e => {
        crab.vx = 0;
        crab.position = 0;
        shark.vx = 0;
        shark.position = 0;
      };
  
  
  
  
  
