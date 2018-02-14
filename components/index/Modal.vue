<template>
  <div>
    <modal class="modal" :name="`${guest.modalKey}${guest.displayOrder}`" :width="600" :height="'auto'" :scrollable="true">
      <button class="close" @click="$modal.hide(`${guest.modalKey}${guest.displayOrder}`)"><icon-close class="close__icon"/></button>
      <p class="name" v-html="guest.name"/>
      <p class="credit" v-if="guest.credit" v-html="guest.credit"/>
      <p class="img" v-if="guest.image.fields && guest.image2x.fields"><img :src="guest.image.fields.file.url" :srcset="`${guest.image.fields.file.url} 1x, ${guest.image2x.fields.file.url} 2x`" :alt="guest.name"/></p>
      <p class="profile" v-html="guest.prifile"/>
      <ul class="links" v-if="guest.website || guest.soundcloud || guest.twitter">
        <li class="links__item links__item--website" v-if="guest.website">
          <a :href="guest.website" target="_blank"><icon-website class="icon icon--website"/></a>
        </li>
        <li class="links__item links__item--soundcloud" v-if="guest.soundcloud">
          <a :href="guest.soundcloud" target="_blank"><icon-soundcloud class="icon icon--soundcloud"/></a>
        </li>
        <li class="links__item links__item--twitter" v-if="guest.twitter">
          <a :href="guest.twitter" target="_blank"><icon-twitter class="icon icon--twitter"/></a>
        </li>
      </ul>
    </modal>
  </div>
</template>

<script>
import IconClose from '~/components/common/icon/Close';
import IconWebsite from '~/components/common/icon/Website';
import IconSoundcloud from '~/components/common/icon/Soundcloud';
import IconTwitter from '~/components/common/icon/Twitter';

export default {
  props: ['guest'],
  components: { IconClose, IconWebsite, IconSoundcloud, IconTwitter }
}
</script>

<style scoped>
.modal.v--modal-overlay {
  background-color: rgba(0, 0, 0, .42);
}
.modal >>> .v--modal {
  position: relative;
  border-radius: 4px;
  color: #575757;
  padding: 40px 30px 30px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, .3);
}
.close {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 23px;
  height: 23px;
}
.close__icon {
  display: block;
  color: #575757;
  width: 23px;
  height: 23px;
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
.links {
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
}
.links__item {
  padding-right: 34px;
}
.links__item >>> a {
  position: relative;
  display: flex;
  width: 50px;
  height: 44px;
  transition: opacity .3s ease-out;
}
.links__item >>> a:hover {
  opacity: .7;
}
.links__item >>> a::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  border-style: solid;
  border-width: 0 0 10px 10px;
  width: 0;
  height: 0;
}
.links__item--website >>> a::after {
  border-color: transparent transparent #aeaeae transparent;
}
.links__item--soundcloud >>> a::after {
  border-color: transparent transparent #fe4700 transparent;
}
.links__item--twitter >>> a::after {
  border-color: transparent transparent #00aced transparent;
}
.icon {
  display: block;
  color: #d9d9d9;
  margin: auto;
}
.icon--website {
  width: 36px;
  height: 29px;
}
.icon--soundcloud {
  width: 39px;
  height: 17px;
}
.icon--twitter {
  width: 36px;
  height: 29px;
}
</style>
