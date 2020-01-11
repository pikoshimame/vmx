<template>
  <button
    class="button-naviclose"
    aria-label="Close Navigation"
    @click="$emit('click', $event.target.value)"
  >
    <img
      src="~/assets/icons/navi-close.svg"
      alt="close"
    >
  </button>
</template>

<script>
export default {
  name: 'ButtonNaviClose'
};
</script>

<style lang="scss" scoped>
.button-naviclose {
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  width: 48px;
  height: 48px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: none;

  > img {
    width: 38px;
    height: 38px;
  }
}
</style>
