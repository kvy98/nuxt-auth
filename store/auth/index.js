import { LOGIN, LOGOUT, SOCIAL_LOGIN } from '../../constant/action/auth'
import { PENDING, IDLE, SUCCESS, ERROR } from '~/constant/api-status'
import { withAsync } from '~/helpers/api/withAsync'
import {
  apiErrorFactory,
  apiPendingFactory,
  apiSuccessFactory,
} from '~/helpers/api/apiFactory'

// const LOGIN_STRATEGY = Object.freeze({
//   LOCAL: 'LOCAL',
//   FACEBOOK: 'FACEBOOK',
//   GOOGLE: 'GOOGLE',
// })
const SET_AUTH = 'SET_AUTH'
const SET_AUTH_DEFAULT = 'SET_AUTH_DEFAULT'

export const state = () => ({
  data: {
    isAuth: false,
  },
  error: null,
  errorMessage: '',
  fetchingStatus: IDLE,
})

export const getters = {
  loggedIn(state) {
    return state.data.isAuth
  },
}

export const mutations = {
  [SET_AUTH](state, payload) {
    switch (payload.status) {
      case PENDING:
        // Reset the error if it was set before
        state.error && (state.error = null)
        state.error && (state.errorMessage = '')
        break
      case SUCCESS:
        {
          const { id, accessToken } = payload.data
          state.data.isAuth = true
          this.$cookies.set('uid', id)
          this.$cookies.set('access_token', accessToken)
          this.$axios.setToken(accessToken, 'Bearer')
          this.$route.replace('/account')
        }
        // API call was successful and we have data
        break
      case ERROR:
        // There was an error during the API call
        state.error = payload.error
        state.errorMessage = payload.errorMessage || ''
        break
    }
    // Update the status
    state.fetchingStatus = payload.status
  },

  [SET_AUTH_DEFAULT](state) {
    state.data.isAuth = false
    this.$cookies.remove('uid')
    this.$cookies.remove('access_token')
    this.$axios.setToken(false)
  },
}

export const actions = {
  async [LOGIN]({ commit }, { email, password }) {
    commit(SET_AUTH, apiPendingFactory())

    const { response, error } = await withAsync(
      this.$repository.auth.login,
      email,
      password
    )
    if (error) {
      // Error status
      commit(SET_AUTH, apiErrorFactory(error, 'Oops, there was a problem'))
      return
    }
    // Success status
    commit(SET_AUTH, apiSuccessFactory(response.data))
  },
  [LOGOUT]({ commit }) {
    commit(SET_AUTH_DEFAULT)
  },
  [SOCIAL_LOGIN]({ commit }) {},
}
