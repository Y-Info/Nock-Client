<template>
  <l-map style="width:100%;height:250px" ref="map"></l-map>
</template>

<script>
import { LMap } from "vue2-leaflet";

export default {
  components: {
    LMap
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.map.mapObject.setView([45.74567, 4.83768], 7);
    });
  }
};
</script>
