const customermodel = require("../model/customersModel")

exports.createCustomers = async (req,res)=>{

  try {
    const {customerName,email,phoneNumber} = req.body
    const emailExist = await customermodel.findOne({email:email.toLowerCase()})
    const customerNameExist = await customermodel.findOne({customerName:customerName.toLowerCase()})
    if (emailExist) {
      res.status(400).json({
        message:`${email} already exist`
      })
    }
    if (customerNameExist) {
      res.status(400).json({
        message:`${customerName} already exist`
      })
    }
    const addCustomer = new customermodel({
      customerName:customerName.toLowerCase(),
      email:email.toLowerCase(),
      phoneNumber
    })
    await addCustomer.save()

    res.status(201).json({
      message:"customer successfully created",
      data:addCustomer
    })
  } catch (error) {
    res.status(500).json({
      message:error.message
    })
  }
}
exports.getOneCustomer = async (req,res)=>{

  try {
    const {id} = req.params;
  const customer = await customermodel.findById(id)
  if (!customer) {
    res.status(404).json({
      message:"customer does not  exist"
    })
  }
  res.status(200).json({
    message:"one customer successfully",
    data:customer
  })
  } catch (error) {
    res.status(500).json({
      message:error.message
    })
  }
 }
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
    exports.updateCustomer = async (req,res)=>{
      try {
        const {id} = req.params
        const {customerName,email,phoneNumber}= req.body
        const updatedcustomer = await customermodel.findById(id)
        if (!updatedcustomer) {
          res.status(400).json({
            message:"updatedcustomer does not exist"
          })
        }
        const data= {
           customerName,
           email,
           phoneNumber
        }
        const customerupdated = await customermodel.findByIdAndUpdate(id,data,{new:true});

        res.status(200).json({
          message:"updatedcustomer successfully",
          data:customerupdated
        })
      } catch (error) {
        res.status(500).json({
          message:error.message
        })
      }
    }
exports.deleteCustomer = async (req, res) => {
    try{
        const {id} = req.params;

        const customer  = await customerModel.findById(id);
        if (!customer){
            res.status(404).json({
                message: " customer not found!"
            });
        }

        await customer.findByIdAndDelete(id);

        res.status(200).json({
            message: " customer deleted successfully"
        });

    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}