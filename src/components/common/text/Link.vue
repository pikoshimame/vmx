<template>
  <component
    :is="isExternal ? 'a' : 'nuxt-link'"
    :to="isExternal ? undefined : to"
    :href="isExternal ? href : undefined"
    :target="isExternal ? target : undefined"
    :rel="isExternal ? 'noopener' : undefined"
    class="text-link"
  >
    {{ text }}
  </component>
</template>

<script>
export default {
  name: 'TextLink',
  props: {
    to: {
      type: [Object, String],
      required: false,
      default: undefined
    },
    href: {
      type: String,
      required: false,
      default: '#'
    },
    target: {
      type: String,
      required: false,
      default: undefined
    },
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    isExternal() {
      return this.to === undefined;
    }
  }
};
</script>

<style lang="scss" scoped>
.text-link {
  display: inline-flex;
  align-items: center;
  background-color: color(background, black);
  color: color(text, white);
  font-size: 2.4rem;
  text-decoration: none;
  line-height: 1;
  padding: 8px;

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
