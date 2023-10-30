import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import './assets/css/global.scss'
import './assets/css/tailwind.css'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
