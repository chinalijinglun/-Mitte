<template>
  <div class="push">
    <div class="title">选择添加商品品类</div>
    <div class="push_main tableContainer">
      <el-form ref="form" :model="form" label-width="180px" class="push_form">
        <el-form-item label="选择品类">
          <el-cascader :options="options1" v-model="selectedOptions" @change="handleChange"></el-cascader>
        </el-form-item>
        <el-form-item label="选择品牌">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="btn">
        <router-link to="/add_details">
          <el-button type="primary" @click="onSubmit">
              添加商品
          </el-button>
          </router-link>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      form: {},
      selectedOptions: [],
      value: "",
      options: [
        {
          value: "1",
          label: "adidas"
        },
        {
          value: "2",
          label: "nike"
        },
        {
          value: "3",
          label: "sony"
        },
        {
          value: "4",
          label: "asics"
        }
      ],
      options1: [
        {
          value: "zhinan",
          label: "家居服饰",
          children: [
            {
              value: "shejiyuanze",
              label: "服饰",
              children: [
                {
                  value: "yizhi",
                  label: "卫衣"
                },
                {
                  value: "fankui",
                  label: "女裙"
                },
                {
                  value: "xiaolv",
                  label: "外套"
                },
                {
                  value: "kekong",
                  label: "男裤"
                }
              ]
            },{
                value: "shejiyuanze",
                label: "首饰",
                children: [
                    {
                    value: "yizhi",
                    label: "项链"
                    },{
                    value: "yizhi",
                    label: "耳环"
                    },
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    onSubmit(e) {
      console.log(e);
    },
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>

<style scoped lang="less">
.btn{
    margin-top: 150px
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
