
# Cypress/Percy Automation test 
# 
```
https://docs.cypress.io/guides/getting-started/installing-cypress.html
```
## install Cypress in `cy` directory
## after creating a new project in Percy.io, get the token
## and add it to .env: 
`PERCY_TOKEN=xxxxxx`
`PERCY_BRANCH=current_snapshot_branch`
#### Note: Percy will compare the current testing branch against master by default unless this is set:
`PERCY_TARGET_BRANCH=test_against_this_branch`


# to launch Cypress with Percy
## from the `cy` directory
```
npx percy exec -- cypress open
```
### or to launch Cypress Only
```
npx cypress open
```
#### or
```
npm run cypress:open
```

### to run only one test with Percy
```
npx percy exec -- cypress run --spec '/Users/jameswang/Documents/Code/cy/cypress/integration/infinite/infinite.js'
```

### Setup Percy note:
```
Failed to execute 'send' on 'XMLHttpRequest'
This is due to Content Security Policy (CSP) errors that is preventing the Percy SDK from sending the snapshot to our service. To work around this issue you can disable the browsers web security in the cypress.json config file:
{
  "chromeWebSecurity": false
}
```

#### Cypress record run and upload to CY
```
npx percy exec -- cypress run --spec '/Users/jameswang/Documents/Code/cy/cypress/integration/infinite/infinite.js' --record --key fdeecc77-7925-4dfc-b83a-c1f1e0fb2413
```
# Notes
##### cypress-wait-until
```
https://www.npmjs.com/package/cypress-wait-until
cypress-wait-until extends Cypress' cy command.
Add this line to your project's cypress/support/commands.js:
import 'cypress-wait-until';
cy.waitUntil(() => true);
```

#### viewports
`https://docs.cypress.io/api/commands/viewport.html#Syntax`

#### cypress.json
```
{
  "chromeWebSecurity": false,
  "projectId": "q6yoa3",
  "firefoxGcInterval": 2
}
```