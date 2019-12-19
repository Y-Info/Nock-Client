<template>
    <div class="menu-right">
        <h2>Fil d'actualité</h2>
        <router-link to="/#">
            <img class="menuRight" src="../assets/icons/menu.svg" alt="lien menu" />
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
    h2{
        color: #ffba00;
        font-size: 14px;
        margin: 30px 0 0 30px;
    }
    .menuRight{
        position: fixed;
        right: 30px;
        top: 30px;
    }
</style>