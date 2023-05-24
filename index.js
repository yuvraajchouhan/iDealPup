require('./utils.js');                          // include the utils.js file
require('dotenv').config();                     // include the dotenv module
const bcrypt = require('bcrypt');               // include the bcrypt module
const Joi = require('joi');                     // include the joi module
const MongoDBStore = require('connect-mongo');  // include the connect-mongo module
const session = require('express-session');     // include the express-session module
const express = require('express');             // include the express module
const nodemailer = require('nodemailer');       // include the nodemailer module
const saltRounds = 12;

const app = express();                          // create an express app
app.set('view engine', 'ejs');                  // set the view engine to ejs

app.use(express.urlencoded({ extended: false }));           // parse urlencoded request bodies
app.use(express.static('public'));                          // serve static image files
app.use(express.static('css'));                             // serve static css files
app.use(express.static('js'));                              // serve static js files
app.use(express.json());                                    // parse json request bodies

const port = process.env.PORT || 3000;                      // set the port

// secret variables located in .env file
const mongodb_cluster = process.env.MONGODB_CLUSTER;
const mongodb_user = process.env.MONGODB_USER;
const mongodb_password = process.env.MONGODB_PASSWORD;
const mongodb_database = process.env.MONGODB_DATABASE;
const mongodb_session_secret = process.env.MONGODB_SESSION_SECRET;
const node_session_secret = process.env.NODE_SESSION_SECRET;
const nodemailer_email = process.env.NODEMAILER_EMAIL;
const nodemailer_password = process.env.NODEMAILER_PASSWORD;


// importing the database object from databaseConnection.js file
var { database } = include('databaseConnection');

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

// creating a transporter
const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: nodemailer_email,
        pass: nodemailer_password
    }
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
    if (req.session.loggedIn) {
        const home4RandomDogs = await get4RandomDogs();
        const todayDog = home4RandomDogs[0]; // Assuming the first dog in the array is the displayed dog

        // Fetch the complete dog object from the database using the dog breed
        const dog = await getDogByBreed(todayDog);

        const todayDogMessages = [
            `is known to be ${dog.CharacterTraits}.`,
            `lives for an average of ${dog.LongevityYrs} years.`,
            `is ${dog.HeightLowInches}-${dog.HeightHighInches} tall and weighs ${dog.WeightLowLbs}-${dog.WeightHighLbs} pounds.`,
            `originates from the country ${dog.CountryOfOrigin}.`,
        ];

        res.render('home', {
            name: req.session.name,
            todayDogNames: home4RandomDogs,
            todayDogMessages: todayDogMessages,
        });
    } else {
        res.render('landingPage');
    }
});

async function get4RandomDogs() {
    const randomDogs = await breedsCollection.aggregate([
        { $sample: { size: 4 } },
        { $project: { _id: 0, Breed: 1 } }
    ]).toArray();

    return randomDogs.map(dog => dog.Breed);
}

async function getDogByBreed(breed) {
    // Fetch the complete dog object from the database based on the breed
    const dog = await breedsCollection.findOne({ Breed: breed });

    return dog;
}

app.get('/signup', (req, res) => {
    res.render('signup');
});

// // // repurposed demo 2 code 
app.post('/submitUser', async (req, res) => {
    var name = req.body.name;
    var password = req.body.password;
    var email = req.body.email;


    const schema = Joi.object(
        {
            email: Joi.string().email().required(),
            name: Joi.string().max(35).pattern(new RegExp('^[a-zA-Z\\s]*$')).required(),
            password: Joi.string().max(20).required()
        });

    const validationResult = schema.validate({ email, name, password });
    if (validationResult.error != null) {
        console.log(validationResult.error);
        res.redirect("/signup");
        return;
    }

    var hashedPassword = await bcrypt.hash(password, saltRounds);

    await userCollection.insertOne({ email: email, name: name, password: hashedPassword, user_type: "user" });
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

    const validationResult = schema.validate({ email, password });
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

app.get('/profile', (req, res) => {
    if (req.session.loggedIn) {
        res.render('profile', { name: req.session.name, email: req.session.email, password: req.session.password });
    } else {
        res.redirect('/login');
    }
});

app.get('/changePassword', (req, res) => {
    res.render('changePassword');
});

app.post('/changePassword', async (req, res) => {
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
    await userCollection.updateOne({ email: email }, { $set: { password: hashedNewPassword } });
    // Redirect the user to a success page
    res.render('passwordUpdated');
});

app.get('/forgotpassword', (req, res) => {
    res.render('forgotPassword');
});

app.post('/forgotpasswordsubmit', async (req, res) => {
    const user = await userCollection.find().project({ email: 1 }).toArray();

    const userEmail = req.body.email;

    const mailOptions = {
        from: nodemailer_email,
        to: userEmail,
        subject: 'Reset Your Password.',
        text: 'Click the link to reset your password: https://relieved-puce-swallow.cyclic.app/resetpassword'
    };

    for (i = 0; i < user.length; i++) {
        if (user[i].email == userEmail) {
            req.session.email = user[i].email;
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                    res.redirect('/emailsent');
                }
            });
        }
    }
});

app.get('/emailsent', (req, res) => {
    res.render('emailSent');
});

app.get('/resetpassword', (req, res) => {
    res.render('resetPassword');
});

app.post('/resetpasswordsubmit', async (req, res) => {
    var email = req.session.email;
    var newPassword = req.body.newPassword;
    var verifyPassword = req.body.verifyPassword;

    // Check if the new password and the verify password fields match
    if (newPassword != verifyPassword) {
        console.log('not same new pass');
        return res.render('resetPassword');
    }

    // hash the new password
    var hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update the user's password in the database
    req.session.password = hashedNewPassword;

    // save user details to database
    await userCollection.updateOne({ email: req.session.email }, { $set: { password: hashedNewPassword } });

    const user = await userCollection.find({ email }).project({ name: 1, password: 1 }).toArray();

    req.session.loggedIn = true;
    req.session.name = user[0].name;
    req.session.password = user[0].password;

    // Redirect the user to a success page
    res.render('passwordUpdated');


});

app.get('/filters', (req, res) => {
    if (req.session.loggedIn) {
        res.render('filters', { name: req.session.name });
    } else {
        res.redirect('login');
    }
});

app.get('/search', (req, res) => {
    if (req.session.loggedIn) {
        res.render('search', { name: req.session.name });
    } else {
        res.redirect('login');
    }
});


app.get('/filterconfirmation', (req, res) => {
    res.render('filterconfirmation', { name: req.session.name });
});

// method to filter
app.post('/filterSubmit', async (req, res) => {
    // height ranges
    const heightRanges = {
        small: { min: 6, max: 15 },
        medium: { min: 16, max: 30 },
        large: { min: 31, max: Infinity }
    };

    // weight ranges
    const weightRanges = {
        light: { min: 2, max: 50 },
        medium: { min: 51, max: 85 },
        heavy: { min: 86, max: Infinity }
    };

    // trainability levels
    const trainabilityLevels = {
        low: { min: 0, max: 20 },
        average: { min: 21, max: 40 },
        high: { min: 41, max: 60 },
        'very high': { min: 61, max: 80 },
        exceptional: { min: 81, max: Infinity }
    };

    // variables to represent user choices
    const selectedHeight = req.body.height;
    const selectedWeight = req.body.weight;
    const selectedColor = req.body.color;
    const selectedTrainability = req.body.size;
    const selectedTraits = Array.isArray(req.body.traits) ? req.body.traits : [req.body.traits].filter(Boolean);

    // const selectedTraits = [];
    // selectedTraits.push(selectedTrait);

    // Check if selectedHeight or selectedWeight is null
    if (selectedHeight == null || selectedWeight == null) {
        res.render('filtersError');
        return;
    }

    console.log(selectedTraits)
    // grab everything from every breed in database
    const filteredBreeds = await breedsCollection
        .find()
        .project({
            Breed: 1,
            CountryOfOrigin: 1,
            FurColor: 1,
            HeightLowInches: 1,
            HeightHighInches: 1,
            WeightLowLbs: 1,
            WeightHighLbs: 1,
            RepsLower: 1,
            RepsUpper: 1,
            ColorOfEyes: 1,
            LongevityYrs: 1,
            CharacterTraits: 1,
            CommonHealthProblems: 1
        })
        .toArray();

    // filter out every breed 
    const filteredResults = filteredBreeds.filter((breed) => {
        const heightLow = parseInt(breed.HeightLowInches);
        const heightHigh = parseInt(breed.HeightHighInches);
        const weightLow = parseInt(breed.WeightLowLbs);
        const weightHigh = parseInt(breed.WeightHighLbs);
        const averageHeight = (heightLow + heightHigh) / 2;
        const averageWeight = (weightLow + weightHigh) / 2;

        const heightRange = heightRanges[selectedHeight];
        const weightRange = weightRanges[selectedWeight];

        // Check if the breed falls within the selected height and weight range
        if (
            averageHeight >= heightRange.min &&
            averageHeight <= heightRange.max &&
            averageWeight >= weightRange.min &&
            averageWeight <= weightRange.max
        ) {
            // If both color and trainability are selected, filter by both
            if (selectedColor && selectedTrainability) {
                const furColors = breed.FurColor.split(',').map((color) => color.trim().toLowerCase());
                const trainabilityRange = trainabilityLevels[selectedTrainability.toLowerCase()];
                const repsLower = parseInt(breed.RepsLower);
                const repsUpper = parseInt(breed.RepsUpper);
                const averageReps = Math.round((repsLower + repsUpper) / 2);
                const breedTraits = breed.CharacterTraits.toLowerCase().split(',').map((trait) => trait.trim());
                // console.log(breedTraits)

                // check if a color matches
                if (
                    !furColors.includes(selectedColor.toLowerCase()) ||
                    averageReps < trainabilityRange.min ||
                    averageReps > trainabilityRange.max ||
                    !selectedTraits.every((trait) => breedTraits.includes(trait.toLowerCase()))
                ) {
                    return false;
                }
            }
            // If only color is selected, filter by color
            else if (selectedColor) {
                const furColors = breed.FurColor.split(',').map((color) => color.trim().toLowerCase());
                if (!furColors.includes(selectedColor.toLowerCase())) {
                    return false;
                }
            }
            // If only trainability is selected, filter by trainability
            else if (selectedTrainability) {
                const trainabilityRange = trainabilityLevels[selectedTrainability.toLowerCase()];
                const repsLower = parseInt(breed.RepsLower);
                const repsUpper = parseInt(breed.RepsUpper);
                const averageReps = Math.round((repsLower + repsUpper) / 2);
                const breedTraits = breed.CharacterTraits.toLowerCase().split(',').map((trait) => trait.trim());

                if (
                    averageReps < trainabilityRange.min ||
                    averageReps > trainabilityRange.max ||
                    !selectedTraits.every((trait) => breedTraits.includes(trait.toLowerCase()))
                ) {
                    return false;
                }
            }

            // If traits are selected, filter by traits
            if (selectedTraits.length > 0) {
                const breedTraits = breed.CharacterTraits.split(',').map((trait) => trait.trim().toLowerCase());

                //console.log(breedTraits)
                // Check if at least one of the selected traits exists in the breed's traits
                if (!selectedTraits.some((trait) => breedTraits.includes(trait.toLowerCase()))) {
                    return false;
                }
            }

            return true;
        }

        return false;
    });

    if (filteredResults.length > 0) {
        res.render('results', { dogs: filteredResults });
    } else {
        res.render('retryFilters');
    }
});







app.get('/description', async (req, res) => {

    const itemName = req.query.item;
    const breed = await getBreedByName(itemName);

    let message = "";
    if (req.session.bookmarkFeedback) {
        message = req.session.bookmarkFeedback;
        delete req.session.bookmarkFeedback;
    }

    res.render('description', {
        name: req.session.name, dog: breed,
        bookmarkFeedback: message
    });
});

async function getBreedByName(itemName) {
    try {
        const query = { Breed: itemName };

        const dog = await breedsCollection.findOne(query);
        return dog;
    } catch (error) {
        console.log(error);
    }
}

// easter egg page
app.get('/easterEgg', (req, res) => {
    res.render('easterEgg');
});

app.get('/easterEgg2', (req, res) => {
    res.render('easterEgg2');
});

app.get('/bookmark', async (req, res) => {
    if (req.session.loggedIn) {

        const user = await userCollection.findOne({ name: req.session.name });
        let message = "";
        if (req.session.bookmarkFeedback) {
            message = req.session.bookmarkFeedback;
            delete req.session.bookmarkFeedback;
        }
        res.render('bookmark', {
            name: req.session.name, user: user,
            bookmarkFeedback: message
        }
        );

    } else {
        res.redirect('/login');
    }
});

app.get('/addOrRemoveBookmark', async (req, res) => {
    console.log("Clicked on bookmark button");
    const dogBreed = req.query.item;
    console.log(dogBreed);

    const user = await userCollection.findOne({ name: req.session.name });
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
            return { index: i, found: true };

        }
    }
    if (availableIndex == 0) {
        availableIndex = i;
    }
    console.log("Not bookmarked!");

    return { index: availableIndex, found: false };

};

async function addBookmark(sessionName, dogBreed, index) {
    await userCollection.updateOne({ name: sessionName },
        { $set: { [`bookmark${index}`]: dogBreed } }
    );

    console.log("Added bookmark for: " + dogBreed + " at index: " + index);
};

async function removeBookmark(sessionName, index) {

    const bookmarkFeedback = `Removed bookmark for: ${`bookmark${index}`} at index: ${index}`

    await userCollection.updateOne({ name: sessionName },
        { $set: { [`bookmark${index}`]: "." } }

    );
    console.log(bookmarkFeedback);
};

app.get('/dogsGood', (req, res) => {
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
    res.render('dogsGood', { shopNames: shopNames, shopLinks: shopLinks });
});

app.get('/compare', async (req, res) => {
    try {
        const breeds = await breedsCollection.find().toArray();
        res.render('compare', { breeds });
        console.log(breeds);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/dogTrivia', async (req, res) => {
    const randomDogs = await breedsCollection.aggregate([
        { $sample: { size: 4 } },
        { $project: { _id: 0, Breed: 1 } }
    ]).toArray();

    let result = [];
    await randomDogs.map(dog => { result.push(dog.Breed) });

    const correctAnswer = result[Math.floor(Math.random() * result.length)];
    res.render('dogTrivia', { result: result, correctAnswer: correctAnswer });
});

app.get('/dogTriviaStart', (req, res) => {
    res.render('dogTriviaStart');
})

app.get('/dogTriviaLost', (req, res) => {
    const correctAnswer = '';
    res.render('dogTriviaLost', { correctAnswer: req.session.correctAnswer });
})


app.get('*', (req, res) => {
    res.status(404);
    res.render('404Page');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}); 
