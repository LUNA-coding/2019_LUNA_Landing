<template>
  <nav class="__luna_header_nav_list">
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
.__luna_header_nav {
}
</style>
