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
  font-size: 1.2rem;
}
</style>
