describe("backmarket",()=>{

    it("successful registration",()=>{
        cy.visit("https://preprod.backmarket.fr/fr-fr/register");
        cy.get('[data-qa="accept-cta"]').click()
        
        cy.get("#firstName")
        .type("wafa")
        .should("have.value","wafa");

        cy.get("#lastName")
        .type("rebhi")
        .should("have.value","rebhi");

        cy.get("#signup-email")
        .type("wafarebhi9@gmail.com")
        .should("have.value","wafarebhi9@gmail.com");

        cy.get("#signup-password")
        .type("Wafarebhi2024@")
        .should("have.value","Wafarebhi2024@");

        cy.get("._2OVE0h6V")
        .click();

        cy.contains("Enchantés !")
        .click();
        
        cy.url().should("eq","https://preprod.backmarket.fr/fr-fr/dashboard/orders");

})


it("unsuccessful registration",()=>{
    cy.visit("https://preprod.backmarket.fr/fr-fr/register");
    cy.get('[data-qa="accept-cta"]').click()
    
    cy.get("#firstName")
    .type("wafa")
    .should("have.value","wafa");

    cy.get("#lastName")
    .type("rebhi")
    .should("have.value","rebhi");

    cy.get("#signup-email")
    .type("wafarebhi7gmail.com")
    .should("contain.value","@");

    cy.get("#signup-password")
    .type("Wafarebhi2024@")
    .should("have.value","Wafarebhi2024@");

    cy.get("._2OVE0h6V")
    .click();

    cy.contains("Enchantés !")
    .click();
    

})





    it("Auth,successful sign up",()=>{
        cy.visit("https://preprod.backmarket.fr/fr-fr/register");
        
        cy.get('[data-qa="accept-cta"]').click()
        
        cy.get("#signin-email")
        .type("wafarebhi9@gmail.com")
        .should("have.value","wafarebhi9@gmail.com");

        cy.get("#signin-password")
        .type("Wafarebhi2024@")
        .should("have.value","Wafarebhi2024@");


        cy.get('[data-qa="signin-submit-button"]')
        .click();


        cy.url().should("eq","https://preprod.backmarket.fr/fr-fr/dashboard/orders");
       

    })

    it.only("Auth,unsuccessful sign up,false password",()=>{
        cy.visit("https://preprod.backmarket.fr/fr-fr/register");
        
        cy.get('[data-qa="accept-cta"]').click()
        
        cy.get("#signin-email")
        .type("wafarebhi8@gmail.com")
        .should("have.value","wafarebhi8@gmail.com");

        cy.get("#signin-password")
        .type("Wafarebhi2023@")
        //.should("have.value","Wafarebhi2024@");


        cy.get('[data-qa="signin-submit-button"]')
        .click();

        cy.contains("Saisissez un e-mail et un mot de passe valides.")
        .should("be.visible");
    

        cy.url().should("eq","https://preprod.backmarket.fr/fr-fr/register");

})
})