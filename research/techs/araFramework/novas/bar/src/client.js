import { load, Vue, mountComponent, loadById } from 'hypernova-vue'
import Bar from './components/Bar.vue'

const render = (name, { node, data }) => {
  if (name === 'Bar') {
    return mountComponent(Vue.extend(Bar), node, data)
  }
}

document.addEventListener('NovaMount', ({ detail }) => {
  const { name, id } = detail

  const payload = loadById(name, id)

  if (payload) {
    render(name, payload)
  }
})

load('Bar').forEach(render.bind(null, 'Bar'))
