const customermodel = require('../model/customersModel')

exports.getAllCustomers = async (req,res)=>{
       try {
        const customer = await customermodel.find()
        res.status(200).json({
            message: `all customer gotten successfully`,
            data: customer
        })
       } catch (error) {
        res.status(404).json({
            message: `err creating car`
        })
       }
}