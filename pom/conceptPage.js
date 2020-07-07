const typeText = require(`../helper/typeText`);
module.exports = class ConceptPage {
    constructor (){
        this.typingDelay = 25;
        this.expectedPageTitle = `All Products – Infinite`;

        this.uploadConceptButton = `#my-concepts > div > div > div > div.upload-text`
        //Information
        this.titleInput = `input#title`;
        this.authorInput = `input#authorName`;
        this.contactInput = `textarea#contact`;
        //Poster
        this.imageInput = `input#pictureWord`;
        this.imageSearchButton = `input#pictureWord + div > button`;
        this.imageSearchCarousel = `#posterDetails > div > div:nth-child(2) > div > div > div.img-selector.bg-light.flex-grow-1`;
        this.imageTileSelect = `#posterDetails > div > div:nth-child(2) > div > div > div.img-selector.bg-light.flex-grow-1 > div > div:nth-child(2) > div.card`;
        this.colorSelect = `select#titleColor`;
        //Details
        this.viewSelect = `select#view`;
        this.lengthSelect = `select#filmLength`;
        this.budgetSelect = `select#budget`;
        this.charactersSelect = `select#numberOfChars`;
        this.locationsSelect = `select#numberOfLocs`;
        //Genre
        this.conceptTypeSelect = `select#conceptType`;
        this.genreTypeCheckbox = `input#thriller-formField`;
        //Synopsis
        this.logLineInput = `textarea#logLine`;
        this.synopsisInput = `textarea#synopsis`;

        //concept tile
        this.conceptTileElements = `#my-concepts > div > div`;
        this.createButton = `#script_edit_page > div > div > div.d-none.d-md-block.col-md-3.px-0.px-md-3 > div > button`
        this.closeSuccessModalButton = `#root > div.ss-modal > div > div.ss-modal-header.d-print-none > span > i`;
    
        this.editConceptButton1 = `#my-concepts > div > div:nth-child(2) > div > div.position-relative > span > i`;
        this.editConceptButton2 = `#my-concepts > div > div:nth-child(3) > div > div.position-relative > span > i`;
        this.conceptDeleteButtonText = `Delete`;
        this.conceptDeleteConfirmButtonText = `Confirm`;

        this.signOutButtonText = `Sign Out`;
    }

    uploadConcept(conceptDetails){
        cy.get(this.uploadConceptButton)
            .click({force: true});
        //Information
        typeText(this.titleInput, conceptDetails.title);
        typeText(this.authorInput, conceptDetails.author);
        cy.get(this.authorInput)
            .type(`{enter}`);
        //Poster
        typeText(this.imageInput, conceptDetails.image);
        cy.get(this.imageSearchButton)
            .click({force: true});
        cy.get(this.imageSearchCarousel)
            .scrollTo('right',{duration:1000});
        cy.get(this.imageSearchCarousel)
            .scrollTo('left',{duration:1000});
        cy.get(this.imageTileSelect)
            .click({force: true});
        cy.get(this.colorSelect)
            .select(conceptDetails.color);
        //Details
        cy.get(this.viewSelect)
            .select(conceptDetails.view);
        cy.get(this.lengthSelect)
            .select(conceptDetails.length);
        cy.get(this.budgetSelect)
            .select(conceptDetails.budget);
        cy.get(this.charactersSelect)
            .select(conceptDetails.characters);
        cy.get(this.locationsSelect)
            .select(conceptDetails.locations);
        //Genre
        cy.get(this.conceptTypeSelect)
            .select(conceptDetails.concept);
        cy.get(this.genreTypeCheckbox)
            .check({force: true});
        //Synopsis
        typeText(this.logLineInput, conceptDetails.logLine);
        typeText(this.synopsisInput, conceptDetails.synopsis);
        cy.get(this.createButton)
            .click({force: true});
        cy.get(this.closeSuccessModalButton)
            .click({force: true, timeout: 10000});
    }

    deleteConcept(){
        cy.get(this.editConceptButton1)
            .click({force: true});
        cy.contains(this.conceptDeleteButtonText)
            .click({force: true});
        cy.contains(this.conceptDeleteConfirmButtonText)
            .click({force: true});
    }

    getNumberOfConcepts(){
        const conceptElements = Cypress.$(this.conceptTileElements);
        return conceptElements.length -1;
    }

    signOut(){
        cy.contains(this.signOutButtonText)
            .click({force: true});
    }
    
}