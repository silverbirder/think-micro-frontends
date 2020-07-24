import hypernova from 'hypernova/server'
import { renderVue, Vue } from 'hypernova-vue/server'
import express from 'express'
import path from 'path'

import Bar from './components/Bar.vue'

hypernova({
  devMode: process.env.NODE_ENV !== 'production',
  getComponent (name) {
    if (name === 'Bar') {
      return renderVue(name, Vue.extend(Bar))
    }
  },
  port: process.env.PORT || 3000,

  createApplication () {
    const app = express()

    app.use('/public', express.static(path.join(process.cwd(), 'dist')))

    return app
  }
})
