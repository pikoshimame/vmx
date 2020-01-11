<template>
  <h1 class="heading-logo">
    <img
      src="~/assets/images/logo.svg"
      alt="VMX"
    >
  </h1>
</template>

<script>
export default {
  name: 'HeadingLogo'
};
</script>

<style lang="scss" scoped>
.heading-logo {
  > img {
    width: 138px;
    height: 262px;
  }
}
</style>
