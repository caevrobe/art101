/*
 * Author:  Cameron Robertson
 * Created: 5/30/22
 */

const URL = 'https://xkcd.vercel.app/?comic='; // XKCD proxy URL
var latest_num = 0; // indicates most recent XKCD comic number


// loads the previous or next comic (depending on the sign of dir)
function advance(dir) {
   let which = Number($('#num').val())+1*Math.sign(dir);
   if (!(1 <= which && which <= latest_num))
      return;

   getComic(which);
   $('#num').val(which);
}

// constrain number input to [1, latest comic #]
$('#num').on('input', (e) => {
   let v = $('#num').val();

   if (v > latest_num)
      $('#num').val(latest_num);
   else if (v < 1 && v != '')
      $('#num').val(1);
});

// fetch comic when number entry loses focus
$('#num').focusout((e) => {
   let v = $('#num').val();
   if (v != '')
      getComic(v);
});

// trigger focusout on number entry when Enter is pressed
$('#num').keypress((e) => {
   if (e.key === 'Enter')
      $('#num').trigger('blur');
});


// fetch and display comic
function getComic(num='latest', first_time=false) {
   $.ajax({
      url: URL+num,
      type: 'GET',
      dataType: 'JSON',
      success: (data) => {
         if (first_time)
            $('#num').val(data.num);

         if (num === 'latest') {
            $('#num').attr({'max': data.num});
            latest_num = data.num;
         }

         $('#comic').attr('src', data.img);
         $('#comic').attr('alt', data.alt);
         $('#comic').attr('title', data.alt);
      },
      error: (jqXHR, status, err) => {
         console.warn(err);
      }
   });
}

getComic(num='latest', first_time=true);