const express=require("express")
const app=express()

const task=require('./Routes/task')

app.get('/',(req,res)=>{
    res.send('controller')
})

app.use(task)






app.listen(5000,console.log(`server is listening on port ${5000}...`))