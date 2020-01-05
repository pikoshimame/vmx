<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    }
  }
};
</script>


<style lang="scss" scoped>
a {
  position: relative;
  display: flex;
  width: 50px;
  height: 44px;
  transition: opacity .3s ease-out;

  &:hover {
    opacity: .7;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border-color: transparent transparent color(link, default) transparent;
    border-style: solid;
    border-width: 0 0 10px 10px;
    width: 0;
    height: 0;
  }

  /deep/ svg {
    display: block;
    color: color(icon, light-gray);
    margin: auto;
  }
}
</style>
