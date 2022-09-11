import Repository from '~/repositories/repository'
export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('repository', Repository(app.$axios))
}
