const carBrandmodel = require('../model/carBrandsModel')
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
        
        const addCar = new carBrandmodel(
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