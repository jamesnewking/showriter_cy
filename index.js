const MainPage = require(`./pom/main`);
const SignInPage = require(`./pom/signInPage`);
const scrollDownUp = require(`./helper/scrollDownUp`);
const ConceptPage = require("./pom/conceptPage");
const conceptDetails = require("./constants/conceptDetails");
let numberOfConcepts = 0;

describe(`Showriter automation`, () => {
    const productDetail = {};
    it(`Open Showriter`, () => {
        const mainHomePage = new MainPage();
        cy.visit(mainHomePage.testURL);
        cy.clearLocalStorage();
    })
    describe('Testing infinite', () => {
        it('1) Visit Infinite site', () => {
            const mainHomePage = new MainPage();
            cy.title()
            .should(`eq`, mainHomePage.expectedPageTitle);
            scrollDownUp();            
        });
        it('2) Click on Sign In in nav', () => {
            const mainHomePage = new MainPage();
            mainHomePage.signOut();
            cy.get(mainHomePage.navSignIn)
                .then(
                    ($navSignIn) => {
                        $navSignIn
                            .trigger('mouseover', { force: true });
                        expect($navSignIn.text()).to.equal(mainHomePage.navSignInText);
                    }
                )
            cy.get(mainHomePage.navSignIn).click({force:true});
        });
        it('3) Log In', () => {
            const signInPage = new SignInPage();
            cy.title()
                .should(`eq`, signInPage.expectedPageTitle);
            scrollDownUp();
            signInPage.login( Cypress.env(`ACCOUNT_EMAIL`), Cypress.env(`ACCOUNT_PASSWORD`) );
        });
        it('4) Upload Concept', () => {
            const conceptPage = new ConceptPage();
            scrollDownUp();
            cy.wait(3500).then( () => numberOfConcepts = conceptPage.getNumberOfConcepts() );
            conceptPage.uploadConcept(conceptDetails);
            cy.wait(2500).then( () => expect (conceptPage.getNumberOfConcepts() - numberOfConcepts).to.be.equal(1));
        });
        it('5) Remove Concept', () => {
            const conceptPage = new ConceptPage();
            scrollDownUp();
            conceptPage.deleteConcept();
            cy.wait(2000).then( () => {
                expect ( conceptPage.getNumberOfConcepts() ).to.be.equal(numberOfConcepts);
            });
        });
        it('6) Sign Out', () => {
            const conceptPage = new ConceptPage();
            conceptPage.signOut();
        });

    });

    
  });
