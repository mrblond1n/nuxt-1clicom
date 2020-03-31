import * as easings from "vuetify/es5/services/goto/easing-patterns";

export default () => {
  return {
    loading: false,
    snackbar: {
      color: "",
      message: ""
    },
    modal: false,
    option_scroll: {
      easing: "easeInOutCubic",
      easings: Object.keys(easings),
      duration: 1000,
      offset: 0
    },
    drawer: false
  };
};
