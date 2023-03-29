const http=require('http')
const server=http.createServer(function(req,res){
    if(req.url === "/pravin"){
       res.end("hello pravin")
    }
    if(req.url === "/benni"){
        res.end("hello benni")
    }

})

server.listen(8787,()=>{
    console.log(' port started in 8181')
})