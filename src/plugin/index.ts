import type { App, Plugin } from 'vue';

import { setupAsset } from '@/plugin/asset';

import { setupGlobalProperties } from './global-property';
import { setupGlobalElements } from './global-elements';

const PPlugin: Plugin = {
  install(app: App) {
    usePlugin(app);
  }
};

export default PPlugin;

function usePlugin(app: App<Element>) {
  setupGlobalProperties(app);
  setupGlobalElements(app);
  setupAsset(app);
}
