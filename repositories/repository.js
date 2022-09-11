import Auth from './auth'
export default (axios) => {
  return {
    auth: Auth(axios),
  }
}
