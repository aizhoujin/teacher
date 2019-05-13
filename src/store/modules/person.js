const person = {
  state: {
    classIds: '',
    personIds: '',
    noticeNames: [],
    classPersonList: [],
    noticeTiceText: {
      title: '',
      content: '',
    }
  },
  mutations: {
    // 班级id
    classIdsChange(state, data) {
      state.classIds = data
    },

    // 人员id
    personIdsChange(state, data) {
      state.personIds = data;
    },

    // 选中name
    noticeNamesChange(state, data) {
      state.noticeNames = data;
    },

    // 所有人员选中状态切换
    classPersonListChange(state, data) {
      state.classPersonList = data;
    },

    // 发布通知 标题和正文 变化
    noticeTiceTextChange(state, data) {
      state.noticeTiceText = data;
    },

    clearState(state) {
      state.noticeTiceText.title = '';
      state.noticeTiceText.content = '';
      state.classIds = '';
      state.personIds = '';
      state.noticeNames = [];
      state.classPersonList = [];
    }
  },
}

export default person
