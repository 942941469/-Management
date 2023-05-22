// 登录表单
export interface loginForm {
  username: string
  password: string
}
interface dataType {
  token?: string
  message?: string
}
// 登录接口返回数据
export interface loginResponseData {
  code: number
  data: dataType
}
interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  button: string[]
  routes: string[]
  token: string
}
interface user {
  checkUser: userInfo
}
// 服务器返回用户信息
export interface userResponseData {
  code: number
  data: user
}
