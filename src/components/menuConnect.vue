<template>
    <div>
        <img class="arrow" src="../assets/icons/arrow.svg" alt="flèche retour">
        <img class="logo" src="../assets/logo.png" alt="Nock logo">
    </div>
</template>

<style lang="scss" scoped>
    .logo {
        position: relative;
        display: block;
        margin: 20px auto;
        z-index: 0;
    }
    .arrow{
        position: fixed;
        width: 20px;
        height: 20px;
        top: 40px;
        left: 20px;
    }
</style>