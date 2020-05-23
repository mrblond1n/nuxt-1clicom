<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      :max-width="modal.name === 'new_info' || modal.name === 'pdf' ? '1000' :'390'"
      @click:outside="close(false)"
      @keydown.esc="close(false)"
    >
      <app-sign-in-form v-if="modal.name === 'point_entry'" :modal_info="modal"></app-sign-in-form>
      <app-new-info v-else-if="modal.name === 'new_info'" :new_info="modal.info"></app-new-info>
      <pdf v-else-if="modal.name === 'pdf'" :src="require(`@/static/files/${modal.src}`)" />
      <app-simple-form v-else :modal_info="modal"></app-simple-form>
    </v-dialog>
  </v-row>
</template>

<script>
import appSimpleForm from "./Simple_form";
import appSignInForm from "./SignIn_form";
import appNewInfo from "./New_info";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    appSimpleForm,
    appSignInForm,
    appNewInfo
  },
  data() {
    return {
      dialog: true
    };
  },
  computed: {
    ...mapState("shared", ["modal"])
  },
  methods: {
    ...mapActions({ close: "shared/show_modal" })
  }
};
</script>