<template>
  <div class="orderContainer">
    <el-row :gutter="40">
      <el-col :span="16">
        <div class="left">
          <div class="nav">
            <p>
              <router-link to="/order/ship">
                待发货
              </router-link>
            </p>
            <p>
              <router-link to="/order/shipped">
                已发货
              </router-link>
            </p>
            <p>
              <router-link to="/order/complete">
                已完成
              </router-link>
            </p>
          </div>
          <router-view></router-view>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="right">
          <p class="title">商品信息</p>
          <div class="info">
            <div class="top">
              <p>
                <span>我是收货人</span>
                <span>18128475483</span>
              </p>
              <p>北京市朝阳区天堂路122号</p>
              <p>积分5元</p>
              <p>微信支付</p>
            </div>
            <div class="middle">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="bottom">
              <el-scrollbar style="height: 100%">
                <ShopsInfo />
                <ShopsInfo />
                <ShopsInfo />
                <ShopsInfo />
                <ShopsInfo />
                <ShopsInfo />

              </el-scrollbar>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ShopsInfo from './ShopsInfo/ShopsInfo';
  export default {
    name: "index",
    components: {
      ShopsInfo
    }
  }
</script>

<style scoped lang="less">
  .orderContainer {
    height: calc(100% - 50px);
    /deep/ .el-row {
      height: 100%;
      .el-col {
        height: 100%;
      }
    }
    .left {
      height: 100%;
      .nav {
        display: flex;
        p {
          width: 30%;
          height: 80px;
          line-height: 80px;
          text-align: center;
          a {
            color: #666;
            text-decoration: none;
            font-weight: 300;
          }
          .router-link-active {
            color: #000;
            font-size: 24px;
            font-weight: 500;
          }
        }
      }
    }
    .right {
      height: 100%;
      .title {
        height: 80px;
        line-height: 80px;
        padding-left: 27px;
        font-size: 24px;
      }
      .info {
        height: calc(100% - 80px);
        background-color: #fff;
        border-radius: 7px;
        .top {
          height: 25%;
          padding:10px 20px;
          font-size: 14px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          color: #606266;
        }
        .middle {
          height: 20px;
          background-color: #fff;
          display: flex;
          align-items: center;
          div {
            height: 100%;
            background-color: #f2f2f2;
          }
          div:first-child {
            width: 20px;
            margin-left: -10px;
            border-radius: 10px;
          }
          div:nth-child(2) {
            flex-grow: 1;
            height: 3px;
            margin: 0 10px;
          }
          div:last-child {
            width: 20px;
            margin-right: -10px;
            border-radius: 10px;
          }
        }
        .bottom {
          height: calc(75% - 20px);
          /deep/ .el-scrollbar__wrap {
            overflow-x: hidden;
            overflow-y: scroll;
            padding: 20px;
            box-sizing: border-box;
          }
        }
      }
    }
  }
</style>
