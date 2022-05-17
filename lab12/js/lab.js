/*
 * Author: Cameron Robertson
 * Created: 5/16/22
 */



let output = document.getElementById('output');
let nameInput = document.getElementById('input');
let houses = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];


// trigger sorting on button click
$('#submit').click(() => {
   output.innerHTML = `<b>You have been sorted into:</b> ${sortingHat(nameInput.value)}!`;
});

// trigger sorting on enter keypress
nameInput.addEventListener('keypress', (event) => {
   if (event.key == 'Enter')
      $('#submit').trigger('click');
});

// returns sorted house for given name
function sortingHat(name) {
   let sum = 0;
   for (let idx in name) {
      sum += name.charCodeAt(idx);
   }

   return houses[sum % houses.length];
}