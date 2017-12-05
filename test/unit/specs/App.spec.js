import Vue from 'vue'
import App from '@/App'

describe('App.vue', () => {
  it('App loaded', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.loaded)
    .toEqual(true)
  })
})
