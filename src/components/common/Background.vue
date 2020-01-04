<template>
  <div class="bg">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="item"
      :style="item"
    />
  </div>
</template>

<script>
import throttle from 'lodash.throttle';

export default {
  data() {
    return {
      size: {
        width: 0,
        height: 0
      },
      items: []
    };
  },
  watch: {
    size: {
      handler: function() {
        this.reset();
      },
      deep: true
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('resize', this.resize());
      window.dispatchEvent(new Event('resize'));
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('resize', this.resize());
    }
  },
  methods: {
    resize() {
      return throttle((e) => {
        this.size.width = document.documentElement.clientWidth;
        this.size.height = document.documentElement.clientHeight;
      }, 500);
    },
    reset() {
      this.items = [];
      window.requestAnimationFrame(() => {
        for (let i = 0; i < this.size.width + 304; i += 304) {
          for (let j = 0; j < this.size.height + 608; j += 304) {
            this.items.push({
              left: `${i}px`,
              top: `${j}px`
            });
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.bg {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
}
.item {
  position: absolute;
  width: 0;
  height: 0;
  border: #00dfff88 solid 88px;
  border-radius: 88px;

  animation-name: animation;
  animation-duration: 2.3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes animation {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-304px, -304px);
  }
}
</style>
