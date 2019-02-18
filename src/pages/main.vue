<template>
  <el-container>
    <left />
    <el-main>
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
<style scoped>
  .el-main {
    background-color: #eff2f7;
    padding: 0px;
  }
</style>
