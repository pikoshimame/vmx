<template>
  <ul class="globalnavi-list">
    <li class="item">
      <nuxt-link
        to="/"
        @click.native="$emit('click', $event.target.value)"
      >
        TOP
      </nuxt-link>
    </li>
    <li class="item">
      <nuxt-link
        to="/about"
        @click.native="$emit('click', $event.target.value)"
      >
        ABOUT
      </nuxt-link>
    </li>
    <li class="item">
      <nuxt-link
        to="/members"
        @click.native="$emit('click', $event.target.value)"
      >
        MEMBERS
      </nuxt-link>
    </li>
    <li class="item">
      <a
        :href="href"
        target="_blank"
        rel="noopener"
      >INFO (Twitter)</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'GlobalNaviList',
  computed: {
    href() {
      return process.env.twitterUrl;
    }
  }
};
</script>

<style lang="scss" scoped>
.globalnavi-list {
  font-size: 2.4rem;

  > .item {
    & + .item {
      padding-top: 40px;
    }

    > a {
      color: color(text, white);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
