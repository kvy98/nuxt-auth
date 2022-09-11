export default function ({ store, redirect, route }) {
  // If the user is not authenticated
  if (route.meta.auth && !store.state.auth.authenticated) {
    return redirect('/login')
  }
}
