<template>
  <div>
    <el-row>
      <el-col :span="11">
        <h2 class="active_title">商品信息</h2>
        <div class="grid-content tableContainer">
          <el-form ref="form" :model="form1" label-width="120px">
            <el-form-item label="商品名称">
              <el-input v-model="form1.name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格">
              <el-input v-model="form1.price"></el-input>
            </el-form-item>
            <el-form-item label="优惠价格">
              <el-input v-model="form1.offerPrice"></el-input>
            </el-form-item>
            <el-form-item label="商品库存">
              <el-input v-model="form1.stock"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark1">2</div>
      </el-col>
      <el-col :span="11">
        <h2 class="active_title">商品属性</h2>
        <div class="grid-content tableContainer">
          <el-form ref="form" :model="form1" label-width="120px">
            <el-form-item label="商品名称">
              <el-input v-model="form1.name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格">
              <el-input v-model="form1.price"></el-input>
            </el-form-item>
            <el-form-item label="优惠价格">
              <el-input v-model="form1.offerPrice"></el-input>
            </el-form-item>
            <el-form-item label="商品库存">
              <el-input v-model="form1.stock"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form1:{
        name:'',
        price:'',
        offerPrice:'',
        stock:''
      }
    }
  }
};
</script>

<style scoped lang="less">
.el-input{
  width: 80%;
}
.active_title {
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 35px;
}
.grid-content {
  height: 250px !important;
}
.tableContainer {
  padding-top: 15px;
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
</style>