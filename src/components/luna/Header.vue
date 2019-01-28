<template>
  <header class="__luna_header">
    <LUNA-NavList>
      <LUNA-NavItem link="/luna">LUNA</LUNA-NavItem>
      <LUNA-NavItem link="/2018">2018</LUNA-NavItem>
      <LUNA-NavItem link="/2019">2019</LUNA-NavItem>
      <LUNA-NavItem link="/achievement">Achievement</LUNA-NavItem>
      <LUNA-NavItem link="/" type="image"><img src="@/assets/img/logo.png"></LUNA-NavItem>
      <LUNA-NavItem link="/member">Member</LUNA-NavItem>
      <LUNA-NavItem link="/cooperation">Cooperation</LUNA-NavItem>
      <LUNA-NavItem link="/galaxy">Galaxy</LUNA-NavItem>
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
  z-index: 1000;
}
</style>
