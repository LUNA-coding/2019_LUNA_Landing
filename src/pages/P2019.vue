<template>
  <section id="P2019" class="section">
    <div>
      <img class="slogan" src="@/assets/img/slogan_2019.png">
    </div>
    <div class="announcement">
      2018년, 더할나위 없었던 LUNA는 18기 여러분들과 함께<br>
      새로운 꿈을 찾아 떠나갑니다.
    </div>
    <div class="paragraph paragraph-left">
      <header>
        <span>Mentoring</span><span>1</span>
      </header>
      <section>
        <img class="image" src="@/assets/img/teach.png">
        <div class="message">
          <span>
            디자인, 웹프로그래밍, 안드로이드, 3D 모델링 등<br>
            다양한 분야에 대해 학습해 보며 자신의 적성을 알아<br>
            보고 프로젝트를 진행하기 위한 여러분의 능력치를<br>
            향상시킬 수 있습니다.  그리고 본인이 희망하는<br>
            분야를 선택해 집중적으로 학습할 수 있습니다.
          </span>
        </div>
      </section>
    </div>
    <div class="paragraph paragraph-right">
      <header>
        <span>StartUp Project</span><span>2</span>
      </header>
      <section>
        <img class="image" src="@/assets/img/rocket.png">
        <div class="message">
          <span>
            LUNA는 단순히 협업 프로젝트를 진행하지 않습니다.<br>
            LUNA는 '비지니스 모델'을 추가한 창업 프로젝트를<br>
            진행합니다. 실제 창업의사가 있는 팀들은 내부의<br>
            지원과 기업, 투자사 등의 외부 네트워크들을 적극<br>
            활용해 창업에 성공할 수 있도록 돕습니다.
          </span>
        </div>
      </section>
    </div>
    <div class="paragraph paragraph-left">
      <header>
        <span>Tools Support Project</span><span>3</span>
      </header>
      <section>
        <img class="image" src="@/assets/img/settings.png">
        <div class="message">
          <span>
            보다 원활한 개발 환경을 지원하기 위해<br>
            아두이노 혹은 라즈베리파이 뿐만 아니라 개발 시<br>
            필요한 공구와 다양한 센서, 부품 등을<br>
            이용할 수 있습니다.
          </span>
        </div>
      </section>
    </div>
    <div class="paragraph paragraph-right">
      <header>
        <span>Books Support</span><span>4</span>
      </header>
      <section>
        <img class="image" src="@/assets/img/book.png">
        <div class="message">
          <span>
            멘토 뿐만 아니라 개인적인 학습에 지원하고자<br>
            웹, 인공지능, 앱 등 개발서적 00권, 기획 및 마케팅<br>
            관력 서적 00권, 다양한 디자인을 위한 서적 00권이<br>
            준비되어 있습니다.
          </span>
        </div>
      </section>
    </div>
    <div class="paragraph paragraph-left">
      <header>
        <span>LUNA's Infra</span><span>5</span>
      </header>
      <section>
        <img class="image" src="@/assets/img/castle.png">
        <div class="message">
          <span>
            LUNA의 다양한 수상작, 프로젝트들을 공유하는<br>
            GitLab, LUNA만의 협업보드 등을 통해<br>
            인프라를 개발하고 사용할 수 있습니다.
          </span>
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class P2019 extends Vue {
}
</script>

<style lang="scss">
body.p2019 {
  background-image: linear-gradient(#031444, #396ba3);
}
</style>

<style lang="scss" scoped>
#P2019 {
  box-sizing: border-box;
  max-width: 100%;
  background-image: url('../assets/img/bg_2019.png');
  background-position: center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  width: 100%;
}
.slogan {
  max-width: 40%;
  margin: 100px 0;
}
.announcement {
  line-height: 2;
  font-size: 25px;
}
.paragraph {
  display: flex;
  flex-direction: column;
  width: 35%;
  margin: 0 40px;
  @media (min-width: $screen-tablet) {
    margin: 0 60px;
  }
  @media (min-width: $screen-desktop) {
    margin: 0 80px;
  }
  @media (min-width: $screen-lg-desktop) {
    margin: 0 100px;
  }
  header {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    @media (min-width: $screen-tablet) {
      margin-bottom: 10px;
    }
    @media (min-width: $screen-desktop) {
      margin-bottom: 15px;
    }
    @media (min-width: $screen-lg-desktop) {
      margin-bottom: 20px;
    }
    span:nth-child(1) {
      font-size: 25px;
      font-weight: bold;
      @media (min-width: $screen-tablet) {
        font-size: 30px;
      }
      @media (min-width: $screen-desktop) {
        font-size: 35px;
      }
      @media (min-width: $screen-lg-desktop) {
        font-size: 40px;
      }
    }
    span:nth-child(2) {
      font-size: 40px;
      font-weight: bold;
      border-bottom: 5px solid #fff;
      @media (min-width: $screen-tablet) {
        font-size: 60px;
      }
      @media (min-width: $screen-desktop) {
        font-size: 100px;
      }
      @media (min-width: $screen-lg-desktop) {
        font-size: 140px;
      }
    }
  }
  &-left {
    header {
      justify-content: flex-end;
      span:nth-child(2) {
        margin-left: 20px;
      }
    }
    section {
      flex-direction: row;
    }
    .message {
      text-align: right;
      margin-left: 20px;
      justify-content: flex-end;
    }
  }
  &-right {
    align-self: flex-end;
    header {
      justify-content: flex-end;
      flex-flow: row-reverse;
      span:nth-child(2) {
        margin-right: 20px;
      }
    }
    section {
      flex-direction: row-reverse;
    }
    .message {
      text-align: left;
      margin-right: 20px;
      justify-content: flex-start;
    }
  }
  .image {
    flex: 0.8;
    min-width: 0;
    min-height: 100%;
    object-fit: contain;
  }
  .message {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 13px;
    line-height: 2;
    white-space: nowrap;
    @media (min-width: $screen-tablet) {
      font-size: 15px;
    }
    @media (min-width: $screen-desktop) {
      font-size: 16px;
    }
    @media (min-width: $screen-lg-desktop) {
      font-size: 18px;
    }
  }
}
</style>
