export const strict = false;

export const actions = {
  nuxtServerInit({ dispatch }) {
    console.log("пошел нахер");

    // console.log(dispatch("user/auto_user_login", { root: true }));
  }
};
