import Vue from 'vue';

Vue.directive('window-resize', {
  inserted: (el, binding) => {
    window.addEventListener('resize', binding.value);
    window.dispatchEvent(new Event('resize'));
  },
  unbind: (el, binding) => {
    window.removeEventListener('resize', binding.value);
  }
});
