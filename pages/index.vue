<template>
  <div>
    <main class="main">
      <div class="inner">
        <vmx-logo/>
        <section>
          <vmx-info v-if="info" :info="info">
            <h2 class="titleMain">Next</h2>
          </vmx-info>
          <vmx-guest v-if="guests.length" :guests="guests">
            <h3 class="titleSub">Guests</h3>
          </vmx-guest>
          <vmx-door v-if="info" :link="info.link">
            <h3 class="titleSub">Door</h3>
          </vmx-door>
        </section>
      </div>
      <vmx-caution/>
      <vmx-twitter-btn v-if="twitter" :twitter="twitter"/>
    </main>
  </div>
</template>

<script>
import VmxLogo from '~/components/index/Logo';
import VmxInfo from '~/components/index/Info';
import VmxDoor from '~/components/index/Door';
import VmxGuest from '~/components/index/Guest';
import VmxCaution from '~/components/index/Caution';
import VmxTwitterBtn from '~/components/index/TwitterBtn';
import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export default {
  layout: 'illust',
  components: { VmxLogo, VmxInfo, VmxGuest, VmxDoor, VmxCaution, VmxTwitterBtn },
  data() {
    return {
      info: {
        date: '',
        time: '',
        datetime: '',
        link: ''
      },
      guests: [],
      twitter: ''
    };
  },
  async asyncData(context) {
    const infos = await client.getEntries({ content_type: 'info', order: '-fields.datetime' });
    const guests = await client.getEntries({ content_type: 'guest', order: 'fields.displayOrder' });
    const socials = await client.getEntries({ content_type: 'socialMedia', order: 'fields.twitter' });
    return {
      info: infos.items.map(entry => {
        return {
          date: entry.fields['date'],
          time: entry.fields['time'],
          datetime: entry.fields['datetime'],
          link: entry.fields['link']
        }
      })[0],
      guests: guests.items.map(entry => {
        return entry.fields;
      }),
      twitter: socials.items.map(entry => {
        return entry.fields['twitter']
      })[0]
    };
  }
};
</script>

<style scoped>
.main {
  text-align: center;
}
.inner {
  width: 640px;
  margin: auto;
}
@media (min-width: 641px) {
  .inner {
    width: 960px;
  }
}
.titleMain {
  font-size: 3.8rem;
  margin: 0;
  padding-bottom: 30px;
}
.titleSub {
  font-size: 2.4rem;
  opacity: .7;
  padding-bottom: 9px;
}
</style>
