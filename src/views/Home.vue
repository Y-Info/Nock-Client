<template>
  <div class="h-100">
    <div class="container background">
      <div class="flex justify-between align-center">
        <img src="../assets/icons/logo.svg" alt="Nock logo" />
        <router-link to="/">
          <img src="../assets/icons/profile-icon.svg" alt="Profile icon" />
        </router-link>
      </div>
      <div class="images">
        <img src="../assets/img/home-1.png" alt="Image loader-1" />
        <div class="second-row">
          <img src="../assets/img/home-2.png" alt="Image loader-2" />
          <img src="../assets/img/home-3.png" alt="Image loader-3" />
        </div>
      </div>
      <div class="mt-8">
        <h2 class="uppercase text--yellow title">
          Titre principal
        </h2>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut ero labore et dolore.
        </p>
        <div class="button-container">
          <router-link
            class="block bg--blue uppercase pa-4 border-radius-full button"
            to="/"
          >
            Créer sa salle
          </router-link>
        </div>
        <div class="mt-20">
          <h2 class="uppercase text--yellow title">
            Sous-titre
          </h2>
          <Map />
          <p class="text mt-20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut ero labore et dolore.
          </p>
        </div>
      </div>
    </div>
    <div style="height:300px;margin-top:62px;" class="bg--yellow">
      Footer
    </div>
  </div>
</template>

<script>
import Map from "../components/Map";

export default {
  components: {
    Map
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 14px;
  text-align: center;
  font-weight: bold;
}

.text {
  font-size: 12px;
  text-align: center;
  line-height: 24px;
}

.button-container {
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 26px;
}

.images {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  img:first-child {
    width: 100%;
  }
  img {
    padding: 5px;
  }
  .second-row img {
    width: 50%;
  }
}
</style>
