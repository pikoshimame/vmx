<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <div class="heading-container">
      <text-heading
        text="ABOUT"
      />
    </div>
    <div class="text-container">
      <p class="item">
        <text-invert>
          近年、様々なジャンルのボーカロイド曲が生まれています。<br>
          その、ボーカロイドが得意とするジャンルの一つに、<br>
          「ダンスミュージック」があります。
        </text-invert>
      </p>
      <p class="item">
        <text-invert>
          VOCALOID-ManiaXは、<br>
          その「ダンスミュージック」というジャンルを<br>
          主軸にしたパーティーです。
        </text-invert>
      </p>
      <p class="item">
        <text-invert>
          ゲストDJとレジデントDJが、<br>
          毎回様々なボーカロイド曲をフロアにお届けします。
        </text-invert>
      </p>
      <p class="item">
        <text-invert>
          今まで聴いた事なかった素敵な曲に出会えるチャンスかも！？
        </text-invert>
      </p>
    </div>
  </div>
</template>

<script>
import TextHeading from '~/components/common/text/Heading';
import TextInvert from '~/components/common/text/Invert';

export default {
  name: 'AboutContents',
  components: {
    TextHeading,
    TextInvert
  }
};
</script>

<style lang="scss" scoped>
.heading-container {
  padding-bottom: 24px;
}

.text-container {
  font-size: 1.5rem;

  > .item {
    padding-bottom: 32px;

    br {
      display: none;

      @include mq(medium) {
        display: block;
      }
    }
  }
}
</style>
