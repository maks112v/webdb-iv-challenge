const db = require("../data/dbConfig.js");

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};

function getDishes() {
  return db("dishes");
}

function addDish(dish) {
  return db("dishes").insert(dish);
}

function getDish(id){
  return db('dishes as d').join('recipe as r','d.id', '=', 'r.dish_id').where('d.id', id)
}

function getRecipes(){
  return db('recipes as r').join('dish as d','d.id', '=', 'r.dish_id')
}

function addRecipe(recipe){
  return db('recipes').insert(recipe)
}
