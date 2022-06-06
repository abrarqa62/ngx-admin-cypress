export class Ecommerce {
  ProfitCardNavigation() {
    return cy.get('[ data-test-id="ProfitCardfront"]');
  }

  ProfitCardFlipIcon() {
    return cy.get('[data-test-id="ProfitCardback"]');
  }

  ProfitbackFlipicon() {
    return cy.get('[data-test-id="ProfitCardfront"]');
  }

  PofitCardChart() {
    return cy.get('[data-test-id="Chart_Transaction"]');

   }
   ProfitcardBackGraph() {
    return cy.get('[data-test-id="ProfitBackGraph"]')
}

}

export const NavigateTo = new Ecommerce();
