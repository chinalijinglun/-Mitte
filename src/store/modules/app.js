
const app = {
  state: {
    isFirstVisible:false,
    isSecondVisible:false,
    type:'',
    modalTitle:'',
    isBrandModalVisible:false,
    orderRowData:null,
    badgeValue:0,
    orderId:null
  },
  mutations: {
    ADD_FIRST_CATEGORY : state => {
      state.isFirstVisible = true;
      state.modalTitle = '添加一级品类';
      state.type = 'addFirst'
    },
    EDIT_FIRST_CATEGORY : state => {
      state.isFirstVisible = true;
      state.modalTitle = '修改一级品类';
      state.type = 'editFirst'
    },
    ADD_SECOND_CATEGORY: state => {
      state.isSecondVisible = true;
      state.modalTitle = '添加二级品类';
      state.type = 'addSecond'
    },
    EDIT_SECOND_CATEGORY: state => {
      state.isSecondVisible = true;
      state.modalTitle = '修改二级品类';
      state.type = 'editSecond'
    },
    DISMISS_MODAL: (state,{type}) => {
      switch (type) {
        case 'first' :
          state.isFirstVisible = false;
          break;
        case 'second' :
          state.isSecondVisible = false;
          break;
        case 'brand' :
          state.isBrandModalVisible = false;
          break;
        default :
          return;
      }
    },
    EDIT_BRAND: (state) => {
      state.isBrandModalVisible = true;
      state.modalTitle = '修改品牌'
    },
    ADD_BRAND: (state) => {
      state.isBrandModalVisible = true;
      state.modalTitle = '添加品牌'
    },
    ORDER_ROW_DATA:(state,data) => {
      state.orderRowData = data;
    },
    BADGE_VALUE: (state,data) => {
      state.badgeValue = data;
    },
    SET_ORDER_ID: (state,orderId) => {
      state.orderId = orderId;
    }
  },
  actions: {
    addFirstCategory:({commit}) => {
      commit('ADD_FIRST_CATEGORY')
    },
    editFirstCategory:({commit}) => {
      commit('EDIT_FIRST_CATEGORY')
    },
    addSecondCategory:({commit}) => {
      commit('ADD_SECOND_CATEGORY')
    },
    editSecondCategory:({commit}) => {
      commit('EDIT_SECOND_CATEGORY')
    },
    dismissModal:({commit},type) => {
      commit('DISMISS_MODAL',{type})
    },
    editBrand:({commit}) => {
      commit('EDIT_BRAND')
    },
    addBrand:({commit}) => {
      commit('ADD_BRAND')
    },
    orderRowData:({commit},data) => {
      commit('ORDER_ROW_DATA',data)
    },
    getBadgeValue:({commit},data) => {
      commit('BADGE_VALUE',data)
    },
    setOrderId: ({commit}, orderId) => {
      commit('SET_ORDER_ID', orderId)
    }
  }
};

export default app
