const express = require('express');
const app = express();
const PORT = 3009;
const myMiddleWare=(req,res,next)=>{
    console.log("My middleware is running");
    req.currentTime=new Date(Date.now());
    next();
}
app.use(myMiddleWare);

app.get("/", (req, res) => {
    console.log(req.currentTime)
    res.send("<h2>I am the home route</h2>");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
