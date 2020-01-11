<template>
  <div class="page-container">
    <div class="logo-container">
      <heading-logo />
    </div>
    <h2 class="title">
      <text-invert>{{ text }}</text-invert>
    </h2>
    <text-link
      to="/"
      text="トップへ"
    />
  </div>
</template>

<script>
import HeadingLogo from '~/components/index/HeadingLogo';
import TextInvert from '~/components/common/text/Invert';
import TextLink from '~/components/common/text/Link';

export default {
  components: {
    HeadingLogo,
    TextInvert,
    TextLink
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    text() {
      const statusCode = (this.error && this.error.statusCode) || 500;
      return statusCode === 404 ? `${statusCode} NOT FOUND` : `${statusCode} SERVER ERROR`;
    }
  }
};
</script>


<style lang="scss" scoped>
.page-container {
  padding-bottom: 184px;
}

.logo-container {
  display: flex;
  justify-content: center;
  padding: 16px 0 80px;
}

.title {
  font-size: 4.0rem;
  padding-bottom: 16px;
}
</style>
