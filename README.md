<strong>CANDY CHASE 2020</strong>

- Ionic5/Angular

- Using OPEN FOOD FACTS API ( open database licence )

- Vectors from Vecteezy.com + Homemade!



<https://candychase2020-ionic5.herokuapp.com/>

Use as a PWA : 

- open link on mobile browser
- page options : 'save to homescreen'
- close browser & open app from mobile homescreen

![alt text](./src/assets/imgs/candyChase_screen_welcome.jpg)


Backstory -------------
> This project was initially created as a draft in 2018 during a Halloween Hackaton with Hadaaika Said, Yanis Fournier & Soizic Lee.
> I started working on it again last january 2020, first under the initial ionic 3 environment, then migrating to ionic 5 & under CI/CD  + deployed on Heroku.
> The testing & general development are still an ongoing process ! 
-----

Getting started
===============================================================

#### Prerequisites
* [NodeJS](https://nodejs.org/)
* [Ionic 5](ionicframework.com/)

Clone this repository

    git clone https://github.com/GitHubAgneska/CandyChase2020-ionic5.git

Install the npm packages

    npm i

Launch app

    ng s

Run tests with Karma

    ng test




Known issues (as of 070220)
========================================================================================

- Geolocation : coords non accurate under chrome mac os : issue apparently related to mac os catalina update (unresolved atm - 05152020)

- Reverse geocode cordova implementation


Npm issue(s)
===
high security vulnerability 'http-proxy Denial of Service' => no fix atm
https://stackoverflow.com/questions/61849075/denial-of-service-http-proxy-ionic-angular


check if affects prod:

    npm audit --prod


Environment & Project settings 
========================================================================================
GENERATE NEW IONIC 5 PROJECT with cordova ( Capacitor might be a better initial choice !)

+ testing : jasmine/karma/protrator
+ CI  : CircleCI 
+ CD : Heroku

        ionic start projectName --tabs cordova
        npm i jasminecore


CIRCLE CI SET UP
(https://angular.io/guide/testing#set-up-continuous-integration)

- Step 1: Create a folder called .circleci at the project root.
- Step 2: In the new folder, create a file called config.yml with the content:
  
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
- Step 3: Commit your changes and push them to your repository.
- Step 4: Sign up for Circle CI and add your project. Your project should start building.


if => build err : could not find conf for chrome headless
    => add to karma.conf:

    browsers: [
        'Firefox', 'Chrome'
        ],
        customLaunchers: {
        ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
        }}

=> 
    
    npm run test -- --no-watch --no-progress --browsers=ChromeHeadlessCI


if => build err : npm run e2e -- --protractor-config=e2e/protractor-ci.conf.js 
    "Cannot find module '/home/circleci/my-project/e2e/protractor-ci.conf.js'"

=> create protrator-ci.conf.js in e2e folder:

    const config = require('./protractor.conf').config;config.capabilities = {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--no-sandbox']
                    }
                };exports.config = config;



---

SETTING UP AUTOMATIC DEPLOY  ON HEROKU


https://circleci.com/docs/2.0/env-vars/index.html#setting-an-environment-variable-in-a-project

https://circleci.com/docs/2.0/deployment-examples/index.html#heroku

- connect project from github to heroku
- set up environment variables in the project on circle-ci, using heroku_app_name and heroku_app_apikey
- add heroku orbs (config) to config.yml : 


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


[ install heroku cli ] 

    brew tap heroku/brew && brew install heroku

check logs details :

        heroku logs -a candychase2020-ionic5
    login:
        ` heroku auth:login ` / `heroku auth:logout`
    restart dynos:
        `heroku restart -a candychase2020-ionic5`

cli commands : https://devcenter.heroku.com/articles/heroku-cli-commands


=> build heroku : OK but deploy err : 

    candyChase2020Ionic5@0.0.1 start /app
    ng serve
    sh: 1: ng: not found


    => adding to package.json : 
    ` "heroku-postbuild": "ng build --prod" `



===> DEPLOY TO HEROKU SOLUTION
https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147

+ uncomment /www in .gitignore
+ change path in 'server.js' dist to => www
+ run `ng build --watch `


  

---

Note about geolocation (ionic-native geolocation) 
=> USE 

    @ionic-native/geolocation@5.20.0 (issues with latest versions)

import like so:

    import { Geolocation } from '@ionic-native/geolocation/ngx';

(not using 'ngx' at the end will cause build error 'can't resolve all parameters for 
[ services where injected ])

```
Geolocation.getCurrentPosition().then((data) => {
      console.log('My latitude : ', data.coords.latitude);
      console.log('My longitude: ', data.coords.longitude);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
```

  if  => firefox err 'Error message : User denied geolocation prompt'

FIX :  Finder->apple->System Preferences->Security & Privacy-> Privacy then add Firefox and Safari to the whitelist


   => coords non accurate under chrome : issue related to mac os catalina update (unresolved atm - 05152020)
   https://support.google.com/chrome/thread/15257607?hl=en
   https://support.google.com/accounts/thread/19694840?hl=en
   https://bugs.chromium.org/p/chromium/issues/detail?id=1035290


Leaflet
===

for full source code with unit tests, download repo
https://github.com/Leaflet/Leaflet


import like so:

    import * as L from 'leaflet';

===

NOTE on @Viewchild (used to display map)

add

        { static: false } 
    
as a second option for @ViewChild. This causes the query results to be resolved after change detection runs, allowing your @ViewChild to be updated after the value changes.






Geocoder
=====

    @cordova-plugin-nativegeocoder

using 3.3.0

    @ionic-native/native-geocoder

using 5.20.0

if => browser err : 'cordova not available' 
    -> browser platform needed 


=> CORDOVA ADD PLATFORMS : 

to see available versions for the current CLI version

    cordova platform ls

here, to add browser: 

    ionic cordova platform add browser@6.0.0
(```ionic cordova platform add browser``` won't work )

  + CHECK INSTALLS :
 
        ionic info
    
        ionic cordova run browser --no-native-run



run geocoder in browser 
(otherwise ' ng s / ionic s' will get error 'cordova is not available')

try:


    ionic cordova run browser --no-native-run

=> err 'Error: exec proxy not found for :: NativeGeocoder :: reverseGeocode'

-> plugin is not supported on the browser platform


try : 

    ionic cordova run android --device




OPTIONAL THIRD-PARTY LIBRARIES
-----
-----
Image picker plugin

    ionic cordova plugin add cordova-plugin-telerik-imagepicker
    npm install @ionic-native/image-picker

-----
GIT-SECRET ( => test to store firebase credentials and configurate for circleCI CI/CD environment )

https://git-secret.io/#using-gpg
https://dzone.com/articles/jenkins-cicd-with-git-secrets

    brew install git-secret

<small>NOTE ------- 
A CA file has been bootstrapped using certificates from the system
keychain. To add additional certificates, place .pem files in
  /usr/local/etc/openssl@1.1/certs

and run
  /usr/local/opt/openssl@1.1/bin/c_rehash

openssl@1.1 is keg-only, which means it was not symlinked into /usr/local,
because macOS provides LibreSSL.

If you need to have openssl@1.1 first in your PATH run:
  echo 'export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"' >> ~/.zshrc

For compilers to find openssl@1.1 you may need to set:
  export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"
  export CPPFLAGS="-I/usr/local/opt/openssl@1.1/include"

For pkg-config to find openssl@1.1 you may need to set:
  export PKG_CONFIG_PATH="/usr/local/opt/openssl@1.1/lib/pkgconfig"

  
--------</small>


` git secret init ` 

` gpg --gen-key `

Add the first user to the git-secret repo keyring by running 
` git secret tell your@gpg.email `

see key id
` gpg --list-secret-keys `

Export / retrieve gpg private key:
`gpg -a --export-secret-keys $keyid > gpg-secret.key `
` gpg --export-ownertrust > gpg-ownertrust.txt `

tell CircleCI key to secret files =>
add environment variable : 
name : GPG_PRIVATE_KEY
value : gpg-secret key

add files to hide:
` git secret add <filename> `

encrypt files:
` git secret hide `

decrypt if needed:
` git secret reveal `


===

importing 'firebase config' from 'credentials.ts' into app.component.ts for 'firebase.initializeApp(firebaseConfig)' =>  

because 'credentials.ts' is in .gitignore, build fails in circleci with npm error:
 ' src/app/app.component.ts:3:32 - error TS2307: Cannot find module 'credentials' '

 ==> missing orb in config.yml at run time ?
 https://circleci.com/orbs/registry/orb/lyvly/git-secret


---> removing credentials from .gitignore for now (dropping git secret process for now)

---> moving firebaseConfig to environment/environment.prod

---> adding 'AngularFireModule.initializeApp(environment.firebaseConfig)'in app.module (instead of app.component)

---> fix npm error 'node_modules/@angular/fire/angularfire2.d.ts:37:49 - error TS2344: Type 'T[K]' does not satisfy the constraint ... ' => add 'compilerOptions: {"skipLibCheck": true }' to tsconfig.ts

---

CAPACITOR

    ionic integrations enable capacitor

ADD lab-mode to Test app on multiple platform types in the browser

    npm i @ionic/lab --save-dev
serve with lab flag:

    ionic serve --lab


----

FIREBASE

https://ionicthemes.com/tutorials/about/building-a-ionic-firebase-app-step-by-step

    npm install @angular/fire firebase --save

( + analytics : )

    npm install @ionic-native/firebase-analytics  

----

SOUND

    ionic cordova plugin add cordova-plugin-nativeaudio
    npm install @ionic-native/native-audio/ngx

[ Supported Platforms

    Android
    Browser
    iOS  ]

    
+ create a service to handle switching between the HTML5 and native audio