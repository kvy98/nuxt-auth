export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  nuxtServerInit() {
    console.log(this.$cookies.get('token', 1))
  },
  DEMO() {
    this.$cookies.set('token', 1)
  },
}
