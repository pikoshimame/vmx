<template>
  <a
    :href="href"
    :target="target"
    :rel="rel"
    class="twitter-link"
  >
    Latest Info
  </a>
</template>

<script>
export default {
  name: 'TwitterLink',
  data() {
    return {
      target: '_blank',
      rel: 'noopener'
    };
  },
  computed: {
    href() {
      return process.env.twitterUrl;
    }
  }
};
</script>

<style lang="scss" scoped>
.twitter-link {
  display: inline-flex;
  align-items: center;
  background-color: color(background, black);
  color: color(text, white);
  font-size: 2.1rem;
  text-decoration: none;
  padding: 8px;

  &::before {
    content: '';
    display: block;
    background: url('~assets/icons/twitter.svg') left 8px top no-repeat;
    width: 22px;
    height: 18px;
    padding: 0 16px 0 8px;
  }

  &::after {
    content: '';
    display: block;
    background: url('~assets/icons/link-arrow.svg') right top no-repeat;
    width: 26px;
    height: 9px;
    padding-left: 8px;
  }
}
</style>
