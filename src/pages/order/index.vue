<template>
  <div class="orderContainer">
    <el-row :gutter="40">
      <el-col :span="15">
        <div class="left"></div>
      </el-col>
      <el-col :span="9">
        <div class="right"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped lang="less">
  .orderContainer {
    .left {
      background: red;
      height: 100px;
    }
    .right {
      background: blue;
      height: 100px;
    }
  }
</style>
