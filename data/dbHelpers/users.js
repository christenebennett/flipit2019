const knex = require("knex");
const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
};

function get() {
  return db("users");
}

function getById(id) {
  return db("users").where({ id: Number(id) });
}

function insert(users) {
  return db("users")
    .insert(users)
    .then(ids => ({ id: ids[0] }));
}

function update(id, users) {
  return db("users")
    .where("id", Number(id))
    .update(users)
    .then(ids => ({ id: ids[0] }));
}

function remove(id) {
  return db("users")
    .where("id", Number(id))
    .del();
}
