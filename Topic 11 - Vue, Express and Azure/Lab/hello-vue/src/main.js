import { createApp } from 'vue'
import App from './App.vue'
import HelloAPI from "@/services/HelloAPI";


let app = createApp(App)

// make HelloAPI available to the whole app.
app.config.globalProperties.$hello_api = HelloAPI

app.mount('#app')

