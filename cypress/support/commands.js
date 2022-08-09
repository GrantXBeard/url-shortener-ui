// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('submitUrl', () => {
    cy.intercept('http://localhost:3001/api/v1/urls', {
        method: "GET",
        fixture: 'urls.json',
        statusCode: 200
    })
    cy.visit('http://localhost:3000/')
    cy.get('form').within(() => {
        cy.get('[data-cy="title"]').type('Cool Car')
        cy.get('[data-cy="url"]').type('https://www.istockphoto.com/photos/happy-panda')
    })
    cy.get('.shorten-button').click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })