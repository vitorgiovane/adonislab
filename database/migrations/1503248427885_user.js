'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.engine('InnoDB')
      table.increments('id').notNullable()
      table.string('name', 80).collate('utf8_unicode_ci').notNullable()
      table.string('email', 80).collate('utf8_unicode_ci').notNullable().unique()
      table.date('birthday').notNullable()
      table.integer('sex').unsigned().notNullable()
      table.string('password', 60).collate('utf8_unicode_ci').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
