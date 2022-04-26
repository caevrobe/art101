/*
 * Author: Cameron Robertson
 * Created: 4/25/22
 */



// Defining variables
myTransport = ["Toyota Sienna", "feet"];

myMainRide = {
   make: "Toyota",
   model: "Sienna",
   color: "white",
   year: 2013,
   age: function() {
      return new Date().getFullYear() - this.year;
   }
};


// helper function for printing variables
function formatArray(arr) {
   return arr.join(', ')
}

function formatObj(obj) {
   return JSON.stringify(obj, null, '   ');
}


// Write output to screen
document.writeln(`<b>Kinds of transportation I use:</b><br>${formatArray(myTransport)}<br><br>`);
document.writeln(`<b>My Main Ride:</b> <pre>${formatObj(myMainRide)}</pre>`);