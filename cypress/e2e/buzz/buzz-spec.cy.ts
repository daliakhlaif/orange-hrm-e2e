import { APP_MODULES } from "../../support/enum/modules-enum";
import { UserCredentials } from "../../support/enum/system-info-enums";
import BuzzPage from "../../support/pages/buzz-page";
import DashboardPage from "../../support/pages/dashboard-page";
import LoginPage from "../../support/pages/login-page";
import AdminPage from "../../support/pages/admin-page";
import { Methods } from "../../support/utils/generic-methods";
import { BuzzUtils } from "../../support/utils/buzz-utils";

describe("Buzz - Test Cases", () => {
    let postMessage: string;

    beforeEach(() => {
        cy.fixture("postInfo.json").then((data) => {
            postMessage = data.baseMessage + Methods.generateRandomString(5);
        });

        LoginPage.visit();
        LoginPage.isLoaded();
        cy.login(UserCredentials.USERNAME, UserCredentials.PASSWORD);
        DashboardPage.isLoaded();
        AdminPage.openFromMenu(APP_MODULES.ADMIN);

        BuzzUtils.createEmployeeAndUser();
    });

    afterEach(() => {
        BuzzUtils.cleanup();
    });

    it("TC18: Should allow user to add a new post", () => {
        BuzzPage.visit();
        BuzzPage.isLoaded();
        BuzzPage.typePost(postMessage);
        BuzzPage.submitPost();
        BuzzPage.assertSuccessfullySaved();
        cy.reload();
        BuzzPage.assertPostCreated(postMessage);
    });
});
