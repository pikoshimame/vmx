<template>
  <ul class="doorcontents-notes">
    <li class="item">
      <text-invert>成年・未成年に限らず “必ず”身分証をお持ち下さい。</text-invert>
    </li>
    <li class="item">
      <text-invert>
        Twitter割引は<a
          :href="link"
          :target="target"
          :rel="rel"
        >MOGRAページ</a>からツイートして当日受付でお見せ下さい。
      </text-invert>
    </li>
  </ul>
</template>

<script>
import TextInvert from '~/components/common/text/Invert';

export default {
  name: 'DoorContentsNotes',
  components: {
    TextInvert
  },
  props: {
    link: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      target: '_blank',
      rel: 'noopener'
    };
  }
};
</script>

<style lang="scss" scoped>
.doorcontents-notes {
  font-size: 1.2rem;

  @include mq(medium) {
    font-size: 1.5rem;
  }

  > .item {
    /deep/ span {
      &::before {
        content: '※ ';
      }
    }
  }
}
</style>
