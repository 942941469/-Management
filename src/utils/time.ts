//封装一个函数:获取一个结果:当前早上|上午|下午|晚上
export const getTime = () => {
  let message
  //通过内置构造函数Date
  const hours = new Date().getHours()
  //情况的判断
  if (9 >= hours) {
    message = '早上'
  } else if (12 >= hours) {
    message = '上午'
  } else if (18 >= hours) {
    message = '下午'
  } else {
    message = '晚上'
  }
  return message
}
