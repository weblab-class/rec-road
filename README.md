# Citations
## Data: 
FireRoad API, MIT OpenCourseWare site
## Libraries: 
axios, used for gathering data from FireRoad API and web scraping. cheerio, used for analyzing scraped data from external sites
## Video tutorials: 
infinite scroll (https://www.youtube.com/watch?v=NZKUirTtxcg), web scraping (https://www.youtube.com/watch?v=XX8Q_39mue4)
## Documentation: 
MongoDB docs (https://docs.mongodb.com/manual/reference/method/)
## web.lab material: 
Catbook
## web.lab instructors: 
Vincent on accessing multiple MongoDB collections in one API endpoint, Daniel on working with FireRoad API, Akshaj on async and await for gathering data from FireRoad API
## Referenced code (not used directly by our application): 
FireHose source code (https://github.com/odpf/firehose), FireRoad source code (https://github.com/venkatesh-sivaraman/FireRoad)
## StackOverFlow: 
resolving our bug with rendering attempt before useEffect is called (https://stackoverflow.com/questions/63711013/how-to-trigger-useeffects-before-render-in-react), javascript subset array of highest 10 values for ranking courses in our feed/saved pages (https://stackoverflow.com/questions/483420/easiest-way-to-derive-subset-array-of-highest-10-values), javascript checking for undefined values in the data (https://stackoverflow.com/questions/3390396/how-can-i-check-for-undefined-in-javascript), javascript breaking from nested loops (https://stackoverflow.com/questions/183161/whats-the-best-way-to-break-from-nested-loops-in-javascript), javascript sort (https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value), javascript chaining (https://stackoverflow.com/questions/41445220/chaining-promises-with-promises-inside-then), javascript append to array (https://stackoverflow.com/questions/351409/how-to-append-something-to-an-array), git add and commit in one command (https://stackoverflow.com/questions/4298960/git-add-and-commit-in-one-command), javascript loading local json file (https://stackoverflow.com/questions/7346563/loading-local-json-file), css align text bar (https://stackoverflow.com/questions/19056725/how-to-center-align-text-in-navigation-bar-of-website-in-css/19056803), javascript nested promise etiquette (https://stackoverflow.com/questions/35805603/are-nested-promises-normal-in-node-js), javascript adding new key to object (https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object), javascript initialize array length (https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript), attempting to play with google verification (https://stackoverflow.com/questions/54138959/google-sign-in-backend-verification)

# Stuff to Implement
1. Scrape course descriptions, ratings, and pictures from Student Catalog, FireHose, and OCW
2. Search bar
3. Upgrade feed recommending algorithm
4. Profile page
5. History page to store and display past votes
6. Sidebar with settings that are saved after each session
7. Pre-choose classes
8. Login with Touchstone/Integration with Canvas (not sure if these will be the same system/can students login to our website without connecting to Canvas?)
9. Export to FireRoad
10. Friend page/system
11. Implement prereq box/algorithm in results
12. Implement OCW links/box in results
13. A few more stylistic choices

# How to code a webapp with this skeleton

## Initial setup

All teammates will need (explained in http://weblab.to/install)
  - A bash console (on Mac or Linux, this is Terminal. On Windows, we recommend Git Bash)
  - NodeJS version 16. If it is installed correctly, typing "node --version" should give v16.13.1 and "npm --version" should give 8.1.2
  - Visual Studio Code (or another code editor)
  - the Prettier VSCode extension

Also, all of you will need to go through the MongoDB Atlas setup (http://weblab.to/mongo-setup). 

Additionally for authentication, one of you will need to obtain a CLIENT_ID, instructions are at http://weblab.to/clientid 

## Downloading these files

First, you probably have a team repository somewhere (the link looks like: https://github.com/weblab-class/teammate1-teammate2-teammate3). You each should clone this (empty) repository by navigating to where you want your folder to be (**NOT in catbook**) and typing: git clone https://github.com/weblab-class/teammate1-teammate2-teammate3.git <-- with the correct link.

Then, one of your team members will need to do the following: 

First on GitHub, download the skeleton (this repository) as a zip file, by clicking Code -> Download as ZIP. (Do not clone it, since this will download extra files, like .git, which will lead to GitHub being confused). 

Then, drag over all of the files in this skeleton into your team's folder. **Make sure to also drag over the hidden files!** To see these hidden files, navigate to the skeleton in Finder/File Explorer and press command+shift+period (mac) or View > Show > Hidden items (windows). 

The files/folders you must drag over are:
  - .babelrc (hidden)
  - .gitignore (hidden)
  - .npmrc (hidden)
  - .prettierrc (hidden)
  - client (folder)
  - package-lock.json
  - package.json
  - README.md
  - server (folder)
  - webpack.config.js

[Quick youtube demo on dragging the files](https://www.youtube.com/watch?v=7Q_xxowPW1c)

Then, in terminal, navigate to your teams folder and push all of the files to your team's GitHub repository as usual:
   - git add -A
   - git commit -m "Skeleton code"
   - git push 

Now the rest of your teammates can pull all these files with a 'git pull'!

Post on Piazza if you run into any issues

## What you need to change in the skeleton

- Change the Frontend CLIENT_ID (Skeleton.js) to your team's CLIENT_ID (obtain this at http://weblab.to/clientid)
- Change the Server CLIENT_ID to the same CLIENT_ID (auth.js) 
- Change the Database SRV (mongoConnectionURL) for Atlas (server.js). You got this in the MongoDB setup. remember to replace <password> and <dbname> (should be no < or > in your SRV)
- Change the Database Name for MongoDB to whatever you put in the SRV to replace <dbname> (server.js)
- (Optional) Add a favicon to your website at the path client/dist/favicon.ico
- (Optional) Update website title in client/dist/index.html
- (Optional) Update this README file ;)
- (Optional) Update the package.json file with your app name :) (line 2)
  
## How to run this skeleton
First, 'npm install'
Then open two seperate terminals, and 'npm run hotloader' in the first, and 'npm start' in the second.
Then open http://localhost:5000

## How to go from this skeleton to your actual app
Check out this [How to Get Started Guide](http://weblab.to/get-started)
  
## Socket stuff
Note: we'll be getting to this in lecture in week 2, so don't worry if you don't know it yet

- If you're not using realtime updating or don't need server->client communication, you can remove socket entirely! (server-socket.js, client-socket.js, and anything that imports them)
- If you are using sockets, consider what you want to do with the FIXME in server-socket.js

## Edit at your own risk

the following files students do not need to edit. feel free to read them if you would like.

```
client/src/index.js
client/src/utilities.js
client/src/client-socket.js
server/validator.js
server/server-socket.js
.babelrc
.npmrc
.prettierrc
package-lock.json
webpack.config.js
```

## Good luck on your project :)
