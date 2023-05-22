import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'
// 全局样式
import '@/style/index.scss'
// 国际化
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg插件配置代码
import 'virtual:svg-icons-register'
// 全局组件
import globalComponent from '@/components'
import App from '@/App.vue'

const app = createApp(App)
app.use(router)
app.use(store)
// 注册全局组件
app.use(globalComponent)
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
