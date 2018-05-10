// initMap() - функция инициализации карты
function initMap() {
  var myLatLng = {lat: 55.703033, lng: 37.708653}; 

  var myLatLng1 = {lat: 55.832272, lng: 37.409028}; 

  var myLatLng2 = {lat: 55.947837, lng: 37.644737};

  var myLatLng3 = {lat: 55.830402, lng: 37.951368}; 

  var myLatLng4 = {lat: 55.470423, lng: 37.727912}; 

  var myLatLng5 = {lat: 55.625887, lng: 37.005667}; 

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'подпись'
  });
  var marker1 = new google.maps.Marker({
    position: myLatLng1,
    map: map,
    title: 'подпись'
  });
  var marker2 = new google.maps.Marker({
    position: myLatLng2,
    map: map,
    title: 'подпись'
  });
  var marker3 = new google.maps.Marker({
    position: myLatLng3,
    map: map,
    title: 'подпись'
  });
  var marker4 = new google.maps.Marker({
    position: myLatLng4,
    map: map,
    title: 'подпись'
  });
  var marker5 = new google.maps.Marker({
    position: myLatLng5,
    map: map,
    title: 'подпись'
  });
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);