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
        <p class="margin">S'agit-il bien de votre adresse ?</p>

        <div class="button-container">
            <router-link class="buttonClick buttonAfter" to="/inscription">Retour</router-link>
            <router-link class="buttonClick buttonBefore" to="/validate-adress">Confirmer</router-link>
        </div>
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

    .resultAdress {
        background-color: #FFFFFF;
        padding: 10px;
        margin: 60px 20px 20px 20px;
        border-radius: 5px;

        -webkit-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
        -moz-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
        box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);

        .adress {
            display: inline-block;
            vertical-align: top;
            width: 70%;
            margin: 10px;

            h3 {
                font-size: 12px;
                margin-top: 0;
            }
            p{
                font-size: 10px;
            }
        }
        img{
            display: inline-block;
            vertical-align: top;
            margin-top: 10px;
            width: 50px;
            height: 50px;
        }
    }
    .margin{
        margin: 20px;
        font-size: 12px;
    }
    .button-container {
        font-family: Montserrat B, sans-serif;
        text-align: center;
        margin-top: 140px;
        font-size: 10px;
        text-transform: uppercase;
        font-weight: 800;

        .buttonClick {
            margin: 20px 10px 10px 10px;
            padding: 18px 40px;
            border-radius: 5px;
            text-decoration: none;

            -webkit-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
            -moz-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
            box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
        }

        .buttonBefore {
            background-color: #2e3460;
            color: white;
        }

        .buttonAfter {
            background-color: white;
            color: #2e3460;
        }
    }
</style>