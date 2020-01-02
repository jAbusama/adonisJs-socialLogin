'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class User
 */
class User extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'UserHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * User's schema
   */
  static get schema() {
    return {
      username : { type: String, default: '' },
      email    : { type: String, default: '' },
      password : { type: String, default: '' }
    }
  }
}

module.exports = User.buildModel('User')
