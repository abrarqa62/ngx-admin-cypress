import { get } from "core-js/core/dict";

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

  EarningChart() {
    return cy.get('[data-test-id="EarningChart"]');
  }
  DropdownButtonEarning() {
    return cy.get('[data-test-id="EarningDropdownButton"]');
  }
  DropdownListEarning() {
    return cy.get(".option-list");
  }
  EarningcardflipIcon() {
    return cy.get('[data-test-id="EarningCardback"]');
  }
  EarningCoinNameback() {
    return cy.get('[data-test-id="Earningbackcoinname"]');
  }

  EarningPieChart() {
    return cy.get('[data-test-id="PieChartCoins"]');
  }

  /// Traffic Card

  TrafficFrontDropdownButton() {
    return cy.get('[data-test-id="FrontTrafficdropdown"]');
  }

  TrafficCardFront() {
    return cy.get('[data-test-id="TrafficCardFront"]');
  }
  FrontTrafficDropdownList() {
    return cy.get(".option-list");
  }
  TrafficFlipIcon() {
    return cy.get('[data-test-id="TrafficBackSide"]');
  }
  TrafficBarChart() {
    return cy.get('[data-test-id="TrafficBarChart"]');
  }
  BackTrafficDropdownList() {
    return cy.get('#nb-option-7');
  }
  BackTrafficYearDropdownList() {
    return cy.get('#nb-option-8');
  }
  TrafficCardBack() {
    return cy.get('[data-test-id="TrafficFrontSide"]');
  }
}

export const NavigateTo = new Ecommerce();
