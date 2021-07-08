exports.up = function (knex) {
  return knex.schema.createTable(('table'), (table) => {

  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('table')
}
