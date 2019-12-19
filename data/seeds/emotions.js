
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('emotions').del()
    .then(function () {
      // Inserts seed entries
      return knex('emotions').insert([
        {id: 1, emotionName: 'emotion1'},
        {id: 2, emotionName: 'emotion2'},
        {id: 3, emotionName: 'emotion3'},
        {id: 4, emotionName: 'emotion4'}
      ]);
    });
};
