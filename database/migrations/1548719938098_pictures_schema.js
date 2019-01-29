'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PicturesSchema extends Schema {
  up () {
    this.create('pictures', (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable()
      table.string('url', 200).collate('utf8_unicode_ci').notNullable()
      table.timestamps()

      table.index(['user_id'], 'uspi_user_id')

      table.foreign('user_id', 'uspi_user_id')
        .references('id').on('users')
        .onDelete('no action')
        .onUpdate('no action')
    })
  }

  down () {
    this.drop('pictures')
  }
}

module.exports = PicturesSchema
