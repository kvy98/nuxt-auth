import { PENDING, SUCCESS, ERROR } from '~/constant/api-status'
const apiPendingFactory = () => {
  return {
    status: PENDING,
  }
}
const apiSuccessFactory = (data) => {
  return {
    status: SUCCESS,
    data,
  }
}
const apiErrorFactory = (error, errorMessage = '') => {
  return {
    status: ERROR,
    error,
    errorMessage,
  }
}
export { apiErrorFactory, apiPendingFactory, apiSuccessFactory }
