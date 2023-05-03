import { createApp } from 'vue'
import App from './App.vue'
// import SignInAPI from services, allows for global access
import SignInAPI from "@/services/SignInAPI"

let app = createApp(App)

// the following line refers to the export from
app.config.globalProperties.$sign_in_api = SignInAPI

app.mount('#app')
