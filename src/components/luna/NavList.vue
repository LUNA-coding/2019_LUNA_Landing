<template>
  <nav class="__luna-header-nav-list">
    <slot/>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LUNA_NavList extends Vue {
}
</script>

<style lang="scss">
.__luna-header-nav-list {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 710px) {
    flex-direction: row;
  }
  &>div {
    display: inline;
  }
}
</style>
