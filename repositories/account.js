const accountPath = '/account'

export default (axios) => ({
  getInfo(id) {
    return axios.$get(accountPath, {})
  },
  changeName(firstName, lastName) {},
  changePassword(currentPassword, newPassword) {},
  updateAddress(shipping, billing) {},
  updateBilling(billing, userID, billingID) {},
  updateShipping(shipping, userID, shippingID) {},
})
