<template>
  <button @click="$modal.hide(name)">
    <icon-close class="close__icon" />
  </button>
</template>

<script>
import IconClose from '~/components/common/icon/Close';

export default {
  components: {
    IconClose
  },
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.close {
  &__icon {
    display: block;
    color: color(text, dark-gray);
    width: 23px;
    height: 23px;
  }
}
</style>
