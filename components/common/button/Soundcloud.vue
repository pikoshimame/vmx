<template>
  <link-base class="link" :link="link">
    <icon-soundcloud class="icon"/>
  </link-base>
</template>

<script>
import LinkBase from '~/components/common/button/LinkBase';
import IconSoundcloud from '~/components/common/icon/Soundcloud';

export default {
  props: ['link'],
  components: { LinkBase, IconSoundcloud }
}
</script>

<style scoped>
.link::after {
  border-color: transparent transparent #fe4700 transparent;
}
.icon {
  width: 39px;
  height: 17px;
}
</style>
