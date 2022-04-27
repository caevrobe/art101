/*
 * Author: Cameron Robertson
 * Created: 4/27/22
 */


// case-insensitive string sorting. removes spaces from input string.
// capitalizes first letter of output 
function sortString(input) {
   let arr = input.split('');

   let sorted = arr.sort((a, b) => {
      return a.localeCompare(b);
   }).join('').replace(/\s+/g, '').toLowerCase();


   return capitalize(sorted);
}

// returns input string with first letter capitalized
function capitalize(input) {
   input = input.replace(/^\s+/g, '');
   return input[0].toUpperCase() + input.slice(1);
}

// prompts for user input when page loads
function pageLoaded() {
   setTimeout(() => {
      let username = window.prompt('Please enter your name:')
      document.querySelector('div.results').innerHTML =
         `<b>Input:</b> ${capitalize(username)}<br>
         <b>Sorted:</b> ${sortString(username)}`;
   }, 0);
}