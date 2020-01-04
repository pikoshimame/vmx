<template>
  <div>
    <footer class="footer">
      <small class="copyright">{{ copyright }}</small>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    copyright() {
      return this.$store.state.copyright;
    }
  }
};
</script>

<style scoped>
.footer {
  font-family: 'Muli', sans-serif;
  font-weight: 200;
  text-align: center;
  padding: 80px 0 25px;
}
.copyright {
  font-size: 1.1rem;
}
</style>
