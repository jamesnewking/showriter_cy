module.exports = class SignInPage {
    constructor (){
        this.typingDelay = 25;
        this.expectedPageTitle = `SHOWriter`;

        this.emailInput = `input#email`;
        this.passwordInput = `input#password`;
        this.signInButtonText = `Sign In`;
        this.signInButton = `#root > div > div > div.app-content.pt-5 > div.row > div > div > div > form > button`;
    }

    login(email, password){
        cy.get(this.emailInput)
            .type(email, { delay: this.typingDelay })
            .should('have.value', email);
        cy.get(this.passwordInput)
            .type(password, { delay: this.typingDelay })
            .should('have.value', password);
        // cy.contains(this.signInButtonText)
        //     .click();
        cy.get(this.signInButton)
            .click({force: true});

    }
}