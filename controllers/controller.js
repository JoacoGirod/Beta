var express = require('express');
var router = express.Router();
const fs = require("fs")
const detalles = JSON.parse(fs.readFileSync("/Users/joaqu/Desktop/DIGITAL HOUSE/PracticaEjs/App/productsDataBase.json", 'utf-8'))



let controller = {
    vistas: function(req,res){
        return res.render("index")
    },
    vistas2: function(req,res){
        var idProducto=req.params.id
        
        return res.render("index2",{detalles : detalles[idProducto-1]})
    }
}
module.exports = controller