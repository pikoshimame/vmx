<template>
  <time
    :datetime="datetime"
    class="nextcontents-datetime"
  >
    <span
      class="date"
    >
      <text-invert>{{ date }}</text-invert>
    </span>
    <span
      class="time"
    >
      <text-invert>{{ time }}</text-invert>
    </span>
  </time>
</template>

<script>
import TextInvert from '~/components/common/text/Invert';

export default {
  name: 'NextContentsDatetime',
  components: {
    TextInvert
  },
  props: {
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    datetime: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.nextcontents-datetime {
  > .date {
    display: block;
    font-size: 3.2rem;
  }

  > .time {
    display: block;
    font-size: 2.4rem;
  }
}
</style>
