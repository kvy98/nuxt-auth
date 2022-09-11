const externalLoginPath = '/social-login'
const localLoginPath = '/login'

export default (axios) => ({
  login(email, password) {
    return axios.$post(localLoginPath, { email, password })
  },
  externalLogin(authStrategy, accessToken) {
    axios.$post(externalLoginPath, {
      access_token: accessToken,
      social: authStrategy,
    })
  },
})
