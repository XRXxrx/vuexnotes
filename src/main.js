import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入vuex的步骤
// 1.引入库
import Vuex from 'vuex'
// 2.注册(其实是执行了vuex内的install方法)
Vue.use(Vuex)
    // 3.仓库实例化
const store = new Vuex.Store({
    //严格模式
    strict: true,
    // state存放数据状态
    state: {
        count: 2432,
        name: 'adadsa',
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        user: {
            token: 'djdngf',
            userinfo: {
                schoolname: 'djnsnsndvnsdlkn'
            }
        }
    },
    //用来修改state的同步函数
    mutations: {
        add(state, data) {
            state.count += data
        }
    },
    //接受异步回调函数
    actions: {
        anscyAdd(store, data) {
            setTimeout(() => {
                store.commit('add', data)
            }, 1000)
        }
    },
    //计算一些属性
    getters: {
        filterList: state => state.list.filter(item => item > 5),
        getSchoolName: state => state.user.userinfo.schoolname
    }
})

new Vue({
    // 4.挂载vue
    store,
    render: h => h(App),
}).$mount('#app')