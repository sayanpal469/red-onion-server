const { createFood, getAllFoods, getFoodById } = require('../Controller/foodController');

const Routes = require('express').Router();

Routes.route('/food/new').post(createFood);
Routes.route('/food').get(getAllFoods);
Routes.route('/food/:id').get(getFoodById);


module.exports = Routes;