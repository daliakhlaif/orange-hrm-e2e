import { MessagesFixture } from "../../support/interfaces/messages-fixture-interface";
import { UsersFixture } from "../../support/interfaces/users-fixture-interface";
import DashboardPage from "../../support/pages/dashboard/dashboard-page";
import LoginPage from "../../support/pages/login/login-page";

describe('Login Test Cases', () => {

    beforeEach(() => {
        cy.fixture<UsersFixture>('users').as('users')
        cy.fixture<MessagesFixture>('messages').as('messages')
        LoginPage.visit()
        LoginPage.isLoaded()
    });


    it("TC01: Should log in with valid credentials", () => {
        cy.get<UsersFixture>('@users').then((users) => {
            cy.login(users.valid.username, users.valid.password)
            DashboardPage.isLoaded()
        })
    });

    it("TC02: Should show error for valid username and invalid password", () => {
        cy.get<UsersFixture>('@users').then((users) => {
            cy.login(users.valid.username, users.invalid.password)
        })

        cy.get<MessagesFixture>('@messages').then((messages) => {
            LoginPage.assertInvalidCredential(messages.invalidCreds)
        })
    });


    it("TC03: Should show error for invalid username and valid password", () => {
        cy.get<UsersFixture>('@users').then((users) => {
            cy.login(users.invalid.username, users.valid.password)
        })

        cy.get<MessagesFixture>('@messages').then((messages) => {
            LoginPage.assertInvalidCredential(messages.invalidCreds)
        })
    });

    it("TC04: Should show error for invalid username and invalid password", () => {
        cy.get<UsersFixture>('@users').then((users) => {
            cy.login(users.invalid.username, users.invalid.password)
        })

        cy.get<MessagesFixture>('@messages').then((messages) => {
            LoginPage.assertInvalidCredential(messages.invalidCreds)
        })
    });

    it("TC05: Should show validation message when fields are empty", () => {
        LoginPage.clearUsername();
        LoginPage.clearPassword();
        LoginPage.submit();

        cy.get<MessagesFixture>('@messages').then((messages) => {
            LoginPage.assertRequiredAt(0, messages.required)
            LoginPage.assertRequiredAt(1, messages.required)
        })

    });

    it("TC06: Should show required message when username is empty and password is valid", () => {
        cy.get<UsersFixture>('@users').then((users) => {
            LoginPage.clearUsername();
            LoginPage.typePassword(users.valid.password)
            LoginPage.submit();
        })
        cy.get<MessagesFixture>('@messages').then((messages) => {
            LoginPage.assertRequiredAt(0, messages.required)

        })
    });

    it("TC07: Should show required message when username is empty and password is invalid", () => {
        cy.get<UsersFixture>('@users').then((users) => {
            LoginPage.clearUsername();
            LoginPage.typePassword(users.invalid.password)
            LoginPage.submit();
        })

        cy.get<MessagesFixture>('@messages').then((messages) => {
            LoginPage.assertRequiredAt(0, messages.required)

        })
    });

    it("TC08: Should show required message when password is empty and username is valid", () => {
        cy.get<UsersFixture>('@users').then((users) => {
            LoginPage.typeUsername(users.valid.username)
            LoginPage.clearPassword();
            LoginPage.submit();
        })

        cy.get<MessagesFixture>('@messages').then((messages) => {
            LoginPage.assertRequiredAt(0, messages.required)
        })
    });

    it("TC09: Should show required message when password is empty and username is invalid", () => {
        cy.get<UsersFixture>('@users').then((users) => {
            LoginPage.typeUsername(users.invalid.username)
            LoginPage.clearPassword();
            LoginPage.submit();
        })

        cy.get<MessagesFixture>('@messages').then((messages) => {
            LoginPage.assertRequiredAt(0, messages.required)
        })

    })


    it("TC10: Should mask password input by default", () => {
        LoginPage.passwordShouldBeMasked()
    });

})

