<template>
  <section id="FAQ" class="section">
    <div class="name">FAQ</div>
    <div v-for="(item, index) in list" :key="index" :class="['paragraph', `paragraph-${index%2?'right':'left'}`]">
      <div class="title">
        <span v-html="item.title"/>
      </div>
      <div class="message">
        <span v-html="item.message"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import list from '../assets/json/faq.json';

@Component
export default class FAQ extends Vue {
  public list = list;
}
</script>

<style lang="scss">
body.faq {
  background-image: linear-gradient(#031444, #396ba3);
}
</style>

<style lang="scss" scoped>
#FAQ {
  width: 100%;
}
.name {
  font-size: 40px;
  font-weight: bold;
}
.paragraph {
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  &-left {
    align-items: flex-start;
    .title {
      margin-left: 40px;
    }
    .message {
      text-align: left;
      margin-left: 10px;
      justify-content: flex-start;
      border-top-right-radius: 100px;
      border-bottom-right-radius: 100px;
      padding-left: 100px;
      border-left: none !important;
    }
  }
  &-right {
    align-items: flex-end;
    .title {
    }
    .message {
      text-align: right;
      margin-right: 10px;
      justify-content: flex-end;
      border-top-left-radius: 100px;
      border-bottom-left-radius: 100px;
      padding-right: 100px;
      border-right: none !important;
    }
  }
  .title {
    font-size: 16px;
    text-align: left;
    display: flex;
    align-items: center;
    @media (min-width: $screen-tablet) {
      font-size: 19px;
    }
    @media (min-width: $screen-desktop) {
      font-size: 22px;
    }
    @media (min-width: $screen-lg-desktop) {
      font-size: 25px;
    }
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
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
    }
  }
  .message {
    display: flex;
    align-items: center;
    border: 2px solid #fff;
    line-height: 2;
    height: 140px;
    width: 350px;
    @media (min-width: $screen-tablet) {
      height: 160px;
      width: 400px;
    }
    @media (min-width: $screen-desktop) {
      height: 180px;
      width: 450px;
    }
    @media (min-width: $screen-lg-desktop) {
      height: 200px;
      width: 500px;
    }
  }
}
</style>
