describe('HomePage', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/urls', {
      method: "GET",
      fixture: 'urls.json',
      statusCode: 200
  })
  cy.visit('http://localhost:3000/')
  })
  it('Should have a title', () => {
    cy.contains('h1', 'URL Shortener')
  })
  it('Should have a form', () => {
    cy.get('form')
  })
  it('Should have an input for "Title" and "Url"', () => {
    cy.get('form').within(() => {
      cy.get('[data-cy="title"]')
      cy.get('[data-cy="url"]')
    })
  })
  it('Should be able to fill out input fields', () => {
    cy.get('form').within(() => {
      cy.get('[data-cy="title"]').type('Cool Car')
      cy.get('[data-cy="url"]').type('https://www.istockphoto.com/photos/happy-panda')
    })
  })
  it('Should see all Urls displayed', () => {
    cy.get('.url')
  })
  it("should be able to submit a Url to be shortened" , () => {
    cy.intercept('POST','http://localhost:3001/api/v1/urls', (req) => {
      expect(req.body.title).to.equal('Cool Car')
  })
    cy.submitUrl()
  })
})