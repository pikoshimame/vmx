<template>
  <div>
    <main class="main">
      <section>
        <h2 class="titleMain">
          Residents
        </h2>
        <vmx-resident
          v-if="djs.length"
          :residents="djs"
          :modal-key="'dj-'"
        >
          <h3 class="titleSub">
            DJ
          </h3>
        </vmx-resident>
        <vmx-resident
          v-if="vjs.length"
          :residents="vjs"
          :modal-key="'vj-'"
        >
          <h3 class="titleSub">
            VJ
          </h3>
        </vmx-resident>
      </section>
    </main>
  </div>
</template>

<script>
import VmxResident from '~/components/residents/Resident';
import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export default {
  components: {
    VmxResident
  },
  async asyncData(context) {
    const residents = await client.getEntries({content_type: 'residents', order: 'fields.displayOrder'});
    const djs = [];
    const vjs = [];
    residents.items.forEach((entry) => {
      if (entry.fields['part'] === 'DJ') {
        djs.push(entry.fields);
      } else if (entry.fields['part'] === 'VJ') {
        vjs.push(entry.fields);
      }
    });
    return {djs, vjs};
  },
  data() {
    return {
      djs: [],
      vjs: []
    };
  }
};
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
