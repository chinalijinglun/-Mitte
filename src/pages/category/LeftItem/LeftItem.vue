<template>
  <div ref="child" class="leftItem" @click="chang()">
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
  let prevNode;
  export default {
    name: "LeftItem",
    data() {
      return {
        isLight:true
      }
    },
    methods:{
      chang() {
        if(prevNode) {
          prevNode.classList.remove('active')
        }
        this.$refs.child.classList.add('active');
        prevNode = this.$refs.child;
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
    padding: 10px 20px;
    .left {
      height: 100%;
      flex-grow: 3;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      /deep/ .el-switch {
        width: 50px;
      }
    }
    .right {
      height: 100%;
      flex-grow: 7;
      background-color: #d8d8d8;
    }
  }
  .active {
    background-color: #e6e6e6;
  }
</style>
