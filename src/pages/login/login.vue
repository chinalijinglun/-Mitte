<template>
  <div class="login">
    <div class="login_main">
      <div class="login_top">觅他电商系统登录</div>
      <div class="login_bottom">
        <input type="text" class="login_input">
        <input type="password" class="login_input">
        <a class="login_btn" href="javascript:;">登录</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: #f1f1f1;
}
.login_main {
  position: fixed;
  overflow: hidden;
  left: 50%;
  margin-left: -250px;
  top: 50%;
  margin-top: -200px;
  width: 500px;
  min-height: 400px;
  z-index: 10;
  right: 140px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 16px -5px #070707;
}
.login_top {
  min-height: 125px;
  line-height: 125px;
  font-size: 32px;
  text-align: center;
  margin: 15px 0;
}
.login_bottom {
  text-align: center;
  margin-top: 20px;
}
.login_input {
  width: 370px;
  overflow: hidden;
  padding: 0 15px;
  font-size: 13px;
  border: 1px solid #ebebeb;
  margin: 0 auto 15px;
  height: 48px;
  line-height: 48px;
  border-radius: 5px;
  outline: none;
}
.login_btn {
  width: 402px;
  display: block;
  text-align: left;
  line-height: 50px;
  margin: 0 auto 15px;
  height: 50px;
  color: #fff;
  font-size: 13px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  position: relative;
  background-color: #50e3ce;
  text-align: center;
}
</style>