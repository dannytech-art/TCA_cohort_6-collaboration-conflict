const { createCustomers, getOneCustomer, getAllCustomers, updateCustomer, deleteCustomer } = require("../controllers/customersController")

const router = require("express").Router()


router.post("/customer",createCustomers)
router.get("/customer/:id",getOneCustomer)
router.get("/customer",getAllCustomers)
router.put("/customer/:id",updateCustomer)
router.delete("/customer/:id",deleteCustomer)

module .exports  =  router