<template>
  <div id="luna">
    <LUNA-Header/>
    <transition name="page">
    <router-view/>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
}
</script>


<style lang="scss">
@import url(./assets/fonts/KoPubDotum.css);
@import url(//cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css);
#luna {
  font-family: 'KoPub Dotum', 'KoPub Batang', 'Spoqa Han Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
section {
  flex: 1;
  display: flex;
  flex-direction: column;
}
body {
  padding: 0;
}

.page-enter-active, .page-leave-active {
  transition: opacity .7s ease;
}
.page-enter, .page-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
