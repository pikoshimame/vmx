<template>
  <ul class="memberscontents-list">
    <li
      v-for="(member, index) in membersList"
      :key="index"
      class="item"
    >
      <members-contents-name
        :member="member"
      />
    </li>
  </ul>
</template>

<script>
import MembersContentsName from '~/components/members/MembersContents/Name';

export default {
  name: 'MembersContentsList',
  components: {
    MembersContentsName
  },
  props: {
    membersList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.memberscontents-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  > .item {
    padding-bottom: 48px;
  }
}
</style>
