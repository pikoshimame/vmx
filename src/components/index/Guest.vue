<template>
  <div>
    <section class="guests">
      <slot />
      <ul>
        <li
          v-for="(guest, index) in guests"
          :key="index"
        >
          <button
            class="btn"
            @click="$modal.show(`${modalKey}${index}`)"
          >
            <img
              :src="guest.thumbnail.x1"
              :srcset="`${guest.thumbnail.x1} 1x, ${guest.thumbnail.x2} 2x`"
              :alt="guest.name"
              class="thumb"
            >
            <span class="name">{{ guest.name }}</span>
          </button>
          <vmx-modal
            :guest="guest"
            :modal-name="`${modalKey}${index}`"
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import VmxModal from '~/components/index/Modal';

export default {
  components: {
    VmxModal
  },
  props: {
    guests: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      modalKey: 'guest-'
    };
  }
};
</script>

<style lang="scss" scoped>
.guests {
  padding-bottom: 90px;
}

.btn {
  position: relative;
  border-bottom: rgba(color(border, black), .1) solid 1px;
  width: 380px;
  height: 134px;
  margin: auto;

  &:hover {
    > .thumb {
      filter: none;
    }
    > .name {
      color: color(text, primary);
    }
  }

  > .thumb {
    position: absolute;
    right: 190px;
    top: 0;
    width: 270px;
    height: 133px;
    filter: grayscale(1) brightness(.7);
    transition: filter .3s ease-out;
  }

  > .name {
    position: absolute;
    left: 47%;
    top: 0;
    bottom: 0;
    font-size: 2.1rem;
    height: 2.1rem;
    margin: auto;
    padding-right: 15px;
    transition: color .3s ease-out;

    &::after {
      content: "";
      position: absolute;
      bottom: 2px;
      right: 0;
      border-style: solid;
      border-width: 0 0 10px 10px;
      border-color: transparent transparent color(link, primary) transparent;
      width: 0;
      height: 0;
    }
  }
}
</style>
