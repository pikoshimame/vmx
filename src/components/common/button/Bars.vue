<template>
  <button
    class="button-bars"
    aria-label="Open Navigation"
    @click="$emit('click', $event.target.value)"
  >
    <img
      src="~/assets/icons/bars.svg"
      alt=""
    >
  </button>
</template>

<script>
export default {
  name: 'ButtonBars'
};
</script>

<style lang="scss" scoped>
.button-bars {
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
    width: 48px;
    height: 18px;
  }
}
</style>
