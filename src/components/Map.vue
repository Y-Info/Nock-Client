<template>
  <div>
    <l-map
      :zoom.sync="zoom"
      :options="mapOptions"
      :center="center.length != 0 ? center : [48.8534, 2.3488]"
      :min-zoom="minZoom"
      :max-zoom="maxZoom"
      :style="styleSize"
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

      <v-geosearch
        v-if="hasSearchBar"
        :options="geosearchOptions"
      ></v-geosearch>

      <l-marker :lat-lng="center" v-if="hasMarker"></l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import VGeosearch from "vue2-leaflet-geosearch";

const tileProviders = [
  {
    name: "OpenStreetMap",
    visible: true,
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  },
  {
    name: "OpenTopoMap",
    visible: false,
    url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
  }
];
export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    VGeosearch,
    LMarker
  },
  data() {
    return {
      opacity: 0.6,
      token:
        "pk.eyJ1Ijoic2NvdGhpcyIsImEiOiJjaWp1Y2ltYmUwMDBicmJrdDQ4ZDBkaGN4In0.sbihZCZJ56-fsFNKHXF8YQ",
      mapOptions: {
        zoomControl: false,
        attributionControl: false,
        zoomSnap: true
      },
      zoom: 16,
      minZoom: 1,
      maxZoom: 20,
      tileProviders: tileProviders,
      geosearchOptions: {
        provider: this.provider,
        autoComplete: true,
        autoCompleteDelay: 250,
        showPopup: false
      },
      hasMarker: false
    };
  },
  props: {
    center: Array,
    styleSize: String,
    hasSearchBar: Boolean,
    provider: OpenStreetMapProvider
  },
  mounted() {
    if (this.center.length != 0) {
      this.zoom = 18;
      this.hasMarker = true;
    } else {
      this.zoom = 5;
      this.center = [];
      this.hasMarker = false;
    }
  }
};
</script>

<style lang="scss">
.geosearch {
  display: none !important;
}
</style>
