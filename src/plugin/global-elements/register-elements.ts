import { App } from "vue";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";

// element-plus组件注册
import {
  ElConfigProvider,
  ElMenu,
  ElMenuItem,
} from "element-plus";

const component = [
  ElConfigProvider,
  ElMenu,
  ElMenuItem,
];

// elment-plus-icons注册
import { 
  Menu as IconMenu,
  Message
} from "@element-plus/icons-vue";

const icons = [
  IconMenu,
  Message
]

export default function (app: App): void { 
  const components = [...component, ...icons];
  for (const component of components) { 
    app.component(component.name, component);
  }
}