import App from './App.vue'
import store from './store.js'

import './css/notebook.min.css'
import './css/default.min.css'
import './css/katex.min.css'
import logo from './img/logo.svg'

const name = 'Jupyter Viewer'

const routes = [
  {
    name: 'view',
    path: '/view/:filePath*',
    components: {
      app: App
    },
    meta: {
      title: name,
      patchCleanPath: true
    }
  },
  {
    name: 'public',
    path: '/public/:filePath*',
    components: {
      app: App
    },
    meta: {
      title: name,
      patchCleanPath: true,
      auth: false
    }
  }
]

const appInfo = {
  name: name,
  id: 'jupyter',
  img: logo,
  extensions: [
    {
      extension: 'ipynb',
      newTab: true,
      routeName: 'jupyter-view',
      canBeDefault: true,
      routes: [
        'files-personal',
        'files-favorites',
        'files-shared-with-others',
        'files-shared-with-me'
      ]
    },
    {
      extension: 'ipynb',
      newTab: true,
      routeName: 'jupyter-public',
      canBeDefault: true,
      routes: ['files-public-list']
    }
  ]
}

export default {
  appInfo,
  routes,
  store
}
