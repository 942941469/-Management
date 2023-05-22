import http from '@/utils/request'
import type {
  loginForm,
  loginResponseData,
  userResponseData,
} from '@/api/user/type'

// 登录
export const reqLogin = (data: loginForm) => {
  return http.post<any, loginResponseData>('/user/login', data)
}
// 获取用用户信息
export const reqUserInfo = () => {
  return http.get<any, userResponseData>('/user/info')
}
