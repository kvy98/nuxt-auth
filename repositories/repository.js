import AuthRepository from './auth'
export default (axios) => {
  return {
    auth: AuthRepository(axios),
  }
}
