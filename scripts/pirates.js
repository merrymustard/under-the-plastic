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
