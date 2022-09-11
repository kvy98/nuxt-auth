const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const SOCIAL_LOGIN = 'SOCIAL_LOGIN'
const actionPath = (action) => {
  return `auth/${action}`
}
export { LOGIN, LOGOUT, SOCIAL_LOGIN, actionPath }
