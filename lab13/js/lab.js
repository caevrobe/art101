/*
 * Author:  Cameron Robertson
 * Created: 5/18/22
 */


let cases = [
   [3, 'Fizz'],
   [5, 'Buzz'],
   [7, 'Boom']
];

// add input handler to slider
$('#input').on('input', function() {
   fizzBuzz($(this).val());
});


// calculate fizzbuzz values from 0 - max
function fizzBuzz(max) {
   let nums = [];

   for (let i = 0; i < ((parseInt(max) + 1) || 10); i++) {
      let output = '';

      cases.forEach((c) => {
         if (!(i % c[0]))
            output += c[1];
      });

      if (output != '')
         output += '!';

      nums.push(output);
   }

   writeTable(nums);
}

// write content array to table
function writeTable(content) {
   let len = content.length;

   $('#output').empty();
   let interval = Math.max((Math.round(len / 8) || 1), 10);

   for (let i = 0; i <= len; i += interval) {
      let items = content.slice(i, i + interval).map((item) => `<li>${item}</li>`).join('');
      let table = `<ol start="${i}">${items}</ol>`;

      $('#output').append(table);
   }
}

fizzBuzz(0);