
(function($){
  function initAltMap () {
    if ($('#alt-map').length) {
      let map_provider = $('#alt-map-provider').val();
      let lat = $('#alt-map-lat').val();
      let lng = $('#alt-map-lng').val();
      let zoom = parseInt($('#alt-map-zoom').val());
      let address = $('#alt-map-dir').val();
      let api_key = $('#alt-map-api-key').val();

      if ( map_provider == 1 ) {
        let map = new GMaps({
          div: '#alt-map',
          lat: lat,
          lng: lng,
          zoom: zoom,
          zoomControl: true,
          zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
          },
          panControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          overviewMapControl: false,
          scrollwheel: true,
          draggable: true
        });

        map.addMarker({
          lat: lat,
          lng: lng,
          click: function (e) {
            let url = 'https://www.google.com/maps/place/' + encodeURIComponent(address) + '/@' + lat + ',' + lng +'/';
            window.open(url, '_blank')
          },
          title: address
        })
      } else {
          let map = new L.map('alt-map').setView([lat, lng], zoom);
          if ( map_provider == 3 && api_key.length ) {
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
              attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
              maxZoom: 18,
              id: 'mapbox.streets',
              accessToken: api_key
            }).addTo(map);
          } else {
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              maxZoom: 19,
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
          }
          let marker = L.marker([lat, lng]).addTo(map);
          let url = lat + ',' + lng +'#map='+ zoom +'/'+ lat +'/'+ lng +'&layers=N';
          marker.bindPopup(address + '<p><a href="https://www.openstreetmap.org/directions?engine=osrm_car&route='+ url +'">Routing via OpenStreetMap</a></p>');
      }
    }
  }

  $(window).on('load', function() {
    initAltMap();
  });

})(jQuery);