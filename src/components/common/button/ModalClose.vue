<template>
  <button
    class="button-modalclose"
    aria-label="Close Modal"
    @click="$emit('click', $event.target.value)"
  >
    <img
      src="~/assets/icons/modal-close.svg"
      alt="close"
    >
  </button>
</template>

<script>
export default {
  name: 'ButtonModalClose'
};
</script>

<style lang="scss" scoped>
.button-modalclose {
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  width: 34px;
  height: 34px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: none;

  > img {
    width: 24px;
    height: 24px;
  }
}
</style>
