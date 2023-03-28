import unocss from "unocss/vite";

import type { PluginFn } from "../../type/vite";
export const cssPlugin: PluginFn = () => {
  return unocss({/* options */});
};
