<template>
  <span class="text-invert">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'TextInvert'
};
</script>

<style lang="scss" scoped>
.text-invert {
  display: inline;
  background-color: color(background, black);
  color: color(text, white);
  line-height: 1.7;
  padding: 8px;

  /deep/ a {
    color: color(text, white);
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
