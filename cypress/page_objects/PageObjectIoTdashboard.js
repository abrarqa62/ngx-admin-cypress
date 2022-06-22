export class IotDashboard {
  
  IotDashboard() {
    cy.visit("/");
    return cy.contains("IoT Dashboard");
  }
  LightBulb() {
    return cy.get(".nb-lightbulb");
  }
  offBulb() {
    return cy.xpath("//ngx-status-card[@ng-reflect-title='Light']//div[@class='status paragraph-2'][normalize-space()='OFF']");
  }
  Rollershades() {
    return cy.get(".nb-roller-shades");
  }
  offRollershades(){
    return cy.xpath("//ngx-status-card[@ng-reflect-title='Roller Shades']//div[@class='status paragraph-2'][normalize-space()='OFF']");
  }
  WirelessAudio() {
    return cy.get(".nb-audio");
  }
  offWireless(){
    return cy.xpath("//ngx-status-card[@ng-reflect-title='Wireless Audio']//div[@class='status paragraph-2'][normalize-space()='OFF']");
  }
  CoffeeMaker() {
    return cy.get(".nb-coffee-maker");
  }
  offCoffee(){
    return cy.xpath("//ngx-status-card[@ng-reflect-title='Coffee Maker']//div[@class='status paragraph-2'][normalize-space()='OFF']");
  }

  // Temperature Section

  TemperatureCard() {
    return cy.get('[data-test-id="TempCard"]');
  }
  TempTab() {
    return cy.xpath("//span[normalize-space()='Temperature']");
  }
  PowerOnButton() {
    return cy.get('[data-test-id="PowerButton"]');
  }
  PowerOffButton() {
    return cy.get('[data-test-id="PowerButton"]');
  }
  TemperatureDragger() {
    return cy.get('[data-test-id="TempDragger"]');
  }
  HumidityDragger() {
    return cy.get('[data-test-id="HumidDragger"]');
  }
  TempModeSnow() {
    return cy.get('[data-test-id="Tempsnow"]');
  }
  TempModeSunny() {
    return cy.get('[data-test-id="Tempsunny"]');
  }
  TempModeFlame() {
    return cy.get('[data-test-id="Tempflame"]');
  }
  TempModeLoop() {
    return cy.get('[data-test-id="Temploop"]');
  }
  HumidTab() {
    return cy.xpath("//span[normalize-space()='Humidity']");
  }
  HumidityDragger() {
    return cy.get('[data-test-id="HumidDragger"]');
  }
  HumidModeSnow() {
    return cy.get('[data-test-id="Humidsnow"]');
  }
  HumidModeSunny() {
    return cy.get('[data-test-id="Humidsunny"]');
  }
  HumidModeFlame() {
    return cy.get('[data-test-id="Humidflame"]');
  }
  HumidModeLoop() {
    return cy.get('[data-test-id="Humidloop"]');
  }
  // Electricity Consumption
  ElectricityConsumptionCard() {
    return cy.get('[data-test-id="ElectConsump"]');
  }
  ElectricYearlyTab1() {
    return cy.xpath("//span[normalize-space()='2015']");
  }
  ElectricYearlyTab2() {
    return cy.xpath("//span[normalize-space()='2016']");
  }
  ElectricYearlyTab3() {
    return cy.xpath("//span[normalize-space()='2017']");
  }
  ElectricDropdwonButton() {
    return cy.get('[data-test-id="ElectricDropdown"]');
  }
  ElectricListDropdown() {
    return cy.get('[data-test-id="ListElectricDropdown"]');
  }
  ElectricConsumpChart() {
    return cy.get('[data-test-id="ElectricChart"]');
  }
  // Contacts Section
  ContactsCard() {
    return cy.get('[data-test-id="Contacts"]');
  }
  RecentTab() {
    return cy.get('[class="tab-text ng-star-inserted"]').eq(6);
  }
  ContactsTab() {
    return cy.get('[class="tab-text ng-star-inserted"]').eq(5);
  }

  //Traffic Consumption Section

  TrafficConsumpCard() {
    return cy.get('[data-test-id="TrafficConsump"]');
  }
  TrafficConsumpDropdownButton() {
    return cy.xpath(
      "//nb-select[@class='appearance-outline size-medium status-basic shape-rectangle nb-transition']"
    );
  }
  TrafficConsumpListDropdown() {
    return cy.get(".option-list");
  }
  ChartTrafficConsump() {
    return cy.get('[data-test-id="TrafficConsumpChart"]');
  }
  //Secuity Camera Section
  SecurityCameraCard() {
    return cy.get('[data-test-id="CamSec"]');
  }
  SecCamSingleVeiw() {
    return cy.get('[data-test-id="Singleview"]');
  }
  SecCamGridView() {
    return cy.get('[data-test-id="Gridview"]');
  }
  SecurityCameraVeiw1() {
    return cy.xpath("//span[normalize-space()='Camera #1']");
  }
  SecurityCameraVeiw2() {
    return cy.xpath("//span[normalize-space()='Camera #2']");
  }
  SecurityCameraVeiw3() {
    return cy.xpath("//span[normalize-space()='Camera #3']");
  }
  SecurityCameraVeiw4() {
    return cy.xpath("//span[normalize-space()='Camera #4']");
  }

  //Room Mangement Section

  RoomManagementCard() {
    return cy.get('[data-test-id="RoomSelector"]');
  }
  BedroomSelect() {
    return cy.xpath(
      "//*[name()='g' and @id='1']//*[name()='path' and contains(@class,'room-bg')]"
    );
  }
  LivingRoomSelect() {
    return cy.xpath(
      "//*[name()='g' and @id='2']//*[name()='path' and contains(@class,'room-bg')]"
    );
  }
  KittenSelect() {
    return cy.xpath(
      "//*[name()='g' and @id='0']//*[name()='path' and contains(@class,'room-bg')]"
    );
  }
  HallwaySelect() {
    return cy.xpath(
      "//*[name()='g' and @id='3']//*[name()='path' and contains(@class,'room-bg')]"
    );
  }
  // Music Player
  MyPlaylistCard() {
    return cy.get('[data-test-id="MusicPlayer"]');
  }
  ControlSongBar() {
    return cy.xpath("//input[@data-test-id='ControlBar']");
  }
  PlaySongButton() {
    return cy.get('[data-test-id="Play|Pause"]');
  }
  PauseSongButton() {
    return cy.get('[data-test-id="Play|Pause"]');
  }
  ShuffleSongButton(){
    return cy.get('[data-test-id="shuffle"]')
  }
  ForwardSongButton() {
    return cy.get('[data-test-id="Forwardsong"]');
  }
  BackwardSongButton() {
    return cy.get('[data-test-id="Backwardsong"]');
  }
  RepeatSongButton() {
    return cy.get('[data-test-id="Backwardsong"]');
  }
  MuteVolSongButton() {
    return cy.get('[data-test-id="MuteSong"]');
  }
  FullVolSongButton() {
    return cy.get('[data-test-id="FullVolSong"]');
  }
  VolumeSongBar() {
    return cy.get('[data-test-id="SongVolumeBar"]');
  }



}

export const ToNavigateIoT = new IotDashboard();
