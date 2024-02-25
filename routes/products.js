const {Router}=require('express');
const gemstonecontroller=require('../controllers/gemstones');
const silvercontroller=require('../controllers/silver');
const diamondcontroller=require('../controllers/diamond');
const { checkToken } = require('../middleware/checktoken');
const { checkRole } = require('../middleware/checkrole');

const router=Router();

// Gemstone routes
router.get('/gemstones/:id',gemstonecontroller.getGemstonebyId);
router.put("gemstones/:id",checkToken,checkRole(["admin"]),gemstonecontroller.updateGemstonebyId);
router.get("/gemstones",gemstonecontroller.getAllGemstones);
router.post("/gemstones",checkToken,checkRole(["admin"]),gemstonecontroller.addGemstone);

// Silver routes
router.get("/silver/:id",silvercontroller.getSilverbyId);
router.put("silver/:id",checkToken,checkRole(["admin"]),silvercontroller.updateSilverbyId);
router.get("/silver",silvercontroller.getAllSilvers);
router.post("/silver",checkToken,checkRole(["admin"]),silvercontroller.addSilver);

// Diamond routes
router.get('/diamonds/:id',diamondcontroller.getDiamondbyId);
router.put("diamonds/:id",checkToken,checkRole(["admin"]),diamondcontroller.updateDiamondbyId);
router.get("/diamonds",diamondcontroller.getAllDiamonds);
router.post("/diamonds",checkToken,checkRole(["admin"]),diamondcontroller.addDiamond);

module.exports=router;