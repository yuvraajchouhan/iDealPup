# 2800-202310-BBY18
This is the readme file for Comp2800 Project 2 of team Bby18

Table of Contents
- Project Title
- Project Description
- Team Members
- Technologies used
- How to Install and Run the Project
- Product Features
- Our use of AI
- List of File Contents of Folder



1. Project Title:

iDealPup



1. Project Description:

We are team BBY-18 and we are developing an app called iDealPup, designed to help prospective dog owners find the perfect pet by selecting preferable dog traits and getting matched with the ideal breeds for them through the use of AI’s assistance, and Kaggle’s datasets.



3. Team Members:
- Gursidh Sandhu (2B)           gsandhu168@my.bcit.ca
- Yuvraaj Chouhan (2D)          ychouhan@my.bcit.ca
- Sean Dean (1B)                sdean36@my.bcit.ca
- Hoa Nguyen (1B)               tnguyen568@my.bcit.ca
- Joseph Campbell (1C)          jcampbell172@bcit.ca



4. Technologies used

Front end:                            
- Boostrap

Back end:                           
- MongoDB Atlas



5. How to Install and Run the Project:

5.1: Setting up your local repo

Assumming you have already accepted your invitation to the repo, clone it and navigate to the project location in your command line.
- Move to the 'dev' branch using the command [git checkout dev]
- Create a feature branch for yourself using [git checkout -b <your_branch>]. All your work will be initially stored here.
- To confirm if you are on the correct branch, use the commands [git branch -a] or [git status].

5.2: Submitting your work

At the end of each sprint, merge your repo into the 'dev' branch (not 'main').

From the command terminal, enter the following prompts;
- git add .
- git commit -m "Commit_message_goes_here."
- git push
- git checkout dev
- git pull                    (get the latest gitHub dev branch files)
- git merge <your_branch>

Note: As a courtesy, inform your teammates you are going to merge BEFORE you do it. This prevents any accidental conflicts that ay occur.

5.3: Mandatory developer tools

You will need the following node modules
- express
- express-session
- connect-mongo
- dotenv
- joi
- ejs
- nodemon
- bcrypt
- nodemailer

You will also need to obtain the session secrets needed to access the database to create your '.env' file (this is because the file is not added to the repo). Obtain this from a senior developer.
  
Note: To install node modules, use the command [npm i <module_name>] e.g. [npm i express]. Some install multiple nodules in a single command e.g. [npm i express express-session dotenv ...]

5.4: Recommended tool

We suggest you install the following to make your work easier;
- SourceTree (an alternative to dealing woth the repo from the terminal)
- Studio3T (to work with the datbase outside a browser)
- Visual Studio Code (as well as a javascript and html formatter plugin)



1. Product Features:

The core features of the app include the following;

6.1: Search breeds
- The user may select from a list of breeds to view their details.
- Select "Search Breeds" at the top of the page.
- Scrool through the list and tap on the dog of oyur choice.
- Click "Learn More" to view details.

6.2: Filter Breeds

The user may also find suggested breeds based on their traits
- Select "Filter Breeds" at the top of the page.
- In the page that appears, click the check boxes with the features you want to base on and press "Search With These Filters".
- From the dogs that appear, click "Learn More" on one that catches your ee to view details.

6.3: Compare Breeds

The user may compare breed details side by side to make their choice
- Click the "Compare" icon at the bottom of the page (center left).
- From the dropdown menus' select the breeds you want to compare with.

6.4: Other features

Bookmarks:
- The user may save a dog to view their details later.

Easter eggs:
- Easter egg 1: On teh home page, click the app logo in the top right 18 times.
- Easter egg 2: On the easter egg 1 page, click the image that appears 23 times.

Dog Trivia:
- The user may take a quiz to test their knowledge on dogs to pass the time.

6.5: Features that were not developed
- Services-near-you
- Suggested products



7. Our use of AI:

Our goal with this project was to implement AI during its development. Contrary to what you might think, we did not end up AI actively used in the application itself.

It was still used in development though. ChatGPT had a large role to play in our code structure, especially in the development for the logic of the filter and compare pages.

It was also used in aspects other than coding. Rather than use AI to handle the our datasets, ChatGPT suggested we merge our datasets to remove any redundant data, convert the csv files to json, and store that information in our database.

The main reason we ended upi not actively using AI in the app itself, is because the time it would have taken to suitably study and train the AI to do what was needed (with our limited knowledge on the matter) would have made development take longer than we would have had time for.



8. List of File Contents of Folder:

2800-202310-BBY18
├── .env
├── .gitignore
├── databaseConnection.js
├── filters
├── index.js
├── package-lock.json
├── package.json
├── Procfile
├── README.md
├── utils.js
├── css
│   └── compare.css
├── js
│   └── filters.js
├── node_modules (folder)
├── public
│   ├── appBackground.jpg
│   ├── bookmark.svg
│   ├── Bosleys.jpg
│   ├── compare.svg
│   ├── dogsGood.svg
│   ├── eye.svg
│   ├── home.svg
│   ├── iDealPup_Logo.png
│   ├── logo.png
│   ├── PetSmart.jpg
│   ├── profile.svg
│   ├── Tisol.jpg
│   └── pups
│       ├── Affenpinscher.png
│       ├── Akita.png
│       ├── Australian Cattle Dog.png
│       ├── Australian Shepherd.png
│       ├── Australian Terrier.png
│       ├── Basenji.png
│       ├── Basset Hound.png
│       ├── Beagle.png
│       ├── Belgian Malinois.png
│       ├── Belgian Tervuren.png
│       ├── Bichon Frise.png
│       ├── Bloodhound.png
│       ├── Border Collie.png
│       ├── Border Terrier.png
│       ├── Borzoi.png
│       ├── Boston Terrier.png
│       ├── Boxer.png
│       ├── Brussels Griffon.png
│       ├── Bull Terrier.png
│       ├── Cairn Terrier.png
│       ├── Cardigan Welsh Corgi.png
│       ├── Chesapeake Bay Retriever.png
│       ├── Chihuahua.png
│       ├── Chinese Crested.png
│       ├── Dachshund.png
│       ├── Doberman Pinscher.png
│       ├── English Setter.png
│       ├── English Springer Spaniel.png
│       ├── English Toy Spaniel.png
│       ├── Field Spaniel.png
│       ├── Finnish Spitz.png
│       ├── French Bulldog.png
│       ├── Golden Retriever.png
│       ├── Gordon Setter.png
│       ├── Great Dane.png
│       ├── Great Pyrenees.png
│       ├── Greyhound.png
│       ├── Harrier.png
│       ├── Irish Setter.png
│       ├── Irish Terrier.png
│       ├── Irish Water Spaniel.png
│       ├── Irish Wolfhound.png
│       ├── Italian Greyhound.png
│       ├── Japanese Chin.png
│       ├── Keeshond.png
│       ├── Kerry Blue Terrier.png
│       ├── Kuvasz.png
│       ├── Labrador Retriever.png
│       ├── Maltese.png
│       ├── Mastiff.png
│       ├── Newfoundland.png
│       ├── Papillon.png
│       ├── Pharaoh Hound.png
│       ├── Pointer.png
│       ├── Pomeranian.png
│       ├── Pug.png
│       ├── Rhodesian Ridgeback.png
│       ├── Rottweiler.png
│       ├── Saluki.png
│       ├── Samoyed.png
│       ├── Scottish Deerhound.png
│       ├── Shih Tzu.png
│       ├── Siberian Husky.png
│       ├── Staffordshire Bull Terrier.png
│       ├── Vizsla.png
│       ├── Weimaraner.png
│       ├── Welsh Springer Spaniel.png
│       ├── Welsh Terrier.png
│       ├── West Highland White Terrier.png
│       ├── Whippet.png
│       └── Wirehaired Pointing Griffon.png
└── views
    ├── 404Page.ejs
    ├── bookmark.ejs
    ├── changePassword.ejs
    ├── compare.ejs
    ├── description.ejs
    ├── dogsGood.ejs
    ├── dogTrivia.ejs
    ├── dogTriviaLost.ejs
    ├── dogTriviaStart.ejs
    ├── easterEgg.ejs
    ├── easterEgg2.ejs
    ├── emailSent.ejs
    ├── filters.ejs
    ├── forgotPassword.ejs
    ├── home.ejs
    ├── landingPage.ejs
    ├── login.ejs
    ├── passwordUpdated.ejs
    ├── profile.ejs
    ├── resetPassword.ejs
    ├── results.ejs
    ├── retryFilters.ejs
    ├── search.ejs
    ├── signup.ejs
    ├── submitUser.ejs
    └── templates
        ├── bookmarkCard.ejs
        ├── dogGoodsCard.ejs
        ├── footer.ejs
        ├── header.ejs
        └── homeDogs.ejs
