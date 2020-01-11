<template>
  <div>
    <div class="heading-container">
      <text-heading
        text="MEMBERS"
      />
    </div>
    <div
      v-if="membersList !== undefined && membersList.length !== 0"
      class="list-container"
    >
      <members-contents-list
        :members-list="membersList"
      />
    </div>
  </div>
</template>

<script>
import TextHeading from '~/components/common/text/Heading';
import MembersContentsList from '~/components/members/MembersContents/List';

export default {
  name: 'MembersContents',
  components: {
    TextHeading,
    MembersContentsList
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
.heading-container {
  padding-bottom: 56px;
}

.list-container {
  max-width: 256px;

  @include mq(large) {
    max-width: 416px;
  }
}
</style>
