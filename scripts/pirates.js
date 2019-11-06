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


class Trash {
    constructor(y, type) {
      this.x = canvas.width;
      this.y = y;
      this.width = 80;
      this.height = 47;
      this.img = new Image();
      if (type == 1){
          this.img.src = 'imgs/trash-01.png';
      } else if (type == 2){
        this.img.src = 'imgs/trash-02.png';
        } else if (type == 3){
            this.img.src = 'imgs/trash-03.png';
        }

      //this.img.src = 'imgs/trash-01.png';
    }
    draw() {
      this.x--;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

    }
  }


  function generateTrash() {
    if (frames % 200 === 0) {
      const randomPosition = Math.floor(Math.random() * canvas.height) + 50;
      const randomType = Math.floor(Math.random()*4);
      const trashys = new Trash(randomPosition,randomType);
      trashCan.push(trashys);
      console.log(trashCan);
    }
  }

  function drawTrash() {
    generateTrash();
    trashCan.forEach(trash => {
        trash.draw();
    });
  }


  function disposeTrash(arr){
      for(let i=0; i < arr.length; i++){
        if(arr[i].x < -arr[i].width){
            arr.splice(i,1);
            i--; //corregit contador de la i
        }
    }
  }
