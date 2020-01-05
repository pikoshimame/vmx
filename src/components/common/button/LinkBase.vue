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


<style scoped>
a {
  position: relative;
  display: flex;
  width: 50px;
  height: 44px;
  transition: opacity .3s ease-out;
}
a:hover {
  opacity: .7;
}
a::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  border-color: transparent transparent #aeaeae transparent;
  border-style: solid;
  border-width: 0 0 10px 10px;
  width: 0;
  height: 0;
}
a >>> svg {
  display: block;
  color: #d9d9d9;
  margin: auto;
}
</style>
