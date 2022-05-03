/*
 * Author: Cameron Robertson
 * Created: 4/28/22
 */



let c_width = 500;
let c_height = 500;

let s_width = 25;
let s_height = 25;

let canvas, ctx;


// given a float in the range [0, 1), returns a decimal RGB color component
function floatToRGBComponent(float) {
   return Math.floor(float * 256);
}


// runs when page is loaded
function pageLoaded() {
   canvas = document.querySelector('canvas');
   ctx = canvas.getContext('2d');

   canvas.width = c_width;
   canvas.height = c_height;

   generateRandomSquares();
}


// generates random colored square
async function generateRandomSquares() {
   let x = 0;
   let y = 0;

   for (let i = 0; i < (c_width * c_height) / (s_width * s_height); i++) {
      elem = [Math.random(), Math.random(), Math.random()];
      rgb = elem.map(floatToRGBComponent);
      if (i == 0)
         console.log(`Float values: ${elem} | RGB values: ${rgb}`);

      drawSquare(x, y, rgb[0], rgb[1], rgb[2]);
      y = (y + s_height) % c_height;
      x += (y == 0) ? s_width : 0;

      await new Promise(r => setTimeout(r, 10));
   }
}


// draws square at (x, y) with color (r, g, b)
function drawSquare(x, y, r, g, b) {
   ctx.beginPath();
   ctx.rect(x, y, s_width, s_height);
   ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
   ctx.fill();
}