<template>
  <div class="shopsInfo">
    <div class="top">
      <div class="pic"></div>
      <div class="information">
        <p>TypeSomething阿特莱特男款鞋</p>
        <p class="option">
          <span>白色</span>
          <span>55mm</span>
          <span>2双</span>
        </p>
        <p>¥7100</p>
      </div>
    </div>
    <div class="bottom">
      <div>
        <span>·</span>发货
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopsInfo"
  }
</script>

<style scoped lang="less">
  .shopsInfo {
    height: 130px;
    .top {
      height: 100px;
      display: flex;
      .pic {
        width: 100px;
        height: 100%;
        background-color: #888;
      }
      .information {
        height: 100%;
        font-size: 13px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: calc(100% - 100px);
        padding: 0 10px;
        box-sizing: border-box;
        .option {
          display: flex;
          justify-content: space-between;
          span {
            display: inline-block;
            background-color: #888;
            padding: 0 10px;
            border-radius: 10px;
          }
        }
      }
    }
    .bottom {
      height: 30px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 10px;
      &>div {
        background-color: #fff;
        border:1px solid #888;
        border-radius: 10px;
        width: 60px;
        text-align: center;
        height: 20px;
        &>span {
          color: aqua;
          font-weight: bolder;
        }
      }
    }
  }
</style>
