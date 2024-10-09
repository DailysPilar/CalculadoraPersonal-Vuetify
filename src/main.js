import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  defaults:{
    VBtn: { variant: "outlined" },
    VTextField: { variant: 'solo' },
  },
  theme:{
    defaultTheme:'dark'
  }

})

const app = createApp(App)
app.use(vuetify)
app.mount('#app')
