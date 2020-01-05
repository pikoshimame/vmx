<template>
  <div>
    <main class="main">
      <section>
        <h2 class="title">
          Photo
        </h2>
        <ul
          v-if="photos"
          class="photos"
        >
          <li
            v-for="(photo, index) in photos"
            :key="index"
            class="photos__item"
          >
            <button
              class="btn"
              @click="$modal.show(`${modalKey}${index}`)"
            >
              <img
                :src="photo.thumbnail.x1"
                :srcset="`${photo.thumbnail.x1} 1x, ${photo.thumbnail.x2} 2x`"
                alt=""
              >
            </button>
            <vmx-modal
              :photo="photo"
              :modal-name="`${modalKey}${index}`"
            />
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
import VmxModal from '~/components/photo/Modal';

export default {
  components: {
    VmxModal
  },
  async fetch({store}) {
    await store.dispatch('photo/fetch');
  },
  data() {
    return {
      modalKey: 'photo-'
    };
  },
  computed: {
    photos() {
      return this.$store.getters['photo/viewModel'].list;
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 640px;
  margin: auto;
  padding: 125px 5px 60px;
  box-sizing: border-box;
}

@media (min-width: 641px) {
  .main {
    width: 960px;
  }
}

.title {
  font-size: 5.7rem;
  padding-bottom: 50px;
}

.photos {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 640px;
  margin-left: -5px;

  &__item {
    padding: 5px;
  }
}

@media (min-width: 641px) {
  .photos {
    width: 960px;
  }
}

.btn {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    background-color: rgba(color(background, black), .5);
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity .3s ease-out;
  }

  &:hover{
    &::before {
      opacity: 1;
    }
  }

  > img {
    display: block;
  }
}
</style>
