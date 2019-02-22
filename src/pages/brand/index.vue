<template>
  <div class="brand">
    <el-row :gutter="40">
      <el-col :span="16">
        <div class="left">
          <p class="title">品牌图片</p>
          <div class="content">
            <div class="scrollContainer">
              <el-scrollbar style="height: 100%">
                <div class="picWrap">
                  <div class="pic" v-for="(item,index) of picData" :key="index">pic{{item}}</div>
                </div>
              </el-scrollbar>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="right">
          <p class="title">品牌信息</p>
          <div class="content"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {

      }
    },
    computed:{
      picData(){
        let testData = [];
        for(let i = 0;i<100;i++){
          testData.push(i)
        }
        return testData
      }
    }
  }
</script>

<style scoped lang="less">
  .brand {
    height: calc(100% - 50px);
    /deep/ .el-row {
      height: 100%;
      .el-col {
        height: 100%;
      }
    }
    .right, .left {
      .title {
        height: 80px;
        line-height: 80px;
        padding-left: 27px;
        font-size: 24px;
      }
      .content {
        height: calc(100% - 80px);
      }
    }
    .left {
      height: 100%;
      .scrollContainer {
        height: 500px;
        /deep/ .el-scrollbar__wrap {
          overflow-x: hidden;
          overflow-y: scroll;
          box-sizing: border-box;
          padding: 0 10px;
        }
        .picWrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .pic {
            height: 100px;
            width: 100px;
            background-color: #ff0000;
            margin-bottom: 10px;
          }
        }
      }
    }
    .right {
      height: 100%;
      .content {
        border-radius: 7px;
        background-color: #fff;
      }
    }
  }
</style>
