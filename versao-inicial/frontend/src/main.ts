import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'font-awesome/css/font-awesome.css'
import VueGravatar from 'vue3-gravatar'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import DataTable from 'primevue/datatable'
import ColumnTable from 'primevue/column'

import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

import axios from 'axios'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueGravatar)

app.use(PrimeVue)
app.use(ToastService)
app.component('DataTable', DataTable)
app.component('ColumnTable', ColumnTable)
app.component('ToastMsgs', Toast)

// TEMPORÁRIO PARA TESTES
axios.defaults.headers.common['Authorization'] =
  'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwibmFtZSI6IkVhbyBkYSBTaWx2YSIsImVtYWlsIjoiZWFvc0BnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNzA2MjMwNDc2LCJleHAiOjE3MDcwOTQ0NzZ9.g-pBT5MS828HjFQlY0y0Laev0c8h4TkZu5f8h3yFeQo'

app.mount('#app')
