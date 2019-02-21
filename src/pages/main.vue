<template>
  <el-container class="container">
    <Header />
    <el-container class="sidebar">
    <left />
    <el-main>
      <router-view></router-view>
    </el-main>
     </el-container>
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
<style scoped>
.container {
  background-color: #f5f5f5;
  min-height: 100vh;
}
  .el-main {
    background-color: #eff2f7;
    padding: 0px;
  }
</style>
