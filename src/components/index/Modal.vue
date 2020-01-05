<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <modal
      class="modal"
      :name="modalName"
      :width="600"
      :height="'auto'"
      :scrollable="true"
    >
      <button-close
        class="close"
        :name="modalName"
      />
      <p
        class="name"
        v-html="guest.name"
      />
      <p
        v-if="guest.credit"
        class="credit"
        v-html="guest.credit"
      />
      <p
        class="img"
      >
        <img
          :src="guest.image.x1"
          :srcset="`${guest.image.x1} 1x, ${guest.image.x2} 2x`"
          :alt="guest.name"
        >
      </p>
      <div
        class="profile"
        v-html="guest.profile"
      />
      <ul
        v-if="guest.website || guest.soundcloud || guest.twitter"
        class="links"
      >
        <li
          v-if="guest.twitter"
          class="links__item"
        >
          <button-twitter :link="guest.twitter" />
        </li>
        <li
          v-if="guest.soundcloud"
          class="links__item"
        >
          <button-soundcloud :link="guest.soundcloud" />
        </li>
        <li
          v-if="guest.website"
          class="links__item"
        >
          <button-website :link="guest.website" />
        </li>
      </ul>
    </modal>
  </div>
</template>

<script>
import ButtonClose from '~/components/common/button/Close';
import ButtonWebsite from '~/components/common/button/Website';
import ButtonSoundcloud from '~/components/common/button/Soundcloud';
import ButtonTwitter from '~/components/common/button/Twitter';

export default {
  components: {
    ButtonClose,
    ButtonWebsite,
    ButtonSoundcloud,
    ButtonTwitter
  },
  props: {
    guest: {
      type: Object,
      required: true
    },
    modalName: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  &.v--modal-overlay {
    background-color: rgba(0, 0, 0, .42);
  }

  /deep/ .v--modal {
    position: relative;
    border-radius: 4px;
    color: #575757;
    padding: 40px 30px 30px;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, .3);
    margin-bottom: 100px;
  }
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 23px;
  height: 23px;
}

.name {
  color: #148dd3;
  font-size: 3.2rem;
  font-weight: bold;
}

.credit {
  font-size: 1.6rem;
  font-style: italic;
  margin-top: 10px;
}

.img {
  margin-top: 30px;

  /deep/ img {
    display: block;
    margin: auto;
  }
}

.profile {
  font-size: 1.8rem;
  line-height: 1.5em;
  margin-top: 40px;

  /deep/ p {
    & + p {
      padding-top: 1.5em;
    }
  }
}

.links {
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;

  &__item {
    padding-right: 34px;
  }
}
</style>
