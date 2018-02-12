<template>
  <div>
    <vmx-header/>
    <nuxt/>
    <vmx-footer/>
  </div>
</template>

<script>
import VmxHeader from '~/components/common/Header';
import VmxFooter from '~/components/common/Footer';

export default {
  components: { VmxHeader, VmxFooter }
}
</script>

<style lang="scss">
html {
  color: #575757;
  font-size: 10px;
  min-width: 640px;
}
body {
  font-family: Hiragino Sans, 'ヒラギノ角ゴ ProN W3', Hiragino Kaku Gothic ProN, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: linear-gradient(left, hsl(1, 59%, 81%), #fff);
  animation: 'background-animation' 10s linear 0s infinite alternate;
}
@keyframes background-animation {
  @for $i from 1 through 100 {
    #{$i}% { background: linear-gradient(left, hsl($i, 59%, 81%), #fff); }
  }
}
@media (min-width: 641px) {
  html {
    min-width: 960px;
  }
}
h2, h3 {
  color: #00a782;
  font-family: 'Muli', sans-serif;
  font-style: italic;
  font-weight: 300;
  line-height: 1em;
  margin: 0;
}
button {
  background: none;
  border: none;
  padding: 0;
  outline: none;
  cursor: pointer;
}
li {
  list-style: none;
}
p {
  margin: 0;
}
</style>
