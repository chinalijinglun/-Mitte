<template>
  <div class="tableContainer">
    <el-table
      :data="list"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
      :cell-style="{border:'none'}"
      :header-cell-style="{border:'none'}"
    >
      <el-table-column
        label="序列号"
        type="index"
        width="70"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="订单编号"
        prop="orderNum"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="实付总价(元)"
        prop="price"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="下单时间"
        prop="buyTime"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="订单状态"
        prop="status"
        align="center"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "OrderTable",
    data() {
      return {
        list:[
          {
            orderNum:123345667,
            price:100,
            buyTime:'2018-3-4 17:45:28',
            status:'代发货'
          },
          {
            orderNum:123345667,
            price:100,
            buyTime:'2018-3-4 17:45:28',
            status:'代发货'
          },
          {
            orderNum:123345667,
            price:100,
            buyTime:'2018-3-4 17:45:28',
            status:'代发货'
          },
          {
            orderNum:123345667,
            price:100,
            buyTime:'2018-3-4 17:45:28',
            status:'代发货'
          }
        ],
        obj:{
          color:'red'
        }
      }
    },
    methods: {
      handleCurrentChange() {}
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
</style>
