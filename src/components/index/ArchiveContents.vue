<template>
  <div>
    <div class="heading-container">
      <text-heading
        text="ARCHIVE"
      />
    </div>
    <div class="video-container">
      <iframe
        :src="`https://player.twitch.tv/?autoplay=false&video=v${archiveId}`"
        frameborder="0"
        allowfullscreen="true"
        scrolling="no"
      />
    </div>
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

  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
