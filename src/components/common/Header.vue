<template>
  <div>
    <header
      class="header"
      :style="{ left: -scrollX + 'px' }"
    >
      <div class="inner">
        <button
          class="btn"
          :class="{ 'is-hidden': !isHidden }"
          @click="click()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 20"
          >
            <g opacity="0.45">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#999999"
                d="M0,20h44v-6H0V20z M0,0v6h44V0H0z"
              />
            </g>
          </svg>
          <span class="text">Menu</span>
        </button>
      </div>
      <div
        class="wrapper"
        :class="{ 'is-hidden': isHidden }"
      >
        <div class="inner">
          <router-link to="/">
            <h1 class="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 37"
              >
                <title>VOCALOID-ManiaX</title>
                <path
                  fill="#148dd3"
                  d="M11.74,2.9L0,0l5.552,17.498L16.909,1.625L11.74,2.9z M23.48,0l-4.491,1.109l2.525,5.087L23.48,0z
                  M18.083,2.227L6.045,19.055L11.74,37l9.205-29.009L18.083,2.227z M73.428,18.49h8.022l2.004,3.339l0.477-0.194L77.439,10.82
                  l-6.493,10.815l0.479,0.194L73.428,18.49z M77.439,11.81l3.704,6.171h-7.41L77.439,11.81z M47.201,9.356L46.79,9.055
                  l-8.697,11.864L29.394,9.055l-0.411,0.301l9.109,12.424L47.201,9.356z M52.387,21.78c2.977,0,5.397-2.419,5.397-5.393
                  c0-2.974-2.42-5.393-5.397-5.393c-2.976,0-5.397,2.419-5.397,5.393C46.99,19.361,49.411,21.78,52.387,21.78z M52.387,11.504
                  c2.694,0,4.888,2.191,4.888,4.883c0,2.694-2.193,4.884-4.888,4.884c-2.695,0-4.887-2.19-4.887-4.884
                  C47.5,13.695,49.692,11.504,52.387,11.504z M100.442,10.994c-2.977,0-5.398,2.419-5.398,5.393c0,2.974,2.422,5.393,5.398,5.393
                  c2.975,0,5.396-2.419,5.396-5.393C105.838,13.414,103.417,10.994,100.442,10.994z M100.442,21.271
                  c-2.696,0-4.888-2.19-4.888-4.884c0-2.692,2.191-4.883,4.888-4.883c2.694,0,4.886,2.191,4.886,4.883
                  C105.328,19.081,103.137,21.271,100.442,21.271z M86.365,10.867h-0.511V21.78h8.821v-0.509h-8.311V10.867z M108.734,11.532h-0.509
                  V21.78h0.509V11.532z M112.961,21.78c3.881,0,7.039-2.412,7.039-5.38c0-2.966-3.158-5.379-7.039-5.379
                  c-0.284,0-1.267,0.041-1.267,0.041V21.77h0.531C112.226,21.77,112.713,21.78,112.961,21.78z M112.226,11.587
                  c0.243-0.021,0.486-0.034,0.735-0.034c3.588,0,6.506,2.175,6.506,4.847c0,2.674-2.918,4.848-6.506,4.848
                  c-0.249,0-0.492-0.012-0.735-0.034V11.587z M67.184,21.78c0.815,0,1.599-0.101,2.327-0.286v-0.523
                  c-0.724,0.193-1.508,0.301-2.327,0.301c-3.606,0-6.542-2.06-6.542-4.592c0-2.532,2.936-4.59,6.542-4.59
                  c0.819,0,1.604,0.107,2.327,0.301v-0.524c-0.729-0.185-1.512-0.287-2.327-0.287c-3.888,0-7.052,2.288-7.052,5.1
                  C60.132,19.492,63.296,21.78,67.184,21.78z M48.221,23.437V34.28h0.51v-9.652l7.143,6.825l7.145-6.825v9.652h0.51V23.437
                  l-7.654,7.313L48.221,23.437z M119.252,24.185l-0.457-0.285l-5.545,4.554l-5.545-4.554l-0.455,0.285l5.598,4.598l-6.347,5.212
                  l0.453,0.286l6.296-5.169l6.296,5.169L120,33.994l-6.348-5.212L119.252,24.185z M74.844,27.426
                  c-0.744-1.488-2.227-2.507-3.933-2.507c-2.45,0-4.444,2.097-4.444,4.672c0,2.578,1.994,4.674,4.444,4.674
                  c1.706,0,3.188-1.018,3.933-2.506v2.227h0.51v-8.786h-0.51V27.426z M70.911,33.755c-2.17,0-3.934-1.866-3.934-4.164
                  c0-2.294,1.764-4.162,3.934-4.162c2.168,0,3.933,1.868,3.933,4.162C74.844,31.889,73.079,33.755,70.911,33.755z M103.708,27.441
                  c-0.743-1.488-2.227-2.507-3.933-2.507c-2.45,0-4.443,2.096-4.443,4.673c0,2.576,1.993,4.673,4.443,4.673
                  c1.706,0,3.189-1.02,3.933-2.506v2.228h0.511v-8.787h-0.511V27.441z M99.775,33.771c-2.17,0-3.934-1.867-3.934-4.163
                  c0-2.295,1.764-4.164,3.934-4.164c2.169,0,3.933,1.869,3.933,4.164C103.708,31.903,101.944,33.771,99.775,33.771z M91.979,34.28
                  h0.509v-9.038h-0.509V34.28z M83.472,25.242c-2.976,0-5.396,1.913-5.396,4.264v4.76h0.509v-4.76c0-2.07,2.192-3.754,4.887-3.754
                  s4.887,1.684,4.887,3.754v4.774h0.511v-4.774C88.869,27.155,86.447,25.242,83.472,25.242z M20.107,29.113h23.29v-0.509h-23.29
                  V29.113z"
                />
              </svg>
            </h1>
          </router-link>
          <nav>
            <ul class="navi">
              <li class="navi__item">
                <router-link
                  class="link"
                  to="/about/"
                >
                  About
                </router-link>
              </li>
              <li class="navi__item">
                <router-link
                  class="link"
                  to="/residents/"
                >
                  Residents
                </router-link>
              </li>
              <li class="navi__item">
                <router-link
                  class="link"
                  to="/photo/"
                >
                  Photo
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: true,
      scrollX: 0
    };
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.scroll);
      window.dispatchEvent(new Event('scroll'));
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('scroll', this.scroll);
    }
  },
  methods: {
    click() {
      this.isHidden = false;
      setTimeout(() => {
        this.isHidden = true;
      }, 5000);
    },
    scroll() {
      this.scrollX = window.scrollX;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  font-family: 'Muli', sans-serif;
  font-weight: 200;
  width: 100%;
  min-width: 640px;
  z-index: 1;
}

@media (min-width: 641px) {
  .header {
    min-width: 960px;
  }
}

.wrapper {
  position: absolute;
  top: 0;
  background-color: rgba(color(background, white), .6);
  width: 100%;
  height: 60px;
  transition: top .3s ease-out;

  &.is-hidden {
    top: -60px;
  }
}

.inner {
  position: relative;
  width: 640px;
  margin: auto;
}

@media (min-width: 641px) {
  .inner {
    width: 960px;
  }
}

.btn {
  position: absolute;
  right: 34px;
  top: 33px;
  width: 44px;

  &.is-hidden {
    display: none;
  }

  > svg {
    display: block;
  }
}

.text {
  display: block;
  color: color(text, dark-gray);
  font-size: 1.4rem;
  padding-top: 8px;
}

.logo {
  position: absolute;
  left: 22px;
  top: 11px;
  width: 120px;
  height: 37px;
  margin: 0;

  > svg {
    display: block;
  }
}

.navi {
  position: absolute;
  right: 0;
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  height: 60px;
}

.link {
  display: block;
  color: color(text, dark-gray);
  text-align: center;
  text-decoration: none;
  width: 146px;
  height: 60px;
  padding-top: 26px;
  box-sizing: border-box;
}
</style>
