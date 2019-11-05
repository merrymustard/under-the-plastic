/*jshint esversion: 6 */

  
  
  class Shark {
    constructor() {
      this.width = 360;
      this.height = 177.2;
      this.y = 300 ;// canvas.height - this.height
      this.x = 300;
      this.vx = 0;
      this.vy = 0;
      this.animate = 0;
      this.position = 0;
      // this.jumpStrenght = 18;
      // this.hp = 3;
      this.img = new Image();
      this.img.src = 'imgs/sharky.png';
      this.img.onload = () => {
        this.draw();
      };
    }
    draw() {
      if (this.y > canvas.height - this.height) {
        this.y = canvas.height - this.height;
      } else {
        this.vy++;
      }
      ctx.drawImage(
        // imagen de fuente
        this.img,
        // posición de x en la imagen (fuente, sx)
        (this.animate * 3000.26) / 8,
        // posición de y en la imagen (fuente, sy)
        (this.position ) ,
        // ancho desde la posición de x (sw)
        3000.26 / 8,
        // alto desde la posición de y (sw)
        177,
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
    // moveLeft() {
    //   this.vx -= 3
    //   this.position = 1
    // }
    // moveRight() {
    //   this.vx += 3
    //   this.position = 2
    // }
    // jump() {
    //   this.vy = -this.jumpStrenght * 2
    // }
  } //end of shark class
  