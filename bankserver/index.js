
//server creation app

const express = require('express')
const { status } = require('express/lib/response')

//import dataservice

const dataservice=require('./services/data.service')

//create server app using express

const app = express()

//parse json

app.use(express.json())

//resolving an api call
//GET - to read data
app.get('/',(req,res)=>{
    res.send("get request")
})


//PUT - TO UPDATE AND MODIFY DATA
app.put('/',(req,res)=>{
    res.send("PUT request")
})

//POST - TO CREATE DATA
app.post('/',(req,res)=>{
    res.send("POST request")
})

//PATCH - TO PARTIALLY UPDATE DATA
app.patch('/',(req,res)=>{
    res.send("PATCH request")
})

//DELETE - TO DELETE DATA
app.delete('/',(req,res)=>{
    res.send("DELETE request")
})

//bank server
//Register API  
app.post('/register',(req,res)=>{
const result=dataservice.register(req.body.acname,req.body.accno,req.body.pswd)
res.status(result.statusCode).json(result)
}
)

//Login API

app.post('/login',(req,res)=>{
    const result=dataservice.login(req.body.accno,req.body.pswd)
    res.status(result.statusCode).json(result)
    }
)

//DEPOSIT API

app.post('/deposit',(req,res)=>{
    const result=dataservice.deposit(req.body.accno,req.body.pswd,req.body.amount1)
    res.status(result.statusCode).json(result)
    }
)



//set port number

app.listen(3000,()=>{
    console.log("server created");
})

