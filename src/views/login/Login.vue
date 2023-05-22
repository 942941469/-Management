<template>
  <div class="login_container">
    <el-row>
      <el-col :span="16" :xs="0" />
      <el-col :span="8" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginFormRef"
        >
          <h1>欢迎登录</h1>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import { reactive, ref } from 'vue'
import { getTime } from '@/utils/time'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user/user'
const router = useRouter()
const loginFormRef = ref()
const useStore = useUserStore()
let loading = ref(false)
// 登录表单
let loginForm = reactive({ username: 'admin', password: '111111' })
// 自定义校验规则函数
const validatorUserName = (rule: any, value: any, callback: any) => {
  if (5 <= value.length) {
    callback()
  } else {
    callback(new Error('账号长度至少五位'))
  }
}
const validatorPassword = (rule: any, value: any, callback: any) => {
  if (6 <= value.length) {
    callback()
  } else {
    callback(new Error('密码长度至少六位'))
  }
}

// 表单校验
const rules = {
  username: [{ trigger: 'change', validator: validatorUserName }],
  password: [{ trigger: 'change', validator: validatorPassword }],
}
const login = async () => {
  //保证全部表单相校验通过再发请求
  await loginFormRef.value.validate()
  //加载效果:开始加载
  loading.value = true
  try {
    //保证登录成功
    await useStore.userLogin(loginForm)
    router.push({ path: '/' })
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI,${getTime()}好`,
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
</script>

<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
      margin-bottom: 15px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
