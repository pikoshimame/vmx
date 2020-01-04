<template>
  <div>
    <vmx-header />
    <nuxt />
    <vmx-footer />
    <vmx-background />
  </div>
</template>

<script>
import VmxHeader from '~/components/common/Header';
import VmxFooter from '~/components/common/Footer';
import VmxBackground from '~/components/common/Background';

export default {
  components: {
    VmxHeader,
    VmxFooter,
    VmxBackground
  }
};
</script>

<style>
html {
  color: #575757;
  font-size: 10px;
  min-width: 640px;
}
body {
  font-family: Hiragino Sans, 'ヒラギノ角ゴ ProN W3', Hiragino Kaku Gothic ProN, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
body.v--modal-block-scroll {
  position: relative;
  width: 100%;
}
@media (min-width: 641px) {
  html {
    min-width: 960px;
  }
}
h2, h3 {
  color: #148dd3;
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  line-height: 1em;
  margin: 0;
}
button {
  background: none;
  border: none;
  color: #575757;
  padding: 0;
  outline: none;
  cursor: pointer;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
p {
  margin: 0;
}
</style>
