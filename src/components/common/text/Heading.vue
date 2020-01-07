<template>
  <h2 class="text-heading">
    {{ text }}
  </h2>
</template>

<script>
export default {
  name: 'TextHeading',
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.text-heading {
  font-size: 4.0rem;
  line-height: 1;
}
</style>
