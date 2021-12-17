// --- Components --------------------------------------------------------------

import App from './App.vue'
import t from '../l10n/translations'

// --- Routing -----------------------------------------------------------------

import store from './store.js'

const name = 'Text Editor'

const routes = [
  {
    path: '/edit/:filePath*',
    components: {
      app: App
    },
    name: 'edit',
    meta: {
      title: name,
      patchCleanPath: true
    }
  },
  {
    path: '/public/:filePath*',
    components: {
      app: App
    },
    name: 'public',
    meta: {
      title: name,
      patchCleanPath: true,
      auth: false
    }
  }
]

const appInfo = {
  name: name,
  id: 'text-editor',
  icon: 'text',
  isFileEditor: true,
  extensions: [
    {
      extension: 'txt',
      routeName: 'text-editor-edit',
      newFileMenu: {
        menuTitle($gettext) {
          return $gettext('New plain text file')
        }
      },
      routes: [
        'files-personal',
        'files-favorites',
        'files-shared-with-others',
        'files-shared-with-me'
      ]
    },
    {
      extension: 'txt',
      routeName: 'text-editor-public',
      newFileMenu: {
        menuTitle($gettext) {
          return $gettext('New plain text file')
        }
      },
      routes: ['files-public-list']
    }
  ]
}

const translations = t
export default {
  appInfo,
  routes,
  store,
  translations
}
