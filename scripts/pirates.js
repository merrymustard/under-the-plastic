/*jshint esversion: 6 */

class Pirate{
 constructor(){
     this.width = 274 ;
     this.height = 240;
     this.x = 0;
     this.y = 24;
     this.img = new Image();     // this.hp = 3;
     this.img.src = './imgs/pirateship-07.png';
     this.img.onload = () => {
       this.draw();
     };
 }
 draw() {
    this.x++;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  navigate(){
    this.x += 20;
  }
}


//TRASHHHHHHHHHHHHHHHHHHHH
//TRASHHHHHHHHHHHHHHHHHHHH
//TRASHHHHHHHHHHHHHHHHHHHH
//TRASHHHHHHHHHHHHHHHHHHHH
const trashCan = [];

class Trash {
    constructor(y) {
      this.x = canvas.width;
      this.y = y;
      this.width = 80;
      this.height = 47;
      this.img = new Image();
      this.img.src = 'imgs/trash-01.png';
    }
    draw() {
      this.x--;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
  }

  function generateTrash() {
    if (frames % 200 === 0) {
      const randomPosition = Math.floor(Math.random() * canvas.height) + 50;
      const trashys = new Trash(randomPosition);
      trashCan.push(trashys);
    }
  }

  function drawTrash() {
    trashCan.forEach(trash => trash.draw());
  }
