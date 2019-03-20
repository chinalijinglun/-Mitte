<template>
  <div class="brand">
    <el-row :gutter="40">
      <el-col :span="16">
        <div class="left">
          <p class="title">品牌图片</p>
          <div class="content">
            <div class="scrollContainer">
              <el-scrollbar style="height: 100%">
                <div class="picContainer">
                  <div class="picWrap">
                    <div class="pic" @click="getBrandDetail(index)" v-for="(item,index) of brandData" :key="index">
                      <div class="image">
                        <img :src="item.image" alt="">
                      </div>
                    </div>
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
          <div class="content" v-if="brandData.length">
            <div class="brandName">
              <p>品牌名称</p>
              <p>{{brandData[detailIndex].name}}</p>
            </div>
            <div class="brandWeight">
              <p>权重</p>
              <p>{{brandData[detailIndex].weight}}</p>
            </div>
            <div class="brandShow">
              <p>显示</p>
              <el-switch
                v-model="brandData[detailIndex].show"
                active-color="#13ce66"
                @change="toggleShow"
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
      :visible.sync="app.isBrandModalVisible"
      class="brandDialog"
      width="50%"
    >
      <div slot="title" class="dialog-header">
        <h2>{{app.modalTitle}}</h2>
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
          <button @click="cancelModal()">提交</button>
          <button @click="cancelModal()">取消</button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import { getBrandReq, updateBrandReq, creatBrandReq, updateBrandShowReq } from '../../api/order'
  import axios from 'axios';
  export default {
    name: "index",
    data() {
      return {
        isShow:false,
        brandData:[],
        detailIndex:0
      }
    },
    computed:{
      ...mapState(['app'])
    },
    mounted() {
      this.getBrandList();
    },
    methods: {
      cancelModal() {
        this.$store.dispatch('dismissModal','brand')
      },
      getBrandList() {
        getBrandReq().then(res => {
          this.brandData = res.data;
        }).catch(err => {
          console.log(err);
        })
      },
      getBrandDetail(index) {
        this.detailIndex = index;
      },
      toggleShow(e) {
        if(e) {
          updateBrandShowReq({show:1,id:this.detailIndex}).then(() => {
            console.log('修改成功1')
          }).catch((err) => {
            console.log('修改失败1',err)
          })
        }else {
          updateBrandShowReq({show:0,id:this.detailIndex}).then(() => {
            console.log('修改成功2')
          }).catch(() => {
            console.log('修改失败2')
          })
        }
        // axios.post('http://localhost:5000/api/v1/updateBrandShow',{
        //   show:1,
        //   id:1
        // }).then(res => {
        //   console.log(res)
        // }).catch(err => {
        //   console.log(err)
        // })
      }
    }
  }
</script>

<style scoped lang="less">
  .brand {
    height: calc(100% - 50px);
    min-width: 1165px;
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
        width: 770px;
        /deep/ .el-scrollbar__wrap {
          overflow-x: hidden;
          overflow-y: scroll;
          box-sizing: border-box;
          /*padding: 0 10px;*/
        }
        .picContainer {
          display: flex;
          .picWrap {
            flex-grow: 1;
            width: 0;
            display: flex;
            flex-wrap: wrap;
            /*justify-content: space-between;*/
            .pic {
              height: 100px;
              width: 110px;
              margin-bottom: 10px;
              .image{
                width: 100px;
                height: 100%;
                background-color: #fff;
                border-radius: 7px;
                overflow: hidden;
                &:hover {
                  cursor: pointer;
                }
                img {
                  width: 100%;
                  height: 100%;
                }
              }
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
