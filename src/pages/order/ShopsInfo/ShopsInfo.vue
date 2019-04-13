<template>
  <div class="shopsInfo">
    <div class="top">
      <div class="pic">
        <img :src="item.img" alt="">
      </div>
      <div class="information">
        <p>{{item.name}}</p>
        <p class="option">
          <span v-for="(item2,index) of item.property" :key="index">{{item2}}</span>
          <span>{{item.orders[0].order_goods.count}}双</span>
        </p>
        <p>{{item.price * item.orders[0].order_goods.count}}元</p>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: "ShopsInfo",
    data() {
      return {
        doName:''
      }
    },
    props:['item'],
    computed: {
      ...mapState(['app'])
    },
    watch:{
      'app.orderRowData'(val) {
        // console.log(val,'val')
      }
    },
    methods: {
      getDoName() {

      }
    },
    mounted() {

    }
  }
</script>

<style scoped lang="less">
  .shopsInfo {
    height: 130px;
    color:#606266;
    .top {
      height: 100px;
      display: flex;
      .pic {
        width: 100px;
        height: 100%;
        background-color: #d8d8d8;
        img {
          width: 100%;
          height: 100%;
        }
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
            background-color: #d8d8d8;
            padding: 0 10px;
            border-radius: 10px;
          }
        }
      }
    }

  }
</style>
