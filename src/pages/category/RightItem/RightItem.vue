<template>
  <div class="rightItem">
    <el-table
      :data="secondList"
      style="width: 100%"
      highlight-current-row
      @current-change="handleCurrentChange"
      :cell-style="{border:'none'}"
      :header-cell-style="{border:'none'}"
    >
      <el-table-column
        label="品类名称"
        prop="name"
        align="center"
        width="150"
      >
      </el-table-column>
      <el-table-column
        label="品类属性"
        align="center"
      >
        <template slot-scope="scope">
          <div class="property">
                    <span
                      v-for="(item,index) of scope.row.property"
                      :key="index">
                    {{item}}
                  </span>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="权重"
        prop="weight"
        align="center"
        width="50"
      >
      </el-table-column>
      <el-table-column
        label="是否显示"
        align="center"
        width="100"
      >
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.isShow"
            active-color="#13ce66"
            inactive-color="#d8d8d8">
          </el-switch>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "RightItem",
    data() {
      return {
        secondList:[
          {
            name:'耳饰耳钉',
            property:['颜色','尺码/尺寸','材质','发货时间'],
            weight:99,
            isShow:true
          },
          {
            name:'耳饰耳钉',
            property:['颜色','尺码/尺寸','材质','发货时间'],
            weight:99,
            isShow:true
          },
          {
            name:'耳饰耳钉',
            property:['颜色','尺码/尺寸','材质','发货时间'],
            weight:99,
            isShow:true
          },
          {
            name:'耳饰耳钉',
            property:['颜色','尺码/尺寸','材质','发货时间'],
            weight:99,
            isShow:true
          },
          {
            name:'耳饰耳钉',
            property:['颜色','尺码/尺寸','材质','发货时间'],
            weight:99,
            isShow:true
          },
        ]
      }
    },
    methods: {
      handleCurrentChange() {

      }
    }
  }
</script>

<style scoped lang="less">
  .rightItem {
    height: calc(100% - 70px);
    background-color: #fff;
    border-radius: 7px;
    overflow: hidden;
    padding: 20px 0;
    box-sizing: border-box;
    /deep/ .el-table {
      &::before {
        background-color: transparent;
      }
    }
    .property {
      white-space: nowrap;
      span {
        background-color: #979797;
        display: inline-block;
        border-radius: 15px;
        padding: 0 7px;
        margin-left: 5px;
      }
    }
  }
</style>
