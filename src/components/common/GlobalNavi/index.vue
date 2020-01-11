<template>
  <nav>
    <button-bars
      @click="open"
    />
    <transition name="fade">
      <div
        v-show="visibility"
        class="navi-container"
      >
        <div class="contents">
          <button-navi-close
            class="button"
            @click="close"
          />
          <global-navi-list
            @click="close"
          />
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import ButtonBars from '~/components/common/button/Bars';
import ButtonNaviClose from '~/components/common/button/NaviClose';
import GlobalNaviList from '~/components/common/GlobalNavi/List';

export default {
  name: 'GlobalNavi',
  components: {
    ButtonBars,
    ButtonNaviClose,
    GlobalNaviList
  },
  data() {
    return {
      visibility: false
    };
  },
  methods: {
    open() {
      this.visibility = true;
    },
    close() {
      this.visibility = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.navi-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

  &::before {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    display: block;
    background-color: darken(desaturate(color(background, primary), 30.00), 46.67);
    width: 100%;
    height: 200%;
    z-index: 0;
  }

  > .contents {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 48px 24px;
    z-index: 1;

    @include mq(medium) {
      padding: 48px;
    }

    > .button {
      margin-bottom: 64px;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: .3s ease-out;

  &::before {
    transition: width .3s ease-out;
  }

  .contents {
    transition: opacity .3s ease-out;
  }
}

.fade-enter, .fade-leave-to {
  &::before {
    width: 0;
  }

  .contents {
    opacity: 0;
  }
}
</style>
