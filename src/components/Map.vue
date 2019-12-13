<template>
  <l-map style="width:100%;height:250px" ref="map"></l-map>
</template>

<script>
import { LMap } from "vue2-leaflet";

export default {
  components: {
    LMap
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.map.mapObject.setView([45.745670, 4.837680], 7);
    })
  }
};
</script>
