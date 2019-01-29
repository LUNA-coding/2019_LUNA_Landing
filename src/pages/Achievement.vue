<template>
  <section id="Achievement" class="section">
    <div class="top">
      <img src="@/assets/img/illust.png">
      <img src="@/assets/img/slogan.png">
      <img src="@/assets/img/luna.png">
    </div>
    <div class="description">
      <div style="text-align:left;"><span>2017년부터 LUNA는</span></div>
      <div class="subdesc">
        <img src="@/assets/img/prize.png">
        <div class="col">
          <span class="big">30</span>
          여개의 대회에서
        </div>
        <img src="@/assets/img/money.png">
        <div class="col">
          약
          <span class="big">1,800</span>
          만원의 상금을
        </div>
      </div>
      <div style="text-align:right;"><span>획득하며 세상을 비추고 있습니다.</span></div>
    </div>
    <div id="list">
      <div class="row" v-for="(p, i) in list" :key="i">
        <div class="name">{{p[0]}}</div>
        <div class="desc">{{p[1]}}</div>
      </div>
    </div>
    <img class="bg" src="@/assets/img/bg_achievement.png">
    <div class="bottom">
      <div class="social-list">
        <a class="social-item" href="https://fb.com/lunacoding" target="_blank"><img src="@/assets/img/ic_facebook.png"></a>
        <a class="social-item" href="https://github.com/LUNA-DIMIGO" target="_blank"><img src="@/assets/img/ic_github.png"></a>
      </div>
      <span>Copyrightⓒ 2019 LUNA All rights reserved.</span>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import list from '../assets/json/achievement.json';
@Component
export default class Achievement extends Vue {
  public list = list;
}
</script>

<style lang="scss">
body.achievement {
  background-image: linear-gradient(#031444, #396ba3);
}
</style>

<style lang="scss" scoped>
#Achievement {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('../assets/img/star.png');
  background-position: center;
  background-size: auto 100%;
  background-repeat: no-repeat;
}
.top {
  display: flex;
  flex-direction: column;
  img {
    max-width: 140px;
    @media (min-width: $screen-tablet) {
      max-width: 170px;
    }
    @media (min-width: $screen-desktop) {
      max-width: 200px;
    }
  }
}
.description {
  margin: 10px 10px 30px 10px;
  @media (min-width: $screen-tablet) {
    margin-top: 15px;
    margin-bottom: 40px;
  }
  @media (min-width: $screen-desktop) {
    margin-top: 20px;
    margin-bottom: 50px;
  }
  &>div {
    margin-bottom: 20px;
  }
  &>div:last-child {
    margin-bottom: 0;
  }
  .subdesc {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .col {
    display: inline-block;
  }
  .big {
    font-size: 30px;
    @media (min-width: $screen-tablet) {
      font-size: 50px;
    }
    @media (min-width: $screen-desktop) {
      font-size: 70px;
    }
  }
  span {
    font-size: 16px;
    @media (min-width: $screen-tablet) {
      font-size: 18px;
    }
    @media (min-width: $screen-desktop) {
      font-size: 20px;
    }
  }
  img {
    vertical-align: middle;
    margin: 0 5px;
    max-width: 40px;
    @media (min-width: $screen-tablet) {
      margin: 0 7px;
      max-width: 70px;
    }
    @media (min-width: $screen-desktop) {
      margin: 0 10px;
      max-width: 100px;
    }
  }
  img:first-child {
    margin-left: 0;
  }
}
#list {
  padding: 0 10px;
  .row {
    margin-bottom: 16px;
    @media (min-width: $screen-tablet) {
      margin-bottom: 18px;
    }
    @media (min-width: $screen-desktop) {
      margin-bottom: 20px;
    }
    .name {
      display: flex;
      align-items: center;
      font-size: 16px;
      vertical-align: middle;
      margin-bottom: 5px;
      @media (min-width: $screen-tablet) {
        font-size: 18px;
      }
      @media (min-width: $screen-desktop) {
        font-size: 20px;
      }
      &::before {
        content: '';
        display: inline-block;
        width: 15px;
        height: 15px;
        margin-right: 6px;
        background-size: 100%;
        background-image: url(../assets/img/moon.png);
        @media (min-width: $screen-tablet) {
          width: 20px;
          height: 20px;
          margin-right: 8px;
        }
        @media (min-width: $screen-desktop) {
          width: 25px;
          height: 25px;
          margin-right: 10px;
        }
      }
    }
    .desc {
      margin-left: 15px;
      font-size: 12px;
      text-align: left;
      @media (min-width: $screen-tablet) {
        margin-left: 25px;
        font-size: 14px;
      }
      @media (min-width: $screen-desktop) {
        margin-left: 35px;
        font-size: 16px;
      }
    }
  }
}
.bg {
  width: 100%;
  z-index: 0;
}
.bottom {
  position: relative;
  margin-top: -90px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 10px;
}
.social {
  &-list {
    padding: 10px;
  }
  &-item {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
    img {
      width: 30px;
    }
  }
}
</style>
