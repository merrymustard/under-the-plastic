/*jshint esversion: 6 */

class Shark {
  constructor() {
    this.width = 292.78;
    this.height = 149.2;
    this.y = 400 ;// canvas.height - this.height
    this.x = 800;
    this.vx = 0;
    this.vy = 0;
    this.animate = 0;
    this.position = 0;
    this.hp = 5;
    this.img = new Image();
    this.img.src = 'imgs/sharky-03.png';
    this.img.onload = () => {
      this.draw();
    };
  }
  draw() {
    //dont fall infinitly
    if (this.y > canvas.height - this.height) {
      this.y = canvas.height - this.height;
    } 
    //dont hit the sky
    else if(this.y <= 300){
      this.y = 300;
    }  //left
    else if(this.x <= 0){
       this.x = 0;
     }
    ctx.drawImage(
      // imagen de fuente
      this.img,
      // posición de x en la imagen (fuente, sx)
      (this.animate * 2635.13) / 9,
      // posición de y en la imagen (fuente, sy)
      (this.position * 298.32) / 2 ,
      // ancho desde la posición de x (sw)
      2635.13 / 9,
      // alto desde la posición de y (sw)
      298.32 / 2,
      // posición de x en canvas (destino, dx)
      this.x,
      // posición de y en canvas (destino, dy)
      this.y,
      // ancho desde la posición de x en canvas (dw)
      this.width,
      // alto desde la posición de y en canvas (dh)
      this.height
    );
  }
  isTouching(trash) {
    return (
      this.x < trash.x + trash.width &&
      this.x + this.width > trash.x &&
      this.y < trash.y + trash.height &&
      this.y + this.height > trash.y
    );
  }
  moveLeft() {
    console.log('left');
    if(keys[37]){
      this.vx -= 1;
      this.position = 1;
    }
  }
  moveRight() {
    console.log('right');
    if(keys[39]){
      this.vx += 1;
      this.position = 0;
      if (shark.x + shark.width + 50 >= canvas.width){
        shark.vx = 0;
      }
    }
  }
  moveUp() {
    console.log('uppp');
    if(keys[38]){
      this.y -= -1;
      this.vy -= 1;
    }
  }
  moveDown() {
    console.log('down');
    if(keys[40]){
      this.y += 1;
      this.vy += 1;
    }
   
  }
} //end of shark class
  
  


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

class Crabby {
    constructor() {
      this.width = 211.5;
      this.height = 180;
      this.y = 500 ;// canvas.height - this.height
      this.x = 500;
      this.vx = 0;
      this.vy = 0;
      this.hp = 5;
      this.animate = 0;
      this.position = 0;
      this.jumpStrenght = 18;
    //   this.hp = 3;
      this.img = new Image();
      this.img.src = 'imgs/crabby.png';
      this.img.onload = () => {
        this.draw();
      };
    }
    draw() {
      if (this.y > canvas.height - this.height) {
        this.y = canvas.height - this.height;
       }  
      //  else if(this.x <= 0){
      //    console.log('outcraby')
      //   this.x = 0;
      // }
      else {
        this.vy++;
      }
      ctx.drawImage(
        // imagen de fuente
        this.img,
        // posición de x en la imagen (fuente, sx)
        (this.animate * 1904) / 9,
        // posición de y en la imagen (fuente, sy)
        (this.position) ,
        // ancho desde la posición de x (sw)
        1904 / 9,
        // alto desde la posición de y (sw)
        170,
        // posición de x en canvas (destino, dx)
        this.x,
        // posición de y en canvas (destino, dy)
        this.y,
        // ancho desde la posición de x en canvas (dw)
        this.width,
        // alto desde la posición de y en canvas (dh)
        this.height
      );
      
    }
    moveLeft() {
       if(this.x <= 0){
         console.log('outcraby');
        this.x = 0;
      }  else if(keys[65]){
        this.vx -= 1;
        this.position = 4;
      }
    }
    moveRight() {
      if(keys[83]){
        this.vx += 1;
        this.position = 2;
        if(crab.x + crab.width + 50 >= canvas.width){
          crab.vx = 0;
        }
      }
    }
    jump() {
      if(keys[90]){
        this.vy = -this.jumpStrenght * 1.2;
      }
    }
    isTouching(trash) {
      return (
        this.x < trash.x + trash.width &&
        this.x + this.width > trash.x &&
        this.y < trash.y + trash.height &&
        this.y + this.height > trash.y
      );
    }
  } //end of crab class
  
