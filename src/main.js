import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/index.js';

createApp(App)
  .use(router)  // router를 사용하여 애플리케이션에 연결
  .mount('#app');
