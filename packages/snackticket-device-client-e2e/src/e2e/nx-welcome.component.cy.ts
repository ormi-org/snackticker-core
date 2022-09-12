describe('snackticket-device-client', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('snackticket-core-nx-welcome').should('exist');
  });
});
