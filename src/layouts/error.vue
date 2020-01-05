<template>
  <div>
    <section class="notfound">
      <vmx-logo />
      <h2 class="title">
        {{ text }}
      </h2>
      <nuxt-link
        class="link"
        to="/"
      >
        トップへ
      </nuxt-link>
    </section>
  </div>
</template>

<script>
import VmxLogo from '~/components/index/Logo';

export default {
  components: {
    VmxLogo
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    text() {
      const statusCode = (this.error && this.error.statusCode) || 500;
      return statusCode === 404 ? `${statusCode} NOT FOUND` : `${statusCode} SERVER ERROR`;
    }
  }
};
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
