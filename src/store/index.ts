import type { App, Plugin } from 'vue';

//  准备引入 vuex
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'


const SPlugin: Plugin = {
  install(app: App) {
    const store = createStore({
        state(){},
        mutations:{},
        getters:{},
        actions:{},
        modules: {},
        plugins: [createPersistedState({
          // 默认位置localStorage
          storage: window.sessionStorage,
          reducer: (state) => {
              return {
                  //默认是全部缓存，只存储state中的userName,loginDate,address
                  // userName: state.userName,
                  // loginDate: state.loginDate,
                  // address: state.address
              }
          }
      })
      ]
    });

    store && app.use(store);
  }
};

export default SPlugin;