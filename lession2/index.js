const fs=require('fs');
fs.writeFile('demo1.txt',"this is jahid hasan",(error)=>{
    if(error){
        console.log("Error: ",error);
    }else{
        console.log("File is created");}
})