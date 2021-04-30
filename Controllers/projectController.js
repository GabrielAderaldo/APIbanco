const express = require('express')
const router = express.Router()
const authMidelewere = require('../middleweres/auth')
const User = require('../models/user')
const {google} = require('googleapis')
const { get } = require('mongoose')
const mensagemServidor = "Servidor ultilizado por Gabriel Aderaldo, para o teste de uma API de entrada e saida de dados."
const spID = "1ygNgCF3lInIJC_QWALLSkjSKeymOBb4msIQLExGXCCc"
const Contas = require('../models/contas')

const formatarObjeto = (arrayLegenda) =>{
    return {nome:arrayLegenda[0],data:arrayLegenda[1],valor:arrayLegenda[2]}
}

router.use(authMidelewere)
//Aqui vão ficar as rotas de incrição da API
router.get('/', async (req,res)=>{
    const contas = await Contas.find({user:req.userId})
    return res.json({"Contas":contas})
})


router.get('/:contasID', async (req,res) =>{
    res.json({userID:req.userId})
})

router.post('/', async (req,res)=>{
    try{
        
       
        const contas = await Contas.create({...req.body,user:req.userId})
        
        return res.json({"Contas":contas})
    }catch(err){
        console.log(err)
        res.status(400).json({error:"erro"})
    }
})




module.exports = (app) => app.use('/user',router)