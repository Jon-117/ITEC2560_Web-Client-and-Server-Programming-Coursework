import { createApp } from 'vue'
import App from './App.vue'
// import HelloAPI from services, allows for global access
import HelloAPI from "@/services/HelloAPI"

let app = createApp(App)

// the following line refers to the export from HelloAPI
app.config.globalProperties.$hello_api = HelloAPI

app.mount('#app')
