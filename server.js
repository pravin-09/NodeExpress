const express=require('express')
const cors=require('cors')

const app=express()

app.use(express.json())

app.get("/first",(req,res)=>{
    res.send("Hello From Express Server!!!")
})

const person={
    name:"Abc",
    city:"Pune"
}

app.get("/second",(req,res)=>{
    res.send(person)
})

const userList=[]

app.post("/saveData",(req,res)=>{
     console.log(req.body)
     userList.push(req.body)
     res.send("Data Received!!!")
})

app.get("/getUserList",(req,res)=>{
    res.send(userList)
})

app.listen(7878,()=>{
    console.log('Server started!!!')
})