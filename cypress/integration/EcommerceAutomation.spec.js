import { NavigateTo } from "../support/page_objects/PageObjectsEcommerce";

describe("Ecommerce Page", () => {
  before("Run the Website", () => {
    cy.visit("/");
  });

  //  Profit card

  context("When user is on profit card", () => {

    it("Verify if user is on Profit Card Section", () => {
      NavigateTo.ProfitCardNavigation();
    });
    it("Verify if user Click on FlipIcon ", () => {
      NavigateTo.ProfitCardFlipIcon().click();
    });
    it("Verify if user Click on FlipIcon to go back ", () => {
      NavigateTo.ProfitbackFlipicon().click();
    });
    it("Verify if user mouse hover on the Front side profit Chart", () => {
      NavigateTo.PofitCardChart().then(($canvas) => {
        let c = cy.wrap($canvas);
        let WidthCanvas = $canvas.width();
        let HeightCanvas = $canvas.height();

        let pointXaxis1 = WidthCanvas * 0.71;
        let PointYaxis1 = HeightCanvas * 0.63;
        let pointXaxis2 = WidthCanvas * 0.75;
        let PointYaxis2 = HeightCanvas * 0.65;
        let pointXaxis3 = WidthCanvas * 0.92;
        let PointYaxis3 = HeightCanvas * 0.62;

        c.click(pointXaxis1, PointYaxis1);
        c.click(pointXaxis2, PointYaxis2);
        c.click(pointXaxis3, PointYaxis3);
      });
    });

    it("Click on the flipicon to test the backgrapgh", () => {
      NavigateTo.ProfitCardFlipIcon().click({ force: true });
    });
    it("Verify if user mouse hover on the Back  side profit Chart", () => {
      NavigateTo.ProfitcardBackGraph().then(($BackCanvas) => {
        let v = cy.wrap($BackCanvas);

        v.click(5, 130);
        v.click(50, 110);
        v.click(90, 120);
      });
    });
    it("Now navigate back to Profit card front", () => {
      cy.wait(500);
      NavigateTo.ProfitbackFlipicon().click();
    });
  });

  // Earning Card

  context("When user now move to Earning Card", () => {

    it("Verify if user mouse hover on the Daily Income Chart", () => {
      NavigateTo.EarningChart().then(($Earningcanvas) => {
        let e = cy.wrap($Earningcanvas);
        cy.log($Earningcanvas.width());
        cy.log($Earningcanvas.height());

        e.click(10, 130);
        e.click(40, 110);
        e.click(105, 130);
      });
    });

    it("Verify if user now select Tether from Dropdown", () => {
      NavigateTo.DropdownButtonEarning().should("be.visible").click();
      NavigateTo.DropdownListEarning().contains("Tether").click();

      NavigateTo.EarningChart().then(($Earningcanvas) => {
        let e = cy.wrap($Earningcanvas);
        cy.log($Earningcanvas.width());
        cy.log($Earningcanvas.height());

        e.click(10, 130);
        e.click(50, 110);
        e.click(90, 120);
        e.click(105, 130);
      });
    });
    it("Verify if user now select Ehtereum from Dropdown", () => {
      NavigateTo.DropdownButtonEarning().click().should("be.visible");
      NavigateTo.DropdownListEarning().contains("Ethereum").click();

      NavigateTo.EarningChart().then(($Earningcanvas) => {
        let e = cy.wrap($Earningcanvas);
        cy.log($Earningcanvas.width());
        cy.log($Earningcanvas.height());

        e.click(10, 130);
        e.click(50, 110);
        e.click(90, 120);
        e.click(105, 130);
      });
    });
    it("Verify if user click on flipicon to navigate Earning Card backside", () => {
      NavigateTo.EarningcardflipIcon().click();
      NavigateTo.EarningCoinNameback().contains("Bitcoin");
    });

    it("Verify if user click Green Color in PieChart", () => {
      NavigateTo.EarningPieChart().click(82, 112);
      NavigateTo.EarningCoinNameback().should("contain", "Bitcoin");
    });
    it("Verify if user click Orange Color in PieChart", () => {
      NavigateTo.EarningPieChart().click(28, 38);
      NavigateTo.EarningCoinNameback().should("contain", "Ethereum");
    });
    it("Verify if user click Blue Color in PieChart", () => {
      NavigateTo.EarningPieChart().click(40, 105);
      NavigateTo.EarningCoinNameback().should("contain", "Tether");
    });
  });

  // Traffic Card Front Side

  context("When user now move to Traffic Card", () => {
    
    it("Verify if user is now at Traffic Card", () => {
      NavigateTo.TrafficCardFront().should("contain", "Mon");
    });

    it("Verify if user click on Traffic Dropdown", () => {
      NavigateTo.TrafficFrontDropdownButton().eq(0).click();
    });

    it("Verify if  user select Month from Dropdown list", () => {
      NavigateTo.FrontTrafficDropdownList().contains("month").click();
      NavigateTo.TrafficCardFront().should("contain", "Feb");
    });

    it("Verify if user click on Traffic Dropdown", () => {
      NavigateTo.TrafficFrontDropdownButton().eq(0).click();
    });

    it("Verify if user select Year from Dropdown list", () => {
      NavigateTo.FrontTrafficDropdownList().contains("year").click();
      NavigateTo.TrafficCardFront().should("contain", "2011");
    });
    it("Verify if user click on Traffic Dropdown", () => {
      NavigateTo.TrafficFrontDropdownButton().eq(0).click();
    });
    it("Verify if user select Year from Dropdown list", () => {
      NavigateTo.FrontTrafficDropdownList().contains("week").click();
    });

  // Traffic Card Back Side

    it("Verify that the Verify if user can click on chevron up to see Traffic Bar Chart", () => {
      NavigateTo.TrafficFlipIcon().click();
    });
    it("Verify if user mouse hover on Weekly Traffic Chart ", () => {
      NavigateTo.TrafficBarChart()
        .click(460, 210)
        .click(300, 180)
        .click(220, 150)
        .click(130, 140)
        .click(50, 160);
    });
    it("Verify if user again click on dropdown", () => {
      NavigateTo.TrafficFrontDropdownButton().eq(1).click();
    });

    it("Verify if user select Month from dropdown list", () => {
      NavigateTo.BackTrafficDropdownList().contains("month").click();
    });
    it("Verify if user mouse hover on Monthly Traffic Chart ", () => {
      NavigateTo.TrafficBarChart()
        .click(420, 180)
        .click(320, 140)
        .click(220, 180)
        .click(120, 150);
    });
    it("Verify if user again click on dropdown", () => {
      NavigateTo.TrafficFrontDropdownButton().eq(1).click();
    });

    it("Verify if user select Year from dropdown list", () => {
      NavigateTo.BackTrafficYearDropdownList().contains("year").click();
    });
    it("Verify if user mouse hover on Monthly Traffic Chart ", () => {
      NavigateTo.TrafficBarChart()
        .click(420, 180)
        .click(300, 140)
        .click(220, 180)
        .click(110, 130);
    });
    it("Verify if user click on down arrow to move back to Front side of Traffic Card", () => {
      NavigateTo.TrafficCardBack().click();
    });
  });

  // /// MarketPlace Orders Card

  context("When user move to MarketPlace Card", () => {
    it("Verify if user is on Orders Tab In MarketPlace Card", () => {
      NavigateTo.MarketplaceEccommerce();
    });

    it("Verify if user can mouse hover on Grapgh to check Weekly data of Orders", () => {
      NavigateTo.MarketplaceEccommerce();
      NavigateTo.OrdersMarketplaceGraph()
        .click(850, 90)
        .click(850, 130)
        .click(540, 220)
        .click(420, 180)
        .click(285, 150)
        .click(240, 180)
        .click(120, 130);
    });
    it("Verify if user click on Orders Dropdown button", () => {
      NavigateTo.MarketplaceEccommerce();
      NavigateTo.MarketplaceDropdown().eq(0).click();
    });
    it("Verify if user select Month from Orders Dropdown List", () => {
      NavigateTo.DropdownListOrders().contains("month").click();
    });
    it("Verify if user can mouse hover on Graph to check Monthly data of Orders", () => {
      NavigateTo.MarketplaceEccommerce();
      NavigateTo.OrdersMarketplaceGraph()
        .click(759, 192)
        .click(759, 123)
        .click(495, 180)
        .click(377, 212)
        .click(330, 210)
        .click(160, 125);
    });
    it("Verify if user click on Orders Dropdown button", () => {
      NavigateTo.MarketplaceEccommerce();
      NavigateTo.MarketplaceDropdown().eq(0).click();
    });
    it("Verify if user select Year from Orders Dropdown List", () => {
      NavigateTo.DropdownListOrders().contains("year").click();
    });
    it("Verify if user can mouse hover on Graph to check Yearly data of Orders", () => {
      NavigateTo.MarketplaceEccommerce();
      NavigateTo.OrdersMarketplaceGraph()
        .click(175, 25)
        .click(300, 70)
        .click(420, 135)
        .click(725, 264);
    });
    it("Verify if user click on Orders Dropdown button", () => {
      NavigateTo.MarketplaceEccommerce();
      NavigateTo.MarketplaceDropdown().eq(0).click();
    });
    it("Verify if user select Year from Orders Dropdown List", () => {
      NavigateTo.DropdownListOrders().contains("week").click();
    });

  //   //MarketPlace Profit Card

    it("Verify if user now click on Profits tab to see Marketplace Profit Data", () => {
      NavigateTo.MarketplaceCardTabs().contains("Profit").click();
    });
    it("Verify if user can mouse hover on Graph to check Weekly data of Profit", () => {
      NavigateTo.ProfitMarketPlaceGraph()
        .click(850, 90)
        .click(850, 130)
        .click(540, 220)
        .click(420, 180)
        .click(285, 150)
        .click(240, 180)
        .click(120, 130);
    });
    it("Verify if user click on Profit Dropdown button", () => {
      NavigateTo.MarketplaceDropdown().eq(1).click();
    });
    it("Verify if user select Month from Profit Dropdown List", () => {
      NavigateTo.DropdownListProfitMonthly().contains("month").click();
    });
    it("Verify if user can mouse hover on Graph to check Monthly data of Profit", () => {
      NavigateTo.ProfitMarketPlaceGraph()
        .click(759, 192)
        .click(759, 123)
        .click(495, 180)
        .click(377, 212)
        .click(330, 210)
        .click(160, 125);
    });
    it("Verify if user click on Profit Dropdown button", () => {
      NavigateTo.MarketplaceDropdown().eq(1).click();
    });
    it("Verify if user select Month from Profit Dropdown List", () => {
      NavigateTo.DropdownListProfitYearly().contains("year").click();
    });
    it("Verify if user can mouse hover on Graph to check Yearly data of Profit", () => {
      NavigateTo.ProfitMarketPlaceGraph()
        .click(850, 90)
        .click(850, 130)
        .click(540, 220)
        .click(420, 180)
        .click(285, 150)
        .click(240, 180)
        .click(120, 130);
    });
    it("Verify if user navigate back to the Profit Tab", () => {
      NavigateTo.MarketplaceCardTabs().contains("Orders").click();
    });
  });
  // Visitors Analytics Card
  context("When user move to Visitors Analytics Card", () => {
    it("Verify if user is on Visitors Analytics Card ", () => {
      NavigateTo.VistorAnalyticsCard().should("contain", "Visitors Analytics");
    });

    it("Verify if user click on Forward arrow to hide Visitors Statistics", () => {
      NavigateTo.VistorsGraph();
      NavigateTo.showHideToggle().scrollIntoView().should("be.visible").click();
    });
    it("Verify if user mouse hover on Visitor Analytics Chart", () => {
      NavigateTo.VistorAnalyticsCard();
      NavigateTo.VistorsGraph()
        .click(1020, 172)
        .click(940, 188)
        .click(825, 190)
        .click(730, 183)
        .click(610, 180)
        .click(525, 170)
        .click(440, 173)
        .click(310, 168)
        .click(220, 172)
        .click(118, 183);
    });
    it("Verify if user again click on Back arrow to show Visitors Statistics", () => {
      NavigateTo.VistorsGraph();
      NavigateTo.showHideToggle().scrollIntoView().should("be.visible").click();
    });
  });

  // //Country Orders Statistics
  context("When user move to Country Orders Statistics", () => {
    it("Verify if User is on the Country Orders Statistics to see the orders stats", () => {
      NavigateTo.CountryStatsCard().scrollIntoView().should("be.visible");
    });

    it("Verify if user click on  Venezuela Country ", () => {
      NavigateTo.CountryStatsGraph().click(320, 300);
      NavigateTo.CounrtyName().should("contain", "Venezuela");
    });

    it("Verify user click on Colombia country ", () => {
      NavigateTo.CountryStatsGraph().click(300, 310);
      NavigateTo.CounrtyName().should("contain", "Colombia");
    });

    it("Verify if user click on  Canada country ", () => {
      NavigateTo.CountryStatsGraph().click(250, 90);
      NavigateTo.CounrtyName().should("contain", "Canada");
    });

    it("Verify if user click on  Greenland country ", () => {
      NavigateTo.CountryStatsGraph().click(360, 30);
      NavigateTo.CounrtyName().should("contain", "Greenland");
    });

    // Progress Card
    context("When user move to Progress Section", () => {
      it("Verify if user see the Todays Profit on  Progress card ", () => {
        NavigateTo.ProgressCard().should("contain", "Today’s Profit");
      });

      it("Verify if user see the New Orders  on  Progress card ", () => {
        NavigateTo.ProgressCard().should("contain", "New Orders");
      });

      it("Verify if user see the New Comments on  Progress card ", () => {
        NavigateTo.ProgressCard().should("contain", "New Comments");
      });
    });
  //  Progress Card
    context("When user move to UserActivity Section", () => {
      it("Verify if user is on User Activity card ", () => {
        NavigateTo.UserActivityCard()
          .scrollIntoView()
          .should("contain", "User Activity");
      });
      it("Verify if user click on Orders Dropdown button", () => {
        NavigateTo.UserActivityCard();
        NavigateTo.UserActivityDropdown().click();
      });
      it("Verify if user select Week from dropdown list to see Weekly User Activity ", () => {
        NavigateTo.UserListDropdown().contains("week").click();
        NavigateTo.UserActivityCard().should("contain", "Tue");
      });
      it("Verify if user click on Orders Dropdown button", () => {
        NavigateTo.UserActivityCard();
        NavigateTo.UserActivityDropdown().click();
      });
      it("Verify if user select Year from dropdown list to see Yearly User Activity ", () => {
        NavigateTo.UserListDropdown().contains("year").click();
        NavigateTo.UserActivityCard().should("contain", "2010");
      });
      it("Verify if user click on Orders Dropdown button", () => {
        NavigateTo.UserActivityCard();
        NavigateTo.UserActivityDropdown().click();
      });
      it("Verify if user select Month from dropdown list to see Monthly User Activity ", () => {
        NavigateTo.UserListDropdown().contains("month").click();
        NavigateTo.UserActivityCard().should("contain", "Jun");
      });
    });
  });
});
