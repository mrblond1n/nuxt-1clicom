class User {
  constructor(sid) {
    this.sid = sid;
  }
}

export default {
  async user_login({ commit }, user) {
    // console.log(some);

    let auth_url = `${process.env.AUTH_URL}/login/`;
    // let auth_url = `https://auth.1clicom.ru/auth/login/`;

    commit(
      "shared/clear_snackbar",
      { message: null, color: null },
      { root: true }
    );

    commit("shared/set_loading", true, { root: true });
    try {
      let resp = await this.$axios.post(auth_url, user);
      console.log(resp.data);

      if (resp.data.data != null) {
        localStorage.sid = resp.data.data.SID;
        commit("user/set_user", new User(resp.data.data.SID), { root: true });
        commit("shared/set_loading", false, { root: true });
        return resp.data.data.SID;
      } else {
        if (resp.data.request.code === 3 || resp.data.request.code === 4) {
          commit(
            "shared/set_snackbar",
            {
              message: "Не правильный логин или пароль",
              color: "error"
            },
            { root: true }
          );
        } else {
          commit(
            "shared/set_snackbar",
            {
              message: "Ошибка авторизации с кодом " + resp.data.request.code
            },
            { root: true }
          );
        }
        commit("shared/set_loading", false, { root: true });
        return false;
      }
    } catch (error) {
      // commit("setLoading", false);
      // commit("setSnackbar", { message: error.message, color: "error" });
      console.log("asdasdLKDALSLASLK");

      throw error;
    }
  },
  // async autoLoginUser({ commit }) {
  //   if (!localStorage.sid) return;

  //   let authStatus_url = `${process.env.VUE_APP_AUTH_URL}/status/`;
  //   commit("clearSnackbar", { message: null, color: null });
  //   commit("setLoading", true);
  //   let dataForCheck = {
  //     sid: localStorage.sid,
  //     update: true
  //   };
  //   try {
  //     let resp = await Vue.http.post(authStatus_url, dataForCheck);
  //     if (resp.data.request.code !== 0) {
  //       console.log("autologin failed");
  //       commit("setLoading", false);
  //     } else {
  //       process.env.VUE_APP_ADMINS.split(",").map(login => {
  //         if (login === resp.data.data.login.toLowerCase()) {
  //           // установка супер юзера
  //           commit("set_super_user", new User(localStorage.sid));
  //         }
  //       });
  //       commit("set_user", new User(localStorage.sid));
  //       commit("setLoading", false);
  //     }
  //   } catch (error) {
  //     commit("setLoading", false);
  //     commit("setSnackbar", { message: error.message, color: "error" });
  //     throw error;
  //   }
  // },
  async get_user_info({ commit }, payload) {
    console.log("get_info");

    let authStatus_url = `${process.env.AUTH_URL}/status/`;
    commit(
      "shared/clear_snackbar",
      { message: null, color: null },
      { root: true }
    );
    commit("shared/set_loading", true, { root: true });
    let dataForCheck = {
      sid: payload,
      update: true
    };
    try {
      let resp = await Vue.http.post(authStatus_url, dataForCheck);
      if (resp.data.request.code !== 0) {
        commit("shared/set_loading", false, { root: true });
      } else {
        process.env.ADMINS.split(",").map(login => {
          if (login === resp.data.data.login.toLowerCase()) {
            // установка супер юзера
            commit("user/set_super_user", new User(localStorage.sid));
          }
        });
        commit("user/set_user", new User(localStorage.sid), { root: true });
        commit("shared/set_loading", false, { root: true });
      }
    } catch (error) {
      commit("shared/set_loading", false, { root: true });
      commit(
        "shared/set_snackbar",
        { message: error.message, color: "error" },
        { root: true }
      );
      throw error;
    }
  },
  user_logout({ commit }) {
    let authLogout_url = `${process.env.AUTH_URL}/logout/`;
    this.$axios.post(authLogout_url, localStorage.sid);
    localStorage.removeItem("sid");
    commit("user/set_super_user", null, { root: true });
    commit("user/set_user", null), { root: true };
  }
};
