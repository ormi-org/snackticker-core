describe('snackticket-device-client', () => {
  beforeEach(() => cy.visit('/startup'));
  it('should render the component', () => {
    cy.get('snackticket-core-startup').should('exist');
  });
  it('should render the splash screen', () => {
    cy.get('snackticket-core-startup').get('snackticket-core-splash-screen').should('exist');
  })
});
