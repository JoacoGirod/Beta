var express = require('express');
var router = express.Router();
const controller= require("../controllers/controller")
/* GET home page. */

router.get("/product/details/:id/:category?", controller.vistas2)

router.get("/editar/:id", controller.edit)
router.post("/editar/:id",controller.update2)

router.get("/asesinar/:id",controller.kill)
router.post("/asesinar/:id",controller.definetelykill)

router.get("/products/crear/",controller.create)
router.post("/products/crear/",controller.create2)

router.get("/products", controller.vistas3 )

router.get('/', controller.vistas)
module.exports = router;
