
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Grannys', dish_id: '2'},
        {name: 'Texmex', dish_id: '2'},
        {name: 'New York', dish_id: '1'},
        {name: 'Just Edible', dish_id: '1'}
      ]);
    });
};
