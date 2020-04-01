import clear_from_tag from "~/library/clear_text_field";

export default {
  set_main_part_access_form({ commit }, payload) {
    commit("set_main_part_access_form", clear_from_tag(payload));
  },
  set_extra_part_access_form({ commit }, payload) {
    commit("set_extra_part_access_form", clear_from_tag(payload));
  }
};
