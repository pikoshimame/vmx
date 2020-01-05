<template>
  <div>
    <modal
      class="modal"
      :name="modalName"
      :width="photo.size.width"
      :height="photo.size.height"
      :scrollable="true"
    >
      <button-close
        class="close"
        :name="modalName"
      />
      <p class="img">
        <img
          :src="photo.image.x1"
          :srcset="`${photo.image.x1} 1x, ${photo.image.x2} 2x`"
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
    photo: {
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
.modal{
  &.v--modal-overlay {
    background-color: rgba(color(background, black), .8);
  }

  /deep/ .v--modal {
    position: relative;
    background-color: transparent;
    box-shadow: 0 0 4px 1px rgba(color(shadow, black), .3);
    overflow: visible;
  }
}

.close {
  position: absolute;
  right: 10px;
  top: -33px;
  width: 23px;
  height: 23px;

  /deep/ svg {
    color: color(icon, white);
  }
}

.img {
  > img {
    display: block;
    margin: auto;
  }
}
</style>
