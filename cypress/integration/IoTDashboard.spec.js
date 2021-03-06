import { ToNavigateIoT } from "../page_objects/PageObjectIoTdashboard";

describe("Iot Dashboad", () => {
  before("User move to IoT Dashboard", () => {
    ToNavigateIoT.IotDashboard().should("be.visible").click();
    cy.url().should("include", "/iot-dashboard");
  });
  context("When user is on Status Card", () => {
    it("Verify if user can click on Light Icon to OFF light", () => {
      ToNavigateIoT.LightBulb().click();
      ToNavigateIoT.offBulb().should("contain", "OFF");
    });
    it("Verify if user can click on Light Icon to ON light", () => {
      ToNavigateIoT.LightBulb().should("be.visible").click();
    });
    it("Verify if user can click on Roller Shades Icon to OFF roller shades", () => {
      ToNavigateIoT.Rollershades().should("be.visible").click();
      ToNavigateIoT.offRollershades().should("contain", "OFF");
    });
    it("Verify if user can click on Roller Shades Icon to ON roller shades", () => {
      ToNavigateIoT.Rollershades().should("be.visible").click();
    });
    it("Verify if user can click on Wireless Audio Icon to OFF Wireless Audio", () => {
      ToNavigateIoT.WirelessAudio().should("be.visible").click();
      ToNavigateIoT.offWireless().should("contain", "OFF");
    });
    it("Verify if user can click on Wireless Audio Icon to ON Wireless Audio", () => {
      ToNavigateIoT.WirelessAudio().should("be.visible").click();
    });
    it("Verify if user can click on Coffer Maker Icon to OFF Coffee Maker", () => {
      ToNavigateIoT.CoffeeMaker().should("be.visible").click();
      ToNavigateIoT.offCoffee().should("contain", "OFF");
    });
    it("Verify if user can click on Coffee Maker Icon to ON Coffee Maker", () => {
      ToNavigateIoT.CoffeeMaker().should("be.visible").click();
    });
  });

  context("When user move to Temperature Card", () => {
    it("Verify if user is on Temperature Card", () => {
      ToNavigateIoT.TemperatureCard().should("contain", "Temperature");
    });

    it("Verify if user click on temperature dragger circle to see different celcius value", () => {
      ToNavigateIoT.TemperatureCard();
      ToNavigateIoT.TemperatureDragger().then(($tempdragger) => {
        let t = cy.wrap($tempdragger);
        let WidthDragger = $tempdragger.width();
        let HeightDragger = $tempdragger.height();

        let draggerX1 = WidthDragger * 0.8;
        let draggerY1 = HeightDragger * 0.9;
        let draggerX2 = WidthDragger * 0.6;
        let draggerY2 = HeightDragger * 0.8;
        let draggerX3 = WidthDragger * 0.6;
        let draggerY3 = HeightDragger * 0.3;
        let draggerX4 = WidthDragger * 0.4;
        let draggerY4 = HeightDragger * 0.5;
        let draggerX5 = WidthDragger * 0.3;
        let draggerY5 = HeightDragger * 0.4;
        let draggerX6 = WidthDragger * 0.3;
        let draggerY6 = HeightDragger * 0.6;

        t.click(draggerX1, draggerY1);
        t.click(draggerX2, draggerY2);
        t.click(draggerX3, draggerY3);
        t.click(draggerX4, draggerY4);
        t.click(draggerX5, draggerY5);
        t.click(draggerX6, draggerY6);
      });
    });
    it("Verify if user Power Off the Temperature", () => {
      ToNavigateIoT.PowerOffButton().should("be.visible").click();
    });
    it("Verify if user Power On the Temperature", () => {
      ToNavigateIoT.PowerOffButton().should("be.visible").click();
    });
    it("Veirfy if user select the Snow from Temperature Mode", () => {
      ToNavigateIoT.TempModeSnow().should("be.visible").click();
    });
    it("Veirfy if user select the Sunny from Temperature Mode", () => {
      ToNavigateIoT.TempModeSunny().should("be.visible").click();
    });
    it("Veirfy if user select the Flame from Temperature Mode", () => {
      ToNavigateIoT.TempModeFlame().should("be.visible").click();
    });
    it("Veirfy if user select the Loop from Temperature Mode", () => {
      ToNavigateIoT.TempModeLoop().should("be.visible").click();
    });
    it("Verify that the user can click on Humidity tab to see their data in temperature card", () => {
      ToNavigateIoT.HumidTab().should("be.visible").click();
    });
    it("Verify if user click on temperature dragger circle to see different celcius value", () => {
      ToNavigateIoT.HumidityDragger().then(($humiddragger) => {
        let h = cy.wrap($humiddragger);
        let WidthDragger = $humiddragger.width();
        let HeightDragger = $humiddragger.height();

        let humiddraggerX1 = WidthDragger * 0.8;
        let humiddraggerY1 = HeightDragger * 0.9;
        let humiddraggerX2 = WidthDragger * 0.6;
        let humiddraggerY2 = HeightDragger * 0.8;
        let humiddraggerX3 = WidthDragger * 0.6;
        let humiddraggerY3 = HeightDragger * 0.3;
        let humiddraggerX4 = WidthDragger * 0.4;
        let humiddraggerY4 = HeightDragger * 0.5;
        let humiddraggerX5 = WidthDragger * 0.3;
        let humiddraggerY5 = HeightDragger * 0.4;
        let humiddraggerX6 = WidthDragger * 0.3;
        let humiddraggerY6 = HeightDragger * 0.6;

        h.click(humiddraggerX1, humiddraggerY1);
        h.click(humiddraggerX2, humiddraggerY2);
        h.click(humiddraggerX3, humiddraggerY3);
        h.click(humiddraggerX4, humiddraggerY4);
        h.click(humiddraggerX5, humiddraggerY5);
        h.click(humiddraggerX6, humiddraggerY6);
      });
    });
    it("Verify if user Power Off the Humidity", () => {
      ToNavigateIoT.PowerOffButton().eq(1).should("be.visible").click();
    });
    it("Verify if user Power On the Humidity", () => {
      ToNavigateIoT.PowerOnButton().eq(1).should("be.visible").click();
    });
    it("Veirfy if user select the Snow from Hum Mode", () => {
      ToNavigateIoT.HumidModeSnow().should("be.visible").click();
    });
    it("Veirfy if user select the Sunny from Temperature Mode", () => {
      ToNavigateIoT.HumidModeSunny().should("be.visible").click();
    });
    it("Veirfy if user select the Flame from Temperature Mode", () => {
      ToNavigateIoT.HumidModeFlame().should("be.visible").click();
    });
    it("Veirfy if user select the Loop from Temperature Mode", () => {
      ToNavigateIoT.HumidModeLoop().should("be.visible").click();
    });
  });

  context("When user move to Electircity Consumption card", () => {
    it("Verify if user is on Electricity Consumption Card", () => {
      ToNavigateIoT.ElectricityConsumptionCard().contains(
        "Electricity Consumption"
      );
    });
    it("Verify if user select year to see Yearly electricity consumptions", () => {
      ToNavigateIoT.ElectricYearlyTab1().should("be.visible").click();
      ToNavigateIoT.ElectricYearlyTab2().should("be.visible").click();
      ToNavigateIoT.ElectricYearlyTab3().should("be.visible").click();
    });
    it("Verify user click on Electricity Consumption dropdown", () => {
      ToNavigateIoT.ElectricDropdwonButton().should("be.visible").click();
    });
    it("Verify if user select Month from dropdown list", () => {
      ToNavigateIoT.ElectricListDropdown().contains("month").click();
    });
    it("Verify if user mouse hover on Monthly Electric Consumption Chart", () => {
      ToNavigateIoT.ElectricConsumpChart().then(($ElectricCanvas) => {
        let e = cy.wrap($ElectricCanvas);
        let ElectConsumpWidth = $ElectricCanvas.width();
        let ElectConsumpHeight = $ElectricCanvas.height();

        let ElectPointX1 = ElectConsumpWidth * 0.2;
        let ElectPointY1 = ElectConsumpHeight * 0.3;
        let ElectPointX2 = ElectConsumpWidth * 0.3;
        let ElectPointY2 = ElectConsumpHeight * 0.4;
        let ElectPointX3 = ElectConsumpWidth * 0.6;
        let ElectPointY3 = ElectConsumpHeight * 0.3;
        let ElectPointX4 = ElectConsumpWidth * 0.7;
        let ElectPointY4 = ElectConsumpHeight * 0.3;
        let ElectPointX5 = ElectConsumpWidth * 0.8;
        let ElectPointY5 = ElectConsumpHeight * 0.3;

        e.click(ElectPointX1, ElectPointY1);
        e.click(ElectPointX2, ElectPointY2);
        e.click(ElectPointX3, ElectPointY3);
        e.click(ElectPointX4, ElectPointY4);
        e.click(ElectPointX5, ElectPointY5);
      });
    });
    it("Verify user click on Electricity Consumption dropdown", () => {
      ToNavigateIoT.ElectricDropdwonButton().should("be.visible").click();
    });
    it("Verify if user select Year from dropdown list", () => {
      ToNavigateIoT.ElectricListDropdown().contains("year").click();
    });
    it("Verify user click on Electricity Consumption dropdown", () => {
      ToNavigateIoT.ElectricDropdwonButton().should("be.visible").click();
    });
    it("Verify if user select Week from dropdown list", () => {
      ToNavigateIoT.ElectricListDropdown().contains("week").click();
    });
  });

  context("When user move to Contact Card", () => {
    it("User is on contact card", () => {
      ToNavigateIoT.ContactsCard().scrollIntoView();
    });
    it("Verify it user select Recent tab in Contacts Card", () => {
      ToNavigateIoT.RecentTab()
        .scrollIntoView()
        .contains("Recent")
        .click({ force: true });
    });
    it("Verify it user select Contacts tab in Contacts Card", () => {
      ToNavigateIoT.ContactsTab()
        .scrollIntoView()
        .contains("Contacts")
        .click({ force: true });
    });
  });

  context("When user move to Traffic Consumption Card", () => {
    it("Verify if user is on Traffic Consumption Card", () => {
      ToNavigateIoT.TrafficConsumpCard().scrollIntoView();
    });
    it("Verify if user click on Traffic Consumption dropdown", () => {
      ToNavigateIoT.TrafficConsumpDropdownButton().click();
    });
    it("Verify if User select Week from dropdownlist", () => {
      ToNavigateIoT.TrafficConsumpListDropdown().contains("week").click();
    });
    it("Verify if user mouse hover on Traffic Consumption Chart", () => {
      ToNavigateIoT.ChartTrafficConsump().then(($trafficCanvas) => {
        let t = cy.wrap($trafficCanvas);
        let TrafficWidth = $trafficCanvas.width();
        let TrafficHeight = $trafficCanvas.height();

        let TrafficPointX1 = TrafficWidth * 0.14;
        let TrafficPointY1 = TrafficHeight * 0.48;
        let TrafficPointX2 = TrafficWidth * 0.28;
        let TrafficPointY2 = TrafficHeight * 0.55;
        let TrafficPointX3 = TrafficWidth * 0.43;
        let TrafficPointY3 = TrafficHeight * 0.46;
        let TrafficPointX4 = TrafficWidth * 0.71;
        let TrafficPointY4 = TrafficHeight * 0.36;

        t.click(TrafficPointX1, TrafficPointY1);
        t.click(TrafficPointX2, TrafficPointY2);
        t.click(TrafficPointX3, TrafficPointY3);
        t.click(TrafficPointX4, TrafficPointY4);
      });
    });
    it("Verify if user click on Traffic Consumption dropdown", () => {
      ToNavigateIoT.TrafficConsumpDropdownButton().should("be.visible").click();
    });
    it("Verify if User select Year from dropdownlist", () => {
      ToNavigateIoT.TrafficConsumpListDropdown().contains("year").click();
    });
    it("Verify if user click on Traffic Consumption dropdown", () => {
      ToNavigateIoT.TrafficConsumpDropdownButton().should("be.visible").click();
    });
    it("Verify if User select Month from dropdownlist", () => {
      ToNavigateIoT.TrafficConsumpListDropdown().contains("month").click();
    });
  });

  // Hanldle the uncaught exception
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log(err);
    console.log(runnable);
    return false;
  });
  context("When user move to My Playlist Card", () => {
    it("Verify if user is on My PlayList", () => {
      ToNavigateIoT.MyPlaylistCard().scrollIntoView();
    });
    it("Verify if user control the song bar", () => {
      ToNavigateIoT.ControlSongBar()
        .invoke("val", "70")
        .click()
        .invoke("val", "60")
        .click()
        .invoke("val", "50")
        .click()
        .invoke("val", "40")
        .click()
        .invoke("val", "30")
        .click()
        .invoke("val", "20")
        .click()
        .invoke("val", "10")
        .click();
    });
    it("Verify if user play the song", () => {
      ToNavigateIoT.PlaySongButton().should("be.visible").click();
    });
    it("Verify if user Pause the song", () => {
      ToNavigateIoT.PauseSongButton().should("be.visible").click();
    });
    it("Verify if user Shuffle the Playlist", () => {
      ToNavigateIoT.ShuffleSongButton().should("be.visible").click();
    });
    it("Verify if user play the Next song in the Playlist", () => {
      ToNavigateIoT.ForwardSongButton().should("be.visible").click();
    });
    it("Verify if user Pause the song", () => {
      ToNavigateIoT.PauseSongButton().should("be.visible").click();
    });
    it("Verify if user play the Previous song in the Playlist", () => {
      ToNavigateIoT.BackwardSongButton().should("be.visible").click();
    });
    it("Verify if user Pause the song", () => {
      ToNavigateIoT.PauseSongButton().should("be.visible").click();
    });
    it("Verify if user Repeat the current song in the Playlist", () => {
      ToNavigateIoT.RepeatSongButton().should("be.visible").click();
    });
    it("Verify if user Mute the song volume", () => {
      ToNavigateIoT.MuteVolSongButton().should("be.visible").click();
    });

    it("Verify if user control the Volume Song Bar", () => {
      ToNavigateIoT.VolumeSongBar()
        .invoke("val", "80")
        .click()
        .invoke("val", "70")
        .click()
        .invoke("val", "60")
        .click()
        .invoke("val", "50")
        .click()
        .invoke("val", "40")
        .click()
        .invoke("val", "30")
        .click()
        .invoke("val", "20")
        .click()
        .invoke("val", "10")
        .click()
        .invoke("val", "0")
        .click()
        .invoke("val", "10")
        .click()
        .invoke("val", "20")
        .click()
        .invoke("val", "30")
        .click()
        .invoke("val", "40")
        .click()
        .invoke("val", "50")
        .click()
        .invoke("val", "60")
        .click()
        .invoke("val", "70")
        .click();
    });
  });

  context("When user move to Security Camera Section", () => {
    it("Verify if user is on Security Camera Card", () => {
      ToNavigateIoT.SecurityCameraCard()
        .scrollIntoView()
        .contains("Security Cameras");
    });
    it("Verify if user click on Single Camera View", () => {
      ToNavigateIoT.SecCamSingleVeiw().should("be.visible").click();
    });
    it("Verify if user click on Grid Camera View", () => {
      ToNavigateIoT.SecCamGridView().should("be.visible").click();
    });
    it("Verify if user click on Camera # 1", () => {
      ToNavigateIoT.SecurityCameraVeiw1().should("be.visible").click();
    });
    it("Verify if user click again on Grid Camera View", () => {
      ToNavigateIoT.SecCamGridView().should("be.visible").click();
    });
    it("Verify if user click on Camera # 2", () => {
      ToNavigateIoT.SecurityCameraVeiw2().should("be.visible").click();
    });
    it("Verify if user click again on Grid Camera View", () => {
      ToNavigateIoT.SecCamGridView().should("be.visible").click();
    });
    it("Verify if user click on Camera # 3", () => {
      ToNavigateIoT.SecurityCameraVeiw3().should("be.visible").click();
    });
    it("Verify if user click again on Grid Camera View", () => {
      ToNavigateIoT.SecCamGridView().should("be.visible").click();
    });
    it("Verify if user click on Camera # 4", () => {
      ToNavigateIoT.SecurityCameraVeiw4().should("be.visible").click();
    });
    it("Verify if user click again on Grid Camera View", () => {
      ToNavigateIoT.SecCamGridView().should("be.visible").click();
    });

    context("When user move to Room Management Section", () => {
      it("Verify if user is on Room Mangement Card", () => {
        ToNavigateIoT.RoomManagementCard()
          .scrollIntoView()
          .should("contain", "Room Management");
      });
      it("Verify if user Select Bedroom from Room Mangement Card", () => {
        ToNavigateIoT.BedroomSelect().should("be.visible").click();
      });
      it("Verify if user Select LivingRoom from Room Mangement Card", () => {
        ToNavigateIoT.LivingRoomSelect().should("be.visible").click();
      });
      it("Verify if user Select Kitten from Room Mangement Card", () => {
        ToNavigateIoT.KittenSelect().should("be.visible").click();
      });
      it("Verify if user Select Hallway from Room Mangement Card", () => {
        ToNavigateIoT.HallwaySelect().should("be.visible").click();
      });
    });
  });
});
