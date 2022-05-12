/*
 * Author: Cameron Robertson
 * Created: 5/11/22
 */


$('.toggle').each(function() {
   let current = jQuery(this);
   current.click(function() {
      let div = jQuery(this).parent();
      div.toggleClass('special');
   });
});

// returns random integer <= max
function randInt(max) {
   return Math.round(Math.random() * max);
}


let buttons = [];
$(document).ready(() => {
   // add game buttons 
   $('<div><span><b>Score</b>: <p style="display: inline-block" id="score">0</p></span></div>').insertAfter('#results h2');

   // creates game tiles
   for (let i = 0; i < 36; i++) {
      $('#output').append('<input type="button" class="game"/>');
   }

   // add tiles to list for later use
   $('.game').each(function() {
      buttons.push(jQuery(this));
   });
   startGame();
});

let score = 0;
let total = 0;

// updates score when active tile is clicked
function activeClicked() {
   $('#score').text(`${++score}/${total} ${Math.trunc((score/total)*100)}%`);
   $('.active').removeClass('active');
}


// loop which sets random buttons as active
async function startGame() {
   let numButtons = buttons.length;

   await new Promise(r => setTimeout(r, 1000));

   for (;;) {
      $('#score').text(`${score}/${total++} ${Math.trunc((score/total)*100)}%`);
      let current = buttons[randInt(numButtons - 1)];
      current.addClass('active');
      let handler = current.on('click', activeClicked);


      await new Promise(r => setTimeout(r, randInt(950) + 250));

      current.off('click');
      current.removeClass('active');

      await new Promise(r => setTimeout(r, randInt(750) + 250));
      $('#score').text(`${score}/${total} ${Math.trunc((score/total)*100)}%`);
   }
}