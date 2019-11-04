/*jshint esversion: 6 */
//CREATION OF OBJECT WITH ALL IMAGES
// const imgs = {
//     bg:
//       'imgs/background.jpg',
//   };
//   console.log(bg);



class Ocean {
      constructor(){
          this.x=0;
          this.y=0;
          this.width = 2400;
          this.height = canvas.height;
          this.img = new Image();
          this.img.src= "imgs/background.jpg";
          this.img.onload = () => {
              this.draw();
          };
      }//end ocean constuctor
      draw(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height); // drae normal images
      }
  }

const ocean = new Ocean();

function update() {
    ocean.draw();
  }