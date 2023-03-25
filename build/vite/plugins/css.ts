import Unocss from "@unocss/vite";
// import { presetUno, presetAttributify, presetIcons } from "unocss";

import type { PluginFn } from "../../type/vite";
export const cssPlugin: PluginFn = () => {
  return Unocss({
    /* options */
  });
};
