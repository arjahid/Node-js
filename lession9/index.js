const express=require('express');
const app=express();
const PORT=30001;
app.get('/home',(req,res)=>{
    const id=req.query.id;
   
    res.send(`Student id is:${id}`);
   
})
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});