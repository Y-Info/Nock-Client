<template>
    <div>
        <menuRight/>
        <menu-bottom/>
        <div class="content">
            <div class="userPost">
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import menuBottom from "../components/menu-bottom";
import menuRight from "../components/menu-right";
export default {
  components: {
    menuBottom,
    menuRight
  }
};
</script>

<style lang="scss" scoped>


</style>