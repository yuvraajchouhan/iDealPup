require('./utils.js');                          // include the utils.js file
require('dotenv').config();                     // include the dotenv module
const bcrypt = require('bcrypt');               // include the bcrypt module
const Joi = require('joi');                     // include the joi module
const MongoDBStore = require('connect-mongo');  // include the connect-mongo module
const session = require('express-session');     // include the express-session module
const express = require('express');             // include the express module
const saltRounds = 12;

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

// referencing the Breeds collection in database
const breedsCollection = database.db(mongodb_database).collection('Breeds');

// linking to mongoDb database
var mongoStore = MongoDBStore.create({
    mongoUrl: `mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_cluster}/2800-202310-BBY18`,
    crypto: {
        secret: mongodb_session_secret
    },
    collection: 'sessions'
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

// // // repurposed demo 2 code 
app.post('/submitUser', async (req,res) => {
    var name = req.body.name;
    var password = req.body.password;
    var email = req.body.email;


	const schema = Joi.object(
		{   
            email: Joi.string().email().required(),
            name: Joi.string().max(35).pattern(new RegExp('^[a-zA-Z\\s]*$')).required(),
			password: Joi.string().max(20).required()
		});
	
	const validationResult = schema.validate({email, name, password});
	if (validationResult.error != null) {
	   console.log(validationResult.error);
	   res.redirect("/signup");
	   return;
   }

    var hashedPassword = await bcrypt.hash(password, saltRounds);
	
	await userCollection.insertOne({email: email, name: name, password: hashedPassword, user_type: "user"});
	console.log("Inserted user");
    req.session.loggedIn = true;
    req.session.name = name;
    req.session.email = email;
    req.session.password = hashedPassword;
    res.redirect("/profile");
    //var html = "successfully created user";
    //res.render("submitUser", {html: html});
    // res.render("home")
});


app.get('/login', (req, res) => {
    res.render('login');
});
 
app.post('/loginSubmit', async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    const schema = Joi.object(
        {
            email: Joi.string().email().required(),
            password: Joi.string().max(20).required()
        });

    const validationResult = schema.validate({email, password});
    if (validationResult.error != null) {
       console.log(validationResult.error);
       res.redirect("/login");
       return;
    }

    const user = await userCollection.findOne({ email: email });
    if (user === null) {
        console.log("User not found");
        res.redirect("/login");
        return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        console.log("Invalid password");
        res.redirect("/login");
        return;
    }

    req.session.loggedIn = true;
    req.session.name = user.name;
    req.session.email = user.email;
    req.session.password = user.password;
    res.redirect("/profile");
});

app.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/');
});

app.get('/profile' , (req, res) => {
    if (req.session.loggedIn) {
        res.render('profile', {name: req.session.name, email: req.session.email, password: req.session.password});
    } else {
        res.redirect('/login');
    }
});


app.get('/filters' , (req, res) => {
    if (req.session.loggedIn) {
            res.render('filters', {name: req.session.name});
    } else {
        res.redirect('/login');
    }
});

app.get('/search', (req,res) => {
    if(req.session.loggedIn) {
        res.render('/search', {name: req.session.name});
    } else {
        res.redirect('/login');
    }
});

app.get('/filterconfirmation' , (req, res) => {
    res.render('filterconfirmation', {name: req.session.name});
});

app.get('/description', async(req,res) => {
    const itemName = req.query.item;
    const breed = await getBreedByName(itemName);
    res.render('description', { name: req.session.name, dog: breed });
});

async function getBreedByName(itemName) {
    try{
        const query = {Breed: itemName};

        const dog = await breedsCollection.findOne(query);
        return dog;
    } catch(error){
        console.log(error);
    }
}

app.get('*', (req, res) => {
    res.status(404);
    res.render('404Page');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});