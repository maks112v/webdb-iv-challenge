const db = require('../data/dbConfig.js');

module.exports = {
  getDishes,
  findById,
};

function getDishes() {
  return db('dishes');
}

function addDish(dish) {
  return db('dishes')
    .where({ id })
    .first();
}
