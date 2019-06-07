const express = require('express');
const bodyParser = require('body-parser');
const cursosv = require('../models/cursosv');
const router = express.Router();
let cursosv = new cursosv();
// Setting up the output format of our endpoints

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/* ---------------------------------------------
               ROUTES - CONFIGURATION           */

// Middlewares

router.use(function (req, res, next) {
    console.log('response', res);
    next();
});

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

router.route('/cursosv')
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
    });

module.exports = router;
