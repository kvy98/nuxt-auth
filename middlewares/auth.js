export default function ({ store, redirect, route }) {
  const [{ auth = false }] = route.meta
  if (auth && !store.getters['auth/loggedIn']) {
    return redirect('/login')
  }
}
