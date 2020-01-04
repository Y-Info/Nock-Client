<template>
  <div class="container relative">
    <Map
      :styleSize="styleMap"
      :hasSearchBar="true"
      :provider="provider"
      :center="center"
      :zoom="zoomMap"
      :hasMarker="markerMap"
    />
    <div class="topbar">
      <router-link to="/">
        <img
          class="arrow"
          src="../assets/icons/arrow.svg"
          alt="flèche retour"
        />
      </router-link>
      <h1 class="uppercase text--blue title">Trouve ton espace</h1>
    </div>
    <div class="searchbar border-radius-full">
      <img class="search" src="../assets/icons/search.svg" alt="icon mail" />
      <input
        placeholder="Rechercher une adresse"
        class="address text--yellow"
        type="text"
        name="address"
        v-model="address"
        @change="getAdress"
        searchbar="1"
      />
    </div>
    <div
      class="card"
      v-for="(adresse, index) in evenAdresses"
      :key="index"
      v-on:click="goToAdresse(adresse)"
    >
      <div class="flex justify-between">
        <p class="address-name">
          {{ adresse.label }}
        </p>
        <img
          width="25%"
          style="margin-top:10px"
          src="../assets/img/imgAdress.svg"
          alt="Building image"
        />
      </div>
      <p class="address-distance"></p>
    </div>
    <div class="buttons-action fixed  uppercase">
      <div
        v-if="!buildingFound && address != null && addresses.length == 1"
        v-on:click="createRoom()"
      >
        Créer un espace
      </div>
      <div v-if="buildingFound" v-on:click="joinRoom()">
        Rejoindre un espace
      </div>
    </div>
  </div>
</template>

<script>
import Map from "../components/Map";
import { OpenStreetMapProvider } from "leaflet-geosearch";
// import apirequest from "../utils/apirequest";
import axios from "axios";

export default {
  components: {
    Map
  },
  data() {
    return {
      address: this.value,
      addresses: [],
      styleMap:
        "height: 100vh; width: 100vw; position:absolute; top:0px; left:0px; z-index: -1",
      provider: new OpenStreetMapProvider(),
      center: [],
      zoomMap: 5,
      markerMap: false,
      buildingFound: false
    };
  },
  methods: {
    async getAdress() {
      const results = await this.provider.search({ query: this.address });
      this.addresses = results;
      this.buildingFound = false;
      if (results.length != 0) {
        this.center = [results[0].y, results[0].x];
        this.zoomMap = 18;
        this.markerMap = true;
      } else {
        this.center = [];
        this.zoomMap = 5;
        this.markerMap = false;
      }
      if (results.length == 1) {
        this.checkRoomExist(results.label);
      }
    },
    goToAdresse(adresse) {
      this.addresses = [adresse];
      this.center = [adresse.y, adresse.x];
      this.markerMap = true;
      this.zoomMap = 18;
      this.checkRoomExist(adresse.label);
    },
    checkRoomExist(adresse) {
      axios
        .get("https://nock-nock.herokuapp.com/api/building/filter/adress", {
          address: adresse
        })
        .then(function(res) {
          if (res.length != 0) {
            this.addresses = [adresse];
            this.buildingFound = true;
          }
        })
        .catch(err => console.log(err.response));
    },
    joinRoom() {
      console.log("join");
      this.$router.push("/feed");
    },
    createRoom() {
      axios
        .post("https://nock-nock.herokuapp.com/api/building", {
          address: this.addresses[0],
          location: {
            type: "Point",
            coordinates: [this.addresses[0].x, this.addresses[0].y]
          }
        })
        .then(function(res) {
          if (res.length != 0) {
            // this.addresses = [this.adresse];
            //TODO: modification d'un building spécifique pour ajout de l'utilisateur courant
            this.buildingFound = true;
          }
        })
        .catch(err => console.log(err.response));
      this.$router.push("/feed");
    }
  },
  computed: {
    evenAdresses: function() {
      return this.addresses.filter(function(adresse, index) {
        return index < 4;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
}
.topbar {
  display: flex;
  justify-content: center;
}
.arrow {
  position: fixed;
  width: 20px;
  height: 20px;
  top: 40px;
  left: 20px;
}
.title {
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}
.searchbar {
  background-color: white;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  padding: 15px 30px;
  -webkit-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  input {
    font-size: 1em;
  }
}
.search {
  margin-right: 10px;
}
.address {
  font-family: "Montserrat", sans-serif;
  font-size: 8px;
  border: none;
  border-bottom: $yellow 1px solid;
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: center;
}
.address::placeholder {
  color: $yellow;
}
.card {
  background-color: white;
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  -webkit-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  .address-name {
    font-size: 12px;
    font-weight: bold;
  }
  .address-distance {
    font-size: 12px;
    margin-top: -8px;
  }
}

.buttons-action {
  bottom: 25px;
  font-size: 10px;
  font-weight: bold;
  width: 80%;
  text-align: center;
  div {
    padding: 10px 20px;
    border-radius: 5px;
    margin: 0 5px;
    -webkit-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
    box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  }
  div:first-child {
    background-color: white;
    color: $blue;
  }
  div:nth-child(2) {
    color: $white;
    background: $blue;
  }
}
</style>
