<template>
  <div class="shops">
    <div class="push_title">
      <router-link to="/shops">
        <span class="active_title">普通商品</span>
      </router-link>
      <router-link to="/art">
        <span>艺术商品</span>
      </router-link>
      <router-link to="/made">
        <span>定制商品</span>
      </router-link>
      <el-button type="primary" class='add'>
        <router-link to="/add">
          添加商品
        </router-link>
      </el-button>
    </div>
    <div class="push_main tableContainer">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序列号" width="180" align="center"></el-table-column>
        <el-table-column prop="name" label="商品名称" width align="center"></el-table-column>
        <el-table-column prop="brand_name" label="品牌名称" width align="center"></el-table-column>
        <el-table-column prop="img" label="商品图片" width="180" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.img" alt style="width: 50px;height: 50px">
          </template>
        </el-table-column>
        <el-table-column prop="volume" label="销量" width align="center"></el-table-column>
        <el-table-column prop="create_time" label="创建时间" width="180" align="center"></el-table-column>
        <el-table-column prop="update_time" label="更新时间" width="180" align="center"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import { getShopListReq } from '../../api/order'
export default {
  name: "index",
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.getShopList();
  },
  methods: {
    getShopList() {
      getShopListReq('normal').then(res => {
        if(res.code === 200) {
          this.tableData = res.data;
        }
      }).catch(err => {

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
.add{
  float: right;
  margin-right: 20px;
  a {
    text-decoration: none;
  }
}
</style>
