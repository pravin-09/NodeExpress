const http=require('http')

const server=http.createServer(function(req,res){

    if(req.url==="/check"){
        res.end("Hello From Server App!!!")
    }
    if(req.url==="/check123"){
        res.end("Hello From Server App123!!!")
    }
}) 

server.listen(8989,()=>{
    console.log('Server started on port 8989')
})