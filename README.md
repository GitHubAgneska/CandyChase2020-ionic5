GENERATE NEW IONIC 5 PROJECT including cordova and angular testing jasmine/karma/protrator, with CircleCI, & deployed on Heroku

`ionic start projectName --tabs cordova``

---

ng test => jasminecore missing

`npm i jasminecore`

---

adding circleCI
(https://angular.io/guide/testing#set-up-continuous-integration)

Step 1: Create a folder called .circleci at the project root.
Step 2: In the new folder, create a file called config.yml with the content:
        `   
        version: 2
        jobs:
            build:
                working_directory: ~/my-project
                docker:
                - image: circleci/node:10-browsers
                steps:
                - checkout
                - restore_cache:
                    key: my-project-{{ .Branch }}-{{ checksum "package-lock.json" }}
                - run: npm install
                - save_cache:
                    key: my-project-{{ .Branch }}-{{ checksum "package-lock.json" }}
                    paths:
                        - "node_modules"
                - run: npm run test -- --no-watch --no-progress --browsers=ChromeHeadlessCI
                - run: npm run e2e -- --protractor-config=e2e/protractor-ci.conf.js
            `
Step 3: Commit your changes and push them to your repository.
Step 4: Sign up for Circle CI and add your project. Your project should start building.


=> build err : could not find conf for chrome headless
    => adding to karma.conf:

    ` browsers: [
        'Firefox', 'Chrome'
        ],
        customLaunchers: {
        ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
        }}
    `
    
    => npm run test -- --no-watch --no-progress --browsers=ChromeHeadlessCI = OK


=> build err : npm run e2e -- --protractor-config=e2e/protractor-ci.conf.js 
    "Cannot find module '/home/circleci/my-project/e2e/protractor-ci.conf.js'"

    => creating protrator-ci.conf.js in e2e folder:
            `
            const config = require('./protractor.conf').config;config.capabilities = {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--no-sandbox']
                    }
                };exports.config = config;
            `
=> build OK

---

SETTING UP AUTOMATIC DEPLOY  ON HEROKU


https://circleci.com/docs/2.0/env-vars/index.html#setting-an-environment-variable-in-a-project

https://circleci.com/docs/2.0/deployment-examples/index.html#heroku

- connect project from github to heroku
- set up environment variables in the project on circle-ci, using heroku_app_name and heroku_app_apikey
- add heroku orbs (config) to config.yml : 
    `
    orbs:
    heroku: circleci/heroku@0.0.10. # Invoke the Heroku orb
    
    workflows:
        heroku_deploy:
        jobs:
            - build
            - heroku/deploy-via-git: # Use the pre-configured job, deploy-via-git
                requires:
                - build
                filters:
                branches:
                    only: master
    `



[ install heroku cli ] 
        ` brew tap heroku/brew && brew install heroku `
    check logs details : 
        `heroku logs -a candychase2020-ionic5`


=> build heroku : OK but deploy err : 

    candyChase2020Ionic5@0.0.1 start /app
    ng serve
    sh: 1: ng: not found


    => adding to package.json : 
    ` "heroku-postbuild": "ng build --prod" `
