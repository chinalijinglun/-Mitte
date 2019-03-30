<template>
  <div class="leftNav">
    <div class="logo">
      logo区
    </div>
    <ul>
      <li>
        <router-link to="/order">
          订单管理
        </router-link>
      </li>
      <li>
        <router-link to="/category">
          品类管理
        </router-link>
      </li>
      <li>
        <router-link to="/brand">
          品牌管理
        </router-link>
      </li>
      <li>
        <router-link to="/shops">
          商品管理
        </router-link>
      </li>
      <li>
        <router-link to="/shop_list">
          推送管理
        </router-link>
      </li>
      <li>
        <router-link to="/sale">
          售后管理
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.leftNav {
  width: 195px;
  height: 100vh;
  background-color: #fff;

  .logo {
    text-align: center;
    height: 100px;
    line-height: 100px;
  }

  ul {
    li {
      height: 50px;
      line-height: 50px;
      text-align: center;
      a {
        color: #888;
        text-decoration: none;
        &.router-link-active {
          color: #000;
        }
      }
    }
  }
}
</style>
