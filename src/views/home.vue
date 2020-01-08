<template>
  <div>
    <div class="container background">
      <div class="flex justify-between align-center">
        <img src="../assets/icons/logo.svg" alt="Nock logo" />
        <router-link to="/connect">
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
          Nock
        </h2>
        <p class="text">
          Notre application permet de rejoindre une communauté proche de chez
          vous. Vos voisins sont peut être déjà parmis nos utilisateurs,
          <strong>rejoignez les vites !</strong>
        </p>
        <div class="button-container">
          <router-link
            class="block bg--blue uppercase pa-4 border-radius-full button"
            to="/find-room"
          >
            Créer son espace
          </router-link>
        </div>
        <div class="mt-20">
          <h2 class="uppercase text--yellow title">
            Rejoigner vos voisins où que vous soyez
          </h2>
          <Map
            :styleSize="styleMap"
            :hasSearchBar="false"
            :center="[]"
            :hasMarker="false"
          />
        </div>
      </div>
    </div>
    <div style="height:150px;margin-top:62px;" class="bg--yellow"></div>
  </div>
</template>

<script>
import Map from "../components/Map";

export default {
  components: {
    Map
  },
  data() {
    return {
      styleMap: "height: 300px; width: 100%;"
    };
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
