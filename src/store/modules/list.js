import HttpRequest from '@/utils/httpRequest.js';

export default {
  state: {
    list: [],
  },
  mutations: {
    setData(state, data) {
      state.list = data;
    },
  },
  actions: {
    getData({ commit, rootState }) {
      const url = rootState.options.domain;
      const http = new HttpRequest();
      const data = http.getModelList('/ajax/compare-models.php');
      console.log(data);
      commit('setData', data);
      return url;
    },
  },
};
