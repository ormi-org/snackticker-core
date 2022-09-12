describe('snackticket-device-client', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('snackticket-core-root').should('exist');
  });
});
