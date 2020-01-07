<template>
  <div class="page-container">
    <div class="logo-container">
      <heading-logo />
    </div>
    <div class="next-container">
      <next-contents
        :next="next"
      />
    </div>
    <div
      v-if="guestList !== undefined && guestList.length !== 0"
      class="guest-container"
    >
      <guest-contents
        :guest-list="guestList"
      />
    </div>
    <div
      v-if="archiveId !== undefined && archiveId !== ''"
      class="archive-container"
    >
      <archive-contents
        :archive-id="archiveId"
      />
    </div>
    <div class="door-container">
      <door-contents
        :link="next.link"
      />
    </div>
    <div class="notes-container">
      <notes-contents />
    </div>
    <div class="twitter-container">
      <twitter-contents />
    </div>
  </div>
</template>

<script>
import HeadingLogo from '~/components/index/HeadingLogo';
import NextContents from '~/components/index/NextContents';
import GuestContents from '~/components/index/GuestContents';
import ArchiveContents from '~/components/index/ArchiveContents';
import DoorContents from '~/components/index/DoorContents';
import NotesContents from '~/components/index/NotesContents';
import TwitterContents from '~/components/index/TwitterContents';

export default {
  components: {
    HeadingLogo,
    NextContents,
    GuestContents,
    ArchiveContents,
    DoorContents,
    NotesContents,
    TwitterContents
  },
  async fetch({store}) {
    const promises = [];
    promises.push(store.dispatch('info/fetch'));
    promises.push(store.dispatch('guest/fetch'));
    promises.push(store.dispatch('archive/fetch'));
    await Promise.all(promises);
  },
  computed: {
    next() {
      return this.$store.getters['info/viewModel'];
    },
    guestList() {
      return this.$store.getters['guest/viewModel'].list;
    },
    archiveId() {
      return this.$store.getters['archive/viewModel'].id;
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
  padding: 16px 0 160px;
}

.next-container,
.guest-container,
.archive-container {
  padding-bottom: 56px;
}

.door-container {
  padding-bottom: 32px;
}

.notes-container {
  padding-bottom: 80px;
}
</style>
