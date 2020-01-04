<template>
  <div>
    <div class="info">
      <slot />
      <time
        class="datetime"
        :datetime="info.datetime"
      ><span class="date">{{ info.date }}</span><span class="time">{{ info.time }}</span></time>
      <a
        class="link"
        :href="info.link"
        target="_blank"
        rel="noopener"
      >Akihabara MOGRA</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.info {
  padding-bottom: 90px;
}
.datetime {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: rgba(0, 0, 0, .18) solid 1px;
  color: #141414;
  width: 480px;
  margin: auto;
  padding: 0 20px 10px;
  box-sizing: border-box;
  letter-spacing: -.5px;
}
.date {
  font-size: 3.2rem;
  line-height: 1em;
}
.time {
  font-size: 2.4rem;
  line-height: 1em;
}
.link {
  position: relative;
  display: inline-block;
  color: #575757;
  font-size: 2.1rem;
  text-decoration: none;
  height: 2.1rem;
  padding: 10px 15px 0 0;
  transition: color .3s ease-out;
}
.link:hover {
  color: #148dd3;
}
.link::after {
  content: "";
  position: absolute;
  bottom: 2px;
  right: 0;
  border-style: solid;
  border-width: 0 0 10px 10px;
  border-color: transparent transparent #148dd3 transparent;
  width: 0;
  height: 0;
}
</style>
