<template>
  <div>
    <modal
      class="modal"
      :name="modalName"
      :width="Math.floor(file.details.image.width / 2)"
      :height="Math.floor(file.details.image.height / 2)"
      :scrollable="true"
    >
      <button-close
        class="close"
        :name="modalName"
      />
      <p class="img">
        <img
          :src="getHalfSizeUrl(file)"
          :srcset="`${getHalfSizeUrl(file)} 1x, ${file.url} 2x`"
          alt=""
        >
      </p>
    </modal>
  </div>
</template>

<script>
import ButtonClose from '~/components/common/button/Close';

export default {
  components: {
    ButtonClose
  },
  props: {
    file: {
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
  background-color: rgba(0, 0, 0, .8);
}
.modal >>> .v--modal {
  position: relative;
  background-color: transparent;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, .3);
  overflow: visible;
}
.close {
  position: absolute;
  right: 10px;
  top: -33px;
  width: 23px;
  height: 23px;
}
.close >>> svg {
  color: #fff;
}
.img >>> img {
  display: block;
  margin: auto;
}
</style>
