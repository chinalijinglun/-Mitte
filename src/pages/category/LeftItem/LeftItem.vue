<template>
  <div ref="child" class="leftItem" @click="chang()">
    <div class="left">
      <p>{{item.name}}</p>
      <p>{{item.weight}}</p>
      <el-switch
        v-model="item.show"
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
  let prevNode;
  export default {
    name: "LeftItem",
    data() {
      return {
        isLight:true
      }
    },
    props:['item'],
    mounted() {
      // console.log(this.$refs.child)
    },
    methods:{
      chang() {
        if(prevNode) {
          prevNode.classList.remove('active')
        }
        this.$refs.child.classList.add('active');
        console.log(this.$refs.child);
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
      width: 0;
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
  .active {
    background-color: #e6e6e6;
  }
</style>
