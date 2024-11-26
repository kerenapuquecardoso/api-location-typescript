
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

const form = document.querySelector('form')! as HTMLFormElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();

  const coordinates = { lat: 40.41, lng: -73.99 }; // Can't fetch coordinates from Google API, use dummy ones

  document.getElementById('map')!.innerHTML = ''; // clear <p> from <div id="map">
  new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    view: new View({
      center: fromLonLat([coordinates.lng, coordinates.lat]),
      zoom: 16
    })
  });
}

form.addEventListener('submit', searchAddressHandler);