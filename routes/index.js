var express = require('express');
var router = express.Router();
const controller= require("../controllers/controller")
/* GET home page. */

router.get("/product/details/:id/:category", function(req,res,next) {
  var idProducto=req.params.id
  var category=req.param.category
  if(idProducto>-1){
  router.get("index",controller.vistas2(req,res))}
})
  
router.get('/', function(req, res, next) {
  router.get('index', controller.vistas(req,res));
});
module.exports = router;
