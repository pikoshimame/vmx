<template>
  <ol class="notes-contents">
    <li class="item">
      <span>未成年者の飲酒・喫煙は固くお断りします。</span>
    </li>
    <li class="item">
      <span>飲食物の持ち込みは禁止させて頂いております。</span>
    </li>
    <li class="item">
      <span>他のお客様のご迷惑となる行為、過度なナンパ行為等は禁止させて頂いております。場合によっては、退場して頂く場合がございます。</span>
    </li>
    <li class="item">
      <span>貴重品は自己管理でお願いいたします。万が一紛失された場合、こちらでは責任を負いかねますのでご注意下さい。</span>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'NotesContents'
};
</script>

<style lang="scss" scoped>
.notes-contents {
  font-size: 1.2rem;
  line-height: 1.5;

  @include mq(medium) {
    font-size: 1.3rem;
  }

  > .item {
    counter-increment: num;

    &::before {
      content: "※"counter(num)". ";
    }
  }
}
</style>
