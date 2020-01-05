<template>
  <link-base
    class="link"
    :link="link"
  >
    <icon-twitter class="icon" />
  </link-base>
</template>

<script>
import LinkBase from '~/components/common/button/LinkBase';
import IconTwitter from '~/components/common/icon/Twitter';

export default {
  components: {
    LinkBase,
    IconTwitter
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
.link::after {
  border-color: transparent transparent #00aced transparent;
}
.icon {
  width: 36px;
  height: 29px;
}
</style>
