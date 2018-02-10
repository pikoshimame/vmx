<template>
  <div>
    <footer class="footer">
      <small class="copyright">{{ copyright }}</small>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyright: 'Copyright 2018 VOCALOID-ManiaX'
    }
  },
  methods: {
    getCopyright() {
      this.copyright = 'Copyright 2018 VOCALOID-ManiaX';
    }
  },
  mounted () {
    this.getCopyright();
  }
}
</script>

<style scoped>
.footer {
  font-family: 'Muli', sans-serif;
  font-weight:200;
  text-align: center;
  padding: 50px 0 25px;
}
.copyright {
  font-size: 1.1rem;
}
</style>
