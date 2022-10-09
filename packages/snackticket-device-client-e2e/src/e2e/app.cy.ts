describe('snackticket-device-client', () => {
  beforeEach(() => cy.visit('/'));

  it('should start application', () => {

    cy.get('body').should('exist');
  });
});
