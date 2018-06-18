describe('Click menu and toggle drawerr', function(){
  it('It clicks the menu button to toggle the drawerr menu', function(){
    cy.visit('http://localhost:8080')
      .get('.toggleDrawerr')
      .click();

    cy.get('#drawerr')
      .should('be.visible')
  });
});