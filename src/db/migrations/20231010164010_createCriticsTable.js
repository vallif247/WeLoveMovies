
exports.up = function (knex) {
    return knex.schema.createTable('critics', (table) => {
    table.increments('critic_id').primary();
    table.string('preferred_name', 255);
    table.string('surname', 255);
    table.string('organization_name', 255);
    table.timestamps(true, true);
  });
  };
  
exports.down = function(knex) {
  return knex.schema.dropTable('critics')
};
