const { createFood, getAllFoods, getFoodById, getFoodByCategory } = require('../Controller/foodController');

const Routes = require('express').Router();

Routes.route('/food/new').post(createFood);
Routes.route('/food').get(getAllFoods);
Routes.route('/food/:id').get(getFoodById);


 Routes.route('/food/:category').get(getFoodByCategory);


module.exports = Routes;