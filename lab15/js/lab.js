/*
 * Author:  Cameron Robertson
 * Created: 5/25/22
 */

const mapArea = document.getElementById('map');
const zoom = $('#map').height() * 0.0025 + 12;
const icon = {
   url: 'https://icon-library.com/images/bus-icon/bus-icon-3.jpg',
   scaledSize: new google.maps.Size(30, 30), // scaled size
   origin: new google.maps.Point(0,0), // origin
   anchor: new google.maps.Point(15,15) // anchor
};

// initializes map to show downtown Santa Cruz + UCSC
showMap = () => {
   let mapOptions = {
      center: { lat: 36.976406, lng: -122.038637 },
      zoom: zoom
   };
   Gmap = new google.maps.Map(mapArea, mapOptions);
}


// updates map to show bus location
let markers = {};
createOrUpdateMarker = (ID, latlng) => {
   if (markers.hasOwnProperty(ID))
      markers[ID].setPosition(latlng);
   else {
      let markerOptions = {
         position: latlng,
         map: Gmap,
         clickable: true,
         icon: icon
      };
   
      let Gmarker = new google.maps.Marker(markerOptions);
      markers[ID] = Gmarker;
   }
}


// show map
showMap();
mapArea.style.display = "block";

// makes request to my proxy site, which makes a request to Santa Cruz Metro's site for bus 15 locations
function trackBus15() {
   $.ajax({
      url: 'https://my-proxy-lol.herokuapp.com/bus15',
      type: 'GET',
      dataType: 'JSON',
      success: (data) => {
         data.forEach((bus) => createOrUpdateMarker(bus.ID, {lat: bus.Latitude, lng: bus.Longitude}));
      },
      error: (jqXHR, status, err) => {
         console.warn(err);
      }
   });
}

var reqIID = null;
function startTracking() {
   if (!reqIID) {
      reqIID = setInterval(trackBus15, 3500);
      trackBus15();
   }
}
