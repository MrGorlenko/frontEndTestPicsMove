import api from "../../api/products.js";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: [],
  },
  getters: {
    productList: (state) => state.productList,
  },
  mutations: {
    SET_PRODUCT_LIST(state, payload) {
      state.productList = payload;
    },
  },
  actions: {
    // данный action метод работает неверно.
    // 1 Он не должен возвращать значение напрямую, а должен совершать
    //  ctx метод (commit/dispatch)
    // 2 он вызывается как ассинхронный метод, а значит должен
    //  возвращать промис
    // getProductsList(ctx, data) {
    //   return api.getProductsList();
    // },
    getProductsList(ctx) {
      return new Promise((resolve, reject) => {
        api
          .getProductsList()
          .then((products) => {
            ctx.commit("SET_PRODUCT_LIST", products);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  modules: {},
});
