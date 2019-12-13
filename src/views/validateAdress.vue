<template>
    <div>
        <menu-connect route="/"/>
        <h2>Vous allez rejoindre <br> La room :</h2>
        <div class="resultAdress">
            <div class="adress">
                <h3>Numéro et nom de rue</h3>
                <p>Code postal & Ville</p>
            </div>
            <img src="../assets/img/imgAdress.svg" alt="Visuel adresse">
        </div>
        <router-link to="/maps">Retour</router-link>
        <router-link to="/connect">Confirmer</router-link>
    </div>
</template>

<script>
    import MenuConnect from "../components/menuConnect";

    export default {
        components: {MenuConnect}
    }
</script>

<style lang="scss" scoped>
    h2 {
        margin-top: 85px;
        text-align: center;
        font-size: 14px;
        color: #2E3460;
        text-transform: uppercase;
    }
    .resultAdress{
        background-color: #FFFFFF;
        padding: 10px;
        
    }
</style>