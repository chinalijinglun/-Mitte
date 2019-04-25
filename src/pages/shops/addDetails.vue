<template>
  <div class="add_details">
    <el-row>
      <el-col :span="11">
        <h2 class="active_title">商品信息</h2>
        <div class="grid-content tableContainer">
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="商品名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格">
              <el-input v-model="form.price"></el-input>
            </el-form-item>
            <el-form-item label="优惠价格">
              <el-input v-model="form.offerPrice"></el-input>
            </el-form-item>
            <el-form-item label="商品类型">
              <el-select v-model="form.shopType" placeholder="请选择">
                <el-option v-for="(item,index) of typeList" :key="index" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark1"></div>
      </el-col>
      <el-col :span="11">
        <h2 class="active_title">SKU属性</h2>
        <div class="grid-content tableContainer">
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="颜色">
              <el-input v-model="form.property[0]"></el-input>
            </el-form-item>
            <el-form-item label="尺码 / 尺寸">
              <el-input v-model="form.property[1]"></el-input>
            </el-form-item>
            <el-form-item label="商品库存">
              <el-input v-model="form.count"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <br />
    <el-row>
      <el-col :span="11">
        <h2 class="active_title">商品图片</h2>
        <div class="img_upload tableContainer grid-content">
          <el-upload class="avatar-uploader" v-loading="isLoading" :action="`${BASE_URL}/upload`" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="11">
        <div class="tableContainer btn">
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>
            <router-link to="/shops">取消</router-link>
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { BASE_URL } from '../../utils/index'
import { createShopReq } from '../../api/order';
export default {
  data() {
    return {
      BASE_URL: BASE_URL,
      typeList: [
        { label: '普通商品', value: 'normal' },
        { label: '艺术商品', value: 'art' },
        { label: '定制商品', value: 'made' }
      ],
      isLoading: false,
      form: {
        name: "",
        price: "",
        offerPrice: "",
        shopType: "",
        property: [],
        count: '',
        imageUrl: ''
      },
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      if (res.code === 200) {
        this.form.imageUrl = res.data.url;
        this.isLoading = false;
        console.log(res, file, '上传成功');
      }
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      this.isLoading = true;
    },

    onSubmit(e) {
      let { form } = this;
      let { selectedOptions, brandValue } = this.$route.query;
      form.categoryFirstName = selectedOptions[0];
      form.categorySecondName = selectedOptions[1];
      form.brandName = brandValue;
      createShopReq(form).then(res => {
        if (res.code === 200) {
          this.$message.success('添加商品成功');
          form.name = '';
          form.price = '';
          form.offerPrice = '';
          form.shopType = '';
          form.property = [];
          form.count = '';
          form.imageUrl = '';
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
};
</script>

<style scoped lang="less">
.btn {
  text-align: right;
  height: 50px !important;
  padding-right: 30px;
}
.avatar-uploader {
  float: left;
  margin: 0 20px;
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
.el-input {
  width: 80%;
}
.active_title {
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 35px;
}
.grid-content {
  height: 250px !important;
}
.tableContainer {
  padding-top: 15px;
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
</style>
