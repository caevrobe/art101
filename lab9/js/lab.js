/*
 * Author: Cameron Robertson
 * Created: 5/4/22
 */

function createParagraph(text) {
   let new_elem = document.createElement('p');
   new_elem.innerText = text;
   return new_elem;
}

async function addResults() {
   let periods = 0;
   let d = document.getElementById("results_header");
   d.style.color = '#AA0000';
   let inProgress = setInterval(() => {
      d.innerText = `Results: ${'.'.repeat(periods)}`;
      periods = (periods + 1) % 4;
   }, 200)

   let output_elem = document.getElementById('results');

   let new_elem = createParagraph('append to bottom');
   let new_elem2 = createParagraph('append to top');

   await new Promise(r => setTimeout(r, 500));
   output_elem.appendChild(new_elem);
   await new Promise(r => setTimeout(r, 1000));
   output_elem.prependChild(new_elem2);
   clearInterval(inProgress);
   d.innerText = "Results:";
   d.style.color = '#00AA00';
}

HTMLElement.prototype.prependChild = function(elem) {
   this.insertBefore(elem, this.firstChild);
}

addResults();