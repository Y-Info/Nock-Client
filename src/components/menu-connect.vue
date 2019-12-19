<template>
  <div>
    <router-link :to="route">
      <img class="arrow" src="../assets/icons/arrow.svg" alt="flèche retour" />
    </router-link>

    <img class="logo" src="../assets/icons/logo.svg" alt="Nock logo" />
  </div>
</template>

<script>
export default {
  props: {
    route: String
  }
};
</script>

<style lang="scss" scoped>
.logo {
  position: relative;
  display: block;
  margin: 20px auto;
  z-index: 0;
}

.arrow {
  position: fixed;
  width: 20px;
  height: 20px;
  top: 40px;
  left: 20px;
}
</style>
