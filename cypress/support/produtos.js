Cypress.Commands.add('VerificarProdutos', () => {

    cy.fixture('user.json').then((user) => {  //usando dados do faker ja cadastrado

        cy.contains('a', 'Products').click()
        cy.url().should('include', '/products')
        cy.contains('All Products').should('be.visible')

        cy.get('.features_items').should('be.visible')


        cy.get('.features_items .product-image-wrapper .choose a')
            .contains('View Product')
            .first()
            .click()

        cy.url().should('include', '/product_details')

        cy.get('.product-information').within(() => {
            cy.get('h2').should('be.visible')
            cy.contains('Category:').should('be.visible')
            cy.contains('Rs.').should('be.visible')
            cy.contains('Availability:').should('be.visible')
            cy.contains('Condition:').should('be.visible')
            cy.contains('Brand:').should('be.visible')
        })


    })
})