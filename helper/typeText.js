module.exports = (selector, textToType, typingDelay=`0`) => {
    cy.get(selector)
        .scrollIntoView({delay: 0}); 
    cy.get(selector)
        .type(textToType, { delay: typingDelay })
        .should('have.value', textToType);
}