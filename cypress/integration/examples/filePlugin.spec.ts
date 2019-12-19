// /// <reference types="cypress"/>
// import { loginPage } from '../elements/dashboard'
// import { showCasePage } from '../elements/showcase'
// import { formatDate } from '../utils/date'
// const img = 'images/girl.jpg'

// context('Landing page', () => {
//   before(() => {
//     cy.clearCookies()
//   })

//   it('should login', () => {
//     cy.visit(showCasePage.url)
//     cy.get('[href="/login"] > .MuiButtonBase-root').click()
//     cy.server()
//     cy.route('POST', '/integration/auth/transparentLogin').as('login')
//     cy.get(loginPage.email).type('qa-jobzz@eduzz.com')
//     cy.get(loginPage.password).type('123456')
//     cy.get(loginPage.submit).click()
//     cy.wait('@login')
//     cy.get('.close').click()
//     cy.get('.info > .name').should('have.html', 'QA  Jobzz')
//   })

//   it('should create new service', () => {
//     cy.get('[href="/dashboard/services"] > .list__item').click()
//     cy.get('.MuiGrid-grid-sm-auto > .MuiButtonBase-root').click()
//     cy.get('#title').type(`Teste automatizado ${formatDate(new Date())}`)
//     cy.get('#select-category').click()
//     cy.get('[data-value="8"]').click()
//     cy.get('.actions > [type="button"] > .MuiButton-label').click()
//     cy.get('#select-sub_category').click()
//     cy.get('.trumbowyg-editor').type(`
//       Quando nasci, um anjo torto
//       desses que vivem na sombra
//       disse: Vai, Carlos! ser gauche na vida.
//     `)
//     cy.get(':nth-child(5) > .MuiFormControlLabel-root').click()
//     cy.get('#add-photo').click()
//     cy.fixture(img).then(fileContent => {
//       cy.get('input[type="file"]').upload({
//         fileContent,
//         fileName: 'girl.jpg',
//         mimeType: 'application/json',
//       } as any)
//     })
//     cy.get('#btn-save-img').click()
//   })
// })
