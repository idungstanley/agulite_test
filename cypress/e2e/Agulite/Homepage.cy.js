/// <reference types="cypress"/>
describe('NavBar Menu', () => {
  before(() => {
    cy.visit('/')
  })

  it('Should be able to click the home page', () => {
    cy.get('.navbar-brand > .img-fluid').click()
    cy.url().should('eq', 'https://agulite.com/')
    cy.get(':nth-child(1) > .nav-link').click()
    cy.url().should('eq', 'https://agulite.com/')
  })

  it('Should be able to navigate to the Talent Aquasition tab', ()=>{
    cy.get(':nth-child(2) > .nav-link').should(
      'have.attr',
      'href',
      'https://talentsurvey.agulite.com'
    )
  })

it('Should be able to navigate to the Career page', ()=>{
  cy.get(':nth-child(3) > .nav-link').should(
    'have.attr',
    'href',
    'https://techcareer.agulite.com'
  )
  })

it('Should be able to navigate to the Expert', ()=>{
  cy.get(':nth-child(4) > .nav-link').should(
    'have.attr',
    'href',
    'https://expert.agulite.com'
  )
  cy.screenshot('myApp')
  })
})

describe('Body Check', ()=>{
  before(()=>cy.visit('/'))
it('should have only one "H1"', ()=>{
  cy.get('h1 > .turquoise')
    .should('have.class', 'turquoise')
    .and('have.css', 'color', 'rgb(245, 128, 12)')
  })
})
