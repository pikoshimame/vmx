<template>
  <div>
    <a class="btn" :href="twitter" target="_blank"><icon class="icon" name="twitter" width="22px" height="100%"/>Latest information</a>
  </div>
</template>

<script>
import 'vue-awesome/icons/twitter';
import Icon from 'vue-awesome/components/Icon';

export default {
  props: ['twitter'],
  components: { Icon }
}
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .8);
  border-radius: 24px;
  color: #575757;
  font-family: 'Muli', sans-serif;
  font-size: 2.1rem;
  font-weight: 300;
  text-decoration: none;
  width: 256px;
  height: 48px;
  margin: auto;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, .3);
  transition: opacity .3s ease-out;
}
.btn:hover {
  opacity: .7;
}
.icon {
  display: block;
  padding-right: 10px;
}
</style>
