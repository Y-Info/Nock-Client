<template>
    <div class="menu-right">
        <h2>{{ title }}</h2>
        <div class="menu active">
            <img class="menuRight" src="../assets/icons/menu.svg" alt="lien menu"/>


        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String
        }
    };
</script>

<style lang="scss" scoped>
    h2 {
        color: #ffba00;
        font-size: 14px;
        margin: 30px 0 0 30px;
    }

    .menuRight {
        z-index: 30;
        position: fixed;
        right: 30px;
        top: 30px;
    }

    .active {
      background-color: #FFBA00;
    }

</style>
