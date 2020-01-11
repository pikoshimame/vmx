<template>
  <div>
    <div class="heading-container">
      <text-heading
        text="ARCHIVE"
      />
    </div>
    <div
      :id="playerContainerId"
      class="video-container"
    />
  </div>
</template>

<script>
import TextHeading from '~/components/common/text/Heading';

export default {
  name: 'ArchiveContents',
  components: {
    TextHeading
  },
  props: {
    archiveId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      playerContainerId: 'video-container',
      player: null
    };
  },
  mounted() {
    const options = {
      video: this.archiveId,
      playsinline: false
    };
    this.player = new Twitch.Player(this.playerContainerId, options);
    this.player.pause();
    this.player.addEventListener(Twitch.Player.PLAYING, this.videoPlaying);
  },
  destroyed() {
    this.player.removeEventListener(Twitch.Player.PLAYING, this.videoPlaying);
  },
  methods: {
    videoPlaying() {
      this.$ga.event('archive', 'playing');
    }
  }
};
</script>

<style lang="scss" scoped>
.heading-container {
  padding-bottom: 8px;
}

.video-container {
  position: relative;
  width: 100%;

  &::before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }

  /deep/ iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
