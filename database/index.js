const mongoose = require('mongoose')


let conectionURL = "mongodb://gabrieladeraldo:tomate98@kamino.mongodb.umbler.com:48794/usuarios"
mongoose.connect(conectionURL,
{   
    user:"gabrieladeraldo",
    pass:"tomate98",
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true}
    )
mongoose.Promise = global.Promise



module.exports = mongoose