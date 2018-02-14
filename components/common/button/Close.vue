<template>
  <button @click="$modal.hide(name)">
    <icon-close class="close__icon"/>
  </button>
</template>

<script>
import IconClose from '~/components/common/icon/Close';

export default {
  props: ['name'],
  components: { IconClose }
}
</script>

<style scoped>
.close__icon {
  display: block;
  color: #575757;
  width: 23px;
  height: 23px;
}
</style>
