
describe('Cadastro/Login credenciais válidas', () => {
  it('Registrar Usuário', () => {
    cy.visit('/')
    cy.title().should('eq', 'Automation Exercise')
    cy.RegistrarUsuario()
  })

  it('Sair da conta', () => {
    cy.visit('/')
    cy.title().should('eq', 'Automation Exercise')
    cy.Logout()
  })

  it('Login Valido', () => {
    cy.visit('/')
    cy.title().should('eq', 'Automation Exercise')
    cy.LoginValido()
  })
})
