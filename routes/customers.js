const {Router}=require('express');
const controller=require('../controllers/customers');
const { checkToken } = require('../middleware/checktoken');
const { checkRole } = require('../middleware/checkrole');
const router=Router();

router.get('/:id',checkToken,checkRole(["employee","admin"]),controller.getCustomerbyId);
router.put("/:id",checkToken,checkRole(["employee","admin"]),controller.updateCustomerbyId);
router.get("/",checkToken,checkRole(["employee","admin"]),controller.getCustomers);
router.post("/",checkToken,checkRole(["employee","admin"]),controller.addCustomer);


module.exports=router;