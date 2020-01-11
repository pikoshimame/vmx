<template>
  <div>
    <div class="heading-container">
      <text-heading
        text="GUEST"
      />
    </div>
    <guest-contents-list
      :guest-list="guestList"
    />
  </div>
</template>

<script>
import TextHeading from '~/components/common/text/Heading';
import GuestContentsList from '~/components/index/GuestContents/List';

export default {
  name: 'GuestContents',
  components: {
    TextHeading,
    GuestContentsList
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
.heading-container {
  padding-bottom: 16px;
}
</style>
