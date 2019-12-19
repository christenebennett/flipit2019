exports.up = function(knex) {
    return knex.schema.createTable("users", function(users) {
      users.increments("id");
      users
        .string("emotionName", 128)
        .notNullable()
        .unique();
      
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
  };
  