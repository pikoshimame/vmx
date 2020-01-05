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
            <span
              class="thumb"
            ><img
              :src="resident.thumbnail.x1"
              :srcset="`${resident.thumbnail.x1} 1x, ${resident.thumbnail.x2} 2x`"
              :alt="resident.name"
            ></span>
            <span
              class="thumb thumb--on"
            ><img
              :src="resident.thumbnail.x1"
              :srcset="`${resident.thumbnail.x1} 1x, ${resident.thumbnail.x2} 2x`"
              :alt="resident.name"
            ></span>
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

<style scoped>
.residents {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 420px;
  padding-bottom: 30px;
}
@media (min-width: 641px) {
  .residents {
    width: 840px;
  }
}
.residents__item {
  height: 130px;
}
.btn {
  position: relative;
  width: 420px;
  height: 100px;
  margin: auto;
}
.thumb {
  position: absolute;
  left: 0;
  top: 0;
  width: 180px;
  height: 100px;
  overflow: hidden;
}
.thumb--on {
  opacity: 0;
  transition: opacity .3s ease-out;
}
.thumb--on >>> img {
  margin-top: -100px;
}
.name {
  position: absolute;
  left: 220px;
  top: 0;
  bottom: 0;
  font-size: 1.8rem;
  height: 2.1rem;
  padding: 18px 0 0 50px;
  transition: color .3s ease-out;
}
.name::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  border-top: rgba(0, 0, 0, .1) solid 1px;
  width: 50px;
}
.btn:hover >>> .thumb--on {
  opacity: 1;
}
.btn:hover >>> .name {
  color: #148dd3;
}
</style>
