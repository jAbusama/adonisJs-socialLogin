'use strict'

const { Command } = require('@adonisjs/ace')
const User = use('App/Models/User')
const Hash = use('Hash')

class AddUser extends Command {
  static get signature() {
    return 'add:user'
  }

  static get description() {
    return 'Tell something helpful about this command'
  }

  async handle(args, options) {
    const username = await this.ask('Username: ')
    const email = await this.ask('Email Address: ')
    const password = await this.ask('Password: ')

    await User.create({
      username,
      email,
      password : await Hash.make(password)
    })

    this.info('Successfully added User')
  }
}

module.exports = AddUser
