export default {
  async user_login({ commit }, user) {
    console.log(process.env);

    // let auth_url = `${process.env.VUE_APP_AUTH_URL}/login/`;
    let auth_url = `https://auth.1clicom.ru/auth/login/`;
    // commit("clearSnackbar", { message: null, color: null });
    // commit("setLoading", true);
    try {
      let resp = await this.$axios.post(auth_url, user);
      console.log(resp);

      if (resp.data.data != null) {
        // localStorage.sid = resp.data.data.SID;
        // commit("set_user", new User(resp.data.data.SID));
        // commit("setLoading", false);
        // return resp.data.data.SID;
      } else {
        // if (resp.data.request.code === 3 || resp.data.request.code === 4) {
        //   commit("setSnackbar", {
        //     message: "Не правильный логин или пароль",
        //     color: "error"
        //   });
        // } else {
        //   commit("setSnackbar", {
        //     message: "Ошибка авторизации с кодом " + resp.data.request.code
        //   });
        // }
        // commit("setLoading", false);
        // return false;
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
  // async get_user_info({ commit }, payload) {
  //   console.log("get_info");

  //   let authStatus_url = `${process.env.VUE_APP_AUTH_URL}/status/`;
  //   commit("clearSnackbar", { message: null, color: null });
  //   commit("setLoading", true);
  //   let dataForCheck = {
  //     sid: payload,
  //     update: true
  //   };
  //   try {
  //     let resp = await Vue.http.post(authStatus_url, dataForCheck);
  //     if (resp.data.request.code !== 0) {
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
  user_logout({ commit }) {
    let authLogout_url = `${process.env.VUE_APP_AUTH_URL}/logout/`;
    this.$axios.post(authLogout_url, localStorage.sid);
    localStorage.removeItem("sid");
    commit("set_super_user", null);
    commit("set_user", null);
  }
};
