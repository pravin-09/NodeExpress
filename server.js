const express=require('express')
const cors=require('cors')

const app=express()

const corsOptions={
    origin:"http://localhost:3000"
}

app.use(cors(corsOptions))

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
     console.log(userList)
     res.send({"statusCode":201,"message":"Data Saved!!!","result":userList})
})

app.get("/getUserList",(req,res)=>{
    res.send(userList)
})

app.listen(7878 ,()=>{
    console.log('Server started!!!')
})