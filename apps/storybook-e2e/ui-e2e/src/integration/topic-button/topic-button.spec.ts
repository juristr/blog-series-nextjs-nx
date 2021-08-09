describe('shared-ui: TopicButton component', () => {
  it('should render the topic name', () => {
    cy.visit('/iframe.html?id=topicbutton--primary&args=topicName:Next.js;');
    cy.get('[data-testid=topicName]').should('contain', 'Next.js');

    cy.visit('/iframe.html?id=topicbutton--primary&args=topicName:React;');
    cy.get('[data-testid=topicName]').should('contain', 'React');
  });

  it('clicking the icon should properly pass the name of the topic to the event handler', () => {
    cy.visit('/iframe.html?id=topicbutton--primary&args=topicName:React;');

    cy.get('[data-testid=topicButton]').click();

    cy.get('[data-testid=click-result]').should('contain', 'React');
  });
});
