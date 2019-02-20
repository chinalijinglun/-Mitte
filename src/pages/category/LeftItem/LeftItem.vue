<template>
  <div class="leftItem">
    <div class="left">
      <p>艺术品</p>
      <p>99</p>
      <el-switch
        v-model="isLight"
        active-color="#13ce66"
        inactive-color="#d8d8d8">
      </el-switch>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
  export default {
    name: "LeftItem",
    data() {
      return {
        isLight:true
      }
    }
  }
</script>

<style scoped lang="less">
  .leftItem {
    width: 100%;
    height: 120px;
    display: flex;
    box-sizing: border-box;
    padding-bottom: 20px;
    .left {
      height: 100%;
      flex-grow: 3;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .right {
      height: 100%;
      flex-grow: 7;
      background-color: #d8d8d8;
    }
  }
</style>
