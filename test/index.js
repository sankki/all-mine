import { createApp } from 'vue';
import AllMine from '../lib/all-mine.es';
import '../lib/style.css';
import Main from './index.vue';

const app = createApp(Main);
app.use(AllMine);
// app.component('AmButton', res.AmButton);
app.mount('#app');
