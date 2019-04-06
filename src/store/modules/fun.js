const person = {
  state: {
    localIdsImg: [],
    localIdsRecord: [],
  },
  mutations: {
    localIdsRecordChange(state, data) {
      state.localIdsRecord = data
    },
    localIdsImgChange(state,data){
      state.localIdsImg = data;
    }
  },
}

export default person
