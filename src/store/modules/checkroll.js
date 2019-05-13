const checkroll = {
  state: {
    clashData: {},
    callData: {}
  },
  mutations: {
    // 冲突数据
    clashDateChange(state, data) {
      state.clashData = data;
    },
    callDataChange(state, data) {
      state.callData = data;
    }
  },
}

export default checkroll
