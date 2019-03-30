<template>
  <div ref="child" class="leftItem">
    <div class="left">
      <p>{{item.name}}</p>
      <p>{{item.weight}}</p>
      <el-switch
        :value="item.show"
        active-color="#13ce66"
        inactive-color="#d8d8d8">
      </el-switch>
    </div>
    <div class="right">
      <img :src="item.img" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "LeftItem",
    data() {
      return {

      }
    },
    props:['item','index'],
    mounted() {

    },
    methods:{

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
      width: 0;
      height: 100%;
      flex-grow: 3;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      /deep/ .el-switch {
        width: 50px;
        .el-switch__core {
          cursor: default;
        }
      }
    }
    .right {
      width: 0;
      height: 100%;
      flex-grow: 6;
      background-color: #d8d8d8;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
