let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let x = 100,
  y = 100,
  rad = 10,
  vx = 0,
  vy = 0,
  g = 0.5,
  f = 0,
  k = 10,
  score = 0,
  pipes = [];



loop();


onkeypress = function() {
  vy -= 13;
};

function drawPipe(p) {
  context.beginPath();

  context.fill();
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(x, y, rad, 0, 2 * Math.PI, false);
  context.fillStyle = 'black'
  for (i = 0; i < pipes.length - 1; i++) {
    context.fillRect(pipes[i].x, 0, pipes[i].fat, pipes[i].hole1);
    context.fillRect(pipes[i].x, canvas.width - pipes[i].hole2, pipes[i].fat, pipes[i].hole2);

  }
  context.font = "30px Arial";
  context.fillText(score,10,50)
  context.fill();
  context.stroke();
}

function update() {

  if (k >= 10) {
    pipes.push(new Pipe())
    k -= 10;
  }

  for (i = 0; i < pipes.length - 1; i++) {
    if (pipes[i].x < 0) {
      pipes.splice(i, 1);
      i++;
      score++;
    }
    if (x == pipes[i].x){
      if(y < pipes[i].hole1 || y >  canvas.width - pipes[i].hole2){

        score = 0;
      }
    }

    pipes[i].update();

  }

  k += 0.1;
  vy += g;
  x += vx;
  y += vy;

  if (x > canvas.width - rad) {
    x = canvas.width - rad;
    vx *= -f;

  }
  if (y > canvas.height - rad) {
    y = canvas.height - rad;
    vy *= -f;


  }
  if (x < rad) {
    x = rad;
    vx *= -f;
  }
  if (y < rad) {
    y = rad;
    vy *= -f;
  }
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}
