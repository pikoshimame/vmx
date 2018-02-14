<template>
  <div>
    <section class="guests">
      <slot/>
      <ul>
        <li v-for="guest in guests" :key="guest.displayOrder">
          <button class="btn" @click="$modal.show(`${modalKey}${guest.displayOrder}`)">
            <span class="thumb" v-if="guest.thumbnail.fields"><img :src="getHalfSizeUrl(guest.thumbnail.fields.file)" :srcset="`${getHalfSizeUrl(guest.thumbnail.fields.file)} 1x, ${guest.thumbnail.fields.file.url} 2x`" :alt="guest.name"></span>
            <span class="thumb thumb--on" v-if="guest.thumbnail.fields"><img :src="getHalfSizeUrl(guest.thumbnail.fields.file)" :srcset="`${getHalfSizeUrl(guest.thumbnail.fields.file)} 1x, ${guest.thumbnail.fields.file.url} 2x`" :alt="guest.name"></span>
            <span class="name">{{ guest.name }}</span>
          </button>
          <vmx-modal :guest="guest" :modalName="`${modalKey}${guest.displayOrder}`"/>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import VmxModal from '~/components/index/Modal';

export default {
  props: ['guests'],
  components: { VmxModal },
  data() {
    return {
      modalKey: 'guest-'
    }
  },
  methods: {
    getHalfSizeUrl(file) {
      return `${file.url}?w=${file.details.image.width / 2}`;
    }
  }
}
</script>

<style scoped>
.guests {
  padding-bottom: 90px;
}
.btn {
  position: relative;
  border-bottom: rgba(0, 0, 0, .1) solid 1px;
  width: 380px;
  height: 134px;
  margin: auto;
}
.thumb {
  position: absolute;
  right: 190px;
  top: 0;
  width: 270px;
  height: 133px;
  overflow: hidden;
}
.thumb--on {
  opacity: 0;
  transition: opacity .3s ease-out;
}
.thumb--on >>> img {
  margin-top: -133px;
}
.name {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  font-size: 2.1rem;
  height: 2.1rem;
  margin: auto;
  padding-right: 15px;
  transition: color .3s ease-out;
}
.name::after {
  content: "";
  position: absolute;
  bottom: 2px;
  right: 0;
  border-style: solid;
  border-width: 0 0 10px 10px;
  border-color: transparent transparent #00755c transparent;
  width: 0;
  height: 0;
}
.btn:hover >>> .thumb--on {
  opacity: 1;
}
.btn:hover >>> .name {
  color: #00755c;
}
</style>
