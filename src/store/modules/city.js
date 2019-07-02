import axios from "axios";
import { Toast } from "vant";

const state = {
  cities: [] // 城市列表数据
};

const getters = {
  cityList(state) {
    let result = [];
    state.cities.forEach(city => {
      let py = city.pinyin.charAt(0).toUpperCase();
      let index = result.findIndex(item => item.py === py);
      if (index > -1) {
        result[index].list.push(city);
      } else {
        let obj = {
          py,
          list: [city]
        };
        result.push(obj);
      }
    });
    result = result.sort((a, b) => {
      return a.py.charCodeAt() - b.py.charCodeAt();
    });
    return result;
  }
};

const mutations = {
  setCities(state, payload) {
    state.cities = payload.list;
  }
};

const actions = {
  getCities({ commit }) {
    Toast.loading({ duration: 0, mask: true, message: "加载中..." });
    axios
      .get("https://m.maizuo.com/gateway?k=2498439", {
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"156194886142949673108"}',
          "X-Host": "mall.film-ticket.city.list"
        }
      })
      .then(response => {
        let res = response.data;
        if (res.status === 0) {
          commit({ type: "setCities", list: res.data.cities });
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
