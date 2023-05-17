<template>
  <div class="login_container">
    <el-row>
      <el-col :span="16" :xs="0" />
      <el-col :span="8">111
        <el-form></el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
}
</style>
