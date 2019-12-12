<template>
  <div>
    <h1>Vous allez rejoindre la room</h1>

    <form id="connect" @submit="checkForm" action="/" method="post">
      <p>
        <label for="email">Email</label>
          <input type="email" name="email" id="email" v-model="email">

        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="password" min="0" />
      </p>
    </form>

    <router-link to="/">Mot de passe oublié ?</router-link>

    <router-link class="boutonBefore" to="/validate-adress">Retour</router-link>
    <router-link class="boutonAfter" to="/inscription">Confirmer</router-link>
  </div>
</template>
