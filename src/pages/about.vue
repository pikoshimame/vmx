<template>
  <div class="page-container">
    <div class="about-container">
      <about-contents />
    </div>
  </div>
</template>

<script>
import AboutContents from '~/components/about/AboutContents';

export default {
  components: {
    AboutContents
  }
};
</script>

<style lang="scss" scoped>
.page-container {
  padding-bottom: 184px;
}

.about-container {
  padding-bottom: 56px;
}
</style>
