<template>
  <div class="add_details">
    <el-row>
      <el-col :span="11">
        <h2 class="active_title">商品信息</h2>
        <div class="grid-content tableContainer">
          <el-form ref="form" :model="form1" label-width="120px">
            <el-form-item label="商品名称">
              <el-input v-model="form1.name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格">
              <el-input v-model="form1.price"></el-input>
            </el-form-item>
            <el-form-item label="优惠价格">
              <el-input v-model="form1.offerPrice"></el-input>
            </el-form-item>
            <el-form-item label="商品库存">
              <el-input v-model="form1.stock"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark1"></div>
      </el-col>
      <el-col :span="11">
        <h2 class="active_title">商品属性</h2>
        <div class="grid-content tableContainer">
          <el-form ref="form" :model="form1" label-width="120px">
            <el-form-item label="商品名称">
              <el-input v-model="form1.name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格">
              <el-input v-model="form1.price"></el-input>
            </el-form-item>
            <el-form-item label="优惠价格">
              <el-input v-model="form1.offerPrice"></el-input>
            </el-form-item>
            <el-form-item label="商品库存">
              <el-input v-model="form1.stock"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="11">
        <h2 class="active_title">SKU属性</h2>
        <div class="grid-content tableContainer">
          <el-form ref="form" :model="form1" label-width="120px">
            <el-form-item label="颜色">
              <el-input v-model="form1.name"></el-input>
            </el-form-item>
            <el-form-item label="尺码 / 尺寸">
              <el-input v-model="form1.price"></el-input>
            </el-form-item>
            <el-form-item label="库存">
              <el-input v-model="form1.offerPrice"></el-input>
            </el-form-item>
            <el-form-item label="商品库存">
              <el-input v-model="form1.stock"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark1"></div>
      </el-col>
      <el-col :span="11">
        <h2 class="active_title">销售规格</h2>
        <div class="grid-content tableContainer">
          <el-form ref="form" :model="form1" label-width="120px">
            <el-form-item label="颜色">
              <el-input v-model="form1.name"></el-input>
            </el-form-item>
            <el-form-item label="尺码 / 尺寸">
              <el-input v-model="form1.price"></el-input>
            </el-form-item>
            <el-form-item label="库存">
              <el-input v-model="form1.offerPrice"></el-input>
            </el-form-item>
            <el-form-item label="商品库存">
              <el-input v-model="form1.stock"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <h2 class="active_title">商品图片</h2>
        <div class="img_upload tableContainer grid-content">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="tableContainer btn">
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
         </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form1: {
        name: "",
        price: "",
        offerPrice: "",
        stock: "",
      },
      imageUrl: ''
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
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
      return isJPG && isLt2M;
    }, onSubmit(e){
        console.log(e)
      }
  }
};
</script>

<style scoped lang="less">
.btn{
  text-align: right;
  height: 50px!important;
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