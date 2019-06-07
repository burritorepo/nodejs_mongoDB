const mongoose = require('mongoose');
// GLobal variables of moongose to make it available to every module
mongoose.Promise = global.Promise;

// To connect to our database locally
/* mongoose.connect('mongodb://localhost:27017/codigodb', {
    useNewUrlParser: true
}); */

mongoose.connect('mongodb+srv://dbUser:UEaT0gQe22pKSWDb@entrego-j6hoj.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true
})