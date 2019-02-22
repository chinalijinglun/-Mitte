<template>
  <div class="categoryContainer">
    <el-row :gutter="40">
      <el-col :span="11">
        <div class="left">
          <p class="title">一级品类</p>
          <div class="first" @click="test()">
            <div class="scrollbarContainer">
              <el-scrollbar style="height: 100%">
                <LeftItem/>
                <LeftItem/>
                <LeftItem/>
                <LeftItem/>
                <LeftItem/>
                <LeftItem/>
              </el-scrollbar>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="13">
        <div class="right">
          <p class="title">二级品类</p>
          <div class="second" @click="test2()">
            <RightItem/>
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
    <el-dialog
      :visible.sync="isSecondVisible"
      class="secondDialog"
      width="50%"
    >
      <div slot="title" class="dialog-header">
        <h2>添加二级品类</h2>
      </div>
      <div class="dialog-content">
        <div class="formWrap">
          <div>
            <p>一级品类名称</p>
            <el-select v-model="selectValue" placeholder="请选择" value="">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div>
            <p>二级品类名称</p>
            <el-input v-model="input1" placeholder="请输入内容" />
          </div>
          <div>
            <p>权重</p>
            <el-input v-model="input2" placeholder="请输入内容" />
          </div>
        </div>
        <div class="shopsProperty">
          <p>添加商品属性</p>
          <div>
            <span v-for="(item,index) of shopsProperty" :key="index">{{item}}</span>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <div class="footerLeft">
          <span>显示</span>
          <span>显示按钮</span>
        </div>
        <div class="footerRight">
          <button @click="isSecondVisible = false">提交</button>
          <button @click="isSecondVisible = false">取消</button>
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
        isFirstVisible: false,
        isSecondVisible: false,
        options: [
          {
            value: '选项1',
            label: '艺术品'
          },
          {
            value: '选项2',
            label: '家居装饰'
          },
          {
            value: '选项3',
            label: '珠宝首饰'
          }, {
            value: '选项4',
            label: '洗漱用品'
          }, {
            value: '选项5',
            label: '黄金白银'
          }
        ],
        selectValue: '',
        input1:'',
        input2:'',
        shopsProperty:['材质','出版次数','尺寸','年份','签名位置','发货时间','发货地','售后','价格','名字','品级',]
      }
    },
    components: {
      LeftItem,
      RightItem
    },
    methods: {
      test() {
        this.isFirstVisible = true
      },
      test2() {
        this.isSecondVisible = true
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
        height: calc(100% - 80px);
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
        height: calc(100% - 80px);
        background-color: #fff;
        border-radius: 7px;
      }
    }
    .right, .left {
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

    .secondDialog {
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
          .formWrap {
            display: flex;
            justify-content: space-between;
            &>div>p {
              margin-bottom: 10px;
            }
          }
          .shopsProperty {
            margin-top: 17px;
            &>div {
              span {
                display: inline-block;
                border-radius: 12px;
                border: 1px solid #d8d8d8;
                padding: 0 10px;
                margin-top: 10px;
                margin-right: 10px;
              }
              span:nth-child(odd) {
                background-color: #d8d8d8;
              }
            }
          }
        }
      }
    }
  }
</style>
