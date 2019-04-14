<template>
  <div class="orderContainer">
    <el-row :gutter="40">
      <el-col :span="16">
        <div class="left">
          <div class="nav">
            <p class="title">售后管理</p>
          </div>
          <div class="tableContainer">
            <el-table :data="list" highlight-current-row @current-change="handleCurrentChange" style="width: 100%" :cell-style="{border:'none'}" :header-cell-style="{border:'none'}" @row-click="changeInfo">
              <el-table-column label="序列号" type="index" width="70" align="center">
              </el-table-column>
              <el-table-column label="订单编号" prop="pay_type" align="center">
              </el-table-column>
              <el-table-column label="实付总价(元)" prop="total_price" align="center">
              </el-table-column>
              <el-table-column label="下单时间" prop="createdAt" align="center">
              </el-table-column>
              <el-table-column label="申请时间" prop="updatedAt" align="center">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="right">
          <p class="title">商品信息</p>
          <div class="info">
            <div class="top">
              <h4>快递单号：100010010210100999</h4>
              <p>
                <span>{{userInfo.name}}</span>
                <span>{{userInfo.phone}}</span>
              </p>
              <p>{{userInfo.address}}</p>
              <p>积分{{score_price}}元</p>
              <p>{{pay_type}}</p>
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
import { getOrderList, getUserInfo } from '@/api/push'
import ShopsInfo from './saleInfo';
export default {
  name: "index",
  data() {
    return {
      list: [
        {
          orderNum: 123345667,
          price: 100,
          buyTime: '2018-3-4 17:45:28',
          status: '2018-3-4 17:45:28'
        }
      ],
      obj: {
        color: 'red'
      },
      userInfo: {

      },
      pay_type: '',
      score_price: ''
    }
  },
  created() {
    this.getOrderList()
  },
  methods: {
    handleCurrentChange() { },
    getOrderList() {
      getOrderList({

      }).then(data => {
        if (data.code == 200) {
          this.list = data.data;
          this.pay_type = data.data[0].pay_type;
          this.score_price = data.data[0].score_price;
          this.getUserInfo(data.data[0].user_id);
        }
      })
    },
    getUserInfo(id) {
      getUserInfo(id).then(data => {
        if (data.code == 200) {
          this.userInfo = data.data;
        }
      })
    },
    changeInfo(val) {
      // console.log(val)
    }
  },
  components: {
    ShopsInfo
  }
}
</script>

<style scoped lang="less">
.tableContainer {
  border-radius: 7px;
  overflow: hidden;
  height: calc(100% - 80px);
  background-color: #fff;
  /deep/ .el-table {
    &::before {
      background-color: transparent;
    }
  }
}
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
    .title {
      height: 80px;
      line-height: 80px;
      padding-left: 27px;
      font-size: 24px;
    }
    .nav {
      display: flex;
      p {
        width: 30%;
        height: 80px;
        line-height: 80px;
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
        padding: 10px 20px;
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
        height: 350px;
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
