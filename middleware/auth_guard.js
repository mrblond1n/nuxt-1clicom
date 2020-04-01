export default function({ store, redirect }) {
  if (store.state.user.user === null) {
    return redirect("/partner_page");
  }
}
