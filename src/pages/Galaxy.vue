<template>
  <section id="Galaxy" class="section container">
    <img class="galaxy" src="@/assets/img/galaxy.png">
    <div class="page-title">HANA</div>
    <div class="page-desc">매일 글 하나,<br>하나의 위로, 응원이 되어</div>
    <article>
      <img class="preview" src="@/assets/img/hana.png">
      <div class="content">
        <div class="title">
          HANA
          <a href="https://play.google.com/store/apps/details?id=com.lunacoding.hana" target="_blank">
            <img class="googleplay" src="@/assets/img/googleplay.png">
          </a>
        </div>
        <div class="short-desc">
          매일 글 하나. 하나의 위로, 응원이 되어
        </div>
        <div class="desc">
          HANA는 매일 다른 캘리그라피 글귀를<br>
          잠금화면으로 보내어주는 잠금화면 앱이자<br>
          캘리그라프 글귀 공유 플랫폼입니다.
        </div>
        <div class="galaxy-desc">
          한 해가 지나고, LUNA 최고의 프로젝트는<br>
          하나의 별자리가 됩니다.<br>
          다음은 여러분의 차례입니다.
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Galaxy extends Vue {
}
</script>

<style lang="scss">
body.galaxy {
  background-image: linear-gradient(#031444, #396ba3);
}
</style>

<style lang="scss" scoped>
#Galaxy {
  box-sizing: border-box;
  max-width: 100%;
  background-image: url('../assets/img/star.png');
  background-position: center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  align-items: center;
}
.page {
  &-title {
    margin: 20px 0;
    font-size: 50px;
  }
  &-desc {
    font-size: 17px;
  }
}
.galaxy {
  width: 80%;
}
article {
  display: flex;
  flex-direction: row;
  .preview {
    flex: 1;
    min-width: 0;
    min-height: 0;
    object-fit: contain;
    transform: rotate(-50deg);
  }
  .content {
    flex: 1;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .title {
    font-size: 60px;
  }
  .googleplay {
    margin-left: 20px;
    height: 40px;
  }
  .desc {
    font-weight: bold;
    line-height: 1.75;
    margin-top: 50px;
  }
  .galaxy-desc {
    line-height: 1.75;
    margin-top: 30px;
  }
}
</style>
