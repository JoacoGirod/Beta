var express = require('express');
var router = express.Router();
var controller = require("../controllers/usercontroller")
/* GET users listing. */
router.get("/new", controller.newUser)
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
