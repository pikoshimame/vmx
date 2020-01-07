<template>
  <button
    class="memberscontents-name"
    @click="showModal(member)"
  >
    <img
      :src="member.thumbnail.x1"
      :srcset="`${member.thumbnail.x1} 1x, ${member.thumbnail.x2} 2x, ${member.thumbnail.x3} 3x`"
      :alt="member.name"
      class="thumbnail"
    >
    <span class="name">{{ member.name }}</span>
  </button>
</template>

<script>
export default {
  name: 'MembersContentsName',
  props: {
    member: {
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
.memberscontents-name {
  background: none;
  border: none;
  text-align: left;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: none;

  > .thumbnail {
    display: block;
    filter: grayscale(1) brightness(.9);
    transition: filter .2s ease-out;
    margin-bottom: 8px;
  }

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

  &:hover {
    > .thumbnail {
      filter: none;
    }
  }
}
</style>
