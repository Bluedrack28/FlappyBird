function Pipe(){
  this.x = canvas.height;
  this.hole1 = Math.floor(Math.random() * 300);
  this.constante = 300;
  this.hole2 =  canvas.width - this.hole1 - this.constante;
  this.fat = 10;
  this.vx = 1;
  this.update = function(){
    this.x -= this.vx;
  }
  this.hit = function(x,y){

  }
  this.show = function(){
    context.beginPath();
    context.fillStyle = 'black'
    context.fillRect(this.x,0,this.fat,this.hole1);
    context.fillStyle = 'black'
  }
}
