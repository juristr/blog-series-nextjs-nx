describe('site', () => {
  beforeEach(() => {
    // navigate to an example article
    cy.visit('/articles/dynamic-routing');
  });

  it('should render the title of the article', () => {
    cy.get('h1').should('contain', 'Dynamic Routing and Static Generation');
  });

  it('should properly render the Youtube component', () => {
    cy.get('iframe').should('be.visible');
  });
});
