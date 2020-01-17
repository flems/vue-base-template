// import httpRequest from '@/utils/http.js';

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
      commit('setData');
      return url;
    },
  },
};
