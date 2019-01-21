<template>
  <section id="Main" class="section">
    <img class="bg" src="@/assets/img/bg_main.png">
    <div class="bottom">
      <div class="social-list">
        <a class="social-item" href="https://fb.com/lunacoding" target="_blank"><img src="@/assets/img/ic_facebook.png"></a>
        <a class="social-item" href="https://github.com/LUNA-DIMIGO" target="_blank"><img src="@/assets/img/ic_github.png"></a>
      </div>
      <span>Copyrightⓒ 2019 LUNA All rights reserved.</span>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Main extends Vue {

}
</script>

<style lang="scss" scpoed>
#Main {
}
.bg {
  position: absolute;
  bottom: 0;
  width: 100vw;
  z-index: 0;
}
.bottom {
  position: absolute;
  left: 25px;
  bottom: 25px;
  text-align: left;
  color: rgba(255, 255, 255, 0.5);
  font-size: 10px;
}
.social {
  &-list {
    padding: 10px;
  }
  &-item {
    img {
      width: 30px;
      margin-right: 10px;
    }
  }
}
</style>
