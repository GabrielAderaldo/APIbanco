const express = require('express')

const porta = 3000
const app = express()

app.use(express.json())

/** 
 * Parte da autenticação
*/

require('./Controllers/index')(app)


/**
 * Fim da parte da autenticação
 */


app.get("/",(req,res)=>{
    res.status(200).send("Home")
});





app.listen(porta,(req,res)=>{
    console.log("Servidor rodando...")
});