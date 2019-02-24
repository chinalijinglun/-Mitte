<template>
  <div class="brand">
    <el-row :gutter="40">
      <el-col :span="16">
        <div class="left">
          <p class="title" @click="showModal()">品牌图片</p>
          <div class="content">
            <div class="scrollContainer">
              <el-scrollbar style="height: 100%">
                <div class="picContainer">
                  <div class="picWrap">
                    <div class="pic" v-for="(item,index) of picData" :key="index">pic{{item}}</div>
                  </div>
                </div>
              </el-scrollbar>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="right">
          <p class="title">品牌信息</p>
          <div class="content">
            <div class="brandName">
              <p>品牌名称</p>
              <p>ZHIYAN-之砚</p>
            </div>
            <div class="brandWeight">
              <p>权重</p>
              <p>99</p>
            </div>
            <div class="brandShow">
              <p>显示</p>
              <el-switch
                v-model="isShow"
                active-color="#13ce66"
                inactive-color="#d8d8d8">
              </el-switch>
            </div>
            <div class="brandUpdate">
              <div>
                <div>· </div>
                <div>修改</div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-dialog
      :visible.sync="isVisible"
      class="brandDialog"
      width="50%"
    >
      <div slot="title" class="dialog-header">
        <h2>添加品牌</h2>
      </div>
      <div class="dialog-content">
        <div class="left">
          <el-form label-position="top">
            <el-form-item label="名称">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="权重">
              <el-input></el-input>
            </el-form-item>
          </el-form>
          <div class="addPic">
            <i class="el-icon-plus"></i>
          </div>
        </div>
        <div class="right">
          <i class="el-icon-warning"></i>
          <p>图片尺寸为n*n</p>
          <p>图片大小不能超过2M,格式为jpeg、png</p>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <div class="footerLeft">
          <span>显示</span>
          <span>显示按钮</span>
        </div>
        <div class="footerRight">
          <button @click="isFirstVisible = false">提交</button>
          <button @click="isFirstVisible = false">取消</button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        isShow:false,
        isVisible:false
      }
    },
    computed:{
      picData(){
        let testData = [];
        for(let i = 0;i<200;i++){
          testData.push(i)
        }
        return testData
      }
    },
    methods: {
      showModal() {
        this.isVisible = true
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
        .picContainer {
          display: flex;
          .picWrap {
            flex-grow: 1;
            width: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .pic {
              height: 100px;
              width: 100px;
              background-color: #fff;
              margin-bottom: 10px;
              border-radius: 7px;
            }
          }
        }
      }
    }
    .right {
      height: 100%;
      .content {
        border-radius: 7px;
        background-color: #fff;
        box-sizing: border-box;
        padding: 70px 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &>div> {
          &>p:first-child{
            font-size: 18px;
            font-weight: 300;
            line-height: 27px;
          }
          &>p:last-child {
            font-weight: 300;
            font-size: 30px;
          }
        }
        .brandUpdate {
          &>div {
            background-color: #fff;
            border: 1px solid #d8d8d8;
            border-radius: 14px;
            width: 70px;
            text-align: center;
            height: 25px;
            line-height: 25px;
            font-weight: 300;
            overflow: hidden;
            display: flex;
            justify-content: center;
            div:first-child {
              color: #5ac837;
              font-weight: bolder;
              font-size: 30px;
            }
          }
        }
      }
    }
    .brandDialog {
      /deep/ .el-dialog {
        border-radius: 10px;
        .dialog-footer {
          display: flex;
          justify-content: space-between;
          .footerLeft {
            span:last-child {
              margin-left: 20px;
            }
          }
          .footerRight {
            button {
              margin-right: 20px;
              width: 90px;
              height: 30px;
              border-radius: 15px;
              line-height: 30px;
              text-align: center;
              font-size: 15px;
              outline: none;
              &:hover {
                cursor: pointer;
              }
            }
            button:first-child {
              background-color: #898989;
              color: #fff;
            }
            button:last-child {
              background-color: #ececec;
              color: #aeaeae;
              border: none;
            }
          }
        }
        .dialog-content {
          display: flex;
          align-items: flex-end;

          .left {
            width: 40%;
            .addPic {
              height: 100px;
              background-color: #e6e6e6;
              display: flex;
              justify-content: center;
              align-items: center;
              i {
                color: #fff;
                font-size: 50px;
                font-weight: 700;
              }
            }
          }
          .right {
            flex-grow: 1;
            color: #c3c3c3;
            padding-left: 30px;
            box-sizing: border-box;
            line-height: 24px;
          }
        }
      }
    }
  }
</style>
