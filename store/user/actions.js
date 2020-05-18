class User {
  constructor(sid) {
    this.sid = sid;
  }
}

export default {
  async user_login({ commit }, user) {
    let auth_url = `${process.env.AUTH_URL}/login/`;
    try {
      let resp = await this.$axios.post(auth_url, user);
      if (resp.data.data != null) {
        localStorage.sid = resp.data.data.SID;
        commit("set_user", new User(resp.data.data.SID));
        // commit("shared/set_loading", false, { root: true });
        return resp.data.data.SID;
      } else {
        let msg;
        switch (resp.data.request.code) {
          case 3 || 4:
            msg = "Не правильный логин или пароль";
            break;

          default:
            msg = "Ошибка авторизации с кодом " + resp.data.request.code;
            break;
        }

        commit(
          "shared/set_snackbar",
          {
            message: msg,
            color: "error"
          },
          { root: true }
        );
        return false;
      }
    } catch (error) {
      commit(
        "shared/set_snackbar",
        { message: error.message, color: "error" },
        { root: true }
      );

      throw error;
    }
  },
  async auto_user_login({ commit }) {
    if (!localStorage.sid) return;

    let authStatus_url = `${process.env.AUTH_URL}/status/`;
    let dataForCheck = {
      sid: localStorage.sid,
      update: true
    };
    try {
      let resp = await this.$axios.post(authStatus_url, dataForCheck);
      if (resp.data.request.code !== 0) {
        return false;
      } else {
        process.env.ADMINS.split(",").map(login => {
          if (login === resp.data.data.login.toLowerCase()) {
            // установка супер юзера
            commit("set_super_user", new User(localStorage.sid));
          }
        });
        commit("set_user", new User(localStorage.sid));
        return true;
      }
    } catch (error) {
      commit(
        "shared/set_snackbar",
        { message: error.message, color: "error" },
        { root: true }
      );
      throw error;
    }
  },
  async get_user_info({ commit }, payload) {
    let authStatus_url = `${process.env.AUTH_URL}/status/`;
    let dataForCheck = {
      sid: payload,
      update: true
    };
    try {
      let resp = await this.$axios.post(authStatus_url, dataForCheck);
      if (resp.data.request.code !== 0) {
        commit("shared/set_loading", false, { root: true });
      } else {
        process.env.ADMINS.split(",").map(login => {
          if (login === resp.data.data.login.toLowerCase()) {
            // установка супер юзера
            commit("set_super_user", new User(localStorage.sid));
          }
        });
        commit("set_user", new User(localStorage.sid));
      }
    } catch (error) {
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
    if (window.location.pathname === '/auth_partner') this.$router.push('/partner_page');


    localStorage.removeItem("sid");
    commit("set_super_user", null);
    commit("set_user", null);
  }
};
