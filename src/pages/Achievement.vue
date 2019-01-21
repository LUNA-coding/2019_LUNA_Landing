<template>
  <section id="Achievement" class="section">
    
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Main extends Vue {
}
</script>

<style lang="scss">
body.achievement {
  background-image: linear-gradient(#031444, #396ba3);
}
</style>

<style lang="scss" scoped>
#Achievement {
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
