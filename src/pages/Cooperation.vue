<template>
  <section id="Cooperation" class="section container">
    <div class="paragraph paragraph-right">
      <img class="image" src="@/assets/img/kkuko_unipad.png">
      <div class="message">
        <div class="title">Cooperation</div>
        <span>
          다양한 기업 및 서비스와의 협업을 통해<br>
          동아리원들이 실전 경험을 쌓고,<br>
          한층 더 성장할 수 있도록 돕습니다.<br>
        </span>
        <div class="desc">
          <span><img @click="go('https://kkutu.co.kr')" class="logo1" src="@/assets/img/kkuko_logo.png">와 <img @click="go('https://www.facebook.com/playunipad')" class="logo2" src="@/assets/img/unipad_logo.png">가</span>
          <span>루나와 언제나 함께합니다.</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import list from '../assets/json/achievement.json';
@Component
export default class Cooperation extends Vue {
  public go(url: string) {
    window.open(url, '_blank');
  }
}
</script>

<style lang="scss">
body.cooperation {
  background-image: radial-gradient(#437ab5, #061d4e);
}
</style>

<style lang="scss" scoped>
#Cooperation {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('../assets/img/bg_star.png');
  background-position: center;
  background-size: auto 100%;
  background-repeat: no-repeat;
}
.title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
  margin-left: -20px;
  @media (min-width: $screen-tablet) {
    font-size: 40px;
  }
  @media (min-width: $screen-desktop) {
    font-size: 45px;
  }
  @media (min-width: $screen-lg-desktop) {
    font-size: 50px;
  }
}
.desc {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  img {
    vertical-align: middle;
    cursor: pointer;
  }
  .logo1 {
    height: 40px;
    @media (min-width: $screen-tablet) {
      height: 50px;
    }
    @media (min-width: $screen-desktop) {
      height: 60px;
    }
    @media (min-width: $screen-lg-desktop) {
      height: 70px;
    }
  }
  .logo2 {
    height: 26px;
    @media (min-width: $screen-tablet) {
      height: 36px;
    }
    @media (min-width: $screen-desktop) {
      height: 46px;
    }
    @media (min-width: $screen-lg-desktop) {
      height: 58px;
    }
  }
  span:nth-child(2) {
    text-align: right;
  }
}
.paragraph {
  display: flex;
  flex-flow: row wrap;
  .image {
    flex: 1;
    min-width: 0;
    min-height: 0;
    object-fit: contain;
  }
  .message {
    flex: 1;
    text-align: left;
    margin-left: 40px;
    justify-content: center;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    line-height: 1.5;
    white-space: nowrap;
    @media (min-width: $screen-tablet) {
      font-size: 18px;
    }
    @media (min-width: $screen-desktop) {
      font-size: 23px;
    }
    @media (min-width: $screen-lg-desktop) {
      font-size: 28px;
    }
  }
}
</style>
