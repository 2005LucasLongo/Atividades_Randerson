describe('template spec', () => {
  const baseUrl = 'https://automationexercise.com/';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Compras', () => {
    // Passo 1: Fazendo o log-in
    cy.get('a[href="/login"]').click();
    cy.get('input[data-qa="login-email"]').type('123456@gmail.com');
    cy.get('input[data-qa="login-password"]').type('123456');
    cy.get('button[data-qa="login-button"]').click();

    // Passo 2: Adicionando um produto ao carrinho
    cy.get('a[href="/products"]').click();
    cy.get('input[id="search_product"]').type('T-Shirt');
    cy.get('button[id="submit_search"]').click();
    cy.get('a[href="/product_details/28"]').click();
    cy.get('button[class="btn btn-default cart"]').click();
    cy.contains('View Cart').click(); // Clica no pedaço de texto com hyperlink que contém a sentença 'View Cart'

    // Passo 3: Finalizando a compra
    cy.get('a[class="btn btn-default check_out"]').click();
    cy.get('a[href="/payment"]').click();
    // Atenção: As informações a seguir são falsas, meramente para fins de teste
    // E o site não validou o formato das informações
    cy.get('input[data-qa="name-on-card"]').type('Justin Testin');
    cy.get('input[data-qa="card-number"]').type('1234567890');
    cy.get('input[data-qa="cvc"]').type('311');
    cy.get('input[data-qa="expiry-month"]').type('12');
    cy.get('input[data-qa="expiry-year"]').type('2077');
    cy.get('button[data-qa="pay-button"]').click();
    cy.get('a[data-qa="continue-button"]').click();

    // Feito! ;)
    
  });
});