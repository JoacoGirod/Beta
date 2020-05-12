var express = require('express');
var router = express.Router();
const fs = require("fs")
const detalles = JSON.parse(fs.readFileSync("/Users/joaqu/Desktop/DIGITAL HOUSE/PracticaEjs/App/productsDataBase.json", 'utf-8'))


let controller = {
    vistas: function(req,res){
        res.render("index",{detalles : detalles})
    },
    vistas2: function(req,res){
        var idProducto=req.params.id
        for (let index = 0; index < detalles.length; index++) {
            if (idProducto==detalles[index].id) {
                res.render("index2",{detalles : detalles[index]})
            }
            
        }
        
    },
    vistas3: function(req,res){
        
        res.render("productosListados",{detalles : detalles} )
    },
    edit: function(req,res){
        var idProducto=req.params.id
        for (let index = 0; index < detalles.length; index++) {
            if (idProducto==detalles[index].id) {
                res.render("edit", {detalles : detalles[index]})
            }
            
        }
        
    },
    update2: function(req,res){
        var idProducto=req.params.id
        var datosEditadosPorElAdministrador = req.body
        // Ciclo que construye arrays con las propiedades de los objetos tanto del objeto que se quiere editar como del formulario de edicion que mando el editor
        for (let index = 0; index < detalles.length; index++) {
            if (idProducto==detalles[index].id) {
                var idProductoCorrecto=index
                var productoQueSeQuiereEditar = detalles[index]
                var propiedadesDelArray = Object.getOwnPropertyNames(productoQueSeQuiereEditar)
                var propiedadesDeLoQueSeQuiereEditar = Object.getOwnPropertyNames(datosEditadosPorElAdministrador)
            }
        }
        // Este doble ciclo permite que se cumpla un condicional que se ejecuta cuando una propiedad que se encuentra en el array es igual a una propiedad del formulario de edicion
        // y paso siguiente la reemplaza y sobreescribe en el JSON 
        for (let i = 0; i < propiedadesDeLoQueSeQuiereEditar.length; i++) {
            for (let j = 0; j < propiedadesDelArray.length; j++) {
                if(propiedadesDeLoQueSeQuiereEditar[i]==propiedadesDelArray[j]){
                    productoQueSeQuiereEditar[propiedadesDelArray[j]]=datosEditadosPorElAdministrador[propiedadesDeLoQueSeQuiereEditar[i]]
                    detalles[idProductoCorrecto]=productoQueSeQuiereEditar
                    detallesEnJsonDeNuevo=JSON.stringify(detalles)
                    fs.writeFileSync("/Users/joaqu/Desktop/DIGITAL HOUSE/PracticaEjs/App/productsDataBase.json",detallesEnJsonDeNuevo)
                    

                }
                
            }
           
        }
        return res.redirect("/")
    },

    definetelykill: function(req,res){
        var idProducto=req.params.id
        var arrayConLosProductosQueNoDebianSerEliminados=[]
        // Hago un array con todos lo productos que no quieran ser eliminados y sobreescribo con eso el JSON, esto es escalable aunque cambie el nombre de la variable porque lo que 
        // importa es el directorio donde es almacenado
        for (let index = 0; index < detalles.length; index++) {
            
            if (detalles[index].id!=idProducto){
                arrayConLosProductosQueNoDebianSerEliminados.push(detalles[index])
                
            }
            
        }
        detallesEnJsonConUnEliminado=JSON.stringify(arrayConLosProductosQueNoDebianSerEliminados, null, " ")
        fs.writeFileSync("/Users/joaqu/Desktop/DIGITAL HOUSE/PracticaEjs/App/productsDataBase.json",detallesEnJsonConUnEliminado)
        res.redirect("/")
        
    },
    kill: function(req,res){
        var idProducto=req.params.id
        for (let index = 0; index < detalles.length; index++) {
            if (idProducto==detalles[index].id) {
                res.render("kill", {detalles : detalles[index]})
            }
            
        }
    },
    create: function(req,res,next){
        var idProducto=req.params.id
        
            
        res.render("create")
            
            
        
    },
    create2: function(req,res,next){
        var idProducto=req.params.id
        var nuevoProducto = req.body
        var idDelUltimoProducto = detalles[detalles.length-1].id
        console.log(idDelUltimoProducto)
        var idDelNuevoProducto = idDelUltimoProducto+1
        var nuevoProducto1 = {
            id: idDelNuevoProducto,
            ...req.body
        }
        detalles.push(nuevoProducto1)
        lala = JSON.stringify(detalles)
        fs.writeFileSync("/Users/joaqu/Desktop/DIGITAL HOUSE/PracticaEjs/App/productsDataBase.json",lala)
        res.redirect("/")
    }
}

module.exports = controller


