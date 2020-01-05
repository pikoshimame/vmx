<template>
  <div>
    <main class="main">
      <div class="inner">
        <vmx-logo />
        <section>
          <vmx-info
            v-if="info"
            :info="info"
          >
            <h2 class="titleMain">
              Next
            </h2>
          </vmx-info>
          <vmx-guest
            v-if="guests.length"
            :guests="guests"
          >
            <h3 class="titleSub">
              Guests
            </h3>
          </vmx-guest>
          <vmx-door
            v-if="info"
            :link="info.link"
          >
            <h3 class="titleSub">
              Door
            </h3>
          </vmx-door>
          <vmx-door v-else>
            <h3 class="titleSub">
              Door
            </h3>
          </vmx-door>
        </section>
      </div>
      <vmx-caution />
      <vmx-twitter-btn
        v-if="twitter"
        :twitter="twitter"
      />
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

export default {
  components: {
    VmxLogo,
    VmxInfo,
    VmxGuest,
    VmxDoor,
    VmxCaution,
    VmxTwitterBtn
  },
  async fetch({store}) {
    const promises = [];
    promises.push(store.dispatch('info/fetch'));
    promises.push(store.dispatch('guests/fetch'));
    promises.push(store.dispatch('socialMedia/fetch'));
    await Promise.all(promises);
  },
  computed: {
    info() {
      return this.$store.getters['info/viewModel'];
    },
    guests() {
      return this.$store.getters['guests/viewModel'].list;
    },
    twitter() {
      return this.$store.getters['socialMedia/viewModel'].twitter;
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
  padding-bottom: 9px;
}
</style>
