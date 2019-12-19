<template>
  <div>
    <menuRight />
    <menu-bottom />
  </div>
</template>

<script>
import menuBottom from "../components/menu-bottom";
import menuRight from "../components/menu-right";
export default {
  components: {
    menuBottom,
    menuRight
  }
};
</script>
