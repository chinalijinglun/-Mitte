<template>
  <div class="topNav">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item,index) of navList" :key="index">
        {{item.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="iconContainer">
      <i class="el-icon-search"></i>
      <i class="el-icon-bell"></i>
      <i class="el-icon-news"></i>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navList:null
      }
    },
    watch: {
      $route() {
        this.getNavList()
      }
    },
    created() {
      this.getNavList()
    },
    methods: {
      getNavList() {
        this.navList = this.$route.matched.filter(item => item.name);
      }
    }
  }
</script>

<style scoped lang="less">
  .topNav {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    .iconContainer {
      font-weight: bolder;
      font-size: 20px;
      color:#888;
      margin-right: 50px;
      i {
        margin-right: 20px;
      }
    }
  }
</style>
