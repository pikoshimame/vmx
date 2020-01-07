<template>
  <div class="page-container">
    <div class="members-container">
      <members-contents
        :members-list="membersList"
      />
    </div>
  </div>
</template>

<script>
import MembersContents from '~/components/members/MembersContents';

export default {
  components: {
    MembersContents
  },
  async fetch({store}) {
    await store.dispatch('members/fetch');
  },
  computed: {
    membersList() {
      return this.$store.getters['members/viewModel'].list;
    }
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
