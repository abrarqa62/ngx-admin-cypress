/// <reference types ="Cypress" />

describe("GET api user tests", () => {
  let acessToken =
    "a980d900a35b6f2b599fa5a3854f5288f77d7918e5db170ece99e602dec7acb0";

  it("GET users", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users",
      header: {
        'authorization': "Bearer " + acessToken
      }  
    }).then((res) => {
      expect(res.status).to.eq(200);
    });
  });

  it("GET Users for specified user ID", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users/3078",
      header: {
        authorization:
        "Bearer "+ acessToken,
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.name).to.eq("Gaurang Singh");
    });
  });
});
