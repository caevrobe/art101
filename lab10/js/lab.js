/*
 * Author: Cameron Robertson
 * Created: 5/9/22
 */



// returns input string with first letter capitalized
function capitalize(input) {
   input = input.replace(/^\s+/g, '');
   return input[0].toUpperCase() + input.slice(1);
}


// returns random integer <= max
function randInt(max) {
   return Math.round(Math.random() * max);
}


// returns anagram of input string
// limit is an optional integer specifying the max # of chars to scramble
// keepCase is an optional boolean indicating whether or not anagrams should keep capital letters 
function anagram(input, limit, keepCase) {
   if (!keepCase)
      input = input.toLowerCase();

   input = input.split('');
   let len = input.length;

   for (let i = 0; i < (limit || len); i++) {
      let a = randInt(len - 1);
      let b = randInt(len - 1);

      let olda = input[a];
      let oldb = input[b];
      input[b] = olda;
      input[a] = oldb;
   }

   return input.join('');
}


let resultsDiv = document.getElementById('output');
let nameInput = document.getElementById('user-name');

// run name manipulation function(s)
function mess_with_name() {
   let username = nameInput.value;

   resultsDiv.innerHTML =
      `<b>Input:</b> ${username}<br>
      <b>Anagram:</b> ${anagram(username, undefined, true)}`;
}

let glitchable = document.querySelectorAll('p, h1, h2, label, b');

// periodically scramble letters on page
async function glitch() {
   await new Promise(r => setTimeout(r, 1500));
   for (;;) {
      let current = glitchable[randInt(glitchable.length - 1)];
      current.innerText = anagram(current.innerText, randInt(1) + 1, true);
      await new Promise(r => setTimeout(r, randInt(6000)));
   }
}

glitch();