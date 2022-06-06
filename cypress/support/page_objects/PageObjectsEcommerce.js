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
    return cy.get('[data-test-id="ProfitBackGraph"]');
  }
  // Earning Card

EarningChart()  {
  return cy.get('[data-test-id="EarningChart"]');

}

  
}

export const NavigateTo = new Ecommerce();
