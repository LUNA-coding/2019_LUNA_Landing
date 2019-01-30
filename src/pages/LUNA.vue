<template>
  <section id="LUNA" class="section container">
    <div class="paragraph paragraph-left">
      <img class="image" src="@/assets/img/lunaslogan.png">
      <div class="message">
        <span>
          LUNA는 평등한 교육을 위한 정기구독형<br>
          코딩 교육 플랫폼인 ‘LUNA Coding’을<br>
          중심으로 모이게 된 동아리입니다.<br>
          함께 ‘LUNA Coding’을 만들어가며 개인<br>
          혹은 팀이 여러 프로젝트를 진행합니다.
        </span>
      </div>
    </div>
    <div class="paragraph paragraph-right">
      <img class="image" src="@/assets/img/graph.png">
      <div class="message">
        <span>
          개발, 기획, 디자인 등 다양한 분야에 대해서<br>
          활동을 이어오고 있으며 각 분야의 실력도<br>
          뛰어나지만 특히 여러 분야가 함께 협업을<br>
          하는 것에 대해 능숙하다고 자부합니다.
        </span>
      </div>
    </div>
    <div class="paragraph paragraph-left">
      <img class="image" src="@/assets/img/gitlab.png">
      <div class="message">
        <span>
          내부 프로젝트 및 외부 활동을 주로 진행하며<br>
          모든 프로젝트와 자신이 쌓은 경험과 지식들에<br>
          대해서는 내부 혹은 외부적으로 공개하여 <br>
          LUNA가 다 같이 성장할 수 있도록 합니다.
        </span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LUNA extends Vue {
}
</script>

<style lang="scss">
body.luna {
  background-image: linear-gradient(#031444, #396ba3);
}
</style>

<style lang="scss" scoped>
#LUNA {
  box-sizing: border-box;
  max-width: 100%;
  background-image: url('../assets/img/bg_star.png');
  background-position: center;
  background-size: auto 100%;
  background-repeat: no-repeat;
}
.paragraph {
  display: flex;
  &-left {
    flex-flow: row wrap;
    .message {
      text-align: right;
      margin-left: 10px;
      justify-content: flex-end;
    }
  }
  &-right {
    flex-direction: row-reverse;
    .message {
      text-align: left;
      margin-right: 10px;
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
    font-size: 15px;
    line-height: 1.5;
    white-space: nowrap;
    @media (min-width: $screen-tablet) {
      font-size: 20px;
    }
    @media (min-width: $screen-desktop) {
      font-size: 25px;
    }
    @media (min-width: $screen-lg-desktop) {
      font-size: 30px;
    }
  }
}
</style>
