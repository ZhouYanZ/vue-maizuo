import axios from "axios";
import { Toast } from "vant";

const state = {
  bannerList: [],
  filmList: [],
  curFilmType: 0 // 当前影片的类型
};

const getters = {};

const mutations = {
  setBannerList(state, payload) {
    state.bannerList = payload.list;
  },

  setFilmList(state, payload) {
    state.filmList = payload.list;
  },

  setCurFilmType(state, payload) {
    state.curFilmType = payload.filmType;
  }
};

const actions = {
  getBannerList({ commit }) {
    axios
      .get("https://m.maizuo.com/gateway?type=2&cityId=440300&k=7580234", {
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"156194886142949673108"}',
          "X-Host": "mall.cfg.common-banner"
        }
      })
      .then(response => {
        let res = response.data;
        if (res.status === 0) {
          // 成功
          commit({
            type: "setBannerList",
            list: res.data
          });
        } else {
          // 失败 TODO
          alert(res.msg);
        }
      });
  },

  getFilmList({ commit, state }) {
    // 请求之前， loading
    Toast.loading({ duration: 0, mask: true, message: "加载中..." });
    axios
      .get("https://m.maizuo.com/gateway", {
        params: {
          cityId: 440300,
          pageNum: 1,
          pageSize: 10,
          // type = 1 正在热映
          // type = 2 即将上映
          type: state.curFilmType === 0 ? 1 : 2,
          k: 66161
        },
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"156194886142949673108"}',
          "X-Host": "mall.film-ticket.film.list"
        }
      })
      .then(response => {
        let res = response.data;
        if (res.status === 0) {
          commit({
            type: "setFilmList",
            list: res.data.films
          });
        } else {
          Toast(res.msg);
        }
        Toast.clear();
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
