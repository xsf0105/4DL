import { createApp } from 'vue';
import App from './App.vue';
import { i18n } from '/@/i18n';
import router from './router';
import { setupStore } from '/@/store';
import './assets/font/iconfont.css';
import './assets/app.css';


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'




const app = createApp(App);
app.use(router);

setupStore(app);
app.use(i18n);

app.use(ElementPlus)
app.mount('#app');
