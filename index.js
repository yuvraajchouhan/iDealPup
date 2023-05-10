const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');

app.get('/home', (req,res) => {
    res.render("home");
});

app.listen(port, () => {
    console.log("Node application listening on port "+port);
}); 