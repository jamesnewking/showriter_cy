module.exports = class MainHomePage {
    constructor (){
        this.testURL = `https://blottchain-fb45a.firebaseapp.com/`;

        this.expectedPageTitle = `SHOWriter`;
        this.navMainCategories = `#navigationBar > div > ul > li`;
        this.navSignIn = `#navigationBar > div > ul > li > a`;
        this.navSignOut = `a#signOut`;
        this.navSignInText = `Sign In`;
    }

    signOut(){
        if( Cypress.$(this.navMainCategories).length > 1 ){
            cy.get(this.navSignOut)
                .click({force: true});
        }
    }
}