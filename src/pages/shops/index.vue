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
      <el-button type="primary" class='add'>添加商品</el-button>
    </div>
    <div class="push_main tableContainer">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="序列号" width="180" align="center"></el-table-column>
        <el-table-column prop="name" label="商品名称" width align="center"></el-table-column>
        <el-table-column prop="brand" label="品牌" width align="center"></el-table-column>
        <el-table-column prop="pic" label="商品图片" width="180" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.pic" alt style="width: 50px;height: 50px">
          </template>
        </el-table-column>
        <el-table-column prop="sales" label="销量" width align="center"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="180" align="center"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间" width="180" align="center"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      tableData: [
        {
          id: "1",
          name: "Art Life 奥莱特艺术手绘台灯",
          brand: "奥莱特",
          pic:
            "https://tva4.sinaimg.cn/crop.0.825.1827.1827.180/6b77ccebjw1e7cp6enewrj21f02ioe81.jpg",
          sales: "艺术先知手机壳",
          createTime: "2016-05-02",
          updateTime: "2016-05-02"
        },{
          id: "2",
          name: "Art Life 奥莱特艺术手绘台灯",
          brand: "奥莱特",
          pic:
            "https://tva4.sinaimg.cn/crop.0.825.1827.1827.180/6b77ccebjw1e7cp6enewrj21f02ioe81.jpg",
          sales: "艺术先知手机壳",
          createTime: "2016-05-02",
          updateTime: "2016-05-02"
        },{
          id: "3",
          name: "Art Life 奥莱特艺术手绘台灯",
          brand: "奥莱特",
          pic:
            "https://tva4.sinaimg.cn/crop.0.825.1827.1827.180/6b77ccebjw1e7cp6enewrj21f02ioe81.jpg",
          sales: "艺术先知手机壳",
          createTime: "2016-05-02",
          updateTime: "2016-05-02"
        },{
          id: "4",
          name: "Art Life 奥莱特艺术手绘台灯",
          brand: "奥莱特",
          pic:
            "https://tva4.sinaimg.cn/crop.0.825.1827.1827.180/6b77ccebjw1e7cp6enewrj21f02ioe81.jpg",
          sales: "艺术先知手机壳",
          createTime: "2016-05-02",
          updateTime: "2016-05-02"
        }
      ]
    };
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
}
</style>
