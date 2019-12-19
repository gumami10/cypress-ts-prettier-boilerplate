/// <reference types="cypress"/>
import { showCasePage } from '../elements/showcase'
import { formatDate } from '../utils/date'
const img = 'images/girl.jpg'

context('Landing page', () => {
  it('should create new service', () => {
    cy.redirect(showCasePage.newService, true, true)
    cy.get('#title').type(`Teste automatizado ${formatDate(new Date())}`)
    cy.get('#select-category').click()
    cy.get('[data-value="8"]').click()
    cy.get('.actions > [type="button"] > .MuiButton-label').click()
    cy.get('#select-sub_category').click()
    cy.get('.trumbowyg-editor').type(`
      Quando nasci, um anjo torto
      desses que vivem na sombra
      disse: Vai, Aldair Pereira! ser gauche na vida.
    `)
    cy.get(':nth-child(5) > .MuiFormControlLabel-root').click()
    cy.get('#value').type('1111')
    cy.get('#deadline_value').type('999')
    cy.get('#btn-submit').click()
    cy.get('.close').click()
  })
})
