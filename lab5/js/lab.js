/*
 * Author:  Cameron Robertson
 * Created: 4/20/22
 */


// defining car variables 
make = "Ford";
model = "Mustang";
year = 1965;
color = "White";

// calculating car's age
age = new Date().getFullYear() - year;

// output
document.writeln(`Make: ${make}<br>`)
document.writeln(`Model: ${model}<br>`)
document.writeln(`Color: ${color}<br>`)
document.writeln(`Year: ${year}<br>`)
document.writeln(`Age: ${age} years<br>`)