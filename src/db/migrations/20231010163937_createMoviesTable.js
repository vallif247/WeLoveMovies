
exports.up = function(knex) {
    return knex.schema.createTable('movies', (table) => {
        table.increments('movie_id').primary();
        table.string('title', 255).notNullable(); 
        table.integer('runtime_in_minutes'); 
        table.string('rating', 10);  
        table.text('description'); 
        table.string('image_url', 255); 
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('movies')
};
