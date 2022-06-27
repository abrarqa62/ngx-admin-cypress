/// <reference types = "Cypress"/>

describe("Delete User Test", () => {
    let AcessToken =
      "a980d900a35b6f2b599fa5a3854f5288f77d7918e5db170ece99e602dec7acb0";
  
    it("POST USER", () => {
      
// Create User using (POST)
        cy.request({
          method: "POST",
          url: "https://gorest.co.in/public/v2/users",
          headers: {
            Authorization: "Bearer " + AcessToken,
          },
          body: 
            {
                "name": "hassanQA",
                "email": "hassantest22@rocket.com",
                "gender": "male",
                "status": "active"
              },
        })
          .then((res) => {
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(201);
            expect(res.body).has.property("name", "hassanQA");
            expect(res.body).has.property("email", "hassantest22@rocket.com");
        
          })
          .then((res) => {
            const Userid = res.body.id;
            cy.log("User Id is :" + Userid);

           // Delete the User Using (DELETE)
            cy.request({
              method: "DELETE",
              url: "https://gorest.co.in/public/v2/users/" + Userid,
              headers: {
                Authorization: "Bearer " + AcessToken,
              },
            }).then((res) => {
              expect(res.status).to.eq(204);
            
            });
          });
      });
    });
  
  