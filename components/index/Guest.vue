<template>
  <div>
    <section class="guests">
      <slot/>
      <ul class="guest">
        <li class="guest__item" v-for="guest in guests" :key="guest.displayOrder">
          <button class="btn">
            <div class="thumb"><img :src="guest.thumbnail.fields.file.url" :alt="guest.name"></div>
            <div class="thumb thumb--on"><img :src="guest.thumbnail.fields.file.url" :alt="guest.name"></div>
            <div class="name">{{ guest.name }}</div>
          </button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  props: ['guests']
}
</script>

<style scoped>
.guests {
  padding-bottom: 90px;
}
.guest {
  margin: 0;
  padding: 0;
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
