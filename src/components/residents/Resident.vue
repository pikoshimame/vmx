<template>
  <div>
    <section>
      <slot />
      <ul class="residents">
        <li
          v-for="(resident, index) in residents"
          :key="resident.index"
          class="residents__item"
        >
          <button
            class="btn"
            @click="$modal.show(`${modalKey}${index}`)"
          >
            <img
              :src="resident.thumbnail.x1"
              :srcset="`${resident.thumbnail.x1} 1x, ${resident.thumbnail.x2} 2x`"
              :alt="resident.name"
              class="thumb"
            >
            <span class="name">{{ resident.name }}</span>
          </button>
          <vmx-modal
            :resident="resident"
            :modal-name="`${modalKey}${index}`"
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import VmxModal from '~/components/residents/Modal';

export default {
  components: {
    VmxModal
  },
  props: {
    residents: {
      type: Array,
      required: true
    },
    modalKey: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.residents {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 420px;
  padding-bottom: 30px;

  &__item {
    height: 130px;
  }
}

@media (min-width: 641px) {
  .residents {
    width: 840px;
  }
}

.btn {
  position: relative;
  width: 420px;
  height: 100px;
  margin: auto;

  &:hover {
    > .thumb {
      filter: none;
    }
    > .name {
      color: #148dd3;
    }
  }

  > .thumb {
    position: absolute;
    left: 0;
    top: 0;
    width: 180px;
    height: 100px;
    filter: grayscale(1) brightness(.7);
    transition: filter .3s ease-out;
  }

  > .name {
    position: absolute;
    left: 220px;
    top: 0;
    bottom: 0;
    font-size: 1.8rem;
    height: 2.1rem;
    padding: 18px 0 0 50px;
    transition: color .3s ease-out;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      border-top: rgba(0, 0, 0, .1) solid 1px;
      width: 50px;
    }
  }
}
</style>
