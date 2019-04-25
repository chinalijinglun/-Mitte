<template>
  <div class="topNav">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item,index) of navList" :key="index">
        <span v-if="item.name == '推送管理列表' && item.path == '/topic_list'">
          推送管理列表
          <i class="el-icon-arrow-right"></i>
          专题推送
        </span>
        <span v-else-if="item.name == '推送管理列表' && item.path == '/shop_list'">
          推送管理列表
          <i class="el-icon-arrow-right"></i>
          商品推送
        </span>
        <span v-else>
          {{item.name}}
        </span>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="iconContainer">
      <div class="deleteIcon" v-if="navList[0].name === '品类管理' && user.name === 'admin'">
        <i class="el-icon-delete"></i>
        <ul class="deleteMenu">
          <li @click="deleteCategory(1)">删除一级品类</li>
          <li @click="deleteCategory(2)">删除二级品类</li>
        </ul>
      </div>

      <div class="editIcon" v-if="navList[0].name === '品类管理'">
        <i @click="editHandler(navList[0].name)" class="el-icon-edit-outline"></i>
        <ul class="editMenu" v-if="navList[0].name === '品类管理'">
          <li @click="editCategory(1)">修改一级品类</li>
          <li @click="editCategory(2)">修改二级品类</li>
        </ul>
      </div>
      <div class="addIcon" v-if="navList[0].name === '品类管理' || navList[0].name === '品牌管理'">
        <i @click="addHandler(navList[0].name)" class="el-icon-circle-plus-outline"></i>
        <ul class="addMenu" v-if="navList[0].name === '品类管理'">
          <li @click="addCategory(1)">添加一级品类</li>
          <li @click="addCategory(2)">添加二级品类</li>
        </ul>
      </div>
      <div class="editIcon" v-if="navList[0].name === '推送管理列表'">
        <i @click="addPush" class="el-icon-circle-plus-outline"></i>
      </div>
      <div class="searchIcon" v-if="navList[0].name === '订单管理'">
        <i class="el-icon-search" @click="getOrderId"></i>
      </div>
      <div class="noticeIcon" @click="notice">
        <el-badge :value="100" :max="10" class="item" :hidden='not'>
          <i class="el-icon-bell"></i>
        </el-badge>
      </div>
      <div class="addIcon">
        <i class="el-icon-news"></i>
        <ul class="editMenu">
          <li @click="backLogin">
            退出登录
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: null,
      user: '',
      not: false
    }
  },
  watch: {
    $route() {
      this.getNavList()
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user')) || { name: '' }
  },
  created() {
    this.getNavList();
  },
  methods: {
    backLogin() {
      location.replace('/');
      localStorage.removeItem('user');
    },
    notice() {
      this.not = true
    },
    getNavList() {
      this.navList = this.$route.matched.filter(item => item.name);
      console.log(this.navList)
    },
    addCategory(num) {
      switch (num) {
        case 1:
          this.$store.dispatch('addFirstCategory');
          break;
        case 2:
          this.$store.dispatch('addSecondCategory');
          break;
        default:
          return
      }
    },
    editCategory(num) {
      switch (num) {
        case 1:
          this.$store.dispatch('editFirstCategory');
          break;
        case 2:
          this.$store.dispatch('editSecondCategory');
          break;
        default:
          return
      }
    },
    addHandler(keyword) {
      switch (keyword) {
        case '品牌管理':
          this.$store.dispatch('addBrand');
          break;
        default:
          return
      }
    },
    editHandler(keyword) {
      switch (keyword) {
        case '品牌管理':
          this.$store.dispatch('editBrand');
          break;
        default:
          return
      }
    },
    addPush() {
      this.$router.push('/push')
    },
    getOrderId() {
      this.$prompt('请输入订单号', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        this.$store.dispatch('setOrderId', value)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入',
          center: true
        });
      })
    },
    deleteCategory(type) {
      switch (type) {
        case 1:
          this.$eventHub.$emit('deleteCategory', 'first');
          break;
        case 2:
          this.$eventHub.$emit('deleteCategory', 'second');
          break;
        default:
          return;
      }
    }
  }
}
</script>

<style scoped lang="less">
a {
  text-decoration: none;
}
.item {
  margin-top: -4px;
}
.el-icon-arrow-right {
  color: #c0c4cc;
}
.topNav {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  .iconContainer {
    font-weight: bolder;
    font-size: 20px;
    color: #888;
    margin-right: 50px;
    display: flex;
    & > div {
      width: 50px;
      text-align: center;
      display: flex;
      height: 30px;
    }
    & > div.searchIcon {
      width: 100px;
    }
    .deleteIcon,
    .addIcon,
    .editIcon {
      flex-direction: column;
      align-items: center;
      .deleteMenu,
      .addMenu,
      .personIcon,
      .editMenu {
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
      &:hover .deleteMenu {
        display: block;
        opacity: 1;
      }
      &:hover .outMenu {
        display: block;
        opacity: 1;
      }
    }
    .searchIcon {
      justify-content: center;
      cursor: pointer;
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
