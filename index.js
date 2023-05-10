require('./utils.js');                          // include the utils.js file
require('dotenv').config();                     // include the dotenv module
const bcrypt = require('bcrypt');               // include the bcrypt module
const Joi = require('joi');                     // include the joi module
const MongoDBStore = require('connect-mongo');  // include the connect-mongo module
const session = require('express-session');     // include the express-session module
const express = require('express');             // include the express module

const app = express();                          // create an express app
app.set('view engine', 'ejs');                  // set the view engine to ejs

app.use(express.urlencoded({ extended: false }));           // parse urlencoded request bodies
app.use(express.static('public'));                          // serve static files
app.use(express.json());                                    // parse json request bodies

const port = process.env.PORT || 3000;                      // set the port

// secret variables located in .env file
const mongodb_cluster = process.env.MONGODB_CLUSTER;
const mongodb_user = process.env.MONGODB_USER;
const mongodb_password = process.env.MONGODB_PASSWORD;
const mongodb_database = process.env.MONGODB_DATABASE;
const mongodb_session_secret = process.env.MONGODB_SESSION_SECRET;
const node_session_secret = process.env.NODE_SESSION_SECRET;

// importing the database object from databaseConnection.js file
var {database} = include('databaseConnection');

// referencing to users collection in database
const userCollection = database.db(mongodb_database).collection('users');

// linking to mongoDb database
var mongoStore = MongoDBStore.create({
    mongoUrl: `mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_cluster}/`,
    crypto: {
        secret: mongodb_session_secret
    }
});

//printing status of database connection
database.connect().then(() => {
    console.log('MongoDB connected successfully');
  }).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});

// creating a session
app.use(session({
    secret: node_session_secret,
    saveUninitialized: false,
    resave: true,
    store: mongoStore,
    cookie: { maxAge: 60 * 60 * 1000 }
}));

app.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.render('home', {name: req.session.name});
    } else {
        res.render('landingPage');
    }
});


app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/signup', async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        const message = error.details[0].message;
        return res.send(`<h1>Error</h1><p>${message}</p><a href="/signup">Try again</a>`);
    }

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        await user.save();
        req.session.loggedIn = true;
        req.session.name = req.body.name;
        res.redirect('/members');
    } catch (err) {
        console.log(err);
        res.send('<h1>Error</h1><p>Sorry, an error occurred while processing your request.</p>');
    }
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
    const { error } = schema.validate(req.body);

    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.send(`<h1>Error</h1><p>User not found.</p><a href="/login">Try again</a>`);
        }
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) {
            return res.send(`<h1>Error</h1><p>Invalid password.</p><a href="/login">Try again</a>`);
        }
        req.session.loggedIn = true;
        req.session.name = user.name;
        req.session.user_type = user.user_type;
        res.redirect('/members');
    } catch (err) {
        console.log(err);
        res.send('<h1>Error</h1><p>Sorry, an error occurred while processing your request.</p>');
    }
});    

app.get('/profile' , (req, res) => {
    if (req.session.loggedIn) {
        res.render('profile', {name: req.session.name});
    } else {
        res.redirect('/login');
    }
});

app.get('/home', (req,res) => {
    res.render("home");
});

app.get('*', (req, res) => {
    res.status(404);
    res.render('404Page');
});
