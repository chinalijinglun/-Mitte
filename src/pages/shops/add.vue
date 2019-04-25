<template>
  <div class="push">
    <div class="title">选择添加商品品类</div>
    <div class="push_main tableContainer">
      <el-form ref="form" :model="form" label-width="180px" class="push_form">
        <el-form-item label="选择品类">
          <el-cascader :options="categoryOptions" v-model="selectedOptions" @change="handleChange">
          </el-cascader>
        </el-form-item>
        <el-form-item label="选择品牌">
          <el-select v-model="brandValue" placeholder="请选择">
            <el-option v-for="(item,index) in brandNameOptions" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="onSubmit">
            添加商品
          </el-button>
          <el-button>
            <router-link to="/shops">取消</router-link>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getCategoryNamesReq, getBrandNamesReq } from '../../api/order'
export default {
  name: "index",
  data() {
    return {
      form: {},
      selectedOptions: [],
      brandValue: "",
      brandNameOptions: [],
      categoryOptions: []
    };
  },
  mounted() {
    this.getCategoryNames();
    this.getBrandNames();
  },
  methods: {
    onSubmit(e) {
      if (this.brandValue && this.categoryOptions.length) {
        let { selectedOptions, brandValue } = this;
        this.$router.push({
          path: '/add_details',
          query: { brandValue, selectedOptions }
        })
      } else {
        this.$message.warning('品类和品牌必须选择')
      }
    },
    handleChange(value) {
      console.log(value);
    },
    getCategoryNames() {
      getCategoryNamesReq().then(res => {
        if (res.code === 200) {
          this.categoryOptions = res.data;
        }
      }).catch(err => {
        console.log(err);
      })
    },
    getBrandNames() {
      getBrandNamesReq().then(res => {
        if (res.code === 200) {
          this.brandNameOptions = res.data;
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }
};
</script>

<style scoped lang="less">
a {
  text-decoration: none;
}
.btn {
  margin-top: 150px;
}
.push_form {
  max-width: 750px;
  margin-top: 100px;
}
.avatar-uploader /deep/ .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.title {
  font-size: 32px;
  line-height: 45px;
  margin-bottom: 25px;
}
.tableContainer {
  border-radius: 7px;
  overflow: hidden;
  height: calc(100vh - 200px);
  background-color: #fff;
  /deep/ .el-table {
    &::before {
      background-color: transparent;
    }
  }
}
.orderContainer {
  height: calc(100% - 50px);
  /deep/ .el-row {
    height: 100%;
    .el-col {
      height: 100%;
    }
  }
}
</style>
