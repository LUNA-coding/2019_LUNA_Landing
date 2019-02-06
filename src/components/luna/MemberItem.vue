<template>
  <div class="__luna-memberitem">
    <div class="__luna-memberitem-top">
      <img class="__luna-memberitem-profile" :src="require(`../../assets/img/person/${name}.png`)">
      <div class="__luna-memberitem-caption">
        <div class="__luna-memberitem-sid">{{sid}}</div>
        <div class="__luna-memberitem-name">{{name}}</div>
        <div class="__luna-memberitem-hashtag"><span v-for="(tag, index) in hashtag" :key="index">#{{tag}}</span></div>
      </div>
    </div>
    <div class="__luna-memberitem-desc" v-html="desc">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class LUNA_MemberItem extends Vue {
  @Prop({ default: '' }) public sid!: string;
  @Prop({ default: '' }) public name!: string;
  @Prop({ default: [] }) public hashtag!: string[];
  @Prop({ default: '' }) public desc!: string;
}
</script>

<style lang="scss">
.__luna-memberitem {
  display: flex;
  flex-direction: column;
  width: 355px;
  height: 335px;
  margin: 10px 10px;
  &-top {
    display: flex;
  }
  &-profile {
    width: 160px;
    height: 160px;
    margin: 5px;
  }
  &-caption {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 15px;
    width: 150px;
  }
  &-sid {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;
  }
  &-name {
    font-weight: bold;
    font-size: 45px;
    margin-bottom: 5px;
  }
  &-hashtag {
    font-family: 'KimNamyun';
    font-size: 15px;
    span {
      margin-right: 5px;
      word-break: keep-all;
      display: inline-block;
    }
  }
  &-desc {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-family: 'KimNamyun';
    font-size: 26px;
    top: -20px;
    left: -12.5px;
    width: 380px;
    height: 180px;
    background-image: url('../../assets/img/brush.png');
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
