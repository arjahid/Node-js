const express = require('express');
const app = express();

app.get('/userID/:id/userAge/:age', (req, res) => {
    const id = req.params.id;
    const age = req.params.age;
    res.send(`User ID: ${id}, User Age: ${age}`);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
