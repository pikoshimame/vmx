<template>
  <dl class="doorcontents-list">
    <div class="item">
      <dt>通常</dt>
      <dd>2,500 yen (1drink)</dd>
    </div>
    <div class="item">
      <dt>フライヤー割引<br>Twitter割引</dt>
      <dd>2,000 yen (1drink)</dd>
    </div>
    <div class="item">
      <dt>未成年割引</dt>
      <dd>1,500 yen (1drink)</dd>
    </div>
  </dl>
</template>

<script>
export default {
  name: 'DoorContentsList'
};
</script>

<style lang="scss" scoped>
.doorcontents-list {
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1.3;
  padding-bottom: 16px;

  @include mq(small) {
    font-size: 1.8rem;
  }

  @include mq(medium) {
    font-size: 2.1rem;
  }

  > .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: color(background, black);
    color: color(text, white);
    max-width: 380px;
    padding: 8px;

    & + .item {
      margin-top: 8px;
    }
  }
}
</style>
