/// <reference types = "Cypress"/>

describe("Post User Test", () => {
  let AcessToken =
    "a980d900a35b6f2b599fa5a3854f5288f77d7918e5db170ece99e602dec7acb0";
  let randomText = "";
  let testEmail = "";

  it("POST USER", () => {
    var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 10; i++)
      randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
    testEmail = randomText + "@rocket.com";

    cy.fixture("CreateUser").then((payload) => {
      cy.request({
        method: "POST",
        url: "https://gorest.co.in/public/v2/users",
        headers: {
          Authorization: "Bearer " + AcessToken,
        },
        body: {
          name: payload.name,
          email: testEmail,
          gender: payload.gender,
          status: payload.status,
        },
      })
        .then((res) => {
          cy.log(JSON.stringify(res));
          expect(res.status).to.eq(201);
          expect(res.body).has.property("name", payload.name);
          expect(res.body).has.property("email", testEmail);
          expect(res.body).has.property("gender", payload.gender);
          expect(res.body).has.property("status", payload.status);
        })
        .then((res) => {
          const Userid = res.body.id;
          cy.log("User Id is :" + Userid);
          cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users/" + Userid,
            headers: {
              Authorization: "Bearer " + AcessToken,
            },
          }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).has.property("id", Userid);
            expect(res.body).has.property("name", payload.name);
            expect(res.body).has.property("email", testEmail);
            expect(res.body).has.property("gender", payload.gender);
            expect(res.body).has.property("status", payload.status);
          });
        });
    });
  });
});
