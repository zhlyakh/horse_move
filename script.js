const canvas = document.getElementById('cnvs');
const ctx = canvas.getContext('2d');


// we are drawing the field for the chess game
for (let i =0; i<8; i++) {
  for (let j = 0; j<8; j++) {
    if (i%2 == j%2) {
      ctx.fillStyle ='black';
      ctx.fillRect(i*40, j*40, 40,40);
    }
  }
}


canvas.addEventListener('click', (event) => {
    //clearing the field after the previous horse move
    for (let i =0; i<8; i++) {
        for (let j = 0; j<8; j++) {
          if (i%2 == j%2) {
            ctx.fillStyle ='black';
            ctx.fillRect(i*40, j*40, 40,40);
          } else {
              ctx.fillStyle = "white";
              ctx.fillRect(i*40, j*40, 40,40);
          }
        }
      }
// identifying the coords
  let x = event.pageX;
  let y = event.pageY;


// painting the cell of click
  ctx.fillStyle = "green";
  ctx.fillRect(x - x%40, y-y%40, 40, 40);

//   painting the cells of a potential horse move
  ctx.fillStyle = "red";
  ctx.fillRect(x - x%40-80, y-y%40-40, 40, 40);
  ctx.fillRect(x - x%40-80, y-y%40+40, 40, 40);
  ctx.fillRect(x - x%40+80, y-y%40-40, 40, 40);
  ctx.fillRect(x - x%40+80, y-y%40+40, 40, 40);

  ctx.fillRect(x - x%40-40, y-y%40-80, 40, 40);
  ctx.fillRect(x - x%40-40, y-y%40+80, 40, 40);
  ctx.fillRect(x - x%40+40, y-y%40-80, 40, 40);
  ctx.fillRect(x - x%40+40, y-y%40+80, 40, 40);

//   if any of these cells is out of the field - that's not a big deal - it just won't be painted
  console.log(`coord by X is ${x} and coord by Y is ${y}`);
})