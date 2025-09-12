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