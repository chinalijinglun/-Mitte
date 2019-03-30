<template>
  <div class="push">
    <div class="title">
      选择添加商品品类
    </div>
    <div class="push_main tableContainer">
      <el-form ref="form" :model="form" label-width="180px" class="push_form">
        <el-form-item label="推送名称">
          <el-input type="text" v-model="form.text"></el-input>
        </el-form-item>
        <el-form-item label="选择推送">
          <el-select v-model="form.region" placeholder="请选择推送">
            <el-option label="商品推送" value="1"></el-option>
            <el-option label="专题推送" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择商品">
          <el-select v-model="form.shop" placeholder="请选择商品">
            <el-option label="adidas" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="推送文字内容">
          <el-input type="textarea" v-model="form.detail"></el-input>
        </el-form-item>
        <el-form-item label="添加图片">
          <el-upload v-loading="isLoading" class="avatar-uploader" :action="`${BASE_URL}/upload`" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { BASE_URL } from '../../utils'
import { addPushDetails } from '@/api/push'
export default {
  name: "index",
  data() {
    return {
      BASE_URL: BASE_URL,
      form: {
        detail: '',
        region: '',
        text: '',
        shop: ''
      },
      imageUrl: '',
      isLoading: false
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    onSubmit(e) {
      addPushDetails({
        type: this.form.region,
        shop_name: '2222鞋子',
        img: this.imageUrl,
        push_name: this.form.text,
        push_content: this.form.detail
      }).then((data) => {
        if (data.code == 200) {
          console.log(123)
          this.$router.push('/shop_list')
        }
      })
    },
    handleAvatarSuccess(res, file) {
      if (res.code === 200) {
        this.imageUrl = res.data.url;
      }
      this.isLoading = false
      console.log(res, file, '上传成功');
    },
    beforeAvatarUpload(file) {
      console.log(file, '上传前');
      this.isLoading = true;
    },
  }
}
</script>

<style scoped lang="less">
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
  width: 148px;
  height: 148px;
  line-height: 146px;
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
