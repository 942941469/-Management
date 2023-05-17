import SvgIcon from '@/components/SvgIcon.vue'
const allGlobalComponent: any = { SvgIcon }
// 自动注册全局组件
export default {
  install(app: any) {
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
    })
  },
}
