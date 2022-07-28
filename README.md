#discuss #webdev #beginners
│   app.js          # App entry point
└───routes          # Our routes controllers for all the endpoints of the app
└───config          # Environment variables and configuration related stuff
└───controllers     # Functions for our APIs
└───models          # Database models
└───middlewares     # Contains all the middleware that we need
└───utils           # Common functions that would be used repetitively

/Controllers- This folder would contain all the functions for your APIs. Naming of files- xxxxx.controllers.js

/Routes- This folder would contain all the routes that you have created using Express Router and what they do would be exported from a Controller file
Naming of files- xxxxx.routes.js

/Models- This folder would contain all your schema files and and the functions required for the schema would also lie over here.
Naming of files- xxxxx.js

/Middleware- This folder would contain all the middleware that you have created, whether it be authentication/some other function.
Naming of files- xxxxx.middleware.js

/Utils(Optional)- The common functions that you would require multiple times throughout your code
Naming of files- Normal project file naming scheme

/Templates(Optional)- If your code requires you to send certain emails/ HTML code to the client-side, store it in this files
Naming of files- Normal project file naming scheme

/Config(Optional)- Configuration files for third party APIs/services like amazon s3 or db connections ...

<h1>My Steps</h1>
<ol>
    <li>
    setup repo
    </li>
    open    
    <li>
    npm init -y or set manaually
    </li>
    skelton imports/require statements
    <li>
    <pre>
{
    "server": {
        "host": "localhost",
        "port": 3000
    },
    "db": {
        
        "port": 27017,
        "name": "mongodb"
    }
}
</pre>
    </li>
    <li>
    </li>
    <li>
    </li>
    <li>
    </li>
</ol>

<pre>
/**
* [title] myNewApp-thisIsTheOneRodney
* [version (r.major.minor)] V0.0.1 - Not Released
*/

const config = require('config');
const express = require('express');
const app = express();
const startupDebugger = require('debug')('app:startup');
const dbaseDebugger = require('debug')('app:dbase');

// set view engine

app.set('view-engine', 'ejs');

//Configuration
console.log(`Application Name : ${config.get('name')}`);
console.log(`db-Password    : ${config.get('db.password')}`);

// middleware 
app.use(express.json());
//
app.use(express.urlencoded({ extended: true }));
//
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
// security and http request logging middleware
const morgan = require('morgan');
if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
}
//

// app root

// start the app running.  Define PORT -assign using the process object or default 3000.
</pre>

Get Version
npm -v

npm --version
Get Help
npm

npm help
Create package.json
npm init

# Below commands will create package.json file with default values
npm init -y

npm init --yes
Set Defaults
npm config set init-author-name 'YOUR NAME'

npm config set init-license 'MIT'
Get Defaults
npm config get init-author-name

npm config get init-license
Remove Defaults
npm config delete init-author-name

npm config delete init-license
Install Packages
Globally
npm install -g package-name
Production dependency
npm install --save package-name
Development dependency
npm install --save-dev package-name
Install Certain Version
Globally
npm install -g package-name@package-version
Production dependency
npm install --save package-name@package-version
Development dependency
npm install --save-dev package-name@package-version
Update Packages
Globally
npm update -g package-name
Production dependency
npm update --save package-name
Development dependency
npm update --save-dev package-name
Remove Packages
Globally
npm uninstall -g package-name
Production dependency
npm uninstall --save package-name
Development dependency
npm uninstall --save-dev package-name
Move to Another Folder
NPM stores installed packages inside node_modules folder.
Most people usually doesn't share node_modules folder along with their code, because you can easily install all the NPM packages they have used using below commands.

Install production and development dependencies.
npm install
Install production dependencies only.
npm install --production
Find Root Folder
Globally
npm root -g
Locally
npm root
List Packages
Globally
npm list -g

npm list -g --depth 0

npm list -g --depth 1
Locally
npm list

npm list --depth 0

npm list --depth 1
NPM Scripts
Define scripts in package.json file.
"scripts": {
  "start": "node index.js",
  "script-name":"command-to-run"
}
Run scripts
# Only "start" script will execute without run command
npm start

npm run script-name
Package Version
Find below, What package version with different symbols (*, ~, ^) represents in package.json file.

Version	Result
"*"	Install package with latest version
"4.17.3"	Install package with exact version
"~4.17.3"	Install package with latest patch update (Highlighted part gets updated)
"^4.17.3"	Install package with latest minor update (Highlighted part gets updated)
Most Preferred
"package-name": "^4.17.3"
