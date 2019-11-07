/*jshint esversion: 6 */

  class Lives{
      constructor(){
        this.height = 28;
        this.width = 34;
        this.x = 40;
        this.y = 20;
        this.img = new Image();
        this.img.src = 'imgs/heart.png';
        this.img.onload = () => {
            this.draw();
        };
      }
  }

class livesCrab{
  
}




///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
  class Icons{
    constructor(height,width,x,y,img){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.img = new Image();
        this.img.src = "";
    }
  }

  class IconShark extends Icons{
      constructor(height,width,x,y){
        super(height,width,x,y, "IconShark");
        this.img = new Image();
        this.img.src = "imgs/icons-15.png";
      }
      draw(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }

  class IconCrab extends Icons{
    constructor(height,width,x,y){
      super(height,width,x,y, "IconShark");
      this.img = new Image();
      this.img.src = "imgs/icons-16.png";
    }
    draw(){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}




  