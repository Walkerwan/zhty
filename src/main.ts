import { createApp } from 'vue';

import Store from '@/store';
import Plugin from '@/plugin';
import Router from '@/router';
import Service from '@/service';
import Component from '@/components';
import Directive from '@/directive';
import App from '@/App.vue';

async function setupApp() {
  const app = createApp(App);
  app
    .use(Plugin)
    .use(Component)
    .use(Directive)
    .use(Router, () => app.mount('#app'))
    .use(Service)
    .use(Store);
}

setupApp().then();
