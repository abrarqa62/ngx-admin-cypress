/// <reference types ="Cypress" />

describe('intercept the Cypress Examples',() =>{
    

    it('Test the APi with Intercept Stubbing', ()=>{

        cy.visit('https://jsonplaceholder.typicode.com/')

        cy.intercept({

            path :'/posts'

        }).as('posts')
        cy.get('tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)').click()
        cy.wait('@posts').then(inter => {
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(100)
        })
    })
    it('Mocking  intercept test with static response',() => {
       
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET','/posts',{totalPost:5,name : 'Abrar Ul Haq'}).as('posts')
        cy.get('tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)').click()
        cy.wait('@posts')
    
    })
    it.only('Mocking  intercept test with Dynamic response',() => {
       
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET','/posts',{fixture :'CreateUser.json'}).as('posts')
        cy.get('tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)').click()
        cy.wait('@posts')
    
    })
})