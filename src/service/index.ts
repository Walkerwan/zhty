import type { Plugin } from 'vue';
import { appConfig } from '@/config/app';
// 导入axios
import axios from 'axios'
import { setupInterceptor } from './interceptor';


const SPlugin: Plugin = {
  install() {
    create();
  }
};

export default SPlugin;

function create() {
  const baseURL = appConfig.baseURL;

  //1. 创建新的axios实例，
  const service = axios.create({
    // 公共接口--这里注意后面会讲
    baseURL: process.env.BASE_API,
    // 超时时间 单位是ms，这里设置了3s的超时时间
    timeout: 3 * 1000
  })

  setupInterceptor(service.interceptors);
}
