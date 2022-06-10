import { equal } from "assert";
import { NavigateTo } from "../support/page_objects/PageObjectsEcommerce";

describe("Ecommerce Page", () => {
  before("Run the Website", () => {
    cy.visit("/");
  });

  //    Profit card
  context("When user move on profit card", () => {
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
      NavigateTo.PofitCardChart().then(($canvas) => {
        let c = cy.wrap($canvas);
        let WidthCanvas = $canvas.width();
        let HeightCanvas = $canvas.height();xdescribe

        let pointXaxis1 = WidthCanvas * 0.71;
        let PointYaxis1 = HeightCanvas * 0.63;
        let pointXaxis2 = WidthCanvas * 0.75;
        let PointYaxis2 = HeightCanvas * 0.65;
        let pointXaxis3 = WidthCanvas * 0.92;
        let PointYaxis3 = HeightCanvas * 0.62;

        c.click(pointXaxis1, PointYaxis1).wait(300);

        c.click(pointXaxis2, PointYaxis2).wait(300);

        c.click(pointXaxis3, PointYaxis3).wait(300);
      });
    });

    it("Click on the flipicon to test the backgrapgh", () => {
      NavigateTo.ProfitCardFlipIcon().click({ force: true });
    });
    it("Test the Backside graph ", () => {
      NavigateTo.ProfitcardBackGraph().then(($BackCanvas) => {
        let v = cy.wrap($BackCanvas);

        v.click(5, 130).wait(150);
        v.click(50, 110).wait(150);
        v.click(90, 120).wait(150);
      });
    });
    it("Now navigate back to Profit card front", () => {
      cy.wait(500);
      NavigateTo.ProfitbackFlipicon().click();
    });
  });

  // Earning Card

  context("When user now move to Earning Card", () => {
    it("Test the Daily Income Chart", () => {
      NavigateTo.EarningChart().then(($Earningcanvas) => {
        let e = cy.wrap($Earningcanvas);
        cy.log($Earningcanvas.width());
        cy.log($Earningcanvas.height());

        e.click(10, 130).wait(300);
        e.click(40, 110).wait(300);
        e.click(75, 120).wait(300);
        e.click(105, 130).wait(300);

      });
    });

      it('User now select Tether from Dropdown', () => {
        NavigateTo.DropdownButtonEarning().click().should('be.visible');
        NavigateTo.DropdownListEarning().contains('Tether').click();

        NavigateTo.EarningChart().then(($Earningcanvas) => {
          let e = cy.wrap($Earningcanvas);
          cy.log($Earningcanvas.width());
          cy.log($Earningcanvas.height());

          e.click(10, 130).wait(300);
          e.click(50, 110).wait(300);
          e.click(90, 120).wait(300);
          e.click(105, 130).wait(300);

        });

      });
      it('User now select Ehtereum from Dropdown', () => {
        NavigateTo.DropdownButtonEarning().click().should('be.visible');
        NavigateTo.DropdownListEarning().contains('Ethereum').click();

        NavigateTo.EarningChart().then(($Earningcanvas) => {
          let e = cy.wrap($Earningcanvas);
          cy.log($Earningcanvas.width());
          cy.log($Earningcanvas.height());

          e.click(10, 130).wait(300);
          e.click(50, 110).wait(300);
          e.click(90, 120).wait(300);
          e.click(105, 130).wait(300);

        });

      });
      it('User click on flipicon to navigate Earning Card backside', () => {
        NavigateTo.EarningcardflipIcon().click();
        NavigateTo.EarningCoinNameback().contains('Bitcoin');
      });
      
    it('User click Green Color in PieChart', () => {
      NavigateTo.EarningPieChart().click(82,112).wait(550);
      NavigateTo.EarningCoinNameback().should('contain','Bitcoin');
    });
    it('User click Orange Color in PieChart', () => {
      NavigateTo.EarningPieChart().click(28,38).wait(550);
      NavigateTo.EarningCoinNameback().should('contain','Ethereum');
    });
    it('User click Blue Color in PieChart', () => {
      NavigateTo.EarningPieChart().click(40,105).wait(550);
      NavigateTo.EarningCoinNameback().should('contain','Tether');
    });
  });

  // Traffic Card Front Side

  context("When user now move to Traffic Card", () => {
    it("User is now at Traffic Card", () => {
      NavigateTo.TrafficCardFront().should("contain", "Mon");
    });

    it("User click on Traffic Dropdown", () => {
      NavigateTo.TrafficFrontDropdownButton().eq(0).click();
    });

    it("User select Month from Dropdown list", () => {
      NavigateTo.FrontTrafficDropdownList().contains("month").click();
      NavigateTo.TrafficCardFront().should("contain", "Feb");
    });

    it("User click on Traffic Dropdown", () => {
      NavigateTo.TrafficFrontDropdownButton().eq(0).click();
    });

    it("User select Year from Dropdown list", () => {
      NavigateTo.FrontTrafficDropdownList().contains("year").click();
      NavigateTo.TrafficCardFront().should("contain", "2011");
    });
    it("User click on Traffic Dropdown", () => {
      NavigateTo.TrafficFrontDropdownButton().eq(0).click();
    });
    it("User select Year from Dropdown list", () => {
      NavigateTo.FrontTrafficDropdownList().contains("week").click();
    });

    // Traffic Card Back Side
 
    it('Verify that the user can click on chevron up to see Traffic Bar Chart', () => {
      NavigateTo.TrafficFlipIcon().click();
    });
    it('User mouse hover on Weekly Traffic Chart ',() => {
      NavigateTo.TrafficBarChart()
      .click(460,210).wait(200)
      .click(300,180).wait(200)
      .click(220,150).wait(200)
      .click(130,140).wait(200)
      .click(50,160).wait(200);
      });
    it('User again click on dropdown',() => {
      NavigateTo.TrafficFrontDropdownButton().eq(1).click();
    });

    it('User select Month from dropdown list',() => {
      NavigateTo.BackTrafficDropdownList().contains('month').click();
    });
    it('User mouse hover on Monthly Traffic Chart ',() => {
      NavigateTo.TrafficBarChart()
      .click(420,180).wait(200) 
      .click(320,140).wait(200)
      .click(220,180).wait(200)
      .click(120,150).wait(200);
      });
      it('User again click on dropdown',() => {
        NavigateTo.TrafficFrontDropdownButton().eq(1).click();
      });
  
      it('User select Year from dropdown list',() => {
        NavigateTo.BackTrafficYearDropdownList().contains('year').click();
      });
      it('User mouse hover on Monthly Traffic Chart ',() => {
        NavigateTo.TrafficBarChart()
        .click(420,180).wait(200) 
        .click(300,140).wait(200)
        .click(220,180).wait(200)
        .click(110,130).wait(200);
        
    });
    it('User click on down arrow to move back to Front side of Traffic Card', () => {
      NavigateTo.TrafficCardBack().click();
    });
    });

});
