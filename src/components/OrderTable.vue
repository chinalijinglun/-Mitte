<template>
  <div class="tableContainer">
    <el-scrollbar style="height: 100%;box-sizing: border-box;padding: 10px 0;">
      <el-table
          :data="list"
          ref="singleTable"
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 100%;"
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
            prop="id"
            align="center"
          >
          </el-table-column>
          <el-table-column
            label="实付总价(元)"
            prop="total_price"
            align="center"
          >
          </el-table-column>
          <el-table-column
            label="下单时间"
            prop="create_time"
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
    </el-scrollbar>
  </div>
</template>

<script>
  import { getOrderListReq } from '../api/order';
  import { mapState } from 'vuex';
  export default {
    name: "OrderTable",
    data() {
      return {
        list:[]
      }
    },
    watch: {
      $route() {
        this.getTableList();
      }
    },
    mounted() {
      this.$eventHub.$on('updateList',this.getTableList);
      this.getTableList();
    },
    methods: {
      getTableList() {
        switch (this.$route.name) {
          case '待发货' :
            this.getOrderList('1');
            break;
          case '已发货' :
            this.getOrderList('2');
            break;
          case '已完成' :
            this.getOrderList('3');
            break;
          default :
            return;
        }
      },
      getOrderList(type) {
        getOrderListReq(type).then(res => {
          if(res.code === 200) {
            this.list = res.data;
            if(this.list.length) {
              this.$refs.singleTable.setCurrentRow(this.list[0]);
            }else {
              this.$refs.singleTable.setCurrentRow(null);
            }

          }
        }).catch(err => {
          console.log(err)
        })
      },
      handleCurrentChange(val) {
        this.$store.dispatch('orderRowData',val);
      }
    }
  }
</script>

<style scoped lang="less">
  .tableContainer {
    position: relative;
    border-radius: 7px;
    overflow: hidden;
    height: calc(100% - 80px);
    background-color: #fff;
    /deep/ .el-scrollbar__wrap {
      overflow-x: hidden;
    }
    /deep/ .el-table {
      &::before {
        background-color: transparent;
      }
    }
  }
</style>
