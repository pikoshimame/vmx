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
          <template
            v-for="(photo, index) in photos"
          >
            <li
              v-if="photo.fields"
              :key="photo.fields.title"
              class="photos__item"
            >
              <button
                class="btn"
                @click="$modal.show(`${modalKey}${index}`)"
              >
                <img
                  :src="getThumbnailHalfSizeUrl(photo.fields.file)"
                  :srcset="`${getThumbnailHalfSizeUrl(photo.fields.file)} 1x, ${getThumbnailSizeUrl(photo.fields.file)} 2x`"
                  alt=""
                >
              </button>
              <vmx-modal
                :file="photo.fields.file"
                :modal-name="`${modalKey}${index}`"
              />
            </li>
          </template>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
import VmxModal from '~/components/photo/Modal';
import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export default {
  components: {VmxModal},
  async asyncData(context) {
    const photos = await client.getEntries({content_type: 'photo', order: 'fields.name'});
    return {
      photos: photos.items.map((entry) => {
        return entry.fields.image;
      })[0]
    };
  },
  data() {
    return {
      photos: [],
      modalKey: 'photo-'
    };
  },
  methods: {
    getThumbnailSizeUrl(file) {
      return `${file.url}?fit=thumb&w=300&h=300`;
    },
    getThumbnailHalfSizeUrl(file) {
      return `${file.url}?fit=thumb&w=150&h=150`;
    }
  }
};
</script>

<style scoped>
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
}
@media (min-width: 641px) {
  .photos {
    width: 960px;
  }
}
.photos__item {
  padding: 5px;
}
.btn {
  position: relative;
}
.btn::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  background-color: rgba(0, 0, 0, .5);
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity .3s ease-out;
}
.btn:hover::before {
  opacity: 1;
}
.btn >>> img {
  display: block;
}
</style>
