<template>
  <div>
    <h1>Page connection</h1>

    <form id="connect" @submit="checkForm" action="/" method="post">
      <p>
        <label for="email"><img src="" alt=""></label>
          <input type="email" name="email" id="email" v-model="email">

        <label for="password"><img src="" alt=""></label>
        <input type="password" name="password" id="password" v-model="password" min="0" />
      </p>
    </form>

    <router-link to="/">Mot de passe oublié ?</router-link>
    <div class="button">
      <router-link class="buttonClick buttonBefore" to="/validate-adress">Retour</router-link>
      <router-link class="buttonClick buttonAfter" to="/inscription">Confirmer</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .button{
    font-family: Montserrat B, sans-serif;
    text-align: center;
    margin-top: 50px;
    font-size: 10px;
    text-transform: uppercase;

      .buttonClick{
        display: block;
        margin: 10px;
        padding: 18px 40px;
        border-radius: 5px;
        text-decoration: none;

        -webkit-box-shadow: 0 3px 6px -2px rgba(0,0,0, 0.50);
        -moz-box-shadow: 0 3px 6px -2px rgba(0,0,0, 0.50);
        box-shadow: 0 3px 6px -2px rgba(0,0,0, 0.50);
      }
      .buttonBefore{
        background-color: #2E3460;
        color: white;
      }
      .buttonAfter {
        background-color: white;
        color:  #2E3460;
      }
  }

</style>
