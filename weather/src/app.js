const express=require("express")
const app=express()
const path=require("path")
const j=path.join(__dirname,"../public")
app.use(express.static(j))
app.get("/",(req,res)=>{
    res.send("welcome to jamin")
})
app.listen(8000,()=>{
    console.log(`listining to the port `)
})