export default function({ store, redirect }) {
  if (store.getters.user_is_set === null) {
    redirect("/partner_page");
  }
}
