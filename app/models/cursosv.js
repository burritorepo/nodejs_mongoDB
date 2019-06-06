const mongoose = require('mongoose');

// To create our models
const Schema = mongoose.Schema

// Document schema for our courses, it is not necessary to add the id as MongoDB generates it automatically
// here we define how our collection structure will be
const CursosSchema = new Schema({
    nombrecurso: String,
    precio: Number,
    detalle: String
});

module.exports = mongoose.model('cursosvirtual',CursosSchema);
