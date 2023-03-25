import type { App, Plugin } from 'vue';

import { setupAsset } from '@/plugin/asset';

// import { setupGlobalProperties } from './global-property';

const PPlugin: Plugin = {
  install(app: App) {
    usePlugin(app);
  }
};

export default PPlugin;

function usePlugin(app: App<Element>) {
  // setupGlobalProperties(app);
  setupAsset(app);
}
