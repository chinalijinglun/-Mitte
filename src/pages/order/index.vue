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
              <p v-if="userInfo">
                <span>{{userInfo.name}}</span>
                <span>{{userInfo.phone}}</span>
              </p>
              <p v-if="userInfo">{{userInfo.address}}</p>
              <p v-if="userInfo">积分{{app.orderRowData ? app.orderRowData.score_price : ''}}元</p>
              <p v-if="userInfo">{{app.orderRowData ? app.orderRowData.pay_type : ''}}</p>
            </div>
            <div class="middle">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="bottom">
              <el-scrollbar style="height: 100%" v-if="goodList.length">
                <ShopsInfo v-for="(item,index) of goodList" :key="index" :item="item"/>
                <div class="handle" v-if="handleName">
                  <div @click="handleTableList">
                    <span>·</span>{{handleName}}
                  </div>
                </div>
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
  import { mapState } from 'vuex';
  import { getUserInfoReq, getOrderDetailReq, updateOrderStatus, toSaleBack } from '../../api/order';
  export default {
    name: "index",
    data() {
      return {
        userInfo:'',
        goodList:[],
        handleName:''
      }
    },
    computed:{
      ...mapState(['app'])
    },
    watch: {
      'app.orderRowData'(val) {
        if(val) {
          this.getUserInfo(val.user_id);
          this.getGoodList(val.id);
        }else {
          this.userInfo = null;
          this.goodList = []
        }

      },
      $route() {
        this.getHandleName()
      }
    },
    mounted() {
      this.getHandleName();
    },
    methods: {
      getUserInfo(id) {
        getUserInfoReq(id).then(res => {
          if(res.code === 200) {
            this.userInfo = res.data;
          }
        }).catch(err => {
          console.log(err)
        })
      },
      getGoodList(id) {
        getOrderDetailReq(id).then(res => {
          if(res.code === 200) {
            this.goodList = res.data;
          }
        }).catch(err => {
          console.log(err);
        })
      },
      getHandleName() {
        switch (this.$route.name) {
          case '待发货' :
            this.handleName = '发货';
            break;
          case '已发货' :
            this.handleName = '完成';
            break;
          case '已完成' :
            this.handleName = '售后';
            break;
          default :
            return;
        }
      },
      handleTableList() {
        switch (this.$route.name) {
          case '待发货' :
            updateOrderStatus({
              id:this.app.orderRowData.id,
              status:'已发货'
            }).then(res => {
              if(res.code === 200) {
                this.$eventHub.$emit('updateList');
                this.$message.success('发货成功');
              }
            }).catch(err => {
              console.log(err)
            });
            break;
          case '已发货' :
            updateOrderStatus({
              id:this.app.orderRowData.id,
              status:'已完成'
            }).then(res => {
              if(res.code === 200) {
                this.$eventHub.$emit('updateList');
                this.$message.success('操作成功');
              }
            }).catch(err => {
              console.log(err)
            });
            break;
          case '已完成' :
            toSaleBack({
              id:this.app.orderRowData.id
            }).then(res => {
              this.$eventHub.$emit('updateList');
              this.$message.success('发起售后成功');
            }).catch(err => {
              console.log(err)
            });
            break;
          default :
            return;
        }
      }
    },
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

          .handle {
            height: 30px;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 0 10px;
            &>div {
              background-color: #fff;
              border:1px solid #d8d8d8;
              border-radius: 10px;
              width: 60px;
              text-align: center;
              height: 20px;
              cursor: pointer;
              &>span {
                color: aqua;
                font-weight: bolder;
              }
            }
          }
        }
      }
    }
  }
</style>
