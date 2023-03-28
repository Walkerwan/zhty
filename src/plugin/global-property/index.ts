import type { App, DeepReadonly } from 'vue';

import { Win } from '@/win';
// import { dateFormat } from '@/util/date';
// import { assetResolve, imageResolve } from '@/util/file';

export function setupGlobalProperties(app: App<Element>): App<Element> {

  Object.defineProperty(app.config.globalProperties, '$window', { enumerable: false, get: () => window });

  Object.defineProperty(app.config.globalProperties, '$app', { enumerable: false, get: () => appProps });

  return app;
}
