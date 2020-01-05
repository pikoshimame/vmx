<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <main class="main">
      <section>
        <h2 class="title">
          About
        </h2>
        <div
          v-if="text"
          class="text"
          v-html="text"
        />
      </section>
    </main>
  </div>
</template>

<script>
export default {
  async fetch({store}) {
    await store.dispatch('about/fetch');
  },
  computed: {
    text() {
      return this.$store.getters['about/viewModel'].text;
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: 'illust'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 540px;
  margin: auto;
  padding: 125px 0 350px;
}

.title {
  font-size: 5.7rem;
  padding-bottom: 75px;
}

.text {
  font-size: 1.8rem;
  line-height: 1.7em;

  /deep/ p {
    & + p {
      padding-top: 1.7em;
    }
  }
}
</style>
