<template>
  <header class="__luna_header">
    <LUNA-NavList>
      <LUNA-NavItem link="/">MAIN</LUNA-NavItem>
      <LUNA-NavItem link="/2019">2019 LUNA</LUNA-NavItem>
      <LUNA-NavItem link="/2018">2018 LUNA</LUNA-NavItem>
      <LUNA-NavItem link="/member">MEMBER</LUNA-NavItem>
      <LUNA-NavItem link="/achievement">ACHIEVEMENT</LUNA-NavItem>
      <LUNA-NavItem link="/faq">FAQ</LUNA-NavItem>
    </LUNA-NavList>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LUNA_Header extends Vue {
}
</script>

<style lang="scss">
.__luna_header {
  display: flex;
  padding: 25px;
  justify-content: center;
}
</style>
