import { faker } from "@faker-js/faker"

Cypress.Commands.add('RegistrarUsuario', () => {
    const user = {
        name: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        streetAddress: faker.location.streetAddress(),
        country: "Brazil",
        state: faker.location.state(),
        city: faker.location.city(),

    }
    cy.writeFile('cypress/fixtures/user.json', user)

    cy.contains(' Signup / Login').click()
    cy.url().should('include', '/login')

    cy.get('[data-qa="signup-name"]').type(user.name)
    cy.get('[data-qa="signup-email"]').type(user.email)
    cy.get('[data-qa="signup-button"]').click()

    cy.get('#id_gender1').click()
    cy.get('[data-qa="name"]').type(user.name)
    cy.get('[data-qa="password"]').type(user.password)

    cy.get('[data-qa="days"]').select('1')
    cy.get('[data-qa="months"]').select('December')
    cy.get('[data-qa="years"]').select('2001')

    cy.get('[data-qa="first_name"]').type(user.name)
    cy.get('[data-qa="last_name"]').type('teste')

    cy.get('[data-qa="address"]').type(user.streetAddress)
    cy.get('[data-qa="country"]').type(user.country)
    cy.get('[data-qa="state"]').type(user.state)
    cy.get('[data-qa="city"]').type(user.city)
    cy.get('[data-qa="zipcode"]').type('123456789')
    cy.get('[data-qa="mobile_number"]').type('00123456789')

    cy.get('[data-qa="create-account"]').click()
    cy.get('[data-qa="continue-button"]').click()

})

Cypress.Commands.add('LoginValido', () => {

    cy.fixture('user.json').then((user) =>{  //usando dados do faker ja cadastrado


    cy.contains(' Signup / Login').click()
    cy.url().should('include', '/login')

    cy.get('[data-qa="login-email"]').type(user.email)
    cy.get('[data-qa="login-password"]').type(user.password)
    cy.get('[data-qa="login-button"]').click()
    cy.contains(`Logged in as ${user.name}`).should('be.visible')

    cy.contains('Delete Account').click()
    cy.contains('Account Deleted!').should('be.visible')

    })
})

Cypress.Commands.add('Logout', () => {

    cy.fixture('user.json').then((user) =>{  //usando dados do faker ja cadastrado


    cy.contains(' Signup / Login').click()
    cy.url().should('include', '/login')

    cy.get('[data-qa="login-email"]').type(user.email)
    cy.get('[data-qa="login-password"]').type(user.password)
    cy.get('[data-qa="login-button"]').click()
    cy.contains(`Logged in as ${user.name}`).should('be.visible')

    cy.contains('a' ,' Logout').click()
    cy.contains(' Signup / Login').should('be.visible')
    
    })
})