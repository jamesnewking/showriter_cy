module.exports = () => {
    const disableSmoothScroll = () => {
        cy.document().then(document => {
          const node = document.createElement('style');
          node.innerHTML = 'html { scroll-behavior: inherit !important; }';
          document.body.appendChild(node);
        });
      };
    
    disableSmoothScroll();//Cypress bug 
    //https://github.com/cypress-io/cypress/issues/3200
    //let scrollToBottom = require("scroll-to-bottomjs");
    cy.scrollTo('bottom',{duration: 1000, easing: 'swing', timeout: 1000});
    //cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }));
    cy.scrollTo('top', { duration: 200 });
}