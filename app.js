// ---------------------------------------------------
// GOOGLE MAPS HACKATHON STARTER
// This file has just enough to get a working map with
// a marker-on-click. Build your feature from here.
// ---------------------------------------------------

let map;
let marker;

// initMap() is called automatically once the Google Maps script loads
// (see the callback=initMap param in index.html)
async function initMap() {
  // Import the libraries we need. This pattern (importLibrary) is the
  // current recommended way to load Maps JS API pieces.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Create the map, centered wherever you like.
  // (37.7749, -122.4194) is San Francisco — change to your city if you want.
  map = new Map(document.getElementById("map"), {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 13,
    mapId: "DEMO_MAP_ID", // required for AdvancedMarkerElement; fine to leave as-is for a hackathon
  });

  // Click the map to drop/move a marker.
  map.addListener("click", (event) => {
    placeMarker(event.latLng, AdvancedMarkerElement);
  });
}

function placeMarker(position, AdvancedMarkerElement) {
  // Remove the old marker if there is one, so clicking moves it
  // instead of stacking new markers every time.
  if (marker) {
    marker.map = null;
  }

  marker = new AdvancedMarkerElement({
    map,
    position,
    title: "Dropped pin",
  });

  console.log("Marker placed at:", position.lat(), position.lng());

  // TODO (workshop step): this is where you could call the
  // Geocoding API to turn this lat/lng into a readable address.
}

// ---------------------------------------------------
// WHERE TO BUILD YOUR FEATURE FROM HERE:
//
// 1) PLACES AUTOCOMPLETE SEARCH BOX
//    - Add an <input> to index.html
//    - Use google.maps.places.Autocomplete (or the newer
//      PlaceAutocompleteElement) to let users search a location
//    - On place_changed, call map.setCenter() with the result
//
// 2) DIRECTIONS / ROUTING
//    - Use google.maps.DirectionsService to request a route
//      between two points
//    - Use google.maps.DirectionsRenderer to draw it on the map
//
// 3) DISTANCE MATRIX
//    - google.maps.DistanceMatrixService gives travel time/distance
//      between multiple origins and destinations at once — useful
//      for "closest X to me" style features
//
// 4) CUSTOM STYLING
//    - Pass a `styles` array (or a custom mapId + Cloud-based styling)
//      into the Map constructor options to reskin the whole map
//
// 5) DATA LAYER / HEATMAP
//    - Load a JSON/CSV of points and loop through to drop multiple
//      markers, or use google.maps.visualization.HeatmapLayer
// ---------------------------------------------------