const mongoose = require('../database')
const bcrypt = require('bcrypt')


const PagamentosSchema = new mongoose.Schema({
    nome:{
        type:String,
        required: true
    },data:{
        type:String,
        required: true
    },valor:{
        type:String,
        required:true
    },user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
})

const Pagamentos = mongoose.model('Pagamentos',PagamentosSchema)

module.exports = Pagamentos