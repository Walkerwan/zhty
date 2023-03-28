import type { App } from 'vue';
import registerElements from './register-elements';

export function setupGlobalElements(app: App<Element>): App<Element> {
  app.use(registerElements);
  return app;
}