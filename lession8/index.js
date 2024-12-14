const express=require('express');
const app=express();
const port=3000;
app.listen(port,()=>{
  console.log(`Server is running at http://localhost:${port}`);
})
app.get('/',(req,res)=>{
  res.send('Hi this is my server');
  res.end();
})
app.post('/post',(req,res)=>{
  res.send('Hi i am post request page');
  res.end();
})
app.put('/put',(req,res)=>{
  res.send('Hi i am put request page');
  res.end();
})
app.delete('/delete',(req,res)=>{
  res.send('Hi i delete request page');
  res.end();
})