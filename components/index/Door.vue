<template>
  <div>
    <section class="door">
      <slot/>
      <dl class="price">
        <dt>通常</dt>
        <dd>2,500yen (1drink)</dd>
        <dt class="small">フライヤー割引<br>Twitter割引</dt>
        <dd>2,000yen (1drink)</dd>
        <dt>未成年割引</dt>
        <dd>1,500yen (1drink)</dd>
      </dl>
      <ul class="notes">
        <li>成年・未成年に限らず “必ず”身分証をお持ち下さい。</li>
        <li>Twitter割引は<a class="link" :href="link" target="_blank">MOGRAページ</a>からツイートして当日受付でお見せ下さい。</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  props: ['link']
}
</script>

<style scoped>
.door {
  padding-bottom: 90px;
}
.price {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  font-size: 2.1rem;
  width: 500px;
  height: 210px;
  margin: auto;
}
.price >>> dt {
  text-align: center;
  width: 260px;
  margin: 0;
}
.price >>> dd {
  text-align: left;
  width: 240px;
  margin: 0;
}
.price >>> .small {
  font-size: 1.9rem;
}
.price >>> .description {
  font-size: 1.2rem;
  text-align: center;
  width: 600px;
  height: 12px;
}
.notes {
  font-size: 1.2rem;
  text-align: left;
  line-height: 1.8rem;
  width: 430px;
  margin: auto;
}
.notes >>> li {
  text-indent: -1.5em;
  padding-left: 1.5em;
}
.notes >>> li::before {
  content: "※";
  padding-right: .5em;
}
.link {
  color: #e84388;
}
.link:hover {
  text-decoration: none;
}
</style>
