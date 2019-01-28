<template>
  <section id="Main" class="section">
    <img class="bg" ref="bg" src="@/assets/img/bg_main.png">
    <div class="bg2" :style="{'top': `calc(50% + ${bgHeight/2}px)`}"></div>
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
  private bgHeight = 0;
  private mounted() {
    const setBgHeight = () => {
      this.bgHeight = this.$refs.bg.clientHeight - 2;
      setTimeout(setBgHeight,100);
    };
    this.$nextTick(setBgHeight);
  }
}
</script>

<style lang="scss">
body.main {
  background-image: radial-gradient(#437ab5, #061d4e);
}
</style>

<style lang="scss" scoped>
#Main {
}
.bg {
  position: absolute;
  bottom: 0;
  width: 100vw;
  z-index: 0;
  top: 50%;
  transform: translateY(-50%);
}
.bg2 {
  position: absolute;
  bottom: 0;
  background: #060E29;
  width: 100%;
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
