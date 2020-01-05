<template>
  <div>
    <a
      class="btn"
      :href="twitter"
      target="_blank"
      rel="noopener"
    ><icon-twitter class="icon" />Latest information</a>
  </div>
</template>

<script>
import IconTwitter from '~/components/common/icon/Twitter';

export default {
  components: {
    IconTwitter
  },
  props: {
    twitter: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(color(background, white), .8);
  border-radius: 24px;
  color: color(text, dark-gray);
  font-family: 'Muli', sans-serif;
  font-size: 2.1rem;
  font-weight: 300;
  text-decoration: none;
  width: 256px;
  height: 48px;
  margin: auto;
  box-shadow: 0 0 4px 1px rgba(color(shadow, black), .3);
  transition: opacity .3s ease-out;

  &:hover {
    opacity: .7;
  }
}

.icon {
  display: block;
  color: color(icon, dark-gray);
  width: 22px;
  height: 18px;
  padding-right: 10px;
}
</style>
