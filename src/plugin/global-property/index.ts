import type { App, DeepReadonly } from 'vue';

export function setupGlobalProperties(app: App<Element>): App<Element> {

  Object.defineProperty(app.config.globalProperties, '$window', { enumerable: false, get: () => window });

  return app;
}
