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

<style lang="scss" scoped>
.info {
  padding-bottom: 90px;
}

.datetime {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: rgba(color(border, black), .18) solid 1px;
  color: color(text, black);
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
  color: color(text, dark-gray);
  font-size: 2.1rem;
  text-decoration: none;
  height: 2.1rem;
  padding: 10px 15px 0 0;
  transition: color .3s ease-out;

  &:hover {
    color: color(text, primary);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 2px;
    right: 0;
    border-style: solid;
    border-width: 0 0 10px 10px;
    border-color: transparent transparent color(link, primary) transparent;
    width: 0;
    height: 0;
  }
}
</style>
