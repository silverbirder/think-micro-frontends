import { load, Vue, mountComponent, loadById } from 'hypernova-vue'
import Foo from './components/Foo.vue'

const render = (name, { node, data }) => {
  if (name === 'Foo') {
    return mountComponent(Vue.extend(Foo), node, data)
  }
}

document.addEventListener('NovaMount', ({ detail }) => {
  const { name, id } = detail

  const payload = loadById(name, id)

  if (payload) {
    render(name, payload)
  }
})

load('Foo').forEach(render.bind(null, 'Foo'))
