<template>
  <div class="push">
    <div class="push_title">
      <router-link to='/shop_list'><span>商品推送</span></router-link>
      <router-link to='/topic_list'><span class="active_title">专题推送</span></router-link>
    </div>
    <div class="push_main tableContainer">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="序列号" width="180" align='center'></el-table-column>
        <el-table-column prop="push_name" label="推送名称" width="" align='center'>
        </el-table-column>
        <el-table-column prop="img" label="推送图片" width="180" align='center'>
          <template slot-scope="scope">
            <img :src="scope.row.img" alt="" style="width: 50px;height: 50px">
          </template>
        </el-table-column>
        <el-table-column prop="shop_name" label="商品名称" width="" align='center'></el-table-column>
        <el-table-column prop="updatedAt" label="推送时间" width="180" align='center'></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getType } from '@/api/push'
export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this.getType()
  },
  methods: {
    getType() {
      getType('2').then(data => {
        if (data.code === 200) {
          this.tableData = data.data;
        } else {
          this.$message.error('获取数据失败')
        }
      })
    }
  }
};
</script>

<style scoped lang="less">
.tableContainer {
  border-radius: 7px;
  overflow: hidden;
  height: calc(100vh - 200px);
  background-color: #fff;
  /deep/ .el-table {
    &::before {
      background-color: transparent;
    }
  }
}
.push_title {
  height: 80px;
  line-height: 80px;
  padding-left: 27px;
}
.push_title span {
  display: inline-block;
  margin-right: 30px;
}
.active_title {
  font-size: 24px;
}
</style>