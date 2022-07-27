
let map;

function initMap() {
  const myLatLng = { lat: 47.214879096350394, lng: 39.70497243644624 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "ул. Тургеневская, 10/6",
  });
}

