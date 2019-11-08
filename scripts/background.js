/*jshint esversion: 6 */

class Ocean {
      constructor(){
          this.x=0;
          this.y=0;
          this.width = 2400;
          this.height = canvas.height;
          this.img = new Image();
<<<<<<< HEAD
          this.img.src= "imgs/fon.png";
=======
          this.img.src= "imgs/fondo.png";
>>>>>>> bad402d58e017cff4b380820e6cf2a980090f0dd
          this.img.onload = () => {
              this.draw();
          };
      }//end ocean constuctor
      draw(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height); // draw normal images
      }
  }
<<<<<<< HEAD
=======

>>>>>>> bad402d58e017cff4b380820e6cf2a980090f0dd
