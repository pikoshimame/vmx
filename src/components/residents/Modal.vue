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
      <div class="inner">
        <div class="inner__item inner__item--left">
          <p
            class="img"
          >
            <img
              :src="resident.image.x1"
              :srcset="`${resident.image.x1} 1x, ${resident.image.x2} 2x`"
              :alt="resident.name"
            >
          </p>
        </div>
        <div class="inner__item">
          <p
            class="name"
            v-html="resident.name"
          />
          <p
            v-if="resident.credit"
            class="credit"
            v-html="resident.credit"
          />
          <div
            class="profile"
            v-html="resident.profile"
          />
          <ul
            v-if="resident.website || resident.soundcloud || resident.twitter"
            class="links"
          >
            <li
              v-if="resident.twitter"
              class="links__item"
            >
              <button-twitter :link="resident.twitter" />
            </li>
            <li
              v-if="resident.soundcloud"
              class="links__item"
            >
              <button-soundcloud :link="resident.soundcloud" />
            </li>
            <li
              v-if="resident.website"
              class="links__item"
            >
              <button-website :link="resident.website" />
            </li>
          </ul>
        </div>
      </div>
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
    resident: {
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

<style lang="scss" scoped>
.modal {
  &.v--modal-overlay {
    background-color: rgba(color(background, black), .42);
  }

  /deep/ .v--modal {
    position: relative;
    border-radius: 4px;
    color: color(text, dark-gray);
    padding: 60px 30px 40px;
    box-shadow: 0 0 4px 1px rgba(color(shadow, black), .3);
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

.inner {
  display: flex;
  justify-content: space-between;

  &__item {
    width: 270px;
    box-sizing: border-box;

    &--left {
      padding-right: 30px;
    }
  }
}

.name {
  color: color(text, primary);
  font-size: 3.2rem;
  font-weight: bold;
}

.credit {
  font-size: 1.6rem;
  font-style: italic;
  margin-top: 20px;
}

.img {
  > img {
    display: block;
    margin: auto;
  }
}

.profile {
  font-size: 1.4rem;
  line-height: 1.6em;
  margin-top: 50px;

  /deep/ p {
    & + p {
      padding-top: 1.6em;
    }
  }

  /deep/ a {
    color: color(text, primary);

    &:hover {
      text-decoration: none;
    }
  }
}

.links {
  display: flex;
  justify-content: flex-start;
  margin-top: 25px;

  &__item {
    padding-right: 34px;
  }
}
</style>
