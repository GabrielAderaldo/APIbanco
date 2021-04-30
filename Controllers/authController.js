const express = require('express')
const brc = require('bcrypt')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

const router = express.Router()


function generatedToken(params ={}){
    return jwt.sign(params,authConfig.secret,{expiresIn:86400})
}


router.post('/register', async (req,res)=>{

    try{    
    const {email} = req.body
    if (await User.findOne({email})){return res.status(400).json({Error:"Usuario já cadastrado"})}
    const user = await User.create(req.body)
    user.password = undefined
    return res.status(200).json({user,Token:generatedToken({id:user.id})})
    
    }catch(err){
        console.log(err)
        res.status(400).send({error:err.errors})
    }

})


router.post('/login', async (req,res)=>{
    try{
        const {email,password} = req.body
        const user = await User.findOne({email}).select('+password')
        if(!user){return res.status(400).send({Erro:"Usuario não encontrado..."})}
        if(!await brc.compare(password,user.password)){res.status(400).send({error:"Senha incorreta!"})}
        user.password = undefined
        

        res.status(200).send({Usuario:user,Token:generatedToken({id:user.id})})

    }catch(err){
        console.log("err")
        res.send({error:err})
    
    }
})

module.exports = (app) => app.use('/auth',router)