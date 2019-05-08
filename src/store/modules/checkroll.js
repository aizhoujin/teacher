const checkroll = {
  state: {
    clashData: {}
  },
  mutations: {
    clashDateChange(state, data) {
      console.log(data);
      state.clashData = data;
    }
  },
}

export default checkroll
