import { renderVue, Vue } from 'hypernova-vue'
import hypernova from 'hypernova-lambda'
import Example from './components/Example.vue'

const getComponent = (name) => {
  if (name === 'Example') {
    return renderVue(name, Vue.extend(Example))
  }
}

export const handler = (event, context, callback) => {
  hypernova(event, { getComponent }, callback)
}
