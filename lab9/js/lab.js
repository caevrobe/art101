/*
 * Author: Cameron Robertson
 * Created: 5/4/22
 */



// returns a new paragraph element with given text
function createParagraph(text) {
   let new_elem = document.createElement('p');
   new_elem.innerText = text;
   return new_elem;
}


// animates results div header and adds two paragraph elements to the div
async function addResults() {
   let d = document.getElementById("results_header");

   // begin animating results div header
   d.style.color = '#AA0000';
   let periods = 0;
   let inProgress = setInterval(() => {
      d.innerText = `Results: ${'.'.repeat(periods)}`;
      periods = (periods + 1) % 4;
   }, 200)

   let output_elem = document.getElementById('results');

   let new_elem = createParagraph('append to bottom');
   let new_elem2 = createParagraph('append to top');

   // append and prepend new paragraph elements to results div, one after the other
   await new Promise(r => setTimeout(r, 500));
   output_elem.appendChild(new_elem);
   await new Promise(r => setTimeout(r, 1000));
   output_elem.prependChild(new_elem2);

   // stop animating results header
   clearInterval(inProgress);
   d.innerText = "Results:";
   d.style.color = '#00AA00';
}

// custom prependChild method for all HTMLElements
HTMLElement.prototype.prependChild = function(elem) {
   this.insertBefore(elem, this.firstChild);
}

addResults();