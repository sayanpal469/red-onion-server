const Foods = require('../Model/foodSchema');

const createFood = async (req, res) => {
    try {
        const food = await Foods.create(req.body);
        res.status(201).json({
            success: true,
            food
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const getAllFoods = async (req, res) => {
    try {
        const foods = await Foods.find()
        if(!foods){
            res.status(404).json({
                success: false,
                message: 'foods not found'
            })
        }

        res.status(201).json({
            success: true,
            foods
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getFoodById = async (req, res) => {
    try {
        const food = await Foods.findById(req.params.id);
        if(!food) {
            res.status(404).json({
                success: false,
                message: 'food not found'
            })
        }

        res.status(201).json({
            success: true,
            food
        })
    } catch (error) {
        
    }
}




module.exports = {
    createFood,
    getAllFoods,
    getFoodById
}