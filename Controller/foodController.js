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
        if (!foods) {
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
        console.log(req.params.id)
        const food = await Foods.findById(req.params.id);
        if (!food) {
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
        res.status(500).json({
            message: error.message
        })
    }
}

const getFoodByCategory = async (req, res) => {
    try {
        // const foodCategory = req.params.category
        // console.log(foodCategory);
        const food = await Foods.find({
            category: req.params.category
        })

        if (!food) {
            res.status(404).json({
                success: false,
                message: 'Food not found'
            })
        }

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




module.exports = {
    createFood,
    getAllFoods,
    getFoodById,
    getFoodByCategory
}