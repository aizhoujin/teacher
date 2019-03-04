const user = {
  state: {
    userInfo: null,
  },
  mutations: {
    getUserInfo(state,data){
      state.userInfo = data;
    }
  },
  actions: {
    // 根据用户名登录

  }
}

export default user
