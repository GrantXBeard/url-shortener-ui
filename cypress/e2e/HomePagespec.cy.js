describe('HomePage', () => {
  beforeEach(() => {
    cy.fixture('urls.json')
    .then(urls => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
        body: urls
      })
  })
  cy.intercept('POST','http://localhost:3001/api/v1/urls', {
    body: {
      urls: [
        {
      id: 5, 
      long_url: "https://www.istockphoto.com/photos/happy-panda", 
      short_url: "http://localhost:3001/useshorturl/5", 
      title: 'Cool Car'
        }
      ]
    }
  });
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
    cy.get('form').within(() => {
      cy.get('[data-cy="title"]').type('Cool Car')
      cy.get('[data-cy="url"]').type('https://www.istockphoto.com/photos/happy-panda')
    })
    cy.get('.shorten-button').click()
  })
})