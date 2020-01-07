<template>
  <ul class="guestcontents-list">
    <li
      v-for="(guest, index) in guestList"
      :key="index"
      class="item"
    >
      <guest-contents-name
        :guest="guest"
      />
    </li>
  </ul>
</template>

<script>
import GuestContentsName from '~/components/index/GuestContents/Name';

export default {
  name: 'GuestContentsList',
  components: {
    GuestContentsName
  },
  props: {
    guestList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.guestcontents-list {
  > .item {
    & + .item {
      padding-top: 40px;
    }
  }
}
</style>
