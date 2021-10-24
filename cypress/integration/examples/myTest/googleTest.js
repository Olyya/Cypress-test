// googleTest.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test



describe('My First Test', () => {
    it('google Test', () => {
        cy.visit('https://www.google.com/')
        cy.get('input[name="q"]')
            .type("TestCase")
            .type('{enter}')

        cy.get('#rso > div:nth-child(1)  h3')
            .should('have.text', 'Test case - QALight')

    })
})