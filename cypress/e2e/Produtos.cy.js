
describe('Produtos', () => {
    it.only('Verificar Produtos da pagina', () => {
        cy.visit('/')
        cy.title().should('eq', 'Automation Exercise')
        cy.VerificarProdutos()
    })
})