<template>
  <div>
    <a @click="goBack">
      <img class="arrow" src="../assets/icons/arrow.svg" alt="flèche retour" />
    </a>

    <img class="logo" src="../assets/icons/logo.svg" alt="Nock logo" />
  </div>
</template>

<script>
export default {
  props: {
    route: String
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
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
