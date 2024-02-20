const {Router}=require('express');
const router=Router();

router.get('/users',(req,res)=>{
    console.log("users")
});

module.exports=router;