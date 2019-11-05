/*jshint esversion: 6 */

  
  
  class Shark {
    constructor() {
      this.width = 292.78;
      this.height = 149.2;
      this.y = 300 ;// canvas.height - this.height
      this.x = 300;
      this.vx = 0;
      this.vy = 0;
      this.animate = 0;
      this.position = 0;
      this.jumpStrenght = 18;
      // this.hp = 3;
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
      else if(this.y <= 200){
        this.y = 200;
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
    // isTouching(obstacle) {
    //   // algo está tratando de ocupar el mismo espacio en canvas que flash
    //   return (
    //     this.x < obstacle.x + obstacle.width &&
    //     this.x + this.width > obstacle.x &&
    //     this.y < obstacle.y + obstacle.height &&
    //     this.y + this.height > obstacle.y
    //   )
    // }
    moveLeft() {
      // this.x -= 10;
     this.vx -= 3;
     this.position = 1;
      // this.position = 1;
    }
    moveRight() {
    //  this.x += 10;
     this.vx += 3;
      // this.position = 2;
    }
    moveUp() {
      // this.y -= 10;
      this.y -= 15;
      this.vy -= 1;
    }
    moveDown() {
      this.y +=3;
      this.vy += 3;
    }
   
    // jump() {
    //   this.vy = -this.jumpStrenght * 2
    // }
  } //end of shark class
  