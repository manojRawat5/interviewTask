let express = require('express')

let app = express()
let port = 5050
app.use(express.json())

function findFirstUniqueChar(arr){
    obj = {}
    for(let i=0;i<arr.length;i++){
        if (obj[arr[i]]){
            obj[arr[i]] += 1
        }else{
            obj[arr[i]] = 1
        }
    }
    ch = "No Unique Character Found"
    for (let k in obj){
        if (obj[k] == 1){
            ch = k
            break 
        }
    }
    index = -1
    for (let i in arr){
        if (ch == arr[i]){
            index = i
            break
        }
    }
    return [index,ch]
}

app.use((req,res,next)=>{
    const {text_to_process} = req.body
    if (text_to_process == 'keetnode'){
        console.log(req.method,req.hostname,req.path)
    }
    next()
})

app.post("/first-unique-character",async(req,res)=>{
    try{
        const {text_to_process} = req.body
        const [index ,ch] = findFirstUniqueChar(text_to_process)
        let date = new Date()
        let obj = {
            "first_unique_char": ch,
            "first_unique_char_index": index,
            "timestamp": date.toISOString()
          }
          
        res.status(200).json(obj)
    }catch(err){
        res.status(500).json({message:"Error Found",error:err.message})
    }
    
})


app.listen(port,()=>{
    try{
        console.log("Server running at port No :",port)
    }catch(err){
        console.log("Error at Server running")
    }
})