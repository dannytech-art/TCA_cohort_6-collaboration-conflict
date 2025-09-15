const { createCars, getOneCar, getAllCars, updateCar, deletecar } = require("../controllers/carBrandsController")

const router = require("express").Router()

router.post("/car/:id", createCars)
router.get('/car/:carId', getOneCar)
router.get('/cars', getAllCars)
router.patch('/car/:carId', updateCar)
router.delete('/car/:carId', deletecar)

module.exports = router