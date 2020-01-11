<template>
  <div>
    <div class="heading-container">
      <text-heading
        text="DOOR"
      />
    </div>
    <door-contents-list />
    <door-contents-notes
      :link="link"
    />
  </div>
</template>

<script>
import TextHeading from '~/components/common/text/Heading';
import DoorContentsList from '~/components/index/DoorContents/List';
import DoorContentsNotes from '~/components/index/DoorContents/Notes';

export default {
  name: 'DoorContents',
  components: {
    TextHeading,
    DoorContentsList,
    DoorContentsNotes
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
.heading-container {
  padding-bottom: 8px;
}
</style>
