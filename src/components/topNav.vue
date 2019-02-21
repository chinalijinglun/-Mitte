<template>
  <el-header class="header">
    <div class="logo"></div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <span class="mr8 ml8">智小链</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <span @click="logout">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
export default {
   methods: {
    logout() {
      this.$message({
        message: "退出成功",
        type: "success"
      });
    }
  }
};
</script>

<style scoped>
.logo {
  margin-top: 5px;
  
}
.logo::before {
    content: "";
    width: 85px;
    height: 40px;
    display: inline-block;
    /* background-image: url("~@/assets/images/logo.png"); */
    background-size: cover;
  }
.header {
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2f323f;
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
 
}
.el-dropdown-link {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    color: #fff;
    font-weight: 500;
  }
</style>
