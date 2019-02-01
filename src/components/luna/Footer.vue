<template>
  <footer class="__luna-footer">
    <img class="__luna-footer-bg" src="@/assets/img/bg_achievement.png">
    <div class="__luna-footer-contents">
      <div class="__luna-footer-social-list">
        <a class="__luna-footer-social-item" href="https://fb.com/lunacoding" target="_blank"><img src="@/assets/img/ic_facebook.png"></a>
        <a class="__luna-footer-social-item" href="https://github.com/LUNA-DIMIGO" target="_blank"><img src="@/assets/img/ic_github.png"></a>
      </div>
      <span>Copyrightⓒ 2019 LUNA All rights reserved.</span>
    </div>
  </footer>
</template>

<style lang="scss">
.__luna-footer {
  position: relative;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 10px;
  &-bg {
    width: 100%;
    z-index: 0;
  }
  &-contents {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    bottom: 15%;
    height: 30%;
    left: 50%;
    width: 90%;
    transform: translateX(-50%);
    font-size: 12px;
  }
  &-social {
    position: relative;
    &-list {
      position: relative;
      padding: 10px;
      height: 60%;
    }
    &-item {
      position: relative;
      margin-right: 10px;
      &:last-child {
        position: relative;
        margin-right: 0;
      }
      img {
        position: relative;
        height: 100%;
      }
    }
  }
}
</style>
