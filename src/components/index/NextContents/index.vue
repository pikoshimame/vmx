<template>
  <div>
    <div class="heading-container">
      <text-heading
        text="NEXT"
      />
    </div>
    <div class="datetime-container">
      <next-contents-datetime
        :date="next.date"
        :time="next.time"
        :datetime="next.datetime"
      />
    </div>
    <text-link
      :href="next.link"
      target="_blank"
      text="Akihabara MOGRA"
    />
  </div>
</template>

<script>
import TextHeading from '~/components/common/text/Heading';
import TextLink from '~/components/common/text/Link';
import NextContentsDatetime from '~/components/index/NextContents/Datetime';

export default {
  name: 'NextContents',
  components: {
    TextHeading,
    TextLink,
    NextContentsDatetime
  },
  props: {
    next: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.heading-container {
  padding-bottom: 8px;
}

.datetime-container {
  padding-bottom: 16px;
}
</style>
