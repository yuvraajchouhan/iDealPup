const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

app.use(express.static(__dirname + "/public"));

// app.use(session({ 
//     secret: node_session_secret,
// 	store: mongoStore, //default is memory store 
// 	saveUninitialized: false, 
// 	resave: true
// }
// ));



// function isValidSession(req) {
//     if (req.session.authenticated) {
//         return true;
//     }
//     return false;
// }

// function sessionValidation(req,res,next) {
//     if (isValidSession(req)) {
//         next();
//     }
//     else {
//         res.redirect('/login');
//     }
// }

app.get('/', (req,res) => {
    res.send("<h1>Placeholder Homepage</h1>");
});

app.get('/login', (req,res) => {
    res.render("login");
});

app.get('/profile', (req,res) => {

	res.render("profile");
});

app.listen(port, () => {
    console.log("Node application listening on port "+port);
}); 

