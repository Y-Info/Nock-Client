<template>
  <div>
    <l-map
      :zoom.sync="zoom"
      :options="mapOptions"
      :center="center"
      :min-zoom="minZoom"
      :max-zoom="maxZoom"
      style="height: 400px; width: 100%"
    >
      <l-tile-layer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        :token="token"
        layer-type="base"
      />
    </l-map>
  </div>
</template>

<script>
import {
  LMap,
  LTileLayer
} from 'vue2-leaflet';
const tileProviders = [
  {
    name: 'OpenStreetMap',
    visible: true,
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  },
  {
    name: 'OpenTopoMap',
    visible: false,
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
  },
];
export default {
  name: 'Example',
  components: {
    LMap,
    LTileLayer
  },
  data() {
    return {
      center: [51.505, -0.09],
      opacity: 0.6,
      token: 'pk.eyJ1Ijoic2NvdGhpcyIsImEiOiJjaWp1Y2ltYmUwMDBicmJrdDQ4ZDBkaGN4In0.sbihZCZJ56-fsFNKHXF8YQ',
      mapOptions: {
        zoomControl: false,
        attributionControl: false,
        zoomSnap: true
      },
      zoom: 3,
      minZoom: 1,
      maxZoom: 20,
      tileProviders: tileProviders
    };
  }
};
</script>