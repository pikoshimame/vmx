<template>
  <div class="twitter-contents">
    <div class="link">
      <twitter-contents-link />
    </div>
    <p class="notes">
      最新情報はTwitterのハッシュタグ <a
        :href="href"
        :target="target"
        :rel="rel"
      >#ボカマニ</a> で検索しよう
    </p>
  </div>
</template>

<script>
import TwitterContentsLink from '~/components/index/TwitterContents/Link';

export default {
  name: 'TwitterContents',
  components: {
    TwitterContentsLink
  },
  data() {
    return {
      target: '_blank',
      rel: 'noopener'
    };
  },
  computed: {
    href() {
      return process.env.twitterHashUrl;
    }
  }
};
</script>

<style lang="scss" scoped>
.twitter-contents {
  > .link {
    padding-bottom: 32px;
  }

  > .notes {
    display: inline;
    background-color: rgba(color(background, primary), .8);
    font-size: 1.3rem;
    line-height: 1.5;

    > a {
      color: color(text, black);
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
