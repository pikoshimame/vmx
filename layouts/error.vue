<template>
  <div>
    <section class="notfound">
      <vmx-logo/>
      <h2 class="title">404 NOT FOUND</h2>
      <nuxt-link class="link" to="/">トップへ</nuxt-link>
    </section>
  </div>
</template>

<script>
import VmxLogo from '~/components/index/Logo';

export default {
  components: { VmxLogo },
}
</script>


<style scoped>
.notfound {
  text-align: center;
}
.title {
	border-bottom: rgba(0, 0, 0, .18) solid 1px;
  font-size: 3.8rem;
	width: 480px;
	margin: auto;
  padding: 0 20px 10px;
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
  color: #e84388;
}
.link::after {
  content: "";
  position: absolute;
  bottom: 2px;
  right: 0;
  border-style: solid;
  border-width: 0 0 10px 10px;
  border-color: transparent transparent #e84388 transparent;
  width: 0;
  height: 0;
}
</style>
