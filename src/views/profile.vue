<template>
    <div>
        <menu-connect route="/connect"/>
        <div class="profilUser">
            <img src="../assets/img/profilUser.svg" alt="photo de profil">
            <p class="name">Nom Prénom</p>
        </div>
        <div class="infoUser">
            <div class="info">
                <img src="../assets/icons/phone.svg" alt="icon phone">
                <p>+33 6 78 96 84 37</p>
                <div class="ligne"></div>
            </div>
            <div class="info">
                <img src="../assets/icons/mailIcon.svg" alt="icon mail">
                <p>toto@gmail.com</p>
                <div class="ligne"></div>
            </div>
            <div class="info">
                <img src="../assets/icons/mailIcon.svg" alt="icon mail">
                <p>toto@gmail.com</p>
            </div>
        </div>
        <div class="button-container">
            <router-link class="buttonClick buttonBefore" to="">Modifier les informations</router-link>
        </div>
    </div>
</template>

<script>
    import menuConnect from "../components/menu-connect";

    export default {
        components: {
            menuConnect
        }
    };
</script>

<style lang="scss" scoped>
    .profilUser {
        background-color: #FFFFFF;
        padding: 20px;
        width: 90%;
        height: 210px;
        margin: 0 auto;
        border-radius: 5px;

        -webkit-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
        -moz-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
        box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);

        img {
            display: inline-block;
            vertical-align: top;
            box-sizing: border-box;
            width: 40px;
            height: 40px;
        }

        .name {
            display: inline-block;
            vertical-align: top;
            box-sizing: border-box;
            width: 40%;
            margin: 10px 20px;
            font-size: 14px;
            font-weight: 600;
            color: #2E3460;
        }
    }

    .infoUser {
        background-color: #FFFFFF;
        padding: 20px;
        width: 90%;
        height: 210px;
        margin: 20px auto;
        border-radius: 5px;
        font-size: 12px;

        -webkit-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
        -moz-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
        box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);

        .info {
            margin-top: 20px;

            img {
                display: inline-block;
                vertical-align: top;
                box-sizing: border-box;
                width: 5%;
            }

            p {
                display: inline-block;
                vertical-align: top;
                box-sizing: border-box;
                margin: 0 0 0 45px;
            }

            .ligne {
                background-color: #F8F8F8;
                width: 100%;
                height: 2px;
                margin-top: 20px;
            }
        }
    }
    .button-container {
        font-weight: bold;
        text-align: center;
        margin-top: 70px;
        font-size: 10px;
        text-transform: uppercase;

        .buttonClick {
            display: block;
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
    }
</style>