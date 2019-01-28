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

@mixin container-fixed($gutter: $grid-gutter-width) {
  margin-right: auto;
  margin-left: auto;
  padding-left:  floor(($gutter / 2));
  padding-right: ceil(($gutter / 2));
}

$screen-xs:                  480px !default;
$screen-xs-min:              $screen-xs !default;
$screen-phone:               $screen-xs-min !default;

$screen-sm:                  768px !default;
$screen-sm-min:              $screen-sm !default;
$screen-tablet:              $screen-sm-min !default;

$screen-md:                  992px !default;
$screen-md-min:              $screen-md !default;
$screen-desktop:             $screen-md-min !default;

$screen-lg:                  1200px !default;
$screen-lg-min:              $screen-lg !default;
$screen-lg-desktop:          $screen-lg-min !default;

$grid-gutter-width:         30px !default;

$container-tablet:             (720px + $grid-gutter-width) !default;
$container-sm:                 $container-tablet !default;

$container-desktop:            (940px + $grid-gutter-width) !default;
$container-md:                 $container-desktop !default;

$container-large-desktop:      (1140px + $grid-gutter-width) !default;
$container-lg:                 $container-large-desktop !default;
.container {
  display: flex;
  flex-direction: column;
  @include container-fixed;

  @media (min-width: $screen-sm-min) {
    width: $container-sm;
  }
  @media (min-width: $screen-md-min) {
    width: $container-md;
  }
  @media (min-width: $screen-lg-min) {
    width: $container-lg;
  }
}
</style>
