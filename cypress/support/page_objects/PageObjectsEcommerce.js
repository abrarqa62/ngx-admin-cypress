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
  // Earning Section 

  EarningChart() {
    return cy.get('[data-test-id="EarningChart"]');
  }
  DropdownButtonEarning() {
    return cy.get('[data-test-id="EarningDropdownButton"]');
  }
  DropdownListEarning() {
    return cy.get('[data-test-id="ListEarningDropdown"]');
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

  /// Traffic Section 

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
    return cy.get("#nb-option-7");
  }
  BackTrafficYearDropdownList() {
    return cy.get("#nb-option-8");
  }
  TrafficCardBack() {
    return cy.get('[data-test-id="TrafficFrontSide"]');
  }

  // MarketPlace  Section

  MarketplaceEccommerce() {
    return cy.get('[data-test-id="MarketpalceCard"]');
  }
  OrdersMarketplaceGraph() {
    return cy.get('[data-test-id="OrdersGraph"]');
  }
  MarketplaceDropdown() {
    return cy.get('[data-test-id="Marketdropdown"]');
  }
  DropdownListOrders() {
    return cy.get('[data-test-id="ListMarketdropdown"]');
  }
  
  MarketplaceCardTabs() {
    return cy.get(".tabset");
  }
  ProfitMarketPlaceGraph() {
    return cy.get('[data-test-id="ProfitGraph"]');
  }
  DropdownListProfitWeekly() {
    return cy.get('[data-test-id="ListMarketdropdown"]');
  }
  
  DropdownListProfitMonthly() {
    return cy.get('[data-test-id="ListMarketdropdown"]');
  }
  DropdownListProfitYearly() {
    return cy.get('[data-test-id="ListMarketdropdown"]');
  }
  //Visitor Analytics Section

  VistorAnalyticsCard() {
    return cy.get('[data-test-id="VisitorCard"]');
  }
  VistorsGraph() {
    return cy.get('[data-test-id="VisitorsChart"]');
  }
  showHideToggle() {
    return cy.get('[data-test-id="Show&HideToggle"]');
  }
  // Country Orders Statistics Section
  CountryStatsCard() {
    return cy.get('[data-test-id="CountryCard"]');
  }
  CounrtyName(){
    return cy.xpath('//nb-card-body//ngx-country-orders-chart');
  }
  CountryStatsGraph(){
    return cy.get('[class="leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"]');
  }

  // Progress Section

  ProgressCard(){
    return cy.get('[data-test-id="ProgressView"]');
  }

  // User Activity Section

  UserActivityCard(){
    return cy.get('[data-test-id="Useractivity"]');
  }
  UserActivityDropdown(){
    return cy.get('[data-test-id="UserDropdown"]');
  }
 UserListDropdown() {
    return cy.get('[data-test-id="ListDropdown"]');
  }
 
}
export const NavigateTo = new Ecommerce();
