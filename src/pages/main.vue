<template>
  <el-container class="container">
    <left />
    <el-main class="main">
      <Header />
      <router-view />
    </el-main>
  </el-container>
</template>
<script>
  import left from '@/components/leftNav';
  import Header from '@/components/topNav'
  export default {
    components: {
      left,
      Header
    }
  }
</script>
<style scoped lang="less">
  .container {
    height: 100%;
    .main {
      background-color: #f2f2f2;
      padding: 40px;
      height: 100%;
    }
  }
</style>
