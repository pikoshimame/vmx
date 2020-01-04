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
        v-if="guest.image.fields"
        class="img"
      >
        <img
          :src="getHalfSizeUrl(guest.image.fields.file)"
          :srcset="`${getHalfSizeUrl(guest.image.fields.file)} 1x, ${guest.image.fields.file.url} 2x`"
          :alt="guest.name"
        >
      </p>
      <p
        class="profile"
        v-html="guest.prifile"
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
  },
  methods: {
    getHalfSizeUrl(file) {
      return `${file.url}?w=${Math.floor(file.details.image.width / 2)}`;
    }
  }
};
</script>

<style scoped>
.modal.v--modal-overlay {
  background-color: rgba(0, 0, 0, .42);
}
.modal >>> .v--modal {
  position: relative;
  border-radius: 4px;
  color: #575757;
  padding: 40px 30px 30px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, .3);
  margin-bottom: 100px;
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
}
.img >>> img {
  display: block;
  margin: auto;
}
.profile {
  font-size: 1.8rem;
  line-height: 1.5em;
  margin-top: 40px;
}
.links {
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
}
.links__item {
  padding-right: 34px;
}
</style>
