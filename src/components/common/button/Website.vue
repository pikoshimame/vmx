<template>
  <link-base :link="link">
    <icon-website class="icon" />
  </link-base>
</template>

<script>
import LinkBase from '~/components/common/button/LinkBase';
import IconWebsite from '~/components/common/icon/Website';

export default {
  components: {
    LinkBase,
    IconWebsite
  },
  props: {
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.icon {
  width: 36px;
  height: 29px;
}
</style>
