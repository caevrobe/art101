/*
 * Author:  Cameron Robertson
 * Created: 5/30/22
 */

$.ajax({
   url: 'http://xkcd.com/info.0.json',
   type: 'GET',
   dataType: 'JSON',
   success: (data) => {
      console.log(data);
   },
   error: (jqXHR, status, err) => {
      console.warn(err);
   }
});