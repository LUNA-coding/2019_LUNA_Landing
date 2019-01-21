<template>
  <router-link :class="{
    '__luna_header_nav_item': true,
    '__luna_header_nav_item_active': isActive
    }"
    :to="link">
    <slot/>
  </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class LUNA_NavItem extends Vue {
  @Prop({ default: '' }) public link!: string;
  get isActive(): boolean {
    return this.$route.path === this.link;
  }
}
</script>

<style lang="scss">
.__luna_header_nav_item {
  box-sizing: border-box;
  font-size: 23px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  margin: 0 50px;
  display: inline-block;
  padding-bottom: 10px;
  font-weight: normal;
  &_active {
    color: #fff;
    font-weight: bold;
    border-bottom: 2px solid #fff;
  }
}
</style>
