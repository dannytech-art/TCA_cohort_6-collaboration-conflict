const carmodel = require('../model/carBrandsModel')
const customermodel = require('../model/customersModel')


exports.createCars = async (req,res)=>{
    try {
        const { carBrand, carModel, dateReleased} = req.body
        const { id } = req.params
        const customer = customermodel.findOne(id)
        if (!customer) {
            return res.status(404).json({
            message:"customer does not exist"
      })
        }
        
        const addCar = new carmodel(
            { 
                carBrand,
                carModel, 
                dateReleased,
                id, 
                customerName: customer.customerName,
                
            }
        )

        customer.carIds.push(addCar._id)

        await customer.save()
        await addCar.save()
    res.status(201).json({
        message: `successfully created car`,
        data: addCar
    })

    } catch (error) {
        res.status(500).json({
            message: `err creating car`
        })
    }
}
exports.getAllCars = async (req,res)=>{
    try {
        const getAll = carmodel.find()
        res.status(200).json({
            message: `kindly find below cars`,
            data: getAll
        })
    } catch (error) {
        res.status(500).json({
            message: `err creating car`,
            data: error.message
        })
    }
}
exports.getOneCar = async (req,res)=>{
    try {
        const { id } = req.params
        const cars = carmodel.findOne()
        if (!cars) {
            res.status(404).json({
                message: `car not found`
            })
        }
        const car = await carmodel.findById(id)
        res.status(200).json({
            message: `kindly find below cars`,
            data: car
        })

    } catch (error) {
        res.status(500).json({
            message: `err creating car`,
            data: error.message
        })
    }
}
exports.updateCar = async (req, res) => {
  const { carId } = req.params
  const data = req.body
  try {
    const car = await carmodel.findById(carId)
    if (!car) {
      res.status(404).json({
        message: 'car not found',
      })
    }

    const updatedcar = await carmodel.findByIdAndUpdate(carIdId, { ...data }, { new: true })

    res.status(200).json({
      message: 'car updated successfully',
      data: updatedcar,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error updating car',
      error: error.message,
    })
  }
}
exports.deletecar = async (req, res) => {
  const { carId } = req.params

  try {
    const car = await carmodel.findById(carId)
    if (!car) {
      res.status(404).json({
        message: 'car not found',
      })
    }

    const deletedcar = await carmodel.findByIdAndDelete(carId)

    res.status(200).json({
      message: 'car deleted successfully',
      data: deletedcar,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting car',
      error: error.message,
    })
  }
}