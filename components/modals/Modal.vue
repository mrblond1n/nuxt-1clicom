<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      :max-width="modal.name === 'new_info' || modal.name === 'pdf' ? '1000' :'390'"
      @click:outside="close"
      @keydown.esc="close"
    >
      <app-sign-in-form v-if="modal.name === 'point_entry'" :modal_info="modal"></app-sign-in-form>
      <app-new-info v-else-if="modal.name === 'new_info'" :new_info="modal.info"></app-new-info>
      <app-pdf v-else-if="modal.name === 'pdf'" :info="modal"></app-pdf>
      <app-simple-form v-else :modal_info="modal"></app-simple-form>
    </v-dialog>
  </v-row>
</template>

<script>
import appSimpleForm from "./Simple_form";
import appSignInForm from "./SignIn_form";
import appPdf from "./PDF";
import appNewInfo from "./New_info";
export default {
  components: {
    appSimpleForm,
    appSignInForm,
    appNewInfo,
    appPdf
  },
  data() {
    return {
      dialog: true
    };
  },
  computed: {
    modal() {
      return this.$store.state.shared.modal;
    }
  },
  methods: {
    close() {
      this.$store.dispatch("shared/show_modal", false);
    }
  }
};
</script>