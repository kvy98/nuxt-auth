export default function ({ store, redirect, route }) {
  // If the user is not authenticated
  // console.log(store)
  console.log(store.getters['auth/loggedIn'])
  if (route.meta.auth && !store.getters['auth/loggedIn']) {
    return redirect('/login')
  }
}
