/* const express = require('express');
const bodyParser = require('body-parser');
const cursosv = require('../models/cursosv');
const router = express.Router(); */

// Setting up the output format of our endpoints

/* router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json()); */

/* ---------------------------------------------
               ROUTES - CONFIGURATION           */

// Middlewares

/* router.use(function (req, res, next) {
    console.log('response', res);
    next();
}); */

/* router.get('/', function (req, res) {
    res.sendFile(__dirname + '/login.html');
}); */

/* ------------------------------------------------
            ENDPOINTS' CRUD METHODS

            (1) ENDPOINT TO REGISTER NEW COURSES
            (2) ENDPOINT TO RETRIEVE/GET ALL COURSES
            (3) ENDPOINT TO RETRIEVE/GET ONE COURSE
            (4) ENDPOINT TO UPDATE ONE COURSE
            (5) ENDPOINT TO DELETE ONE COURSE
 */

/* router.route('/cursosv')
    .post(function (req, res) {
        let cursosv = new cursosv();
        cursosv.nombrecurso = req.body.nombrecurso;
        cursosv.precio = req.body.precio;
        cursosv.detalle = req.body.detalle;
        cursosv.save(function (error) {
            if (error)
                res.status(500).send('Error al grabar:' + error);
            res.json({ message: "SUCCESS: Course added successfully" });
        })
    })
    .get(function (req, res) {
        let cursosv = new cursosv();
        cursosv.find(function (error, cursosv) {
            if (error)
                res.status(500).send('Error al mostrar:' + error);
            res.json(cursosv);
        });
    });

router.route('/cursosv/:cursosv_id')
    .get(function (req, res) {
        let cursosv = new cursosv();
        cursosv.findById(req.params.cursosv_id, function (error, cursosv) {
            if (error)
                res.status(500).send('Error al mostrar:' + error);
            res.json(cursosv);
        })
    })
    .put(function (req, res) {
        let cursosv = new cursosv();
        cursosv.findById(req.params.cursosv_id, function (error, cursosv) {
            if (error)
                res.status(500).send('Error al mostrar:' + error);
            res.json(cursosv);
            cursosv.nombrecurso = req.body.nombrecurso;
            cursosv.precio = req.body.precio;
            cursosv.detalle = req.body.detalle;
            cursosv.save(function (error) {
                if (error)
                    res.status(500).send('Error al actualizar:' + error);
                res.json({
                    message: "SUCCESS: Course updated successfully",
                    cursosv: cursosv
                });
            });
        });
    })
    .delete(function (req, res) {
        let cursosv = new cursosv();
        cursosv.remove({
            _id: req.params.cursosv_id
        }, function (error) {
            if (error)
                res.status(500).send('Error al borrar:' + error);
            res.json({ message: "SUCCESS: Course deleted successfully" });
        });
    }); */

/* module.exports = router; */

var express = require('express');
var bodyparser = require('body-parser');
var Cursosv = require('../models/cursosv');
var router = express.Router(); 

//CONFIGURAR SALIDA END-POINT BODYPARSER

router.use(bodyparser.urlencoded({extended:true}));
router.use(bodyparser.json());

/* -------------------------------------------
     R O  U T E S - C O N F I G U R A C I O N
  ---------------------------------------------     
 */
       
//Que es un Middleware

router.use(function (req,res,next){
    console.log("respuesta")
    next();
})

router.get('/', function(req,res){
    res.sendFile("../view/login.html");
})

/* -------------------------------------------
     METODOS DEL CRUD  ENDPOINTS
     (1) REGISTRAR NUEVOS CURSOS VIRTUAL
     (2) RECUPERAR TODOS LOS CURSOS VIRTUAL
     (3) ACTUALIZAR UN CURSO VIRTUAL
     (4) ELIMINAR UN CURSO VIRTUAL
  ---------------------------------------------     
 */

 router.route('/cursosv')
    .post(function(req,res) {
        var cursosv = new Cursosv();
        cursosv.nombrecurso = req.body.nombrecurso;
        cursosv.precio = req.body.precio;
        cursosv.detalle = req.body.detalle;
        cursosv.save(function (error){
            if (error)
                res.status(500).send('Error al grabar:'+ error );
            res.json({mensaje:"todo marcho bien"});    
        });
    })
    .get(function(req,res){
        Cursosv.find(function(error,cursosv){
            if (error)
                res.status(500).send('Error mostrar:'+ error );
            res.json(cursosv);    
        });
    });

 router.route('/cursosv/:cursosv_id')   
    .get(function(req,res){
        Cursosv.findById(req.params.cursosv_id,function(error,cursosv) {
            if (error)
                res.status(500).send('Error mostrar:'+ error );
            res.json(cursosv); 
        });
    })
    .put(function (req,res){
        Cursosv.findById(req.params.cursosv_id,function(error,cursosv) {
            if (error)
                res.status(500).send('Error mostrar:'+ error );
            cursosv.nombrecurso = req.body.nombrecurso;
            cursosv.precio = req.body.precio;
            cursosv.detalle = req.body.detalle;
            cursosv.save(function (error){
                if (error)
                    res.status(500).send('Error al actualizar:'+ error );
                res.json({mensaje:"todo marcho bien"});    
            });
        });
    })
    .delete(function (req,res){
        Cursosv.remove({
            _id:req.params.cursosv_id
        }, function (error){
            if (error)
                    res.status(500).send('Error al borrar:'+ error );
                res.json({mensaje:"todo marcho bien"}); 
        });
    });
   module.exports = router; 



