import { vuePlugin } from './plugins/vue';
// import { cssPlugin } from './plugins/css';
// import { filePlugin } from './plugins/file';
import { htmlPlugin } from './plugins/html';
import { reportPlugin } from './plugins/report';
import { compressionPlugin } from './plugins/compression';

import type { Mode, PluginFn } from '../type/vite';
import type { Env } from '../type/env';
import type { Plugin } from 'vite';

export function createVitePlugins(mode: Mode, viteEnv: Env): Array<Plugin | Plugin[]> {
  const plugins: Array<PluginFn> = [vuePlugin, htmlPlugin, reportPlugin, compressionPlugin];

  return plugins.map(plugin => plugin(mode, viteEnv));
}
