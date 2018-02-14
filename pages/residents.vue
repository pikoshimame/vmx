<template>
  <div>
    <main class="main">
      <section>
        <h2 class="titleMain">Residents</h2>
        <section v-if="djs.length">
          <h3 class="titleSub">DJ</h3>
        </section>
        <section v-if="vjs.length">
          <h3 class="titleSub">VJ</h3>
        </section>
      </section>
    </main>
  </div>
</template>

<script>
import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export default {
  data() {
    return {
      djs: [],
      vjs: []
    };
  },
  async asyncData(context) {
    const residents = await client.getEntries({ content_type: 'residents', order: 'fields.displayOrder' });
    const djs = [];
    const vjs = [];
    residents.items.forEach(entry => {
      if (entry.fields['part'] === 'DJ') {
        djs.push(entry.fields);
      } else if (entry.fields['part'] === 'VJ') {
        vjs.push(entry.fields);
      }
    });
    return { djs, vjs };
  }
}
</script>

<style scoped>
.main {
  width: 640px;
  margin: auto;
  padding: 125px 0 0 50px;
  box-sizing: border-box;
}
@media (min-width: 641px) {
  .main {
    width: 960px;
    padding-left: 70px;
  }
}
.titleMain {
  font-size: 5.7rem;
  padding-bottom: 50px;
}
.titleSub {
  font-size: 3.0rem;
  line-height: 1.2em;
  padding-bottom: 20px;
}
</style>
