import http from '@/utils/request'
import type {
  loginForm,
  loginResponseData,
  userResponseData,
} from '@/api/user/type'

// 登录
export const reqLogin = (data: loginForm) => {
  return http.post<loginResponseData>('/user/login')
}
// 获取用用户信息
export const reqUserInfo = () => {
  return http.get<userResponseData>('/user/info')
}
