<template>
  <div>
    <div class="wrapper">
      <div class="inner">
        <ol class="caution">
          <li>未成年者の飲酒・喫煙は固くお断りします。</li>
          <li>飲食物の持ち込みは禁止させて頂いております。</li>
          <li>他のお客様のご迷惑となる行為、過度なナンパ行為等は禁止させて頂いております。場合によっては、退場して頂く場合がございます。</li>
          <li>貴重品は自己管理でお願いいたします。万が一紛失された場合、こちらでは責任を負いかねますのでご注意下さい。</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding-bottom: 70px;
}
.inner {
  background-color: rgba(255, 255, 255, .6);
  padding: 15px 0;
}
.caution {
  font-size: 1.2rem;
  text-align: left;
  line-height: 1.8rem;
  width: 570px;
  margin: auto;
  box-sizing: border-box;
}
@media (min-width: 641px) {
  .caution {
    width: 810px;
  }
}
.caution >>> li {
  list-style: decimal;
  text-indent: -2.2em;
}
.caution >>> li::before {
  content: "※";
  padding-right: 1.2em;
}
</style>
