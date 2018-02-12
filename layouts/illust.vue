<template>
  <default class="layout"/>
</template>

<script>
import Default from './default';

export default {
  components: {
    Default
  }
}
</script>

<style>
.layout {
  background: url('~assets/bg.png') calc(50% + 330px) top no-repeat;
}
@media (min-width: 641px) {
  .layout {
    background: url('~assets/bg.png') calc(50% + 490px) top no-repeat;
  }
}
</style>
