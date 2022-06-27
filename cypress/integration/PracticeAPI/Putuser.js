/// <reference types = "Cypress"/>

describe("PUT User Test", () => {
  let AcessToken =
    "a980d900a35b6f2b599fa5a3854f5288f77d7918e5db170ece99e602dec7acb0";

  it("POST USER", () => {
    // Create User using POST

    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization: "Bearer " + AcessToken,
      },
      body: {
        name: "AbrarTester",
        email: "Testerabrar22@rocket.com",
        gender: "male",
        status: "inactive",
      },
    })
      .then((res) => {
        cy.log(JSON.stringify(res));
        expect(res.status).to.eq(201);
        expect(res.body).has.property("name", "AbrarTester");
        expect(res.body).has.property("email", "Testerabrar22@rocket.com");
        expect(res.body).has.property("gender", "male");
        expect(res.body).has.property("status", "inactive");
      })
      .then((res) => {
        const Userid = res.body.id;
        cy.log("User Id is :" + Userid);

        // Update the Created user Using PUT

        cy.request({
          method: "PUT",
          url: "https://gorest.co.in/public/v2/users/" + Userid,
          headers: {
            Authorization: "Bearer " + AcessToken,
          },
          body: {
            name: "AbrarTesterQAE",
            email: "TesterabrarQA22@rocket.com",
            gender: "male",
            status: "active",
          },
        }).then((res) => {
          expect(res.status).to.eq(200);
          expect(res.body).has.property("id", Userid);
          expect(res.body).has.property("name", "AbrarTesterQAE");
          expect(res.body).has.property("email", "TesterabrarQA22@rocket.com");
          expect(res.body).has.property("gender", "male");
          expect(res.body).has.property("status", "active");
        });
      });
  });
});

