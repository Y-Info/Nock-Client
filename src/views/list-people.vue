<template>
    <div>
        <menuRight/>
        <div class="listPost">
            <div class="post">
                <div class="userPost">
                    <img src="../assets/img/profilUser.svg" alt="Photo de profil">
                    <div class="infoProfil">
                        <p>Nom Prénom</p>
                        <p>Etage : 1</p>
                    </div>
                </div>
            </div>
            <div class="post">
                <div class="userPost">
                    <img src="../assets/img/profilUser.svg" alt="Photo de profil">
                    <div class="infoProfil">
                        <p>Nom Prénom</p>
                        <p>Etage : 1</p>
                    </div>
                </div>
            </div>
            <div class="post">
                <div class="userPost">
                    <img src="../assets/img/profilUser.svg" alt="Photo de profil">
                    <div class="infoProfil">
                        <p>Nom Prénom</p>
                        <p>Etage : 1</p>
                    </div>
                </div>
            </div>
            <div class="post">
                <div class="userPost">
                    <img src="../assets/img/profilUser.svg" alt="Photo de profil">
                    <div class="infoProfil">
                        <p>Nom Prénom</p>
                        <p>Etage : 1</p>
                    </div>
                </div>
            </div>
            <div class="post">
                <div class="userPost">
                    <img src="../assets/img/profilUser.svg" alt="Photo de profil">
                    <div class="infoProfil">
                        <p>Nom Prénom</p>
                        <p>Etage : 1</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import menuRight from "../components/menu-right";

    export default {
        components: {
            menuRight
        }
    };
</script>

<style lang="scss" scoped>
    .listPost {
        margin-top: 50px;

        .post {
            background-color: #FFFFFF;
            margin: 10px;

            -webkit-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
            -moz-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
            box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);

            .userPost {
                padding: 20px;
                border-radius: 5px;
                margin: 10px;

                img {
                    display: inline-block;
                    vertical-align: top;
                    box-sizing: border-box;
                    width: 40px;
                    height: 40px;
                }

                .infoProfil {
                    display: inline-block;
                    vertical-align: top;
                    box-sizing: border-box;
                    width: 70%;

                    p:first-child {
                        margin: 0 0 0 20px;
                        font-size: 12px;
                        font-weight: 600;
                    }

                    p:last-child {
                        margin: 10px 0 0 20px;
                        font-size: 10px;
                        font-weight: 400;
                    }
                }
            }
        }
    }

</style>