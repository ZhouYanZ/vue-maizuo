import axios from "axios";
import router from "@/router";
import { Toast } from "vant";

const state = {
  userInfo: null
};

const getters = {};

const mutations = {
  setUserInfo(state, payload) {
    state.userInfo = payload.info;
  }
};

const actions = {
  /**
   * 登录
   */
  handleLogin(context, payload) {
    Toast.loading({ duration: 0, mask: true, message: "加载中..." });
    axios.post("http://localhost:9090/sign-in", payload).then(response => {
      let res = response.data;

      if (res.code === 0) {
        // 登录成功
        context.commit({ type: "setUserInfo", info: res.data });
        // 跳转 注意不能使用 this.$router
        router.push("/center");
      } else {
        // 登录失败
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
