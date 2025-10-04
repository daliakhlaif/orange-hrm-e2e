import DashboardPage from "../../support/pages/dashboard-page";
import LoginPage from "../../support/pages/login-page";

describe('Login Test Cases', () => {

    beforeEach(() => {
        cy.fixture('users').as('users')
        cy.fixture('messages').as('messages')
        LoginPage.visit()
        LoginPage.isLoaded()
    });


    it("TC01: Should log in with valid credentials", () => {
        cy.get('@users').then((users: any) => {
            cy.login(users.valid.username, users.valid.password)
            DashboardPage.isLoaded()
        })
    });

    it("TC02: Should show error for valid username and invalid password", () => {
        cy.get('@users').then((users: any) => {
            cy.login(users.valid.username, users.invalid.password)
            LoginPage.assertInvalidCredential('Invalid credentials')
        })

        cy.get('@messages').then((messages: any) => {
            LoginPage.assertInvalidCredential(messages.invalidCreds)
        })
    });


    it("TC03: Should show error for invalid username and valid password", () => {
        cy.get('@users').then((users: any) => {
            cy.login(users.invalid.username, users.valid.password)
        })

        cy.get('@messages').then((messages: any) => {
            LoginPage.assertInvalidCredential(messages.invalidCreds)
        })
    });

    it("TC04: Should show error for invalid username and invalid password", () => {
        cy.get('@users').then((users: any) => {
            cy.login(users.invalid.username, users.invalid.password)
        })

        cy.get('@messages').then((messages: any) => {
            LoginPage.assertInvalidCredential(messages.invalidCreds)
        })
    });

    it("TC05: Should show validation message when fields are empty", () => {
        LoginPage.clearUsername();
        LoginPage.clearPassword();
        LoginPage.submit();

        cy.get('@messages').then((messages: any) => {
            LoginPage.assertRquiredAt(0, messages.required)
            LoginPage.assertRquiredAt(1, messages.required)
        })

    });

    it("TC06: Should show required message when username is empty and password is valid", () => {
        cy.get('@users').then((users: any) => {
            LoginPage.clearUsername();
            LoginPage.typePassword(users.valid.password)
            LoginPage.submit();
        })
        cy.get('@messages').then((messages: any) => {
            LoginPage.assertRquiredAt(0, messages.required)

        })
    });

    it("TC07: Should show required message when username is empty and password is invalid", () => {
        cy.get('@users').then((users: any) => {
            LoginPage.clearUsername();
            LoginPage.typePassword(users.invalid.password)
            LoginPage.submit();
        })

        cy.get('@messages').then((messages: any) => {
            LoginPage.assertRquiredAt(0, messages.required)

        })
    });

    it("TC08: Should show required message when password is empty and username is valid", () => {
        cy.get('@users').then((users: any) => {
            LoginPage.typeUsername(users.valid.username)
            LoginPage.clearPassword();
            LoginPage.submit();
        })

        cy.get('@messages').then((messages: any) => {
            LoginPage.assertRquiredAt(0, messages.required)

        })
    });

    it("TC09: Should show required message when password is empty and username is invalid", () => {
        cy.get('@users').then((users: any) => {
            LoginPage.typeUsername(users.invalid.username)
            LoginPage.clearPassword();
            LoginPage.submit();
        })

        cy.get('@messages').then((messages: any) => {
            LoginPage.assertRquiredAt(0, messages.required)
        })

    })


    it("TC10: Should mask password input by default", () => {
        LoginPage.passwordShouldBeMasked()
    });

})

