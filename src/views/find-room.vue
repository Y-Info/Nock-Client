<template>
  <div class="container relative">
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
      />
    </div>
    <div class="card">
      <div class="flex justify-between">
        <p class="address-name">
          {{ addresses[0].address }}
        </p>
        <img
          width="15%"
          style="margin-top:10px"
          src="../assets/img/imgAdress.svg"
          alt="Building image"
        />
      </div>
      <p class="address-distance">
        {{ addresses[0].distance }}
      </p>
    </div>
    <div class="buttons-action fixed flex justify-between uppercase">
      <router-link to="/">
        Créer un espace
      </router-link>
      <router-link to="/">
        Rejoindre un espace
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: this.value,
      addresses: [
        {
          address: "497 Evergreen Rd. Roseville",
          distance: "4.6 mi"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
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
  margin-top: 30px;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  -webkit-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
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
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  -webkit-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
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
  a {
    padding: 10px 20px;
    border-radius: 5px;
    margin: 0 5px;
    -webkit-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
    box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  }
  a:first-child {
    color: $blue;
  }
  a:nth-child(2) {
    color: $white;
    background: $blue;
  }
}
</style>
