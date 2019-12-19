import { loginPage } from '../elements/dashboard'
import { showCasePage } from '../elements/showcase'

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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Must be declared global to be detected by typescript (allows import/export)
// eslint-disable @typescript/interface-name
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable<Subject> {
      login(): Chainable<Window>
      redirect(url: string, hasParams: boolean, login?: boolean): void
    }
  }
}

/**
 * Example:
 * Login in jobzz page
 */
Cypress.Commands.add('login', pageName => {
  cy.visit(showCasePage.url)
  cy.get('[href="/login"] > .MuiButtonBase-root').click()
  cy.server()
  cy.route('POST', '/integration/auth/transparentLogin').as('login')
  cy.get(loginPage.email).type('aldair@pereira.com')
  cy.get(loginPage.password).type('grande aldair')
  cy.get(loginPage.submit).click()
  cy.wait('@login')
  cy.get('.close').click()
})

/**
 * Example:
 * Goes to jobzz page
 */
Cypress.Commands.add('redirect', (url, login, hasParams) => {
  cy.visit(url)

  if (login) {
    cy.login()
  }
  if (hasParams) {
    cy.visit(url)
  }
})

import 'cypress-file-upload'

// Convert this to a module instead of script (allows import/export)
export {}
