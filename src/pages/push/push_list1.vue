<template>
  <div class="push">
    <div class="push_title">
      <router-link to='/shop_list'><span>商品推送</span></router-link>
      <router-link to='/topic_list'><span class="active_title">专题推送</span></router-link>
    </div>
    <div class="push_main tableContainer">
      <el-table :data="tableData" style="width: 100%" >
        <el-table-column prop="id" label="序列号" width="180" align='center'></el-table-column>
        <el-table-column prop="name" label="推送名称" width="" align='center'>
        </el-table-column>
        <el-table-column prop="pic" label="推送图片" width="180" align='center'>
            <template slot-scope="scope">
            <img :src="scope.row.pic" alt="" style="width: 50px;height: 50px">
            </template>
        </el-table-column>
        <el-table-column prop="name1" label="商品名称" width="" align='center'></el-table-column>
        <el-table-column prop="time" label="推送时间" width="180" align='center'></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        tableData:[{
            id: '1',
            name: 'Art Life 奥莱特艺术手绘台灯',
            pic: 'https://tva4.sinaimg.cn/crop.0.825.1827.1827.180/6b77ccebjw1e7cp6enewrj21f02ioe81.jpg',
            name1:'艺术先知手机壳',
            time:'2016-05-02'
        },
        {
            id: '2',
            name: 'Art Life 奥莱特艺术手绘台灯',
            pic: 'https://tva4.sinaimg.cn/crop.0.825.1827.1827.180/6b77ccebjw1e7cp6enewrj21f02ioe81.jpg',
            name1:'艺术先知手机壳',
            time:'2016-05-02'
        },
        {
            id: '3',
            name: 'Art Life 奥莱特艺术手绘台灯',
            pic: 'https://tva4.sinaimg.cn/crop.0.825.1827.1827.180/6b77ccebjw1e7cp6enewrj21f02ioe81.jpg',
            name1:'艺术先知手机壳',
            time:'2016-05-02'
        }]
    };
  },
  methods: {}
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