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

app.get('/', async (req, res) => {
    if(req.session.loggedIn) {
        const todayDogMessages = [
            'is a breed of medium to large-sized working dog that'
            + ' originated in Germany.',
            'is a breed of dog that is known for its loyalty and'
            + ' protective instincts.',
            'is a breed of domestic dog, regarded as medium-to-large'
            + ' or large.',
            'is a breed of dog that originated in Scotland in the'
            + ' mid-19th century.',
        ]
        const home4RandomDogs = await get4RandomDogs();
        res.render('home', {name: req.session.name, 
            todayDogNames: home4RandomDogs, 
            todayDogMessages: todayDogMessages} 
        ); 
    } else { 
        res.render('landingPage');   // changed to templanding page
    }
});

async function get4RandomDogs() {
    const randomDogs = await breedsCollection.aggregate([
        { $sample: { size: 4 } },
        { $project: { _id: 0, Breed: 1 } }
    ]).toArray();

    let result = [];
    await randomDogs.map(dog => {result.push(dog.Breed)});
    return result;
}

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
    res.redirect("/");
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
    console.log(req.session.password);
    res.redirect("/");
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

app.get('/changePassword', (req,res) => {
    res.render('changePassword');
});

app.post('/changePassword', async(req, res) => {
    var password = req.session.password;
    var email = req.session.email;
    var currentPassword = req.body.currentPassword;
    var newPassword = req.body.newPassword;
    var verifyPassword = req.body.verifyPassword;
  
    const user = await userCollection.findOne({ email: email });
    const userPass = user.password;

    const passwordMatch = await bcrypt.compare(currentPassword, userPass);

    // Check if the current password entered by the user matches the one in the database
    if (!passwordMatch) {
        console.log('wrong current pass');
      return res.render('changePassword');
    }
  
    // Check if the new password and the verify password fields match
    if (newPassword != verifyPassword) {
        console.log('not same new pass');
      return res.render('changePassword');
    }
 
    // hash the new password
    var hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);
    // Update the user's password in the database
    req.session.password = hashedNewPassword;
    // save user details to database 
    await userCollection.updateOne({email: email}, {$set: {password: hashedNewPassword}});
    // Redirect the user to a success page
    res.render('passwordUpdated');
  });

app.get('/filters' , (req, res) => {
    if (req.session.loggedIn) {
            res.render('filters', {name: req.session.name});
    } else {
        res.redirect('login');
    }
});

app.get('/search', (req,res) => {
    if(req.session.loggedIn) {
        res.render('search', {name: req.session.name});
    } else {
        res.redirect('login');
    }
});

app.get('/filterconfirmation' , (req, res) => {
    res.render('filterconfirmation', {name: req.session.name});
});

app.get('/description', async(req,res) => {
    const itemName = req.query.item;
    const breed = await getBreedByName(itemName);

    let message = "";
    if (req.session.bookmarkFeedback) {
        message = req.session.bookmarkFeedback;
        delete req.session.bookmarkFeedback;
    }

    res.render('description', { name: req.session.name, dog: breed,
        bookmarkFeedback: message
    });
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

app.get('/bookmark', async (req, res) => {
    if (req.session.loggedIn) {
        const user = await userCollection.findOne({name: req.session.name});
        let message = "";
        if (req.session.bookmarkFeedback) {
            message = req.session.bookmarkFeedback;
            delete req.session.bookmarkFeedback;
        }
        res.render('bookmark', {name: req.session.name, user: user, 
            bookmarkFeedback: message}
        );
    } else {
        res.redirect('/login');
    }
});

app.get('/addOrRemoveBookmark', async (req, res) => {
    console.log("Clicked on bookmark button");
    const dogBreed = req.query.item;
    console.log(dogBreed);

    const user = await userCollection.findOne({name: req.session.name});
    const result = await bookmarkStatusAndIndex(user, dogBreed);

    if (result.found) {
        removeBookmark(req.session.name, result.index);
        req.session.bookmarkFeedback = `Removed bookmark for: ${dogBreed}`;
    } else {
        addBookmark(req.session.name, dogBreed, result.index);
        req.session.bookmarkFeedback = `Added bookmark for: ${dogBreed}`;
    }
    res.redirect(`${req.get('referer')}`);
});

async function bookmarkStatusAndIndex(user, dogBreed) {
    let i = 1;
    let availableIndex = 0;
    let availableIndexCounter = 0;
    while (user[`bookmark${i}`] || user[`bookmark${i}`] == ".") {
        if (user[`bookmark${i}`] == "." && availableIndexCounter == 0) {
            availableIndex = i;
            availableIndexCounter++;
        }
        if (user[`bookmark${i}`] !== dogBreed) {
            i++;
        } else {
            console.log("Found the breed! " + i);
            return {index: i, found: true};
        }
    }
    if (availableIndex == 0) {
        availableIndex = i;
    }
    console.log("Not bookmarked!");
    return {index: availableIndex, found: false};
};

async function addBookmark(sessionName, dogBreed, index) {
    await userCollection.updateOne({name: sessionName}, 
        {$set: {[`bookmark${index}`]: dogBreed}}
    );
    console.log("Added bookmark for: " + dogBreed + " at index: " + index);
};

async function removeBookmark(sessionName, index) {
    const bookmarkFeedback = `Removed bookmark for: ${`bookmark${index}`} at index: ${index}`
    await userCollection.updateOne({name: sessionName}, 
        {$set: {[`bookmark${index}`]: "."}} 
    );
    console.log(bookmarkFeedback);
};

app.get('/dogsGood' , (req, res) => {
    const shopNames = [
        "Tisol",
        "PetSmart", 
        "Bosleys"
    ]
    const shopLinks = [
        "https://www.petvalu.ca/",
        "https://www.petsmart.ca/",
        "https://tisol.ca/"
    ]
    res.render('dogsGood', {shopNames: shopNames, shopLinks: shopLinks});
});

app.get('/dogTrivia' , async (req, res) => {
    let rounds = req.session.dogTriviaRounds;
    req.session.dogTriviaRounds++;
    console.log('Round ', rounds);

    if (rounds > 1 && !req.session.rightAnswers.includes(req.session.correctAnswer)
    && !req.session.wrongAnswers.includes(req.session.correctAnswer)) {
        console.log('I see you are cheeting :)');
        req.session.answerFeedback = 'Please do not refresh the page '
        + 'during a game, as it will skip the question. :(';
        req.session.answerStatus = false;
        req.session.wrongAnswers.push(req.session.correctAnswer);
    }

    if (rounds < 11) {
        let result = [];
        let correctAnswer = '';
        do {
            const randomDogs = await breedsCollection.aggregate([
                { $sample: { size: 4 } },
                { $project: { _id: 0, Breed: 1 } }
            ]).toArray();

            await randomDogs.map(dog => {result.push(dog.Breed)});
            console.log(result);

            let testing = result;
            while (testing.length > 0) {
                correctAnswer = testing[Math.floor(Math.random() * testing.length)];
                console.log('Correct answer: ', correctAnswer);
                if (req.session.wrongAnswers.includes(correctAnswer)
                || req.session.rightAnswers.includes(correctAnswer)) {
                    console.log('Answer already exist! Repicking');
                    const correctAnswerIndex = testing.indexOf(correctAnswer);
                    testing.splice(correctAnswerIndex, 1);
                } else {
                    break;
                }
            } 
        } while (req.session.wrongAnswers.includes(correctAnswer)
        || req.session.wrongAnswers.includes(correctAnswer))

        req.session.correctAnswer = correctAnswer;

        res.render('dogTrivia', {result: result, correctAnswer: correctAnswer,
        answerFeedback: req.session.answerFeedback, round: rounds, 
        answerStatus: req.session.answerStatus});
    } else {
        res.redirect('/dogTriviaEnd');
    }
});

app.get('/dogTriviaConfigureAnswer', (req, res) => {
    const answer = req.query.answer;
    console.log('Selected answer: ', answer);
    if (answer == req.session.correctAnswer) { 
        req.session.rightAnswers.push(req.session.correctAnswer);
        req.session.answerFeedback = 'Correct! Keep it going champ!';
        req.session.answerStatus = true;
    } else {
        req.session.wrongAnswers.push(req.session.correctAnswer);
        req.session.answerFeedback = `Oops! ${req.session.correctAnswer} was the right one.`;
        req.session.answerStatus = false;
    }
    res.redirect('/dogTrivia');
})

app.get('/dogTriviaStart', (req, res) => {
    req.session.dogTriviaRounds = 1;
    req.session.rightAnswers = [];
    req.session.wrongAnswers = [];
    res.render('dogTriviaStart');
})

app.get('/dogTriviaEnd', (req, res) => {
    console.log('Breeds that you got wrong: ', req.session.wrongAnswers, 
    'Your score: ', req.session.rightAnswers.length);
    res.render('dogTriviaEnd', {score: req.session.rightAnswers.length, 
    wrongAnswers: req.session.wrongAnswers});
})

app.get('*', (req, res) => {
    res.status(404);
    res.render('404Page');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
	console.log("Node application listening on port "+port);
}); 
