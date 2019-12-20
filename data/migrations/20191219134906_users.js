exports.up = function(knex) {
  return knex.schema.createTable("users", function(users) {
    users.increments("id");
    users
      .string("emotionBefore", 128)
      .references("emotionName")
      .inTable("emotions");
    users
      .string("emotionAfter", 128)
      .references("emotionName")
      .inTable("emotions");
    users.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
