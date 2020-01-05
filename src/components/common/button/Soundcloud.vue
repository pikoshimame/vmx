<template>
  <link-base
    class="link"
    :link="link"
  >
    <icon-soundcloud class="icon" />
  </link-base>
</template>

<script>
import LinkBase from '~/components/common/button/LinkBase';
import IconSoundcloud from '~/components/common/icon/Soundcloud';

export default {
  components: {
    LinkBase,
    IconSoundcloud
  },
  props: {
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.link {
  &::after {
    border-color: transparent transparent color(link, soundcloud) transparent;
  }
}

.icon {
  width: 39px;
  height: 17px;
}
</style>
