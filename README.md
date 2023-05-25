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
- iDealPup



2. Project Description:
- We are team BBY-18 and we are developing an app called iDealPup, designed to help prospective dog owners find the perfect pet by selecting preferable dog traits and getting matched with the ideal breeds for them through the use of AI’s assistance, and Kaggle’s datasets.



3. Team Members:
- Gursidh Sandhu (2B)           gsandhu168@my.bcit.ca
- Yuvraaj Chouhan (2D)          ychouhan@my.bcit.ca
- Sean Dean (1B)                sdean36@my.bcit.ca
- Hoa Nguyen (1B)               tnguyen568@my.bcit.ca
- Joseph Campbell (1C)          jcampbell172@bcit.ca



1. Technologies used
Front end:                            
- Boostrap

Back end:                           
- MongoDB Atlas



1. How to Install and Run the Project:
5.1: Setting up your local repo
- Assumming you have already accepted your invitation to the repo, clone it and navigate to the project location in your command line.
- Move to the 'dev' branch using the command [git checkout dev]
- Create a feature branch for yourself using [git checkout -b <your_branch>]. All your work will be initially stored here.
- To confirm if you are on the correct branch, use the commands [git branch -a] or [git status].

5.2: Submitting your work
- At the end of each sprint, merge your repo into the 'dev' branch (not 'main').

From the command terminal, enetr the following prompts;
- git add .
- git commit -m "<Commit_message_goes_here>."
- git push
- git checkout dev
- git pull                    (get the latest gitHub dev branch files)
- git merge <your_branch>

Note: As a courtesy, inform your teammates you are going to merge BEFORE you do it. This prevents any accidental conflicts that ay occur.

5.3: Mandatory developer tools
- You will need the following node modules
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
- The core features of the app include the following;

6.1: Search breeds
- The user may select from a list of breeds to view their details.
- Select "Search Breeds" at the top of the page.
- Scrool through the list and tap on the dog of oyur choice.
- Click "Learn More" to view details.

6.2: Filter Breeds
- The user may also find suggested breeds based on their traits
- Select "Filter Breeds" at the top of the page.
- In the page that appears, click the check boxes with the features you want to base on and press "Search With These Filters".
- From the dogs that appear, click "Learn More" on one that catches your ee to view details.

6.3: Compare Breeds
- The user may compare breed details side by side to make their choice
- Click the "Compare" icon at the bottom of the page (center left).
- From the dropdown menus' select the breeds you want to compare with.

6.4: Other features
- Bookmarks:
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
- Our goal with this project was to implement AI during its development. Contrary to what you might think, we did not end up AI actively used in the application itself.

It was still used in development though. ChatGPT had a large role to play in our code structure, especially in the development for the logic of the filter and compare pages.

It was also used in aspects other than coding. Rather than use AI to handle the our datasets, ChatGPT suggested we merge our datasets to remove any redundant data, convert the csv files to json, and store that information in our database.

The main reason we ended upi not actively using AI in the app itself, is because the time it would have taken to suitably study and train the AI to do what was needed (with our limited knowledge on the matter) would have made development take longer than we would have had time for.



8. List of File Contents of Folder:
2800-202310-BBY18                  [root folder (repo name)]
|   .env                           [not in the repo]
|   .gitignore
|   databaseConnection.js
|   Directory.txt
|   filters
|   index.js
|   package-lock.json              [not in the repo]
|   package.json
|   Procfile
|   README.md
|   Tree.txt
|   utils.js
|   
+---css
|       compare.css
|       
+---js
|       filters.js
|       
+---node_modules                   [not in the repo]
|   |   .package-lock.json
|   |   
|   +---.bin
|   |       color-support
|   |       color-support.cmd
|   |       color-support.ps1
|   |       ejs
|   |       ejs.cmd
|   |       ejs.ps1
|   |       jake
|   |       jake.cmd
|   |       jake.ps1
|   |       mime
|   |       mime.cmd
|   |       mime.ps1
|   |       mkdirp
|   |       mkdirp.cmd
|   |       mkdirp.ps1
|   |       node-pre-gyp
|   |       node-pre-gyp.cmd
|   |       node-pre-gyp.ps1
|   |       nodemon
|   |       nodemon.cmd
|   |       nodemon.ps1
|   |       nodetouch
|   |       nodetouch.cmd
|   |       nodetouch.ps1
|   |       nopt
|   |       nopt.cmd
|   |       nopt.ps1
|   |       rimraf
|   |       rimraf.cmd
|   |       rimraf.ps1
|   |       semver
|   |       semver.cmd
|   |       semver.ps1
|   |       
|   +---@hapi
|   |   +---hoek
|   |   |   |   LICENSE.md
|   |   |   |   package.json
|   |   |   |   README.md
|   |   |   |   
|   |   |   \---lib
|   |   |           applyToDefaults.js
|   |   |           assert.js
|   |   |           bench.js
|   |   |           block.js
|   |   |           clone.js
|   |   |           contain.js
|   |   |           deepEqual.js
|   |   |           error.js
|   |   |           escapeHeaderAttribute.js
|   |   |           escapeHtml.js
|   |   |           escapeJson.js
|   |   |           escapeRegex.js
|   |   |           flatten.js
|   |   |           ignore.js
|   |   |           index.d.ts
|   |   |           index.js
|   |   |           intersect.js
|   |   |           isPromise.js
|   |   |           merge.js
|   |   |           once.js
|   |   |           reach.js
|   |   |           reachTemplate.js
|   |   |           stringify.js
|   |   |           types.js
|   |   |           utils.js
|   |   |           wait.js
|   |   |           
|   |   \---topo
|   |       |   LICENSE.md
|   |       |   package.json
|   |       |   README.md
|   |       |   
|   |       \---lib
|   |               index.d.ts
|   |               index.js
|   |               
|   +---@mapbox
|   |   \---node-pre-gyp
|   |       |   CHANGELOG.md
|   |       |   contributing.md
|   |       |   LICENSE
|   |       |   package.json
|   |       |   README.md
|   |       |   
|   |       +---bin
|   |       |       node-pre-gyp
|   |       |       node-pre-gyp.cmd
|   |       |       
|   |       \---lib
|   |           |   build.js
|   |           |   clean.js
|   |           |   configure.js
|   |           |   info.js
|   |           |   install.js
|   |           |   main.js
|   |           |   node-pre-gyp.js
|   |           |   package.js
|   |           |   pre-binding.js
|   |           |   publish.js
|   |           |   rebuild.js
|   |           |   reinstall.js
|   |           |   reveal.js
|   |           |   testbinary.js
|   |           |   testpackage.js
|   |           |   unpublish.js
|   |           |   
|   |           \---util
|   |               |   abi_crosswalk.json
|   |               |   compile.js
|   |               |   handle_gyp_opts.js
|   |               |   napi.js
|   |               |   s3_setup.js
|   |               |   versioning.js
|   |               |   
|   |               \---nw-pre-gyp
|   |                       index.html
|   |                       package.json
|   |                       
|   +---@sideway
|   |   +---address
|   |   |   |   LICENSE.md
|   |   |   |   package.json
|   |   |   |   README.md
|   |   |   |   
|   |   |   \---lib
|   |   |           decode.js
|   |   |           domain.js
|   |   |           email.js
|   |   |           errors.js
|   |   |           index.d.ts
|   |   |           index.js
|   |   |           ip.js
|   |   |           tlds.js
|   |   |           uri.js
|   |   |           
|   |   +---formula
|   |   |   |   LICENSE.md
|   |   |   |   package.json
|   |   |   |   README.md
|   |   |   |   
|   |   |   \---lib
|   |   |           index.d.ts
|   |   |           index.js
|   |   |           
|   |   \---pinpoint
|   |       |   LICENSE.md
|   |       |   package.json
|   |       |   README.md
|   |       |   
|   |       \---lib
|   |               index.d.ts
|   |               index.js
|   |               
|   +---@types
|   |   +---node
|   |   |   |   assert.d.ts
|   |   |   |   async_hooks.d.ts
|   |   |   |   buffer.d.ts
|   |   |   |   child_process.d.ts
|   |   |   |   cluster.d.ts
|   |   |   |   console.d.ts
|   |   |   |   constants.d.ts
|   |   |   |   crypto.d.ts
|   |   |   |   dgram.d.ts
|   |   |   |   diagnostics_channel.d.ts
|   |   |   |   dns.d.ts
|   |   |   |   dom-events.d.ts
|   |   |   |   domain.d.ts
|   |   |   |   events.d.ts
|   |   |   |   fs.d.ts
|   |   |   |   globals.d.ts
|   |   |   |   globals.global.d.ts
|   |   |   |   http.d.ts
|   |   |   |   http2.d.ts
|   |   |   |   https.d.ts
|   |   |   |   index.d.ts
|   |   |   |   inspector.d.ts
|   |   |   |   LICENSE
|   |   |   |   module.d.ts
|   |   |   |   net.d.ts
|   |   |   |   os.d.ts
|   |   |   |   package.json
|   |   |   |   path.d.ts
|   |   |   |   perf_hooks.d.ts
|   |   |   |   process.d.ts
|   |   |   |   punycode.d.ts
|   |   |   |   querystring.d.ts
|   |   |   |   readline.d.ts
|   |   |   |   README.md
|   |   |   |   repl.d.ts
|   |   |   |   stream.d.ts
|   |   |   |   string_decoder.d.ts
|   |   |   |   test.d.ts
|   |   |   |   timers.d.ts
|   |   |   |   tls.d.ts
|   |   |   |   trace_events.d.ts
|   |   |   |   tty.d.ts
|   |   |   |   url.d.ts
|   |   |   |   util.d.ts
|   |   |   |   v8.d.ts
|   |   |   |   vm.d.ts
|   |   |   |   wasi.d.ts
|   |   |   |   worker_threads.d.ts
|   |   |   |   zlib.d.ts
|   |   |   |   
|   |   |   +---assert
|   |   |   |       strict.d.ts
|   |   |   |       
|   |   |   +---dns
|   |   |   |       promises.d.ts
|   |   |   |       
|   |   |   +---fs
|   |   |   |       promises.d.ts
|   |   |   |       
|   |   |   +---readline
|   |   |   |       promises.d.ts
|   |   |   |       
|   |   |   +---stream
|   |   |   |       consumers.d.ts
|   |   |   |       promises.d.ts
|   |   |   |       web.d.ts
|   |   |   |       
|   |   |   +---timers
|   |   |   |       promises.d.ts
|   |   |   |       
|   |   |   \---ts4.8
|   |   |       |   assert.d.ts
|   |   |       |   async_hooks.d.ts
|   |   |       |   buffer.d.ts
|   |   |       |   child_process.d.ts
|   |   |       |   cluster.d.ts
|   |   |       |   console.d.ts
|   |   |       |   constants.d.ts
|   |   |       |   crypto.d.ts
|   |   |       |   dgram.d.ts
|   |   |       |   diagnostics_channel.d.ts
|   |   |       |   dns.d.ts
|   |   |       |   dom-events.d.ts
|   |   |       |   domain.d.ts
|   |   |       |   events.d.ts
|   |   |       |   fs.d.ts
|   |   |       |   globals.d.ts
|   |   |       |   globals.global.d.ts
|   |   |       |   http.d.ts
|   |   |       |   http2.d.ts
|   |   |       |   https.d.ts
|   |   |       |   index.d.ts
|   |   |       |   inspector.d.ts
|   |   |       |   module.d.ts
|   |   |       |   net.d.ts
|   |   |       |   os.d.ts
|   |   |       |   path.d.ts
|   |   |       |   perf_hooks.d.ts
|   |   |       |   process.d.ts
|   |   |       |   punycode.d.ts
|   |   |       |   querystring.d.ts
|   |   |       |   readline.d.ts
|   |   |       |   repl.d.ts
|   |   |       |   stream.d.ts
|   |   |       |   string_decoder.d.ts
|   |   |       |   test.d.ts
|   |   |       |   timers.d.ts
|   |   |       |   tls.d.ts
|   |   |       |   trace_events.d.ts
|   |   |       |   tty.d.ts
|   |   |       |   url.d.ts
|   |   |       |   util.d.ts
|   |   |       |   v8.d.ts
|   |   |       |   vm.d.ts
|   |   |       |   wasi.d.ts
|   |   |       |   worker_threads.d.ts
|   |   |       |   zlib.d.ts
|   |   |       |   
|   |   |       +---assert
|   |   |       |       strict.d.ts
|   |   |       |       
|   |   |       +---dns
|   |   |       |       promises.d.ts
|   |   |       |       
|   |   |       +---fs
|   |   |       |       promises.d.ts
|   |   |       |       
|   |   |       +---readline
|   |   |       |       promises.d.ts
|   |   |       |       
|   |   |       +---stream
|   |   |       |       consumers.d.ts
|   |   |       |       promises.d.ts
|   |   |       |       web.d.ts
|   |   |       |       
|   |   |       \---timers
|   |   |               promises.d.ts
|   |   |               
|   |   +---webidl-conversions
|   |   |       index.d.ts
|   |   |       LICENSE
|   |   |       package.json
|   |   |       README.md
|   |   |       
|   |   \---whatwg-url
|   |       |   index.d.ts
|   |       |   LICENSE
|   |       |   package.json
|   |       |   README.md
|   |       |   webidl2js-wrapper.d.ts
|   |       |   
|   |       \---dist
|   |               URL-impl.d.ts
|   |               URL.d.ts
|   |               URLSearchParams-impl.d.ts
|   |               URLSearchParams.d.ts
|   |               
|   +---abbrev
|   |       abbrev.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---accepts
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---agent-base
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---dist
|   |   |   \---src
|   |   |           index.d.ts
|   |   |           index.js
|   |   |           index.js.map
|   |   |           promisify.d.ts
|   |   |           promisify.js
|   |   |           promisify.js.map
|   |   |           
|   |   \---src
|   |           index.ts
|   |           promisify.ts
|   |           
|   +---ansi-regex
|   |       index.d.ts
|   |       index.js
|   |       license
|   |       package.json
|   |       readme.md
|   |       
|   +---ansi-styles
|   |       index.d.ts
|   |       index.js
|   |       license
|   |       package.json
|   |       readme.md
|   |       
|   +---anymatch
|   |       index.d.ts
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---aproba
|   |       CHANGELOG.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---are-we-there-yet
|   |   |   LICENSE.md
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---lib
|   |           index.js
|   |           tracker-base.js
|   |           tracker-group.js
|   |           tracker-stream.js
|   |           tracker.js
|   |           
|   +---array-flatten
|   |       array-flatten.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---asn1.js
|   |   |   .eslintrc.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---lib
|   |       |   asn1.js
|   |       |   
|   |       \---asn1
|   |           |   api.js
|   |           |   
|   |           +---base
|   |           |       buffer.js
|   |           |       index.js
|   |           |       node.js
|   |           |       reporter.js
|   |           |       
|   |           +---constants
|   |           |       der.js
|   |           |       index.js
|   |           |       
|   |           +---decoders
|   |           |       der.js
|   |           |       index.js
|   |           |       pem.js
|   |           |       
|   |           \---encoders
|   |                   der.js
|   |                   index.js
|   |                   pem.js
|   |                   
|   +---async
|   |   |   all.js
|   |   |   allLimit.js
|   |   |   allSeries.js
|   |   |   any.js
|   |   |   anyLimit.js
|   |   |   anySeries.js
|   |   |   apply.js
|   |   |   applyEach.js
|   |   |   applyEachSeries.js
|   |   |   asyncify.js
|   |   |   auto.js
|   |   |   autoInject.js
|   |   |   bower.json
|   |   |   cargo.js
|   |   |   cargoQueue.js
|   |   |   CHANGELOG.md
|   |   |   compose.js
|   |   |   concat.js
|   |   |   concatLimit.js
|   |   |   concatSeries.js
|   |   |   constant.js
|   |   |   detect.js
|   |   |   detectLimit.js
|   |   |   detectSeries.js
|   |   |   dir.js
|   |   |   doDuring.js
|   |   |   doUntil.js
|   |   |   doWhilst.js
|   |   |   during.js
|   |   |   each.js
|   |   |   eachLimit.js
|   |   |   eachOf.js
|   |   |   eachOfLimit.js
|   |   |   eachOfSeries.js
|   |   |   eachSeries.js
|   |   |   ensureAsync.js
|   |   |   every.js
|   |   |   everyLimit.js
|   |   |   everySeries.js
|   |   |   filter.js
|   |   |   filterLimit.js
|   |   |   filterSeries.js
|   |   |   find.js
|   |   |   findLimit.js
|   |   |   findSeries.js
|   |   |   flatMap.js
|   |   |   flatMapLimit.js
|   |   |   flatMapSeries.js
|   |   |   foldl.js
|   |   |   foldr.js
|   |   |   forEach.js
|   |   |   forEachLimit.js
|   |   |   forEachOf.js
|   |   |   forEachOfLimit.js
|   |   |   forEachOfSeries.js
|   |   |   forEachSeries.js
|   |   |   forever.js
|   |   |   groupBy.js
|   |   |   groupByLimit.js
|   |   |   groupBySeries.js
|   |   |   index.js
|   |   |   inject.js
|   |   |   LICENSE
|   |   |   log.js
|   |   |   map.js
|   |   |   mapLimit.js
|   |   |   mapSeries.js
|   |   |   mapValues.js
|   |   |   mapValuesLimit.js
|   |   |   mapValuesSeries.js
|   |   |   memoize.js
|   |   |   nextTick.js
|   |   |   package.json
|   |   |   parallel.js
|   |   |   parallelLimit.js
|   |   |   priorityQueue.js
|   |   |   queue.js
|   |   |   race.js
|   |   |   README.md
|   |   |   reduce.js
|   |   |   reduceRight.js
|   |   |   reflect.js
|   |   |   reflectAll.js
|   |   |   reject.js
|   |   |   rejectLimit.js
|   |   |   rejectSeries.js
|   |   |   retry.js
|   |   |   retryable.js
|   |   |   select.js
|   |   |   selectLimit.js
|   |   |   selectSeries.js
|   |   |   seq.js
|   |   |   series.js
|   |   |   setImmediate.js
|   |   |   some.js
|   |   |   someLimit.js
|   |   |   someSeries.js
|   |   |   sortBy.js
|   |   |   timeout.js
|   |   |   times.js
|   |   |   timesLimit.js
|   |   |   timesSeries.js
|   |   |   transform.js
|   |   |   tryEach.js
|   |   |   unmemoize.js
|   |   |   until.js
|   |   |   waterfall.js
|   |   |   whilst.js
|   |   |   wrapSync.js
|   |   |   
|   |   +---dist
|   |   |       async.js
|   |   |       async.min.js
|   |   |       async.mjs
|   |   |       
|   |   \---internal
|   |           applyEach.js
|   |           asyncEachOfLimit.js
|   |           awaitify.js
|   |           breakLoop.js
|   |           consoleFunc.js
|   |           createTester.js
|   |           DoublyLinkedList.js
|   |           eachOfLimit.js
|   |           filter.js
|   |           getIterator.js
|   |           Heap.js
|   |           initialParams.js
|   |           isArrayLike.js
|   |           iterator.js
|   |           map.js
|   |           once.js
|   |           onlyOnce.js
|   |           parallel.js
|   |           promiseCallback.js
|   |           queue.js
|   |           range.js
|   |           reject.js
|   |           setImmediate.js
|   |           withoutIndex.js
|   |           wrapAsync.js
|   |           
|   +---balanced-match
|   |   |   index.js
|   |   |   LICENSE.md
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---.github
|   |           FUNDING.yml
|   |           
|   +---bcrypt
|   |   |   .editorconfig
|   |   |   .travis.yml
|   |   |   appveyor.yml
|   |   |   bcrypt-5.1.0.tgz
|   |   |   bcrypt.js
|   |   |   binding.gyp
|   |   |   CHANGELOG.md
|   |   |   ISSUE_TEMPLATE.md
|   |   |   LICENSE
|   |   |   Makefile
|   |   |   package.json
|   |   |   promises.js
|   |   |   README.md
|   |   |   SECURITY.md
|   |   |   test_alpine.sh
|   |   |   
|   |   +---.github
|   |   |   \---workflows
|   |   |           ci.yaml
|   |   |           
|   |   +---examples
|   |   |       async_compare.js
|   |   |       forever_gen_salt.js
|   |   |       
|   |   +---lib
|   |   |   \---binding
|   |   |       \---napi-v3
|   |   |               bcrypt_lib.node
|   |   |               
|   |   +---src
|   |   |       bcrypt.cc
|   |   |       bcrypt_node.cc
|   |   |       blowfish.cc
|   |   |       node_blf.h
|   |   |       
|   |   \---test
|   |           async.test.js
|   |           implementation.test.js
|   |           promise.test.js
|   |           repetitions.test.js
|   |           sync.test.js
|   |           
|   +---binary-extensions
|   |       binary-extensions.json
|   |       binary-extensions.json.d.ts
|   |       index.d.ts
|   |       index.js
|   |       license
|   |       package.json
|   |       readme.md
|   |       
|   +---bn.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---lib
|   |           bn.js
|   |           
|   +---body-parser
|   |   |   HISTORY.md
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   SECURITY.md
|   |   |   
|   |   +---lib
|   |   |   |   read.js
|   |   |   |   
|   |   |   \---types
|   |   |           json.js
|   |   |           raw.js
|   |   |           text.js
|   |   |           urlencoded.js
|   |   |           
|   |   \---node_modules
|   |       +---debug
|   |       |   |   .coveralls.yml
|   |       |   |   .eslintrc
|   |       |   |   .npmignore
|   |       |   |   .travis.yml
|   |       |   |   CHANGELOG.md
|   |       |   |   component.json
|   |       |   |   karma.conf.js
|   |       |   |   LICENSE
|   |       |   |   Makefile
|   |       |   |   node.js
|   |       |   |   package.json
|   |       |   |   README.md
|   |       |   |   
|   |       |   \---src
|   |       |           browser.js
|   |       |           debug.js
|   |       |           index.js
|   |       |           inspector-log.js
|   |       |           node.js
|   |       |           
|   |       \---ms
|   |               index.js
|   |               license.md
|   |               package.json
|   |               readme.md
|   |               
|   +---brace-expansion
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---braces
|   |   |   CHANGELOG.md
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---lib
|   |           compile.js
|   |           constants.js
|   |           expand.js
|   |           parse.js
|   |           stringify.js
|   |           utils.js
|   |           
|   +---bson
|   |   |   bson.d.ts
|   |   |   LICENSE.md
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---etc
|   |   |       prepare.js
|   |   |       
|   |   +---lib
|   |   |       binary.d.ts
|   |   |       binary.d.ts.map
|   |   |       bson.bundle.js
|   |   |       bson.bundle.js.map
|   |   |       bson.cjs
|   |   |       bson.cjs.map
|   |   |       bson.d.ts
|   |   |       bson.d.ts.map
|   |   |       bson.mjs
|   |   |       bson.mjs.map
|   |   |       bson_value.d.ts
|   |   |       bson_value.d.ts.map
|   |   |       code.d.ts
|   |   |       code.d.ts.map
|   |   |       constants.d.ts
|   |   |       constants.d.ts.map
|   |   |       db_ref.d.ts
|   |   |       db_ref.d.ts.map
|   |   |       decimal128.d.ts
|   |   |       decimal128.d.ts.map
|   |   |       double.d.ts
|   |   |       double.d.ts.map
|   |   |       error.d.ts
|   |   |       error.d.ts.map
|   |   |       extended_json.d.ts
|   |   |       extended_json.d.ts.map
|   |   |       index.d.ts
|   |   |       index.d.ts.map
|   |   |       int_32.d.ts
|   |   |       int_32.d.ts.map
|   |   |       long.d.ts
|   |   |       long.d.ts.map
|   |   |       max_key.d.ts
|   |   |       max_key.d.ts.map
|   |   |       min_key.d.ts
|   |   |       min_key.d.ts.map
|   |   |       objectid.d.ts
|   |   |       objectid.d.ts.map
|   |   |       regexp.d.ts
|   |   |       regexp.d.ts.map
|   |   |       symbol.d.ts
|   |   |       symbol.d.ts.map
|   |   |       timestamp.d.ts
|   |   |       timestamp.d.ts.map
|   |   |       validate_utf8.d.ts
|   |   |       validate_utf8.d.ts.map
|   |   |       
|   |   \---src
|   |       |   binary.ts
|   |       |   bson.ts
|   |       |   bson_value.ts
|   |       |   code.ts
|   |       |   constants.ts
|   |       |   db_ref.ts
|   |       |   decimal128.ts
|   |       |   double.ts
|   |       |   error.ts
|   |       |   extended_json.ts
|   |       |   index.ts
|   |       |   int_32.ts
|   |       |   long.ts
|   |       |   max_key.ts
|   |       |   min_key.ts
|   |       |   objectid.ts
|   |       |   regexp.ts
|   |       |   symbol.ts
|   |       |   timestamp.ts
|   |       |   validate_utf8.ts
|   |       |   
|   |       +---parser
|   |       |       calculate_size.ts
|   |       |       deserializer.ts
|   |       |       serializer.ts
|   |       |       utils.ts
|   |       |       
|   |       \---utils
|   |               byte_utils.ts
|   |               node_byte_utils.ts
|   |               web_byte_utils.ts
|   |               
|   +---bytes
|   |       History.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       Readme.md
|   |       
|   +---call-bind
|   |   |   .eslintignore
|   |   |   .eslintrc
|   |   |   .nycrc
|   |   |   callBound.js
|   |   |   CHANGELOG.md
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---.github
|   |   |       FUNDING.yml
|   |   |       
|   |   \---test
|   |           callBound.js
|   |           index.js
|   |           
|   +---chalk
|   |   |   index.d.ts
|   |   |   license
|   |   |   package.json
|   |   |   readme.md
|   |   |   
|   |   \---source
|   |           index.js
|   |           templates.js
|   |           util.js
|   |           
|   +---chokidar
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---lib
|   |   |       constants.js
|   |   |       fsevents-handler.js
|   |   |       nodefs-handler.js
|   |   |       
|   |   \---types
|   |           index.d.ts
|   |           
|   +---chownr
|   |       chownr.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---color-convert
|   |       CHANGELOG.md
|   |       conversions.js
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       route.js
|   |       
|   +---color-name
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---color-support
|   |       bin.js
|   |       browser.js
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---concat-map
|   |   |   .travis.yml
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.markdown
|   |   |   
|   |   +---example
|   |   |       map.js
|   |   |       
|   |   \---test
|   |           map.js
|   |           
|   +---connect-mongo
|   |   |   CHANGELOG.md
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---build
|   |       \---main
|   |           |   index.d.ts
|   |           |   index.js
|   |           |   
|   |           \---lib
|   |                   MongoStore.d.ts
|   |                   MongoStore.js
|   |                   
|   +---console-control-strings
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       README.md~
|   |       
|   +---content-disposition
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---content-type
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---cookie
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       SECURITY.md
|   |       
|   +---cookie-signature
|   |       .npmignore
|   |       History.md
|   |       index.js
|   |       package.json
|   |       Readme.md
|   |       
|   +---debug
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---src
|   |           browser.js
|   |           common.js
|   |           index.js
|   |           node.js
|   |           
|   +---delegates
|   |   |   .npmignore
|   |   |   History.md
|   |   |   index.js
|   |   |   License
|   |   |   Makefile
|   |   |   package.json
|   |   |   Readme.md
|   |   |   
|   |   \---test
|   |           index.js
|   |           
|   +---depd
|   |   |   History.md
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   Readme.md
|   |   |   
|   |   \---lib
|   |       \---browser
|   |               index.js
|   |               
|   +---destroy
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---detect-libc
|   |   |   index.d.ts
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---lib
|   |           detect-libc.js
|   |           process.js
|   |           
|   +---dotenv
|   |   |   CHANGELOG.md
|   |   |   config.d.ts
|   |   |   config.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---lib
|   |           cli-options.js
|   |           env-options.js
|   |           main.d.ts
|   |           main.js
|   |           
|   +---ee-first
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---ejs
|   |   |   ejs.js
|   |   |   ejs.min.js
|   |   |   jakefile.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   usage.txt
|   |   |   
|   |   +---bin
|   |   |       cli.js
|   |   |       
|   |   \---lib
|   |           ejs.js
|   |           utils.js
|   |           
|   +---emoji-regex
|   |   |   index.d.ts
|   |   |   index.js
|   |   |   LICENSE-MIT.txt
|   |   |   package.json
|   |   |   README.md
|   |   |   text.js
|   |   |   
|   |   \---es2015
|   |           index.js
|   |           text.js
|   |           
|   +---encodeurl
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---escape-html
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       Readme.md
|   |       
|   +---etag
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---express
|   |   |   History.md
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   Readme.md
|   |   |   
|   |   +---lib
|   |   |   |   application.js
|   |   |   |   express.js
|   |   |   |   request.js
|   |   |   |   response.js
|   |   |   |   utils.js
|   |   |   |   view.js
|   |   |   |   
|   |   |   +---middleware
|   |   |   |       init.js
|   |   |   |       query.js
|   |   |   |       
|   |   |   \---router
|   |   |           index.js
|   |   |           layer.js
|   |   |           route.js
|   |   |           
|   |   \---node_modules
|   |       +---debug
|   |       |   |   .coveralls.yml
|   |       |   |   .eslintrc
|   |       |   |   .npmignore
|   |       |   |   .travis.yml
|   |       |   |   CHANGELOG.md
|   |       |   |   component.json
|   |       |   |   karma.conf.js
|   |       |   |   LICENSE
|   |       |   |   Makefile
|   |       |   |   node.js
|   |       |   |   package.json
|   |       |   |   README.md
|   |       |   |   
|   |       |   \---src
|   |       |           browser.js
|   |       |           debug.js
|   |       |           index.js
|   |       |           inspector-log.js
|   |       |           node.js
|   |       |           
|   |       \---ms
|   |               index.js
|   |               license.md
|   |               package.json
|   |               readme.md
|   |               
|   +---express-session
|   |   |   HISTORY.md
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---node_modules
|   |   |   +---cookie
|   |   |   |       HISTORY.md
|   |   |   |       index.js
|   |   |   |       LICENSE
|   |   |   |       package.json
|   |   |   |       README.md
|   |   |   |       
|   |   |   +---debug
|   |   |   |   |   .coveralls.yml
|   |   |   |   |   .eslintrc
|   |   |   |   |   .npmignore
|   |   |   |   |   .travis.yml
|   |   |   |   |   CHANGELOG.md
|   |   |   |   |   component.json
|   |   |   |   |   karma.conf.js
|   |   |   |   |   LICENSE
|   |   |   |   |   Makefile
|   |   |   |   |   node.js
|   |   |   |   |   package.json
|   |   |   |   |   README.md
|   |   |   |   |   
|   |   |   |   \---src
|   |   |   |           browser.js
|   |   |   |           debug.js
|   |   |   |           index.js
|   |   |   |           inspector-log.js
|   |   |   |           node.js
|   |   |   |           
|   |   |   \---ms
|   |   |           index.js
|   |   |           license.md
|   |   |           package.json
|   |   |           readme.md
|   |   |           
|   |   \---session
|   |           cookie.js
|   |           memory.js
|   |           session.js
|   |           store.js
|   |           
|   +---filelist
|   |   |   index.d.ts
|   |   |   index.js
|   |   |   jakefile.js
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---node_modules
|   |       +---brace-expansion
|   |       |   |   index.js
|   |       |   |   LICENSE
|   |       |   |   package.json
|   |       |   |   README.md
|   |       |   |   
|   |       |   \---.github
|   |       |           FUNDING.yml
|   |       |           
|   |       \---minimatch
|   |           |   LICENSE
|   |           |   minimatch.js
|   |           |   package.json
|   |           |   README.md
|   |           |   
|   |           \---lib
|   |                   path.js
|   |                   
|   +---fill-range
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---finalhandler
|   |   |   HISTORY.md
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   SECURITY.md
|   |   |   
|   |   \---node_modules
|   |       +---debug
|   |       |   |   .coveralls.yml
|   |       |   |   .eslintrc
|   |       |   |   .npmignore
|   |       |   |   .travis.yml
|   |       |   |   CHANGELOG.md
|   |       |   |   component.json
|   |       |   |   karma.conf.js
|   |       |   |   LICENSE
|   |       |   |   Makefile
|   |       |   |   node.js
|   |       |   |   package.json
|   |       |   |   README.md
|   |       |   |   
|   |       |   \---src
|   |       |           browser.js
|   |       |           debug.js
|   |       |           index.js
|   |       |           inspector-log.js
|   |       |           node.js
|   |       |           
|   |       \---ms
|   |               index.js
|   |               license.md
|   |               package.json
|   |               readme.md
|   |               
|   +---forwarded
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---fresh
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---fs-minipass
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---node_modules
|   |       \---minipass
|   |               index.d.ts
|   |               index.js
|   |               LICENSE
|   |               package.json
|   |               README.md
|   |               
|   +---fs.realpath
|   |       index.js
|   |       LICENSE
|   |       old.js
|   |       package.json
|   |       README.md
|   |       
|   +---function-bind
|   |   |   .editorconfig
|   |   |   .eslintrc
|   |   |   .jscs.json
|   |   |   .npmignore
|   |   |   .travis.yml
|   |   |   implementation.js
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---test
|   |           .eslintrc
|   |           index.js
|   |           
|   +---gauge
|   |       base-theme.js
|   |       CHANGELOG.md
|   |       error.js
|   |       has-color.js
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       plumbing.js
|   |       process.js
|   |       progress-bar.js
|   |       README.md
|   |       render-template.js
|   |       set-immediate.js
|   |       set-interval.js
|   |       spin.js
|   |       template-item.js
|   |       theme-set.js
|   |       themes.js
|   |       wide-truncate.js
|   |       
|   +---get-intrinsic
|   |   |   .eslintrc
|   |   |   .nycrc
|   |   |   CHANGELOG.md
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---.github
|   |   |       FUNDING.yml
|   |   |       
|   |   \---test
|   |           GetIntrinsic.js
|   |           
|   +---glob
|   |       common.js
|   |       glob.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       sync.js
|   |       
|   +---glob-parent
|   |       CHANGELOG.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---has
|   |   |   LICENSE-MIT
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---src
|   |   |       index.js
|   |   |       
|   |   \---test
|   |           index.js
|   |           
|   +---has-flag
|   |       index.d.ts
|   |       index.js
|   |       license
|   |       package.json
|   |       readme.md
|   |       
|   +---has-proto
|   |   |   .eslintrc
|   |   |   CHANGELOG.md
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---.github
|   |   |       FUNDING.yml
|   |   |       
|   |   \---test
|   |           index.js
|   |           
|   +---has-symbols
|   |   |   .eslintrc
|   |   |   .nycrc
|   |   |   CHANGELOG.md
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   shams.js
|   |   |   
|   |   +---.github
|   |   |       FUNDING.yml
|   |   |       
|   |   \---test
|   |       |   index.js
|   |       |   tests.js
|   |       |   
|   |       \---shams
|   |               core-js.js
|   |               get-own-property-symbols.js
|   |               
|   +---has-unicode
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---http-errors
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---https-proxy-agent
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---dist
|   |           agent.d.ts
|   |           agent.js
|   |           agent.js.map
|   |           index.d.ts
|   |           index.js
|   |           index.js.map
|   |           parse-proxy-response.d.ts
|   |           parse-proxy-response.js
|   |           parse-proxy-response.js.map
|   |           
|   +---iconv-lite
|   |   |   Changelog.md
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---encodings
|   |   |   |   dbcs-codec.js
|   |   |   |   dbcs-data.js
|   |   |   |   index.js
|   |   |   |   internal.js
|   |   |   |   sbcs-codec.js
|   |   |   |   sbcs-data-generated.js
|   |   |   |   sbcs-data.js
|   |   |   |   utf16.js
|   |   |   |   utf7.js
|   |   |   |   
|   |   |   \---tables
|   |   |           big5-added.json
|   |   |           cp936.json
|   |   |           cp949.json
|   |   |           cp950.json
|   |   |           eucjp.json
|   |   |           gb18030-ranges.json
|   |   |           gbk-added.json
|   |   |           shiftjis.json
|   |   |           
|   |   \---lib
|   |           bom-handling.js
|   |           extend-node.js
|   |           index.d.ts
|   |           index.js
|   |           streams.js
|   |           
|   +---ignore-by-default
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---inflight
|   |       inflight.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---inherits
|   |       inherits.js
|   |       inherits_browser.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---ip
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---lib
|   |           ip.js
|   |           
|   +---ipaddr.js
|   |   |   ipaddr.min.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---lib
|   |           ipaddr.js
|   |           ipaddr.js.d.ts
|   |           
|   +---is-binary-path
|   |       index.d.ts
|   |       index.js
|   |       license
|   |       package.json
|   |       readme.md
|   |       
|   +---is-extglob
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---is-fullwidth-code-point
|   |       index.d.ts
|   |       index.js
|   |       license
|   |       package.json
|   |       readme.md
|   |       
|   +---is-glob
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---is-number
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---jake
|   |   |   jakefile.js
|   |   |   Makefile
|   |   |   package.json
|   |   |   README.md
|   |   |   usage.txt
|   |   |   
|   |   +---bin
|   |   |       bash_completion.sh
|   |   |       cli.js
|   |   |       
|   |   +---lib
|   |   |   |   api.js
|   |   |   |   jake.js
|   |   |   |   loader.js
|   |   |   |   namespace.js
|   |   |   |   package_task.js
|   |   |   |   parseargs.js
|   |   |   |   program.js
|   |   |   |   publish_task.js
|   |   |   |   rule.js
|   |   |   |   test_task.js
|   |   |   |   
|   |   |   +---task
|   |   |   |       directory_task.js
|   |   |   |       file_task.js
|   |   |   |       index.js
|   |   |   |       task.js
|   |   |   |       
|   |   |   \---utils
|   |   |           file.js
|   |   |           index.js
|   |   |           logger.js
|   |   |           
|   |   \---test
|   |       +---integration
|   |       |   |   concurrent.js
|   |       |   |   file.js
|   |       |   |   file_task.js
|   |       |   |   helpers.js
|   |       |   |   jakefile.js
|   |       |   |   list_tasks.js
|   |       |   |   publish_task.js
|   |       |   |   rule.js
|   |       |   |   selfdep.js
|   |       |   |   task_base.js
|   |       |   |   
|   |       |   \---jakelib
|   |       |           concurrent.jake.js
|   |       |           publish.jake.js
|   |       |           required_module.jake.js
|   |       |           rule.jake.js
|   |       |           
|   |       \---unit
|   |               jakefile.js
|   |               namespace.js
|   |               parseargs.js
|   |               
|   +---joi
|   |   |   LICENSE.md
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---dist
|   |   |       joi-browser.min.js
|   |   |       
|   |   \---lib
|   |       |   annotate.js
|   |       |   base.js
|   |       |   cache.js
|   |       |   common.js
|   |       |   compile.js
|   |       |   errors.js
|   |       |   extend.js
|   |       |   index.d.ts
|   |       |   index.js
|   |       |   manifest.js
|   |       |   messages.js
|   |       |   modify.js
|   |       |   ref.js
|   |       |   schemas.js
|   |       |   state.js
|   |       |   template.js
|   |       |   trace.js
|   |       |   validator.js
|   |       |   values.js
|   |       |   
|   |       \---types
|   |               alternatives.js
|   |               any.js
|   |               array.js
|   |               binary.js
|   |               boolean.js
|   |               date.js
|   |               function.js
|   |               keys.js
|   |               link.js
|   |               number.js
|   |               object.js
|   |               string.js
|   |               symbol.js
|   |               
|   +---jquery
|   |   |   AUTHORS.txt
|   |   |   bower.json
|   |   |   LICENSE.txt
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---dist
|   |   |       jquery.js
|   |   |       jquery.min.js
|   |   |       jquery.min.map
|   |   |       jquery.slim.js
|   |   |       jquery.slim.min.js
|   |   |       jquery.slim.min.map
|   |   |       
|   |   \---src
|   |       |   ajax.js
|   |       |   attributes.js
|   |       |   callbacks.js
|   |       |   core.js
|   |       |   css.js
|   |       |   data.js
|   |       |   deferred.js
|   |       |   deprecated.js
|   |       |   dimensions.js
|   |       |   effects.js
|   |       |   event.js
|   |       |   jquery.js
|   |       |   manipulation.js
|   |       |   offset.js
|   |       |   queue.js
|   |       |   selector-native.js
|   |       |   selector.js
|   |       |   serialize.js
|   |       |   traversing.js
|   |       |   wrap.js
|   |       |   
|   |       +---ajax
|   |       |   |   jsonp.js
|   |       |   |   load.js
|   |       |   |   script.js
|   |       |   |   xhr.js
|   |       |   |   
|   |       |   \---var
|   |       |           location.js
|   |       |           nonce.js
|   |       |           rquery.js
|   |       |           
|   |       +---attributes
|   |       |       attr.js
|   |       |       classes.js
|   |       |       prop.js
|   |       |       support.js
|   |       |       val.js
|   |       |       
|   |       +---core
|   |       |   |   access.js
|   |       |   |   camelCase.js
|   |       |   |   DOMEval.js
|   |       |   |   init.js
|   |       |   |   isAttached.js
|   |       |   |   nodeName.js
|   |       |   |   parseHTML.js
|   |       |   |   parseXML.js
|   |       |   |   ready-no-deferred.js
|   |       |   |   ready.js
|   |       |   |   readyException.js
|   |       |   |   stripAndCollapse.js
|   |       |   |   support.js
|   |       |   |   toType.js
|   |       |   |   
|   |       |   \---var
|   |       |           rhtml.js
|   |       |           rsingleTag.js
|   |       |           
|   |       +---css
|   |       |   |   addGetHookIf.js
|   |       |   |   adjustCSS.js
|   |       |   |   curCSS.js
|   |       |   |   finalPropName.js
|   |       |   |   hiddenVisibleSelectors.js
|   |       |   |   showHide.js
|   |       |   |   support.js
|   |       |   |   
|   |       |   \---var
|   |       |           cssExpand.js
|   |       |           getStyles.js
|   |       |           isHiddenWithinTree.js
|   |       |           rboxStyle.js
|   |       |           rcustomProp.js
|   |       |           rnumnonpx.js
|   |       |           swap.js
|   |       |           
|   |       +---data
|   |       |   |   Data.js
|   |       |   |   
|   |       |   \---var
|   |       |           acceptData.js
|   |       |           dataPriv.js
|   |       |           dataUser.js
|   |       |           
|   |       +---deferred
|   |       |       exceptionHook.js
|   |       |       
|   |       +---deprecated
|   |       |       ajax-event-alias.js
|   |       |       event.js
|   |       |       
|   |       +---effects
|   |       |       animatedSelector.js
|   |       |       Tween.js
|   |       |       
|   |       +---event
|   |       |       trigger.js
|   |       |       
|   |       +---exports
|   |       |       amd.js
|   |       |       global.js
|   |       |       
|   |       +---manipulation
|   |       |   |   buildFragment.js
|   |       |   |   getAll.js
|   |       |   |   setGlobalEval.js
|   |       |   |   support.js
|   |       |   |   wrapMap.js
|   |       |   |   _evalUrl.js
|   |       |   |   
|   |       |   \---var
|   |       |           rscriptType.js
|   |       |           rtagName.js
|   |       |           
|   |       +---queue
|   |       |       delay.js
|   |       |       
|   |       +---selector
|   |       |       contains.js
|   |       |       escapeSelector.js
|   |       |       
|   |       +---traversing
|   |       |   |   findFilter.js
|   |       |   |   
|   |       |   \---var
|   |       |           dir.js
|   |       |           rneedsContext.js
|   |       |           siblings.js
|   |       |           
|   |       \---var
|   |               arr.js
|   |               class2type.js
|   |               document.js
|   |               documentElement.js
|   |               flat.js
|   |               fnToString.js
|   |               getProto.js
|   |               hasOwn.js
|   |               indexOf.js
|   |               isFunction.js
|   |               isWindow.js
|   |               ObjectFunctionString.js
|   |               pnum.js
|   |               pop.js
|   |               push.js
|   |               rcheckableType.js
|   |               rcssNum.js
|   |               rnothtmlwhite.js
|   |               rtrimCSS.js
|   |               slice.js
|   |               sort.js
|   |               splice.js
|   |               support.js
|   |               toString.js
|   |               whitespace.js
|   |               
|   +---kruptein
|   |   |   CONTRIBUTING.md
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   SECURITY.md
|   |   |   
|   |   +---.test
|   |   |       vanilla.js
|   |   |       
|   |   \---lib
|   |           kruptein.js
|   |           
|   +---lru-cache
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---make-dir
|   |   |   index.d.ts
|   |   |   index.js
|   |   |   license
|   |   |   package.json
|   |   |   readme.md
|   |   |   
|   |   \---node_modules
|   |       +---.bin
|   |       |       semver
|   |       |       semver.cmd
|   |       |       semver.ps1
|   |       |       
|   |       \---semver
|   |           |   CHANGELOG.md
|   |           |   LICENSE
|   |           |   package.json
|   |           |   range.bnf
|   |           |   README.md
|   |           |   semver.js
|   |           |   
|   |           \---bin
|   |                   semver.js
|   |                   
|   +---media-typer
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---memory-pager
|   |       .travis.yml
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       test.js
|   |       
|   +---merge-descriptors
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---methods
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---mime
|   |   |   .npmignore
|   |   |   CHANGELOG.md
|   |   |   cli.js
|   |   |   LICENSE
|   |   |   mime.js
|   |   |   package.json
|   |   |   README.md
|   |   |   types.json
|   |   |   
|   |   \---src
|   |           build.js
|   |           test.js
|   |           
|   +---mime-db
|   |       db.json
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---mime-types
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---minimalistic-assert
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       readme.md
|   |       
|   +---minimatch
|   |       LICENSE
|   |       minimatch.js
|   |       package.json
|   |       README.md
|   |       
|   +---minipass
|   |       index.d.ts
|   |       index.js
|   |       index.mjs
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---minizlib
|   |   |   constants.js
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---node_modules
|   |       \---minipass
|   |               index.d.ts
|   |               index.js
|   |               LICENSE
|   |               package.json
|   |               README.md
|   |               
|   +---mkdirp
|   |   |   CHANGELOG.md
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   readme.markdown
|   |   |   
|   |   +---bin
|   |   |       cmd.js
|   |   |       
|   |   \---lib
|   |           find-made.js
|   |           mkdirp-manual.js
|   |           mkdirp-native.js
|   |           opts-arg.js
|   |           path-arg.js
|   |           use-native.js
|   |           
|   +---mongodb
|   |   |   LICENSE.md
|   |   |   mongodb.d.ts
|   |   |   package.json
|   |   |   README.md
|   |   |   tsconfig.json
|   |   |   
|   |   +---etc
|   |   |       prepare.js
|   |   |       
|   |   +---lib
|   |   |   |   admin.js
|   |   |   |   admin.js.map
|   |   |   |   bson.js
|   |   |   |   bson.js.map
|   |   |   |   change_stream.js
|   |   |   |   change_stream.js.map
|   |   |   |   collection.js
|   |   |   |   collection.js.map
|   |   |   |   connection_string.js
|   |   |   |   connection_string.js.map
|   |   |   |   constants.js
|   |   |   |   constants.js.map
|   |   |   |   db.js
|   |   |   |   db.js.map
|   |   |   |   deps.js
|   |   |   |   deps.js.map
|   |   |   |   encrypter.js
|   |   |   |   encrypter.js.map
|   |   |   |   error.js
|   |   |   |   error.js.map
|   |   |   |   explain.js
|   |   |   |   explain.js.map
|   |   |   |   index.js
|   |   |   |   index.js.map
|   |   |   |   mongo_client.js
|   |   |   |   mongo_client.js.map
|   |   |   |   mongo_logger.js
|   |   |   |   mongo_logger.js.map
|   |   |   |   mongo_types.js
|   |   |   |   mongo_types.js.map
|   |   |   |   read_concern.js
|   |   |   |   read_concern.js.map
|   |   |   |   read_preference.js
|   |   |   |   read_preference.js.map
|   |   |   |   sessions.js
|   |   |   |   sessions.js.map
|   |   |   |   sort.js
|   |   |   |   sort.js.map
|   |   |   |   transactions.js
|   |   |   |   transactions.js.map
|   |   |   |   utils.js
|   |   |   |   utils.js.map
|   |   |   |   write_concern.js
|   |   |   |   write_concern.js.map
|   |   |   |   
|   |   |   +---bulk
|   |   |   |       common.js
|   |   |   |       common.js.map
|   |   |   |       ordered.js
|   |   |   |       ordered.js.map
|   |   |   |       unordered.js
|   |   |   |       unordered.js.map
|   |   |   |       
|   |   |   +---cmap
|   |   |   |   |   commands.js
|   |   |   |   |   commands.js.map
|   |   |   |   |   command_monitoring_events.js
|   |   |   |   |   command_monitoring_events.js.map
|   |   |   |   |   connect.js
|   |   |   |   |   connect.js.map
|   |   |   |   |   connection.js
|   |   |   |   |   connection.js.map
|   |   |   |   |   connection_pool.js
|   |   |   |   |   connection_pool.js.map
|   |   |   |   |   connection_pool_events.js
|   |   |   |   |   connection_pool_events.js.map
|   |   |   |   |   errors.js
|   |   |   |   |   errors.js.map
|   |   |   |   |   message_stream.js
|   |   |   |   |   message_stream.js.map
|   |   |   |   |   metrics.js
|   |   |   |   |   metrics.js.map
|   |   |   |   |   stream_description.js
|   |   |   |   |   stream_description.js.map
|   |   |   |   |   
|   |   |   |   +---auth
|   |   |   |   |   |   auth_provider.js
|   |   |   |   |   |   auth_provider.js.map
|   |   |   |   |   |   gssapi.js
|   |   |   |   |   |   gssapi.js.map
|   |   |   |   |   |   mongocr.js
|   |   |   |   |   |   mongocr.js.map
|   |   |   |   |   |   mongodb_aws.js
|   |   |   |   |   |   mongodb_aws.js.map
|   |   |   |   |   |   mongodb_oidc.js
|   |   |   |   |   |   mongodb_oidc.js.map
|   |   |   |   |   |   mongo_credentials.js
|   |   |   |   |   |   mongo_credentials.js.map
|   |   |   |   |   |   plain.js
|   |   |   |   |   |   plain.js.map
|   |   |   |   |   |   providers.js
|   |   |   |   |   |   providers.js.map
|   |   |   |   |   |   scram.js
|   |   |   |   |   |   scram.js.map
|   |   |   |   |   |   x509.js
|   |   |   |   |   |   x509.js.map
|   |   |   |   |   |   
|   |   |   |   |   \---mongodb_oidc
|   |   |   |   |           aws_service_workflow.js
|   |   |   |   |           aws_service_workflow.js.map
|   |   |   |   |           cache.js
|   |   |   |   |           cache.js.map
|   |   |   |   |           callback_lock_cache.js
|   |   |   |   |           callback_lock_cache.js.map
|   |   |   |   |           callback_workflow.js
|   |   |   |   |           callback_workflow.js.map
|   |   |   |   |           service_workflow.js
|   |   |   |   |           service_workflow.js.map
|   |   |   |   |           token_entry_cache.js
|   |   |   |   |           token_entry_cache.js.map
|   |   |   |   |           
|   |   |   |   +---handshake
|   |   |   |   |       client_metadata.js
|   |   |   |   |       client_metadata.js.map
|   |   |   |   |       
|   |   |   |   \---wire_protocol
|   |   |   |           compression.js
|   |   |   |           compression.js.map
|   |   |   |           constants.js
|   |   |   |           constants.js.map
|   |   |   |           shared.js
|   |   |   |           shared.js.map
|   |   |   |           
|   |   |   +---cursor
|   |   |   |       abstract_cursor.js
|   |   |   |       abstract_cursor.js.map
|   |   |   |       aggregation_cursor.js
|   |   |   |       aggregation_cursor.js.map
|   |   |   |       change_stream_cursor.js
|   |   |   |       change_stream_cursor.js.map
|   |   |   |       find_cursor.js
|   |   |   |       find_cursor.js.map
|   |   |   |       list_collections_cursor.js
|   |   |   |       list_collections_cursor.js.map
|   |   |   |       list_indexes_cursor.js
|   |   |   |       list_indexes_cursor.js.map
|   |   |   |       
|   |   |   +---gridfs
|   |   |   |       download.js
|   |   |   |       download.js.map
|   |   |   |       index.js
|   |   |   |       index.js.map
|   |   |   |       upload.js
|   |   |   |       upload.js.map
|   |   |   |       
|   |   |   +---operations
|   |   |   |       add_user.js
|   |   |   |       add_user.js.map
|   |   |   |       aggregate.js
|   |   |   |       aggregate.js.map
|   |   |   |       bulk_write.js
|   |   |   |       bulk_write.js.map
|   |   |   |       collections.js
|   |   |   |       collections.js.map
|   |   |   |       command.js
|   |   |   |       command.js.map
|   |   |   |       common_functions.js
|   |   |   |       common_functions.js.map
|   |   |   |       count.js
|   |   |   |       count.js.map
|   |   |   |       count_documents.js
|   |   |   |       count_documents.js.map
|   |   |   |       create_collection.js
|   |   |   |       create_collection.js.map
|   |   |   |       delete.js
|   |   |   |       delete.js.map
|   |   |   |       distinct.js
|   |   |   |       distinct.js.map
|   |   |   |       drop.js
|   |   |   |       drop.js.map
|   |   |   |       estimated_document_count.js
|   |   |   |       estimated_document_count.js.map
|   |   |   |       eval.js
|   |   |   |       eval.js.map
|   |   |   |       execute_operation.js
|   |   |   |       execute_operation.js.map
|   |   |   |       find.js
|   |   |   |       find.js.map
|   |   |   |       find_and_modify.js
|   |   |   |       find_and_modify.js.map
|   |   |   |       get_more.js
|   |   |   |       get_more.js.map
|   |   |   |       indexes.js
|   |   |   |       indexes.js.map
|   |   |   |       insert.js
|   |   |   |       insert.js.map
|   |   |   |       is_capped.js
|   |   |   |       is_capped.js.map
|   |   |   |       kill_cursors.js
|   |   |   |       kill_cursors.js.map
|   |   |   |       list_collections.js
|   |   |   |       list_collections.js.map
|   |   |   |       list_databases.js
|   |   |   |       list_databases.js.map
|   |   |   |       operation.js
|   |   |   |       operation.js.map
|   |   |   |       options_operation.js
|   |   |   |       options_operation.js.map
|   |   |   |       profiling_level.js
|   |   |   |       profiling_level.js.map
|   |   |   |       remove_user.js
|   |   |   |       remove_user.js.map
|   |   |   |       rename.js
|   |   |   |       rename.js.map
|   |   |   |       run_command.js
|   |   |   |       run_command.js.map
|   |   |   |       set_profiling_level.js
|   |   |   |       set_profiling_level.js.map
|   |   |   |       stats.js
|   |   |   |       stats.js.map
|   |   |   |       update.js
|   |   |   |       update.js.map
|   |   |   |       validate_collection.js
|   |   |   |       validate_collection.js.map
|   |   |   |       
|   |   |   \---sdam
|   |   |           common.js
|   |   |           common.js.map
|   |   |           events.js
|   |   |           events.js.map
|   |   |           monitor.js
|   |   |           monitor.js.map
|   |   |           server.js
|   |   |           server.js.map
|   |   |           server_description.js
|   |   |           server_description.js.map
|   |   |           server_selection.js
|   |   |           server_selection.js.map
|   |   |           srv_polling.js
|   |   |           srv_polling.js.map
|   |   |           topology.js
|   |   |           topology.js.map
|   |   |           topology_description.js
|   |   |           topology_description.js.map
|   |   |           
|   |   \---src
|   |       |   admin.ts
|   |       |   bson.ts
|   |       |   change_stream.ts
|   |       |   collection.ts
|   |       |   connection_string.ts
|   |       |   constants.ts
|   |       |   db.ts
|   |       |   deps.ts
|   |       |   encrypter.ts
|   |       |   error.ts
|   |       |   explain.ts
|   |       |   index.ts
|   |       |   mongo_client.ts
|   |       |   mongo_logger.ts
|   |       |   mongo_types.ts
|   |       |   read_concern.ts
|   |       |   read_preference.ts
|   |       |   sessions.ts
|   |       |   sort.ts
|   |       |   transactions.ts
|   |       |   utils.ts
|   |       |   write_concern.ts
|   |       |   
|   |       +---bulk
|   |       |       common.ts
|   |       |       ordered.ts
|   |       |       unordered.ts
|   |       |       
|   |       +---cmap
|   |       |   |   commands.ts
|   |       |   |   command_monitoring_events.ts
|   |       |   |   connect.ts
|   |       |   |   connection.ts
|   |       |   |   connection_pool.ts
|   |       |   |   connection_pool_events.ts
|   |       |   |   errors.ts
|   |       |   |   message_stream.ts
|   |       |   |   metrics.ts
|   |       |   |   stream_description.ts
|   |       |   |   
|   |       |   +---auth
|   |       |   |   |   auth_provider.ts
|   |       |   |   |   gssapi.ts
|   |       |   |   |   mongocr.ts
|   |       |   |   |   mongodb_aws.ts
|   |       |   |   |   mongodb_oidc.ts
|   |       |   |   |   mongo_credentials.ts
|   |       |   |   |   plain.ts
|   |       |   |   |   providers.ts
|   |       |   |   |   scram.ts
|   |       |   |   |   x509.ts
|   |       |   |   |   
|   |       |   |   \---mongodb_oidc
|   |       |   |           aws_service_workflow.ts
|   |       |   |           cache.ts
|   |       |   |           callback_lock_cache.ts
|   |       |   |           callback_workflow.ts
|   |       |   |           service_workflow.ts
|   |       |   |           token_entry_cache.ts
|   |       |   |           
|   |       |   +---handshake
|   |       |   |       client_metadata.ts
|   |       |   |       
|   |       |   \---wire_protocol
|   |       |           compression.ts
|   |       |           constants.ts
|   |       |           shared.ts
|   |       |           
|   |       +---cursor
|   |       |       abstract_cursor.ts
|   |       |       aggregation_cursor.ts
|   |       |       change_stream_cursor.ts
|   |       |       find_cursor.ts
|   |       |       list_collections_cursor.ts
|   |       |       list_indexes_cursor.ts
|   |       |       
|   |       +---gridfs
|   |       |       download.ts
|   |       |       index.ts
|   |       |       upload.ts
|   |       |       
|   |       +---operations
|   |       |       add_user.ts
|   |       |       aggregate.ts
|   |       |       bulk_write.ts
|   |       |       collections.ts
|   |       |       command.ts
|   |       |       common_functions.ts
|   |       |       count.ts
|   |       |       count_documents.ts
|   |       |       create_collection.ts
|   |       |       delete.ts
|   |       |       distinct.ts
|   |       |       drop.ts
|   |       |       estimated_document_count.ts
|   |       |       eval.ts
|   |       |       execute_operation.ts
|   |       |       find.ts
|   |       |       find_and_modify.ts
|   |       |       get_more.ts
|   |       |       indexes.ts
|   |       |       insert.ts
|   |       |       is_capped.ts
|   |       |       kill_cursors.ts
|   |       |       list_collections.ts
|   |       |       list_databases.ts
|   |       |       operation.ts
|   |       |       options_operation.ts
|   |       |       profiling_level.ts
|   |       |       remove_user.ts
|   |       |       rename.ts
|   |       |       run_command.ts
|   |       |       set_profiling_level.ts
|   |       |       stats.ts
|   |       |       update.ts
|   |       |       validate_collection.ts
|   |       |       
|   |       \---sdam
|   |               common.ts
|   |               events.ts
|   |               monitor.ts
|   |               server.ts
|   |               server_description.ts
|   |               server_selection.ts
|   |               srv_polling.ts
|   |               topology.ts
|   |               topology_description.ts
|   |               
|   +---mongodb-connection-string-url
|   |   |   .esm-wrapper.mjs
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---lib
|   |           index.d.ts
|   |           index.js
|   |           index.js.map
|   |           redact.d.ts
|   |           redact.js
|   |           redact.js.map
|   |           
|   +---ms
|   |       index.js
|   |       license.md
|   |       package.json
|   |       readme.md
|   |       
|   +---negotiator
|   |   |   HISTORY.md
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---lib
|   |           charset.js
|   |           encoding.js
|   |           language.js
|   |           mediaType.js
|   |           
|   +---node-addon-api
|   |   |   common.gypi
|   |   |   except.gypi
|   |   |   index.js
|   |   |   LICENSE.md
|   |   |   napi-inl.deprecated.h
|   |   |   napi-inl.h
|   |   |   napi.h
|   |   |   node_api.gyp
|   |   |   noexcept.gypi
|   |   |   nothing.c
|   |   |   package-support.json
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---tools
|   |           check-napi.js
|   |           clang-format.js
|   |           conversion.js
|   |           eslint-format.js
|   |           README.md
|   |           
|   +---node-fetch
|   |   |   browser.js
|   |   |   LICENSE.md
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---lib
|   |   |       index.es.js
|   |   |       index.js
|   |   |       index.mjs
|   |   |       
|   |   \---node_modules
|   |       +---tr46
|   |       |   |   .npmignore
|   |       |   |   index.js
|   |       |   |   package.json
|   |       |   |   
|   |       |   \---lib
|   |       |           .gitkeep
|   |       |           mappingTable.json
|   |       |           
|   |       +---webidl-conversions
|   |       |   |   LICENSE.md
|   |       |   |   package.json
|   |       |   |   README.md
|   |       |   |   
|   |       |   \---lib
|   |       |           index.js
|   |       |           
|   |       \---whatwg-url
|   |           |   LICENSE.txt
|   |           |   package.json
|   |           |   README.md
|   |           |   
|   |           \---lib
|   |                   public-api.js
|   |                   URL-impl.js
|   |                   url-state-machine.js
|   |                   URL.js
|   |                   utils.js
|   |                   
|   +---nodemailer
|   |   |   .gitattributes
|   |   |   .prettierrc.js
|   |   |   CHANGELOG.md
|   |   |   CODE_OF_CONDUCT.md
|   |   |   CONTRIBUTING.md
|   |   |   LICENSE
|   |   |   package.json
|   |   |   postinstall.js
|   |   |   README.md
|   |   |   SECURITY.txt
|   |   |   
|   |   \---lib
|   |       |   nodemailer.js
|   |       |   
|   |       +---addressparser
|   |       |       index.js
|   |       |       
|   |       +---base64
|   |       |       index.js
|   |       |       
|   |       +---dkim
|   |       |       index.js
|   |       |       message-parser.js
|   |       |       relaxed-body.js
|   |       |       sign.js
|   |       |       
|   |       +---fetch
|   |       |       cookies.js
|   |       |       index.js
|   |       |       
|   |       +---json-transport
|   |       |       index.js
|   |       |       
|   |       +---mail-composer
|   |       |       index.js
|   |       |       
|   |       +---mailer
|   |       |       index.js
|   |       |       mail-message.js
|   |       |       
|   |       +---mime-funcs
|   |       |       index.js
|   |       |       mime-types.js
|   |       |       
|   |       +---mime-node
|   |       |       index.js
|   |       |       last-newline.js
|   |       |       le-unix.js
|   |       |       le-windows.js
|   |       |       
|   |       +---qp
|   |       |       index.js
|   |       |       
|   |       +---sendmail-transport
|   |       |       index.js
|   |       |       
|   |       +---ses-transport
|   |       |       index.js
|   |       |       
|   |       +---shared
|   |       |       index.js
|   |       |       
|   |       +---smtp-connection
|   |       |       data-stream.js
|   |       |       http-proxy-client.js
|   |       |       index.js
|   |       |       
|   |       +---smtp-pool
|   |       |       index.js
|   |       |       pool-resource.js
|   |       |       
|   |       +---smtp-transport
|   |       |       index.js
|   |       |       
|   |       +---stream-transport
|   |       |       index.js
|   |       |       
|   |       +---well-known
|   |       |       index.js
|   |       |       services.json
|   |       |       
|   |       \---xoauth2
|   |               index.js
|   |               
|   +---nodemon
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---bin
|   |   |       nodemon.js
|   |   |       windows-kill.exe
|   |   |       
|   |   +---doc
|   |   |   \---cli
|   |   |           authors.txt
|   |   |           config.txt
|   |   |           help.txt
|   |   |           logo.txt
|   |   |           options.txt
|   |   |           topics.txt
|   |   |           usage.txt
|   |   |           whoami.txt
|   |   |           
|   |   +---lib
|   |   |   |   index.js
|   |   |   |   nodemon.js
|   |   |   |   spawn.js
|   |   |   |   version.js
|   |   |   |   
|   |   |   +---cli
|   |   |   |       index.js
|   |   |   |       parse.js
|   |   |   |       
|   |   |   +---config
|   |   |   |       command.js
|   |   |   |       defaults.js
|   |   |   |       exec.js
|   |   |   |       index.js
|   |   |   |       load.js
|   |   |   |       
|   |   |   +---help
|   |   |   |       index.js
|   |   |   |       
|   |   |   +---monitor
|   |   |   |       index.js
|   |   |   |       match.js
|   |   |   |       run.js
|   |   |   |       signals.js
|   |   |   |       watch.js
|   |   |   |       
|   |   |   +---rules
|   |   |   |       add.js
|   |   |   |       index.js
|   |   |   |       parse.js
|   |   |   |       
|   |   |   \---utils
|   |   |           bus.js
|   |   |           clone.js
|   |   |           colour.js
|   |   |           index.js
|   |   |           log.js
|   |   |           merge.js
|   |   |           
|   |   \---node_modules
|   |       +---.bin
|   |       |       semver
|   |       |       semver.cmd
|   |       |       semver.ps1
|   |       |       
|   |       +---debug
|   |       |   |   CHANGELOG.md
|   |       |   |   LICENSE
|   |       |   |   node.js
|   |       |   |   package.json
|   |       |   |   README.md
|   |       |   |   
|   |       |   \---src
|   |       |           browser.js
|   |       |           common.js
|   |       |           index.js
|   |       |           node.js
|   |       |           
|   |       +---has-flag
|   |       |       index.js
|   |       |       license
|   |       |       package.json
|   |       |       readme.md
|   |       |       
|   |       +---semver
|   |       |   |   CHANGELOG.md
|   |       |   |   LICENSE
|   |       |   |   package.json
|   |       |   |   range.bnf
|   |       |   |   README.md
|   |       |   |   semver.js
|   |       |   |   
|   |       |   \---bin
|   |       |           semver
|   |       |           
|   |       \---supports-color
|   |               browser.js
|   |               index.js
|   |               license
|   |               package.json
|   |               readme.md
|   |               
|   +---nopt
|   |   |   CHANGELOG.md
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---bin
|   |   |       nopt.js
|   |   |       
|   |   \---lib
|   |           nopt.js
|   |           
|   +---normalize-path
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---npmlog
|   |       LICENSE
|   |       log.js
|   |       package.json
|   |       README.md
|   |       
|   +---object-assign
|   |       index.js
|   |       license
|   |       package.json
|   |       readme.md
|   |       
|   +---object-inspect
|   |   |   .eslintrc
|   |   |   .nycrc
|   |   |   CHANGELOG.md
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package-support.json
|   |   |   package.json
|   |   |   readme.markdown
|   |   |   test-core-js.js
|   |   |   util.inspect.js
|   |   |   
|   |   +---.github
|   |   |       FUNDING.yml
|   |   |       
|   |   +---example
|   |   |       all.js
|   |   |       circular.js
|   |   |       fn.js
|   |   |       inspect.js
|   |   |       
|   |   \---test
|   |       |   bigint.js
|   |       |   circular.js
|   |       |   deep.js
|   |       |   element.js
|   |       |   err.js
|   |       |   fakes.js
|   |       |   fn.js
|   |       |   has.js
|   |       |   holes.js
|   |       |   indent-option.js
|   |       |   inspect.js
|   |       |   lowbyte.js
|   |       |   number.js
|   |       |   quoteStyle.js
|   |       |   toStringTag.js
|   |       |   undef.js
|   |       |   values.js
|   |       |   
|   |       \---browser
|   |               dom.js
|   |               
|   +---on-finished
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---on-headers
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---once
|   |       LICENSE
|   |       once.js
|   |       package.json
|   |       README.md
|   |       
|   +---parseurl
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---path-is-absolute
|   |       index.js
|   |       license
|   |       package.json
|   |       readme.md
|   |       
|   +---path-to-regexp
|   |       History.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       Readme.md
|   |       
|   +---picomatch
|   |   |   CHANGELOG.md
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---lib
|   |           constants.js
|   |           parse.js
|   |           picomatch.js
|   |           scan.js
|   |           utils.js
|   |           
|   +---proxy-addr
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---pstree.remy
|   |   |   .travis.yml
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---lib
|   |   |       index.js
|   |   |       tree.js
|   |   |       utils.js
|   |   |       
|   |   \---tests
|   |       |   index.test.js
|   |       |   
|   |       \---fixtures
|   |               index.js
|   |               out1
|   |               out2
|   |               
|   +---punycode
|   |       LICENSE-MIT.txt
|   |       package.json
|   |       punycode.es6.js
|   |       punycode.js
|   |       README.md
|   |       
|   +---qs
|   |   |   .editorconfig
|   |   |   .eslintrc
|   |   |   .nycrc
|   |   |   CHANGELOG.md
|   |   |   LICENSE.md
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---.github
|   |   |       FUNDING.yml
|   |   |       
|   |   +---dist
|   |   |       qs.js
|   |   |       
|   |   +---lib
|   |   |       formats.js
|   |   |       index.js
|   |   |       parse.js
|   |   |       stringify.js
|   |   |       utils.js
|   |   |       
|   |   \---test
|   |           parse.js
|   |           stringify.js
|   |           utils.js
|   |           
|   +---random-bytes
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---range-parser
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---raw-body
|   |       HISTORY.md
|   |       index.d.ts
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       SECURITY.md
|   |       
|   +---readable-stream
|   |   |   CONTRIBUTING.md
|   |   |   errors-browser.js
|   |   |   errors.js
|   |   |   experimentalWarning.js
|   |   |   GOVERNANCE.md
|   |   |   LICENSE
|   |   |   package.json
|   |   |   readable-browser.js
|   |   |   readable.js
|   |   |   README.md
|   |   |   
|   |   \---lib
|   |       |   _stream_duplex.js
|   |       |   _stream_passthrough.js
|   |       |   _stream_readable.js
|   |       |   _stream_transform.js
|   |       |   _stream_writable.js
|   |       |   
|   |       \---internal
|   |           \---streams
|   |                   async_iterator.js
|   |                   buffer_list.js
|   |                   destroy.js
|   |                   end-of-stream.js
|   |                   from-browser.js
|   |                   from.js
|   |                   pipeline.js
|   |                   state.js
|   |                   stream-browser.js
|   |                   stream.js
|   |                   
|   +---readdirp
|   |       index.d.ts
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---rimraf
|   |       bin.js
|   |       CHANGELOG.md
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       rimraf.js
|   |       
|   +---safe-buffer
|   |       index.d.ts
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---safer-buffer
|   |       dangerous.js
|   |       LICENSE
|   |       package.json
|   |       Porting-Buffer.md
|   |       Readme.md
|   |       safer.js
|   |       tests.js
|   |       
|   +---saslprep
|   |   |   .editorconfig
|   |   |   .gitattributes
|   |   |   .travis.yml
|   |   |   CHANGELOG.md
|   |   |   code-points.mem
|   |   |   generate-code-points.js
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   readme.md
|   |   |   
|   |   +---lib
|   |   |       code-points.js
|   |   |       memory-code-points.js
|   |   |       util.js
|   |   |       
|   |   \---test
|   |           index.js
|   |           util.js
|   |           
|   +---semver
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   preload.js
|   |   |   range.bnf
|   |   |   README.md
|   |   |   
|   |   +---bin
|   |   |       semver.js
|   |   |       
|   |   +---classes
|   |   |       comparator.js
|   |   |       index.js
|   |   |       range.js
|   |   |       semver.js
|   |   |       
|   |   +---functions
|   |   |       clean.js
|   |   |       cmp.js
|   |   |       coerce.js
|   |   |       compare-build.js
|   |   |       compare-loose.js
|   |   |       compare.js
|   |   |       diff.js
|   |   |       eq.js
|   |   |       gt.js
|   |   |       gte.js
|   |   |       inc.js
|   |   |       lt.js
|   |   |       lte.js
|   |   |       major.js
|   |   |       minor.js
|   |   |       neq.js
|   |   |       parse.js
|   |   |       patch.js
|   |   |       prerelease.js
|   |   |       rcompare.js
|   |   |       rsort.js
|   |   |       satisfies.js
|   |   |       sort.js
|   |   |       valid.js
|   |   |       
|   |   +---internal
|   |   |       constants.js
|   |   |       debug.js
|   |   |       identifiers.js
|   |   |       parse-options.js
|   |   |       re.js
|   |   |       
|   |   \---ranges
|   |           gtr.js
|   |           intersects.js
|   |           ltr.js
|   |           max-satisfying.js
|   |           min-satisfying.js
|   |           min-version.js
|   |           outside.js
|   |           simplify.js
|   |           subset.js
|   |           to-comparators.js
|   |           valid.js
|   |           
|   +---send
|   |   |   HISTORY.md
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   SECURITY.md
|   |   |   
|   |   \---node_modules
|   |       +---debug
|   |       |   |   .coveralls.yml
|   |       |   |   .eslintrc
|   |       |   |   .npmignore
|   |       |   |   .travis.yml
|   |       |   |   CHANGELOG.md
|   |       |   |   component.json
|   |       |   |   karma.conf.js
|   |       |   |   LICENSE
|   |       |   |   Makefile
|   |       |   |   node.js
|   |       |   |   package.json
|   |       |   |   README.md
|   |       |   |   
|   |       |   +---node_modules
|   |       |   |   \---ms
|   |       |   |           index.js
|   |       |   |           license.md
|   |       |   |           package.json
|   |       |   |           readme.md
|   |       |   |           
|   |       |   \---src
|   |       |           browser.js
|   |       |           debug.js
|   |       |           index.js
|   |       |           inspector-log.js
|   |       |           node.js
|   |       |           
|   |       \---ms
|   |               index.js
|   |               license.md
|   |               package.json
|   |               readme.md
|   |               
|   +---serve-static
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---set-blocking
|   |       CHANGELOG.md
|   |       index.js
|   |       LICENSE.txt
|   |       package.json
|   |       README.md
|   |       
|   +---setprototypeof
|   |   |   index.d.ts
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---test
|   |           index.js
|   |           
|   +---side-channel
|   |   |   .eslintignore
|   |   |   .eslintrc
|   |   |   .nycrc
|   |   |   CHANGELOG.md
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---.github
|   |   |       FUNDING.yml
|   |   |       
|   |   \---test
|   |           index.js
|   |           
|   +---signal-exit
|   |       index.js
|   |       LICENSE.txt
|   |       package.json
|   |       README.md
|   |       signals.js
|   |       
|   +---simple-update-notifier
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---build
|   |   |       index.d.ts
|   |   |       index.js
|   |   |       
|   |   +---node_modules
|   |   |   +---.bin
|   |   |   |       semver
|   |   |   |       semver.cmd
|   |   |   |       semver.ps1
|   |   |   |       
|   |   |   \---semver
|   |   |       |   CHANGELOG.md
|   |   |       |   index.js
|   |   |       |   LICENSE
|   |   |       |   package.json
|   |   |       |   range.bnf
|   |   |       |   README.md
|   |   |       |   
|   |   |       +---bin
|   |   |       |       semver.js
|   |   |       |       
|   |   |       +---classes
|   |   |       |       comparator.js
|   |   |       |       index.js
|   |   |       |       range.js
|   |   |       |       semver.js
|   |   |       |       
|   |   |       +---functions
|   |   |       |       clean.js
|   |   |       |       cmp.js
|   |   |       |       coerce.js
|   |   |       |       compare-build.js
|   |   |       |       compare-loose.js
|   |   |       |       compare.js
|   |   |       |       diff.js
|   |   |       |       eq.js
|   |   |       |       gt.js
|   |   |       |       gte.js
|   |   |       |       inc.js
|   |   |       |       lt.js
|   |   |       |       lte.js
|   |   |       |       major.js
|   |   |       |       minor.js
|   |   |       |       neq.js
|   |   |       |       parse.js
|   |   |       |       patch.js
|   |   |       |       prerelease.js
|   |   |       |       rcompare.js
|   |   |       |       rsort.js
|   |   |       |       satisfies.js
|   |   |       |       sort.js
|   |   |       |       valid.js
|   |   |       |       
|   |   |       +---internal
|   |   |       |       constants.js
|   |   |       |       debug.js
|   |   |       |       identifiers.js
|   |   |       |       re.js
|   |   |       |       
|   |   |       \---ranges
|   |   |               gtr.js
|   |   |               intersects.js
|   |   |               ltr.js
|   |   |               max-satisfying.js
|   |   |               min-satisfying.js
|   |   |               min-version.js
|   |   |               outside.js
|   |   |               to-comparators.js
|   |   |               valid.js
|   |   |               
|   |   \---src
|   |           borderedText.ts
|   |           cache.spec.ts
|   |           cache.ts
|   |           getDistVersion.spec.ts
|   |           getDistVersion.ts
|   |           hasNewVersion.spec.ts
|   |           hasNewVersion.ts
|   |           index.spec.ts
|   |           index.ts
|   |           isNpmOrYarn.ts
|   |           types.ts
|   |           
|   +---smart-buffer
|   |   |   .prettierrc.yaml
|   |   |   .travis.yml
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---build
|   |   |       smartbuffer.js
|   |   |       smartbuffer.js.map
|   |   |       utils.js
|   |   |       utils.js.map
|   |   |       
|   |   +---docs
|   |   |       CHANGELOG.md
|   |   |       README_v3.md
|   |   |       ROADMAP.md
|   |   |       
|   |   \---typings
|   |           smartbuffer.d.ts
|   |           utils.d.ts
|   |           
|   +---socks
|   |   |   .eslintrc.cjs
|   |   |   .prettierrc.yaml
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---build
|   |   |   |   index.js
|   |   |   |   index.js.map
|   |   |   |   
|   |   |   +---client
|   |   |   |       socksclient.js
|   |   |   |       socksclient.js.map
|   |   |   |       
|   |   |   \---common
|   |   |           constants.js
|   |   |           constants.js.map
|   |   |           helpers.js
|   |   |           helpers.js.map
|   |   |           receivebuffer.js
|   |   |           receivebuffer.js.map
|   |   |           util.js
|   |   |           util.js.map
|   |   |           
|   |   +---docs
|   |   |   |   index.md
|   |   |   |   migratingFromV1.md
|   |   |   |   
|   |   |   \---examples
|   |   |       |   index.md
|   |   |       |   
|   |   |       +---javascript
|   |   |       |       associateExample.md
|   |   |       |       bindExample.md
|   |   |       |       connectExample.md
|   |   |       |       
|   |   |       \---typescript
|   |   |               associateExample.md
|   |   |               bindExample.md
|   |   |               connectExample.md
|   |   |               
|   |   \---typings
|   |       |   index.d.ts
|   |       |   
|   |       +---client
|   |       |       socksclient.d.ts
|   |       |       
|   |       \---common
|   |               constants.d.ts
|   |               helpers.d.ts
|   |               receivebuffer.d.ts
|   |               util.d.ts
|   |               
|   +---sparse-bitfield
|   |       .npmignore
|   |       .travis.yml
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       test.js
|   |       
|   +---statuses
|   |       codes.json
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---string-width
|   |       index.d.ts
|   |       index.js
|   |       license
|   |       package.json
|   |       readme.md
|   |       
|   +---string_decoder
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---lib
|   |           string_decoder.js
|   |           
|   +---strip-ansi
|   |       index.d.ts
|   |       index.js
|   |       license
|   |       package.json
|   |       readme.md
|   |       
|   +---supports-color
|   |       browser.js
|   |       index.js
|   |       license
|   |       package.json
|   |       readme.md
|   |       
|   +---tar
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---lib
|   |           create.js
|   |           extract.js
|   |           get-write-flag.js
|   |           header.js
|   |           high-level-opt.js
|   |           large-numbers.js
|   |           list.js
|   |           mkdir.js
|   |           mode-fix.js
|   |           normalize-unicode.js
|   |           normalize-windows-path.js
|   |           pack.js
|   |           parse.js
|   |           path-reservations.js
|   |           pax.js
|   |           read-entry.js
|   |           replace.js
|   |           strip-absolute-path.js
|   |           strip-trailing-slashes.js
|   |           types.js
|   |           unpack.js
|   |           update.js
|   |           warn-mixin.js
|   |           winchars.js
|   |           write-entry.js
|   |           
|   +---to-regex-range
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---toidentifier
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---touch
|   |   |   index.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---bin
|   |   |       nodetouch.js
|   |   |       
|   |   \---node_modules
|   |       +---.bin
|   |       |       nopt
|   |       |       nopt.cmd
|   |       |       nopt.ps1
|   |       |       
|   |       \---nopt
|   |           |   .npmignore
|   |           |   LICENSE
|   |           |   package.json
|   |           |   README.md
|   |           |   
|   |           +---bin
|   |           |       nopt.js
|   |           |       
|   |           +---examples
|   |           |       my-program.js
|   |           |       
|   |           \---lib
|   |                   nopt.js
|   |                   
|   +---tr46
|   |   |   index.js
|   |   |   LICENSE.md
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---lib
|   |           mappingTable.json
|   |           regexes.js
|   |           statusMapping.js
|   |           
|   +---type-is
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---uid-safe
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---undefsafe
|   |   |   .jscsrc
|   |   |   .jshintrc
|   |   |   .travis.yml
|   |   |   example.js
|   |   |   LICENSE
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   +---.github
|   |   |   \---workflows
|   |   |           release.yml
|   |   |           
|   |   \---lib
|   |           undefsafe.js
|   |           
|   +---unpipe
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---util-deprecate
|   |       browser.js
|   |       History.md
|   |       LICENSE
|   |       node.js
|   |       package.json
|   |       README.md
|   |       
|   +---utils-merge
|   |       .npmignore
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---vary
|   |       HISTORY.md
|   |       index.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---webidl-conversions
|   |   |   LICENSE.md
|   |   |   package.json
|   |   |   README.md
|   |   |   
|   |   \---lib
|   |           index.js
|   |           
|   +---whatwg-url
|   |   |   index.js
|   |   |   LICENSE.txt
|   |   |   package.json
|   |   |   README.md
|   |   |   webidl2js-wrapper.js
|   |   |   
|   |   \---lib
|   |           encoding.js
|   |           Function.js
|   |           infra.js
|   |           percent-encoding.js
|   |           URL-impl.js
|   |           url-state-machine.js
|   |           URL.js
|   |           urlencoded.js
|   |           URLSearchParams-impl.js
|   |           URLSearchParams.js
|   |           utils.js
|   |           VoidFunction.js
|   |           
|   +---wide-align
|   |       align.js
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       
|   +---wrappy
|   |       LICENSE
|   |       package.json
|   |       README.md
|   |       wrappy.js
|   |       
|   \---yallist
|           iterator.js
|           LICENSE
|           package.json
|           README.md
|           yallist.js
|           
+---public
|   |   appBackground.jpg
|   |   bookmark.svg
|   |   Bosleys.jpg
|   |   compare.svg
|   |   dogsGood.svg
|   |   eye.svg
|   |   home.svg
|   |   iDealPup_Logo.png
|   |   logo.png
|   |   PetSmart.jpg
|   |   profile.svg
|   |   Tisol.jpg
|   |   
|   \---pups
|           Affenpinscher.png
|           Akita.png
|           Australian Cattle Dog.png
|           Australian Shepherd.png
|           Australian Terrier.png
|           Basenji.png
|           Basset Hound.png
|           Beagle.png
|           Belgian Malinois.png
|           Belgian Tervuren.png
|           Bichon Frise.png
|           Bloodhound.png
|           Border Collie.png
|           Border Terrier.png
|           Borzoi.png
|           Boston Terrier.png
|           Boxer.png
|           Brussels Griffon.png
|           Bull Terrier.png
|           Cairn Terrier.png
|           Cardigan Welsh Corgi.png
|           Chesapeake Bay Retriever.png
|           Chihuahua.png
|           Chinese Crested.png
|           Dachshund.png
|           Doberman Pinscher.png
|           English Setter.png
|           English Springer Spaniel.png
|           English Toy Spaniel.png
|           Field Spaniel.png
|           Finnish Spitz.png
|           French Bulldog.png
|           Golden Retriever.png
|           Gordon Setter.png
|           Great Dane.png
|           Great Pyrenees.png
|           Greyhound.png
|           Harrier.png
|           Irish Setter.png
|           Irish Terrier.png
|           Irish Water Spaniel.png
|           Irish Wolfhound.png
|           Italian Greyhound.png
|           Japanese Chin.png
|           Keeshond.png
|           Kerry Blue Terrier.png
|           Kuvasz.png
|           Labrador Retriever.png
|           Maltese.png
|           Mastiff.png
|           Newfoundland.png
|           Papillon.png
|           Pharaoh Hound.png
|           Pointer.png
|           Pomeranian.png
|           Pug.png
|           Rhodesian Ridgeback.png
|           Rottweiler.png
|           Saluki.png
|           Samoyed.png
|           Scottish Deerhound.png
|           Shih Tzu.png
|           Siberian Husky.png
|           Staffordshire Bull Terrier.png
|           Vizsla.png
|           Weimaraner.png
|           Welsh Springer Spaniel.png
|           Welsh Terrier.png
|           West Highland White Terrier.png
|           Whippet.png
|           Wirehaired Pointing Griffon.png
|           Yorkshire Terrier.png
|           
\---views
    |   404Page.ejs
    |   bookmark.ejs
    |   changePassword.ejs
    |   compare.ejs
    |   description.ejs
    |   dogsGood.ejs
    |   dogTrivia.ejs
    |   dogTriviaLost.ejs
    |   dogTriviaStart.ejs
    |   easterEgg.ejs
    |   easterEgg2.ejs
    |   emailSent.ejs
    |   filters.ejs
    |   forgotPassword.ejs
    |   home.ejs
    |   landingPage.ejs
    |   login.ejs
    |   passwordUpdated.ejs
    |   profile.ejs
    |   resetPassword.ejs
    |   results.ejs
    |   retryFilters.ejs
    |   search.ejs
    |   signup.ejs
    |   submitUser.ejs
    |   
    \---templates
            bookmarkCard.ejs
            dogGoodsCard.ejs
            footer.ejs
            header.ejs
            homeDogs.ejs
            