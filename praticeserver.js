const express=require('express')
// const cors=require(cors)

const app=express()
app.use(express.json())
app.get("/pravin",(req,res)=>{
    res.send("hello pravin")
})
const address={
    "name":"pravin",
    "lname":"benni"
}
app.get("/object",(req,res)=>{
 res.send(address)
})

app.listen(1213,(req,res)=>{
    console.log("app is started at 1213")
})

const userlist=[]

app.post('/aditya',(req,res)=>{
    userlist.push(req.body)
    console.log(userlist)
    res.send("data received")
})

app.get("/adityaget",(req,res)=>{
    res.send(userlist)
})