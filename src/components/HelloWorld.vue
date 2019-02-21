<template>
 <el-container class="container">
  <el-header class="header">
    <div class="logo"></div>
    <el-dropdown><span class="el-dropdown-link"><span class="mr8 ml8">智小链</span><i class="el-icon-arrow-down el-icon--right"></i></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><span @click="logout">退出登录</span></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
  <el-container class="sidebar">
    <el-aside width="200px">
      <el-menu :default-active="active" :collapse="isCollapse">
        <el-menu-item index="/dashboard">
          <router-link tag="li" to="/dashboard">
            <svg-icon icon-class="dashboard"></svg-icon><span>Dashboard</span>
          </router-link>
        </el-menu-item>
        <el-menu-item index="/login">
          <router-link tag="li" to="/login">
            <svg-icon icon-class="login"></svg-icon><span>Login</span>
          </router-link>
        </el-menu-item>
        <el-menu-item index="/404">
          <router-link tag="li" to="/404">
            <svg-icon icon-class="404"></svg-icon><span>404</span>
          </router-link>
        </el-menu-item>
        <el-submenu index="/components">
          <template slot="title"><i class="el-icon-menu"></i><span>components</span></template>
          <el-menu-item-group>
            <el-menu-item index="/components/table">
              <router-link tag="li" to="/components/table">
                <svg-icon icon-class="table"></svg-icon><span>Table</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="/components/card">
              <router-link tag="li" to="/components/card">
                <svg-icon icon-class="card"></svg-icon><span>Card</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="/components/pagination">
              <router-link tag="li" to="/components/pagination">
                <svg-icon icon-class="card"></svg-icon><span>pagination</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="/components/loading">
              <router-link tag="li" to="/components/loading">
                <svg-icon icon-class="load"></svg-icon><span>Loading</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="/components/dialog">
              <router-link tag="li" to="/components/dialog">
                <svg-icon icon-class="dialog"></svg-icon><span>Dialog</span>
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  name: "global-layout",
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    active() {
      return this.$route.path;
    }
  },
  methods: {
    logout() {
      this.$message({
        message: "退出成功",
        type: "success"
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color: #f5f5f5;
  min-height: 100vh;
}
</style>
