generate ionic5 project including cordova +  angular testing
`ionic start projectName --tabs cordova``

---

ng test => jasminecore missing

`npm i jasminecore``

---

adding circleCI
(https://angular.io/guide/testing#set-up-continuous-integration)

Step 1: Create a folder called .circleci at the project root.
Step 2: In the new folder, create a file called config.yml with the content
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

    => 

