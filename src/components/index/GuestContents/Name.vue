<template>
  <button
    class="guestcontents-name"
    @click="showModal(guest)"
  >
    <span class="name">{{ guest.name }}</span>
    <img
      :src="guest.thumbnail.x1"
      :srcset="`${guest.thumbnail.x1} 1x, ${guest.thumbnail.x2} 2x, ${guest.thumbnail.x3} 3x`"
      :alt="guest.name"
      class="thumbnail"
    >
  </button>
</template>

<script>
export default {
  name: 'GuestContentsName',
  props: {
    guest: {
      type: Object,
      required: true
    }
  },
  methods: {
    showModal(profile) {
      this.$store.commit('modal/setProfile', profile);
      this.$modal.show('modal');
    }
  }
};
</script>

<style lang="scss" scoped>
.guestcontents-name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  width: 100%;
  height: 110px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: none;

  > .name {
    display: inline-flex;
    align-items: center;
    background-color: color(background, black);
    color: color(text, white);
    font-size: 2.4rem;
    text-decoration: none;
    line-height: 1;
    padding: 8px;

    &::after {
      content: '';
      display: block;
      background: url('~assets/icons/link-arrow.svg') right top no-repeat;
      width: 26px;
      height: 9px;
      padding-left: 8px;
    }
  }

  > .thumbnail {
    filter: grayscale(1) brightness(.9);
    transition: filter .2s ease-out;
  }

  &:hover {
    > .thumbnail {
      filter: none;
    }
  }
}
</style>
