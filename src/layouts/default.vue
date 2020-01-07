<template>
  <div class="layout-container">
    <div class="header-container">
      <header>
        <global-navi />
      </header>
    </div>
    <div class="main-container">
      <main>
        <nuxt />
      </main>
      <footer>
        <text-copyright />
      </footer>
    </div>
    <modal-contents />
  </div>
</template>

<script>
import GlobalNavi from '~/components/common/GlobalNavi';
import TextCopyright from '~/components/common/text/Copyright';
import ModalContents from '~/components/common/ModalContents';

export default {
  components: {
    GlobalNavi,
    TextCopyright,
    ModalContents
  }
};
</script>

<style lang="scss" scoped>
.layout-container {
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 21px;
    display: block;
    background: url('~assets/images/illust.png') left top no-repeat;
    width: 1310px;
    height: 2334px;
    transform: translateX(-407px);
    z-index: -1;

    @include mq(large) {
      transform: translateX(-177px);
    }
  }
}

.header-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 24px 0;
  z-index: 1;

  @include mq(large) {
    padding: 48px 48px 0;
  }
}

.main-container {
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 120px 24px 64px;
}
</style>
