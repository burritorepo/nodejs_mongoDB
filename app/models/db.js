const mongoose = require('mongoose');
// GLobal variables of moongose to make it available to every module
mongoose.Promise = global.Promise;

// To connect to our database
mongoose.connect('mongodb://localhost:27017/codigodb', {
    useNewUrlParser: true
});

