<template>
  <div class="categoryContainer">
    <el-row :gutter="40">
      <el-col :span="11">
        <div class="left">
          <p class="title">一级品类</p>
          <div class="first" @click="test()">
            <div class="scrollbarContainer">
              <el-scrollbar style="height: 100%">
                <LeftItem />
                <LeftItem />
                <LeftItem />
                <LeftItem />
                <LeftItem />
                <LeftItem />
              </el-scrollbar>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="13">
        <div class="right">
          <p class="title">二级品类</p>
          <div class="second">
            <RightItem />
          </div>
        </div>
      </el-col>
    </el-row>
    <el-dialog
      :visible.sync="isFirstVisible"
      class="firstDialog"
      width="50%"
    >
      <div slot="title" class="dialog-header">
        <h2>添加一级品类</h2>
      </div>
      <div class="dialog-content">
        <div>
          <el-form label-position="top">
            <el-form-item label="名称">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="权重">
              <el-input></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div></div>

      </div>
      <div slot="footer" class="dialog-footer">
        <div>
          <span>显示</span>
          <span>显示按钮</span>
        </div>
        <div>
          <el-button @click="isFirstVisible = false">提交</el-button>
          <el-button type="primary" @click="isFirstVisible = false">取消</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import LeftItem from './LeftItem/LeftItem';
  import RightItem from './RightItem/RightItem'
  export default {
    name: "index",
    data() {
      return {
        isFirstVisible:false
      }
    },
    components: {
      LeftItem,
      RightItem
    },
    methods: {
      test() {
        this.isFirstVisible = true
      }
    }
  }
</script>

<style scoped lang="less">
  .categoryContainer {
    height: calc(100% - 50px);
    /deep/ .el-row {
      height: 100%;
      .el-col {
        height: 100%;
      }
    }
    .left {
      height: 100%;
      .first {
        height: calc(100% - 70px);
        background-color: #fff;
        border-radius: 7px;
        .scrollbarContainer {
          height: 500px;
          /deep/ .el-scrollbar__wrap {
            overflow-x: hidden;
            overflow-y: scroll;
            padding: 20px;
            box-sizing: border-box;
          }
        }
      }
    }
    .right {
      height: 100%;
      .second {
        height: calc(100% - 70px);
        background-color: #fff;
        border-radius: 7px;
      }
    }
    .right,.left {
      .title {
        height: 80px;
        line-height: 80px;
        padding-left: 27px;
        font-size: 24px;
      }
    }
    .firstDialog {
      /deep/ .el-dialog {
        border-radius: 10px;
        .dialog-footer {
          display: flex;
          justify-content: space-between;
        }
        .dialog-content {
          display: flex;
          &>div:first-child {
            width: 40%;
            /*background-color: red;*/
          }
          &>div:last-child {
            flex-grow: 1;
            background-color: aqua;
          }
        }
      }
    }
  }
</style>
