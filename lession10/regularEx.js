require("dotenv").config();
const express = require('express');
const app = express();
const PORT=process.env.PORT || 3000;

app.get('/products/:id([0-9])', (req, res) => {
    res.send(`<h2>ID=${req.params.id}</h2>`);
});
app.get('/tittle/:title([a-z0-9A-Z]+)',(req,res)=>{
    res.send(`<h2>Title=${req.params.title}</h2>`);
})
app.use("*", (req, res) => {
    res.status(404).send("<h1>Page Not Found</h1>");
})

app.listen(3005, () => {
    console.log('Server is running at http://localhost:3005');
});
