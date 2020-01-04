<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <main class="main">
      <section>
        <h2 class="title">
          About
        </h2>
        <p
          v-if="about"
          class="text"
          v-html="about"
        />
      </section>
    </main>
  </div>
</template>

<script>
import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export default {
  layout: 'illust',
  async asyncData(context) {
    const abouts = await client.getEntries({content_type: 'about'});
    return {
      about: abouts.items.map((entry) => {
        return entry.fields['text'];
      })[0]
    };
  },
  data() {
    return {
      about: ''
    };
  }
};
</script>

<style scoped>
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
}
</style>
