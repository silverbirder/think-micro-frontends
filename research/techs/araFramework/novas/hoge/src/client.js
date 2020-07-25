import { renderInPlaceholder, Vue } from 'hypernova-vue'
import Example from './components/Example.vue'

const { document } = global

document.addEventListener('NovaMount', (event) => {
  const { detail: { name, id } } = event

  if (name === 'Example') {
    return renderInPlaceholder(name, Vue.extend(Example), id)
  }
})
