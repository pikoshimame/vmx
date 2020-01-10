<template>
  <small class="text-copyright">{{ text }}</small>
</template>

<script>
export default {
  name: 'TextCopyright',
  computed: {
    text() {
      return this.$store.getters['copyright/viewModel'].text;
    }
  }
};
</script>

<style lang="scss" scoped>
.text-copyright {
  background-color: rgba(color(background, primary), .8);
  font-size: 1.2rem;
}
</style>
