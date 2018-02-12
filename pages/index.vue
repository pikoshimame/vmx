<template>
  <div>
    <main class="main">
      <div class="inner">
        <div class="logoWraper">
          <div class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138 263">
              <path fill="#C3267F" d="M99.374,9.581l-30.373,7.533L0,0l32.632,103.239L99.374,9.581z M111.604,6.548l14.839,30.012L138,0
                L111.604,6.548z M35.535,112.425l33.466,105.879l54.097-171.157l-16.813-34.006L35.535,112.425z M27.871,260.936l-12.249-16.773
                l-1.096,0.571L27.871,263l13.344-18.267l-1.093-0.571L27.871,260.936z M56.15,244.556V263h1.22v-15.587l11.631,11.154
                l11.63-11.154V263h1.219v-18.444l-12.849,12.321L56.15,244.556z M118.315,244.892l-1.19-0.639l-9.715,8.009l-9.722-8.019
                l-1.183,0.648l9.922,8.178l-11.268,9.29L96.34,263l11.07-9.123L118.48,263l1.184-0.641l-11.274-9.29L118.315,244.892z" />
            </svg>
          </div>
        </div>
        <section>
          <h2 class="titleMain">Next</h2>
          <time class="datetime" :datetime="datetime"><span class="date">{{ date }}</span><span class="time">{{ time }}</span></time>
          <a class="linkMain" :href="link">Akihabara MOGRA</a>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'illust',
  components: {

  },
  data() {
    return {
      datetime: '',
      date: '2018.02.18sun',
      time: '14:00 ～ 20:00',
      link: '#'
    };
  }
};
</script>

<style scoped>
.main {
  text-align: center;
}
.inner {
  width: 640px;
  margin: 0 auto;
}
@media (min-width: 641px) {
  .inner {
    width: 960px;
  }
}
.logoWraper {
  padding: 135px 0 140px;
}
.logo {
  width: 138px;
  height: 263px;
  margin: 0 auto;
}
.logo >>> svg {
  display: block;
}
.titleMain {
  font-family: 'Muli', sans-serif;
  font-style: italic;
  font-weight: 300;
  font-size: 38px;
  color: #00a782;
  line-height: 1em;
  margin-bottom: 30px;
}
.datetime {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: rgba(0, 0, 0, .18) solid 1px;
  color: #141414;
  width: 480px;
  margin: 0 auto 10px;
  padding: 0 20px 10px;
  box-sizing: border-box;
  letter-spacing: -.5px;
}
.date {
  font-size: 32px;
  line-height: 1em;
}
.time {
  font-size: 24px;
  line-height: 1em;
}
.linkMain {
  position: relative;
  color: #575757;
  font-size: 21px;
  text-decoration: none;
  padding-right: 15px;
  transition: color .3s ease-out;
}
.linkMain:hover {
  color: #e84388;
}
.linkMain::after {
  content: "";
  position: absolute;
  bottom: 3px;
  right: 0;
  border-style: solid;
  border-width: 0 0 10px 10px;
  border-color: transparent transparent #e84388 transparent;
  width: 0;
  height: 0;
}
</style>
