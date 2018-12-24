<template>
  <div>
    <modal class="modal" :name="modalName" :width="600" :height="'auto'" :scrollable="true">
      <button-close class="close" :name="modalName" />
      <div class="inner">
        <div class="inner__item inner__item--left">
          <p class="img" v-if="resident.image.fields"><img :src="getHalfSizeUrl(resident.image.fields.file)" :srcset="`${getHalfSizeUrl(resident.image.fields.file)} 1x, ${resident.image.fields.file.url} 2x`" :alt="resident.name"/></p>
        </div>
        <div class="inner__item">
          <p class="name" v-html="resident.name"/>
          <p class="credit" v-if="resident.credit" v-html="resident.credit"/>
          <p class="profile" v-html="resident.prifile"/>
          <ul class="links" v-if="resident.website || resident.soundcloud || resident.twitter">
            <li class="links__item" v-if="resident.twitter">
              <button-twitter :link="resident.twitter"/>
            </li>
            <li class="links__item" v-if="resident.soundcloud">
              <button-soundcloud :link="resident.soundcloud"/>
            </li>
            <li class="links__item" v-if="resident.website">
              <button-website :link="resident.website"/>
            </li>
          </ul>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import ButtonClose from '~/components/common/button/Close';
import ButtonWebsite from '~/components/common/button/Website';
import ButtonSoundcloud from '~/components/common/button/Soundcloud';
import ButtonTwitter from '~/components/common/button/Twitter';

export default {
  props: ['resident', 'modalName'],
  components: { ButtonClose, ButtonWebsite, ButtonSoundcloud, ButtonTwitter },
  methods: {
    getHalfSizeUrl(file) {
      return `${file.url}?w=${Math.floor(file.details.image.width / 2)}`;
    }
  }
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
  padding: 60px 30px 40px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, .3);
}
.close {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 23px;
  height: 23px;
}
.inner {
  display: flex;
  justify-content: space-between;
}
.inner__item {
  width: 270px;
  box-sizing: border-box;
}
.inner__item--left {
  padding-right: 30px;
}
.name {
  color: #148dd3;
  font-size: 3.2rem;
  font-weight: bold;
}
.credit {
	font-size: 1.6rem;
	font-style: italic;
  margin-top: 20px;
}
.img >>> img {
  display: block;
  margin: auto;
}
.profile {
  font-size: 1.4rem;
  line-height: 1.6em;
  margin-top: 50px;
}
.profile >>> a {
  color: #148dd3;
}
.profile >>> a:hover {
  text-decoration: none;
}
.links {
  display: flex;
  justify-content: flex-start;
  margin-top: 25px;
}
.links__item {
  padding-right: 34px;
}
</style>
