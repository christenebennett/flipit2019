
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('emotions').del()
    .then(function () {
      // Inserts seed entries
      return knex('emotions').insert([
        {id: 1, emotionName: 'content'},
        {id: 2, emotionName: 'unsure'},
        {id: 3, emotionName: 'foggy'},
        {id: 4, emotionName: 'stressed'},
        {id: 5, emotionName: 'sleepy'}
      ]);
    });
};
