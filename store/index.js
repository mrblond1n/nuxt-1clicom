export const strict = false;

export const actions = {
  async send({ commit }, payload) {
    let user_control_url = `${process.env.USER_CONTROL}`;
    let send_mail_url = `${process.env.MAIL_URL}`;
    try {
      let res = await this.$axios.post(
        payload.task === "add" || payload.task === "update"
          ? user_control_url
          : send_mail_url,
        payload.task === "add" || payload.task === "update"
          ? payload.formData
          : payload
      );
      if (res.data.code === 0 || res.data.request.code === 0) {
        commit("shared/set_snackbar", {
          message: res.data.msg || "Операция выполнена",
          color: "success"
        });
      } else {
        commit("shared/set_snackbar", {
          message: res.data.msg || res.data.request.message,
          color: "error"
        });
      }
    } catch (error) {
      commit("shared/set_snackbar", {
        message: "Что то пошло не так, попробуйте позже",
        color: "error"
      });
    }
  }
};
