<template>
  <div class="categoryContainer">
    <el-row :gutter="40">
      <el-col :span="11">
        <div class="left">
          <p class="title">一级品类</p>
          <div class="first">
            <div class="scrollbarContainer">
              <el-scrollbar style="height: 100%">
                <div v-for="(item,index) of categoryFirstData"
                     :key="index"
                     @click="changeHandler(index,item.id)"
                     :class="{active:index === currentIndex}">
                  <LeftItem
                    :item="item"
                    :index="index"/>
                </div>
              </el-scrollbar>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="13">
        <div class="right">
          <p class="title">二级品类</p>
          <div class="second">
            <RightItem :secondList="categorySecondData" @rowData="getSecondTableRowData"/>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-dialog
      :visible.sync="app.isFirstVisible"
      class="firstDialog"
      width="50%"
      @open="dialogOpenHandler"
    >
      <div slot="title" class="dialog-header">
        <h2>{{app.modalTitle}}</h2>
      </div>
      <div class="dialog-content">
        <div class="left">
          <el-form label-position="top" :model="firstForm">
            <el-form-item label="名称">
              <el-input v-model="firstForm.name"></el-input>
            </el-form-item>
            <el-form-item label="权重">
              <el-input v-model="firstForm.weight"></el-input>
            </el-form-item>
          </el-form>
          <div class="addPic">
            <el-upload
              class="uploadPic"
              :action=`${BASE_URL}/upload`
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="firstForm.imageUrl" :src="firstForm.imageUrl" class="avatar">
              <i  v-else class="el-icon-plus"></i>
            </el-upload>
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
          <el-switch
            v-model="firstForm.show"
            active-color="#13ce66"
            inactive-color="#d8d8d8">
          </el-switch>
        </div>
        <div class="footerRight">
          <button @click="submitFirst()">提交</button>
          <button @click="cancelModal('first')">取消</button>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      :visible.sync="app.isSecondVisible"
      class="secondDialog"
      width="50%"
      @open="dialogOpenHandler"
    >
      <div slot="title" class="dialog-header">
        <h2>{{app.modalTitle}}</h2>
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
            <el-input v-model="secondDialogData.name" placeholder="请输入内容" />
          </div>
          <div>
            <p>权重</p>
            <el-input v-model="secondDialogData.weight" placeholder="请输入内容" />
          </div>
        </div>
        <div class="shopsProperty">
          <p>添加商品属性</p>
          <div>
            <!--<span v-for="(item,index) of shopsProperty" :key="index">{{item}}</span>-->
            <el-tag
              :key="index"
              v-for="(item,index) in secondDialogData.property"
              closable
              :disable-transitions="false"
              @close="handleClose(item)">
              {{item}}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <div class="footerLeft">
          <span>显示</span>
          <el-switch
            v-model="secondDialogData.show"
            active-color="#13ce66"
            inactive-color="#d8d8d8">
          </el-switch>
        </div>
        <div class="footerRight">
          <button @click="submitSecond('second')">提交</button>
          <button @click="cancelModal('second')">取消</button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { BASE_URL } from '../../utils/index'
  import { mapState } from 'vuex';
  import LeftItem from './LeftItem/LeftItem';
  import RightItem from './RightItem/RightItem'
  import {
    getCategoryFirstReq,
    getCategorySecondReq,
    updateCategoryFirstReq,
    updateCategorySecondReq,
    createCategoryFirstReq,
    createCategorySecondReq
  } from '../../api/order';

  export default {
    name: "index",
    data() {
      return {
        categoryFirstData:[],
        categorySecondData:[],
        currentIndex:0, //一级品类
        isLoading:false,
        firstForm:{
          imageUrl:'',
          name:'',
          weight:'',
          show:false,
          id:''
        },
        secondDialogData:{
          name:'',
          property:[],
          weight:'',
          show:false,
          id:'',
          parent_id:''
        },
        selectValue:'',//为一级品类的id

        inputVisible: false,
        inputValue: '',

        options: [

        ],
        secondRowData:{}
      }
    },
    computed:{
      ...mapState(['app'])
    },
    components: {
      LeftItem,
      RightItem
    },
    mounted(){
      this.getFirstCategory();
    },
    methods: {
      cancelModal(type) {
        this.$store.dispatch('dismissModal',type)
      },
      getFirstCategory() {
        getCategoryFirstReq().then(res => {
          if(res.code === 200) {
            this.categoryFirstData = res.data;
            this.selectValue = res.data[0].id;
            this.getSecondCategory(res.data[0].id);
          }
        }).catch(err => {
          console.log(err);
        })
      },
      getSecondCategory(id) {
        getCategorySecondReq(id).then(res => {
          this.categorySecondData = res.data;
        }).catch(err => {
          console.log(err)
        });
      },
      changeHandler(index,id) {
        this.getSecondCategory(id); //根据id获取二级品类列表
        this.currentIndex = index; //一级品类当前选中的index
        this.selectValue = id; //dialogSecond中下拉菜单的默认选中项
        this.secondRowData = {} //切换一级品类时，把dialogSecond的数据置空
      },
      handleAvatarSuccess(res,file) {
        if(res.code === 200) {
          this.imageUrl = res.data.url;
          this.isLoading = false;
          console.log(res,file,'上传成功');
        }
        // this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        console.log(file,'上传前');
        // this.firstForm.imageUrl = URL.createObjectURL(file);
        this.isLoading = true;
      },
      dialogOpenHandler() {
        let { name, img, show, weight, id } = this.categoryFirstData[this.currentIndex];
        switch (this.app.type) {
          case 'editFirst' :
            this.firstForm = {
              name,
              imageUrl:img,
              show:!!show,
              weight,
              id
            };
            break;
          case 'addFirst' :
            this.firstForm = {
              name:'',
              imageUrl:'',
              show:false,
              weight:''
            };
            break;
          case 'editSecond' :
            this.secondDialogData = this.secondRowData;
            if(!this.secondDialogData.name) {
              this.$message.error('请先选择要修改的二级品类')
            }
            this.options = [];
            this.getCategoryFirstName();
            break;
          case 'addSecond' :
            this.secondDialogData = {
              name:'',
              show:false,
              weight:'',
              property:[]
            };
            this.options = [];
            this.getCategoryFirstName();
            break;
          default :
            return;
        }
      },
      //获取一级品类的id与名字 渲染dialogSecond中的下拉菜单
      getCategoryFirstName() {
        this.categoryFirstData.forEach((item,index) => {
          this.options.push({
            label:item.name,
            value:item.id
          })
        })
      },

      getSecondTableRowData(rowData) {
        //二级品类子组件向父组件传递的当前选中的数据
        this.secondRowData = rowData || {}; //切换一级品类时，如果有选中过二级品类，rowData会变成null，置{},防止switch中判断报错
      },

      //以下为二级品类dialog中的property的功能
      handleClose(tag) {
        this.secondDialogData.property.splice(this.secondDialogData.property.indexOf(tag), 1);
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.secondDialogData.property.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },

      submitFirst() {
        let { name, show, weight, imageUrl, id } = this.firstForm;
        switch (this.app.type) {
          case 'editFirst' :
            updateCategoryFirstReq({
              name,
              show:show ? '1' : '0',
              weight,
              img:imageUrl,
              id
            }).then(res => {
              if(res.code === 200) {
                this.$message.success(res.msg);
                this.getFirstCategory();
              }
            }).catch(err => {
                console.log(err)
            });
            break;
          case 'addFirst' :
            createCategoryFirstReq({
              name,
              show:show ? '1' : '0',
              weight,
              img:imageUrl
            }).then(res => {
              if(res.code === 200) {
                this.$message.success('添加一级品类成功')
                this.getFirstCategory();
              }
            }).catch(err => {
              console.log(err)
            });
            break;
          default :
            return;
        }
        this.cancelModal('first');
      },

      submitSecond() {
        let { id, parent_id, name, weight, show, property } = this.secondDialogData;
        switch (this.app.type) {
          case 'editSecond' :
            updateCategorySecondReq({
              name,
              id,
              weight,
              show:show ? '1' : '0',
              property
            }).then(res => {
              if(res.code === 200) {
                this.$message.success('修改二级品类成功');
                this.getSecondCategory(parent_id);
              }
            }).catch(err => {
              console.log(err)
            });
            break;
          case 'addSecond' :
            createCategorySecondReq({
              name,
              weight,
              show:show ? '1' : '0',
              property,
              parent_id:this.selectValue
            }).then(res => {
              if(res.code === 200) {
                this.$message.success('修改二级品类成功');
                this.getSecondCategory(this.selectValue);
              }
            }).catch(err => {
              console.log(err)
            });
            break;
          default :
            return;
        }
        this.cancelModal('second')
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
        overflow: hidden;
        .scrollbarContainer {
          height: 100%;
          /deep/ .el-scrollbar__wrap {
            overflow-x: hidden;
            overflow-y: scroll;
            padding: 20px 0;
            box-sizing: border-box;
          }
          .active {
            background-color: #e6e6e6;
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
              .el-upload{
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .uploadPic,img{
                height: 100%;
                width: 100%;
              }
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
              .el-tag {
                margin-right: 10px;
                margin-top: 10px;
              }
              .button-new-tag {
                margin-right: 10px;
                margin-top: 10px;
                height: 32px;
                line-height: 30px;
                padding-top: 0;
                padding-bottom: 0;
              }
              .input-new-tag {
                width: 90px;
                margin-right: 10px;
                margin-top: 10px;
                vertical-align: bottom;
              }
            }
          }
        }
      }
    }
  }
</style>
