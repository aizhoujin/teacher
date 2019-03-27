const person = {
  state: {
    classIds: '',
    personIds: ''
  },
  mutations: {
    classIdsChange(state, data) {
      state.classIds = data
    },
    personIdsChange(state,data){
      state.personIds = data;
    }
  },
}

export default person
