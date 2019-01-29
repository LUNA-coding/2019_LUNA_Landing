<template>
  <section id="Member" class="section container">
    <div class="paragraph" v-for="(list, index) in memberList" :key="index">
      <div class="title">{{list.title}}</div>
      <div class="list">
        <LUNA-MemberItem
          v-for="(member, index2) in list.list"
          :key="index2"
          :sid="member.sid"
          :name="member.name"
          :hashtag="member.hashtag"
          :desc="member.desc">
        </LUNA-MemberItem>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import list from '../assets/json/memberlist.json';
@Component
export default class Member extends Vue {
  public memberList = list;
}
</script>

<style lang="scss">
body.member {
  background-image: linear-gradient(#031444, #396ba3);
}
</style>

<style lang="scss" scoped>
.paragraph {
  display: flex;
  flex-direction: column;
  margin: 50px 0;
}
.list {
  margin-top: 50px;
}
.title {
  font-size: 40px;
  text-align: left;
  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 6px;
    background-size: 100%;
    background-image: url(../assets/img/moon.png);
    vertical-align: middle;
    @media (min-width: $screen-tablet) {
      width: 30px;
      height: 30px;
      margin-right: 8px;
    }
    @media (min-width: $screen-desktop) {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
  }
}
.list {
  display: flex;
  flex-flow: row wrap;
}
</style>
