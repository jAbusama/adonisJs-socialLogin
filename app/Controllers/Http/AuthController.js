'use strict'

const User = use('App/Models/User')
const Hasah = use('Hash')

class AuthController {
  async redirect({ ally, request }) {
    await ally.driver('facebook').redirect()
  }

  async callback({ ally, response }) {
    try {
      const fbUser = await ally.driver('facebook').getUser()
      // user details to be saved
      const userDetails = {
        email        : fbUser.getEmail(),
        token        : fbUser.getAccessToken(),
        login_source : 'facebook'
      }

      // search for existing user
      const whereClause = {
        email : fbUser.getEmail()
      }
      await User.create({
        username : fbUser.getName(),
        email    : fbUser.getEmail()
      })
      return 'Logged in'
    } catch (error) {
      return 'Unable to authenticate. Try again later'
    }
  }
}

module.exports = AuthController
