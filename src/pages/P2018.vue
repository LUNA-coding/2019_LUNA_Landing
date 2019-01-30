<template>
  <section id="P2018" class="section container">
    <div>
      <img class="slogan" src="@/assets/img/slogan2.png">
    </div>
    <div class="paragraph paragraph-right">
      <img class="image" src="@/assets/img/2018_present.png">
      <div class="message">
        <span>
          2018년 처음 생긴 LUNA는 40여개의 프로젝트들을 진행했으며,<br>
          총 외부 대회 수상과 28회의 수상과 5회의 부스 운영이라는<br>
          유일무이한 실적을 이루었습니다.<br>
          특히 개인, 팀 뿐만 아니라 LUNA 자체로도 5회 수상하였고<br>
          1학년이 주로 활동하였기에 더욱 의미가 있습니다.<br>
        </span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class P2018 extends Vue {
}
</script>

<style lang="scss">
body.p2018 {
  background-image: linear-gradient(#031444, #396ba3);
}
</style>

<style lang="scss" scoped>
#P2018 {
  box-sizing: border-box;
  max-width: 100%;
  background-image: url('../assets/img/bg_star.png');
  background-position: center;
  background-size: auto 100%;
  background-repeat: no-repeat;
}
.slogan {
  max-width: 50%;
  margin: 50px 0;
}
.paragraph {
  display: flex;
  &-left {
    flex-flow: row wrap;
    .message {
      text-align: right;
      margin-left: 20px;
      justify-content: flex-end;
    }
  }
  &-right {
    flex-direction: row-reverse;
    .message {
      text-align: left;
      margin-right: 20px;
      justify-content: flex-start;
    }
  }
  .image {
    flex: 0.8;
    min-width: 0;
    min-height: 0;
    object-fit: contain;
  }
  .message {
    flex: 1;
    display: flex;
    align-items: center;
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
