exports.up = function(knex) {
    return knex.schema.createTable("emotions", function(emotions) {
      emotions.increments("id");
      emotions
        .string("emotionName", 128)
        .notNullable()
        .unique();
      
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("emotions");
  };
  