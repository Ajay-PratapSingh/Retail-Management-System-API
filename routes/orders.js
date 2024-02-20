const {Router}=require('express');
const controller=require('../controllers/orders');

const router=Router();

router.get('/',controller.getAllOrders);
router.post('/',controller.createOrder);

router.get('/:id',controller.getOrderById);

router.put('/:id', controller.updateOrderById);

router.delete('/:id',controller.deleteOrderByID);

module.exports=router;