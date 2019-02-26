<template>
  <div class="topNav">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item,index) of navList" :key="index">
        {{item.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="iconContainer">
      <div class="editIcon">
        <i @click="editHandler(navList[0].name)" v-if="navList[0].name === '品类管理' || '品牌管理'" class="el-icon-edit-outline"></i>
        <ul class="editMenu" v-if="navList[0].name === '品类管理'">
          <li @click="editCategory(1)">修改一级品类</li>
          <li @click="editCategory(2)">修改二级品类</li>
        </ul>
      </div>
      <div class="addIcon">
        <i @click="addHandler(navList[0].name)" v-if="navList[0].name === '品类管理' || '品牌管理'" class="el-icon-circle-plus-outline"></i>
        <ul class="addMenu" v-if="navList[0].name === '品类管理'">
          <li @click="addCategory(1)">添加一级品类</li>
          <li @click="addCategory(2)">添加二级品类</li>
        </ul>
      </div>
      <div class="searchIcon">
        <i class="el-icon-search"></i>
      </div>
      <div class="noticeIcon">
        <i class="el-icon-bell"></i>
      </div>
      <div class="personIcon">
        <i class="el-icon-news"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navList:null
      }
    },
    watch: {
      $route() {
        this.getNavList()
      }
    },
    created() {
      this.getNavList()
    },
    methods: {
      getNavList() {
        this.navList = this.$route.matched.filter(item => item.name);
      },
      addCategory(num) {
        switch (num) {
          case 1 :
            this.$store.dispatch('addFirstCategory');
            break;
          case 2 :
            this.$store.dispatch('addSecondCategory');
            break;
          default :
            return
        }
      },
      editCategory(num) {
        switch (num) {
          case 1 :
            this.$store.dispatch('editFirstCategory');
            break;
          case 2 :
            this.$store.dispatch('editSecondCategory');
            break;
          default :
            return
        }
      },
      addHandler(keyword) {
        switch (keyword) {
          case '品牌管理' :
            this.$store.dispatch('addBrand');
            break;
          default :
            return
        }
      },
      editHandler(keyword) {
        switch (keyword) {
          case '品牌管理' :
            this.$store.dispatch('editBrand');
            break;
          default :
            return
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .topNav {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    .iconContainer {
      font-weight: bolder;
      font-size: 20px;
      color:#888;
      margin-right: 50px;
      display: flex;
      &>div {
        width: 50px;
        text-align: center;
        display: flex;
        height: 30px;
      }
      &>div.searchIcon {
        width: 100px;
      }
      .addIcon,.editIcon {
        flex-direction: column;
        align-items: center;
        .addMenu,.editMenu {
          width: 120px;
          font-size: 13px;
          font-weight: 300;
          line-height: 20px;
          margin-top: 10px;
          background-color: #fff;
          border-radius: 7px;
          display: none;
          opacity: 0;
          position: relative;
          z-index: 99;
          padding: 10px 0;
          li:hover {
            background-color: #e6e6e6;
            cursor: default;
          }
          &:hover {
            display: block;
            opacity: 1;
          }
        }
        &:hover .addMenu {
          display: block;
          opacity: 1;
        }
        &:hover .editMenu {
          display: block;
          opacity: 1;
        }
      }
      .searchIcon {
        justify-content: center;
      }
      .noticeIcon {
        justify-content: center;
      }
      .personIcon {
        justify-content: center;
      }
    }
  }
</style>
