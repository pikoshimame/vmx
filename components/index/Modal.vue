<template>
  <div>
    <modal class="modal" :name="`modal-${guest.displayOrder}`" :width="600" :height="'auto'">
      <p class="name" v-html="guest.name"/>
      <p class="credit" v-if="guest.credit" v-html="guest.credit"/>
      <p class="img"><img :src="guest.image.fields.file.url" :srcset="`${guest.image.fields.file.url} 1x, ${guest.image2x.fields.file.url} 2x`" :alt="guest.name"/></p>
      <p class="profile" v-html="guest.prifile"/>
    </modal>
  </div>
</template>

<script>
export default {
  props: ['guest']
}
</script>

<style scoped>
.modal {
  color: #575757;
}
.name {
  color: #00a782;
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
  line-height: 2.7rem;
  margin-top: 40px;
}
.modal >>> .v--modal-box {
  padding: 40px 30px 30px;
}
</style>
