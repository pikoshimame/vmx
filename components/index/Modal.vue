<template>
  <div>
    <modal class="modal" :name="`${guest.modalKey}${guest.displayOrder}`" :width="600" :height="'auto'" :scrollable="true">
      <button class="close" @click="$modal.hide(`${guest.modalKey}${guest.displayOrder}`)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23">
          <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#575757" points="23,0.719 22.281,0 11.5,10.781 0.719,0 0,0.719 10.781,11.5 0,22.281 0.719,23 11.5,12.219 22.281,23 23,22.281 12.219,11.5"/>
        </svg>
      </button>
      <p class="name" v-html="guest.name"/>
      <p class="credit" v-if="guest.credit" v-html="guest.credit"/>
      <p class="img" v-if="guest.image.fields && guest.image2x.fields"><img :src="guest.image.fields.file.url" :srcset="`${guest.image.fields.file.url} 1x, ${guest.image2x.fields.file.url} 2x`" :alt="guest.name"/></p>
      <p class="profile" v-html="guest.prifile"/>
      <ul class="links" v-if="guest.website || guest.soundcloud || guest.twitter">
        <li class="links__item links__item--website" v-if="guest.website">
          <a :href="guest.website" target="_blank">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 29">
              <path fill-rule="evenodd" clip-rule="evenodd" fill="#D9D9D9" d="M35.133,0H0.866C0.388,0,0,0.387,0,0.865v27.269
                C0,28.611,0.388,29,0.866,29h34.267C35.611,29,36,28.611,36,28.134V0.865C36,0.387,35.611,0,35.133,0z M15,3.246h17v1.189H15
                V3.246z M10.685,3.104c0.479,0,0.868,0.387,0.868,0.866s-0.388,0.867-0.868,0.867c-0.479,0-0.868-0.388-0.868-0.867
                S10.206,3.104,10.685,3.104z M7.506,3.101c0.479,0,0.867,0.387,0.867,0.865S7.985,4.831,7.506,4.831S6.64,4.444,6.64,3.966
                S7.028,3.101,7.506,3.101z M4.617,3.103c0.475,0,0.86,0.385,0.86,0.859s-0.385,0.859-0.86,0.859s-0.86-0.385-0.86-0.859
                S4.142,3.103,4.617,3.103z M33.978,26.98H2.021V6.994h31.956V26.98z"/>
            </svg>
          </a>
        </li>
        <li class="links__item links__item--soundcloud" v-if="guest.soundcloud">
          <a :href="guest.soundcloud" target="_blank">
            <icon class="icon" name="soundcloud" width="39px" height="100%"/>
          </a>
        </li>
        <li class="links__item links__item--twitter" v-if="guest.twitter">
          <a :href="guest.twitter" target="_blank">
            <icon class="icon" name="twitter" width="36px" height="100%"/>
          </a>
        </li>
      </ul>
    </modal>
  </div>
</template>

<script>
import 'vue-awesome/icons/soundcloud';
import 'vue-awesome/icons/twitter';
import Icon from 'vue-awesome/components/Icon';

export default {
  props: ['guest'],
  components: { Icon }
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
.close >>> svg {
  display: block;
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
.links__item--website >>> .icon {
  width: 36px;
  height: 29px;
}
</style>
