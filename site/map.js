var map;
function initSlcMap() {
    initMap('slcmap');
}
function initMap(mapName) {
  var mapCenter = {lat:40.767186, lng:-111.865395};


  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer({
        suppressMarkers: true,
        preserveViewport: true});


  var hyatthouseLatLng = {lat: 40.766751, lng: -111.902437};
  var hyatthouseInfo = new google.maps.InfoWindow({
    content: '<p><b>Hyatt House Salt Lake City/Downtown</b><br/>' +
        '140 South 300 West</p>' +
        '<p>Rate: $99 USD, available from June 2-6</p>' 
    });

  var capitolLatLng = {lat:40.778050, lng:-111.888195};
  var capitolInfo = new google.maps.InfoWindow({
    content: '<p><b>Utah State Capitol, North Plaza</b><br/>' +
        '350 N State St</p>' +
        '<p>June 4, 2016 4:00pm</p>'
  });

  var nhmuLatLng = {lat:40.7641309,lng:-111.8249845};
  var nhmuInfo = new google.maps.InfoWindow({
    content: '<p><b>Natural History Museum of Utah</b><br/>' +
        '301 Wakara Way</p>' +
        '<p>June 4, 2016 6:30pm</p>'
  });

  var map = new google.maps.Map(document.getElementById(mapName), {
    zoom: 12,
    center: mapCenter
  });
  directionsDisplay.setMap(map);

  var hyatthouse = new google.maps.Marker({
    position: hyatthouseLatLng,
    map: map,    
    animation: google.maps.Animation.DROP,
    title: 'Hyatt House Salt Lake City/Downtown',
    label: '1'
  });
  hyatthouse.addListener('click',function() {
    hyatthouseInfo.open(map,hyatthouse);
  });

  var capitol = new google.maps.Marker({
    position: capitolLatLng,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Utah State Capitol, North Plaza',
    label: '2'
  });
  capitol.addListener('click',function() {
    capitolInfo.open(map,capitol);
  });

  var nhmu = new google.maps.Marker({
    position: nhmuLatLng,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'NHMU',
    label: '3'
  });
  nhmu.addListener('click',function() {
    nhmuInfo.open(map,nhmu);
  });
directionsService.route({
    origin: capitolLatLng,
    destination: nhmuLatLng,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}