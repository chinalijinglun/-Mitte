<template>
  <div class="tableContainer">
    <el-scrollbar>
      <el-table
          :data="pageList"
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
    <el-pagination
      background
      layout="prev, pager, next"
      :total="list.length"
      :current-page.sync="currentPage"
      @current-change="pageHandler"
    >
    </el-pagination>
  </div>
</template>

<script>
  import { getOrderListReq } from '../api/order';
  import { mapState } from 'vuex';
  export default {
    name: "OrderTable",
    data() {
      return {
        list:[],
        currentPage:8,
        pageList:[],
      }
    },
    computed:{
      ...mapState(['app'])
    },
    watch: {
      $route() {
        this.getTableList();
      },
      'app.orderId'(val) {
        this.pageList = this.list.filter(item => {
          return item.id === +val
        });
        if(this.pageList.length) {
          this.$refs.singleTable.setCurrentRow(this.pageList[0]);
        }else {
          this.$refs.singleTable.setCurrentRow(null);
        }
      }
    },
    mounted() {
      this.$eventHub.$on('updateList',this.getTableList);
      this.getTableList();
    },
    methods: {
      pageHandler(event) {
        let startIndex = (event - 1) * 10;
        let endIndex = event * 10;
        this.pageList = this.list.slice(startIndex,endIndex);
        if(this.pageList.length) {
          this.$refs.singleTable.setCurrentRow(this.pageList[0]);
        }else {
          this.$refs.singleTable.setCurrentRow(null);
        }
      },
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
            this.currentPage = 1;
            this.pageHandler(1);
            if(type === '1') {
              this.$store.dispatch('getBadgeValue',res.data.length)
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
    /deep/ .el-scrollbar {
      height: calc(100% - 50px);
      box-sizing: border-box;
      padding: 10px 0;
    }
    /deep/ .el-scrollbar__wrap {
      overflow-x: hidden;
    }
    /deep/ .el-table {
      &::before {
        background-color: transparent;
      }
    }
    .el-pagination {
      text-align: center;
    }
  }
</style>
