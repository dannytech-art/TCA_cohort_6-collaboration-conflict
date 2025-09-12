const mongoose = require('mongoose')
const carmodel = require('../model/carBrandsModel')

exports.createCars = async (req,res)=>{
    try {
        const { carBrand, carModel, dateReleased, customerName, customerIds} = req.body
        const carExist = carmodel.findOne({carModel, carBrand})
        if (carExist) {
            
        }

    } catch (error) {
        res.status(404).json({
            message: `err creating car`
        })
    }
}