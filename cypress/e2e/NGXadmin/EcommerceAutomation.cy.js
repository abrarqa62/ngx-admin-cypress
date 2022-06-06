/// <reference types = "cypress" />

import { wrap } from "module";
import { NavigateTo } from "../../support/page_objects/PageObjectsEcommerce";

describe("Ecommerce Page", () => {
  before("Run the Website", () => {
    cy.visit('http://localhost:4200/');
  });

//    Profit card
context("When user is on profit card", () =>    {

  it("User is on Profit Card Section", () => {
    NavigateTo.ProfitCardNavigation();
  });
  it("User Click on FlipIcon ", () => {
    NavigateTo.ProfitCardFlipIcon().click();
  });
  it("User Click on FlipIcon to go back ", () => {
    NavigateTo.ProfitbackFlipicon().click();
  });
  it("Test the Chart functionality by mouse hover on it", () => {
    NavigateTo.PofitCardChart().then($canvas => {
       
    const WidthCanvas = $canvas.width();
    const HeightCanvas = $canvas.height();
    
    const pointXaxis1 = WidthCanvas * 0.71;
    const PointYaxis1 = HeightCanvas * 0.63;
    const pointXaxis2 = WidthCanvas * 0.75;
    const PointYaxis2 = HeightCanvas * 0.65;
    const pointXaxis3 = WidthCanvas * 0.92;
    const PointYaxis3 = HeightCanvas * 0.62;

   
    cy.wrap($canvas)
    .scrollIntoView()
    .click(pointXaxis1,PointYaxis1);

    cy.wrap($canvas)
    .scrollIntoView()
    .click(pointXaxis2,PointYaxis2);

    cy.wrap($canvas)
    .scrollIntoView()
    .click(pointXaxis3,PointYaxis3)
   
   
    });
});

it('Click on the flipicon to test the backgrapgh',() => {
    NavigateTo.ProfitCardFlipIcon().click({force: true});

    });
it ('Test the Backside graph ',() => {
    NavigateTo.ProfitcardBackGraph().then($BackCanvas => {

   let v = cy.wrap($BackCanvas)

    v.click(5, 130).wait(150);
    v.click(50, 110).wait(150);
    v.click(90, 120).wait(150);
 
      });
  });
it('Now navigate back to Profit card front',() => {
  cy.wait(500);
  NavigateTo.ProfitbackFlipicon().click();
});

});
    
// Earning Card
context('When user now move to Earning Card', () => {


 it.only('Test the Daily Income Chart',() => {
  NavigateTo.EarningChart().then($Earningcanvas => {
    let E = cy.wrap($Earningcanvas);
    cy.log($Earningcanvas.width());
    cy.log($Earningcanvas.height());
  })
 
});


    });
});
