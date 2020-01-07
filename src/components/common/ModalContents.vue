<!-- eslint-disable vue/no-v-html -->
<template>
  <modal
    class="modal-contents"
    name="modal"
    width="100%"
    height="auto"
    :reset="true"
    :scrollable="true"
  >
    <div class="contents">
      <button-modal-close
        class="close"
        @click="hideModal"
      />
      <p class="name">
        {{ profile.name }}
      </p>
      <p
        v-if="profile.credit"
        class="credit"
      >
        {{ profile.credit }}
      </p>
      <div class="img">
        <img
          :src="profile.imagePath.x1"
          :srcset="`${profile.imagePath.x1} 1x, ${profile.imagePath.x2} 2x, ${profile.imagePath.x3} 3x`"
          :alt="profile.name"
        >
      </div>
      <div
        class="text"
      >
        <div v-html="profile.text" />
        <p
          v-if="profile.twitter !== undefined && profile.twitter !== ''"
        >
          <a
            :href="profile.twitter"
            target="_blank"
            rel="noopener"
          >{{ profile.twitter }}</a>
        </p>
        <p
          v-if="profile.soundcloud !== undefined && profile.soundcloud !== ''"
        >
          <a
            :href="profile.soundcloud"
            target="_blank"
            rel="noopener"
          >{{ profile.soundcloud }}</a>
        </p>
        <p
          v-if="profile.website !== undefined && profile.website !== ''"
        >
          <a
            :href="profile.website"
            target="_blank"
            rel="noopener"
          >{{ profile.website }}</a>
        </p>
      </div>
    </div>
  </modal>
</template>

<script>
import ButtonModalClose from '~/components/common/button/ModalClose';

export default {
  name: 'ModalContents',
  components: {
    ButtonModalClose
  },
  computed: {
    profile() {
      return {
        name: this.$store.state.modal.name,
        credit: this.$store.state.modal.credit,
        imagePath: this.$store.getters['modal/imagePath'],
        text: this.$store.getters['modal/textHtml'],
        twitter: this.$store.state.modal.twitter,
        soundcloud: this.$store.state.modal.soundcloud,
        website: this.$store.state.modal.website
      };
    }
  },
  methods: {
    hideModal() {
      this.$modal.hide('modal');
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-contents {
  &.v--modal-overlay {
    background-color: rgba(color(background, black), .8);
  }

  /deep/ .v--modal {
    background: none;
    border-radius: 0;
    box-shadow: none;
    padding: 12px 12px 120px;
    pointer-events: none;

    @include mq(small) {
      padding: 24px 24px 120px;
    }
  }

  .contents {
    position: relative;
    background-color: color(background, white);
    margin: 0 auto;
    max-width: 560px;
    min-width: 296px;
    padding: 32px 24px;
    pointer-events: auto;

    @include mq(medium) {
      padding: 48px 32px;
    }

    > .close {
      position: absolute;
      right: 12px;
      top: 12px;

      @include mq(medium) {
        right: 24px;
        top: 24px;
      }
    }

    > .name {
      font-size: 2.4rem;
      font-weight: bold;
    }

    > .credit {
      font-size: 1.5rem;
      line-height: 1.2;
      padding-top: 16px;
    }

    > .img {
      background: url('~assets/icons/loading.gif') center center no-repeat;
      min-width: 27px;
      min-height: 27px;
      margin-top: 24px;

      > img {
        display: block;
        max-width: 100%;
        margin: 0 auto;
      }
    }

    > .text {
      font-size: 1.5rem;
      line-height: 1.7;
      padding-top: 40px;

      /deep/ p,
      /deep/ div {
        & + p {
          padding-top: 1.7em;
        }
      }

      /deep/ a {
        color: color(text, black);
        text-decoration: underline;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
