import LoginPage from "../../support/pages/login-page";
import DashboardPage from "../../support/pages/dashboard-page";
import AdminPage from "../../support/pages/admin-page";
import { APP_MODULES } from "../../support/enum/modules-enum";
import AddUserPage from "../../support/pages/add-user-page";
import { User } from "../../support/interfaces/user-interface";
import WebElementHandler from "../../support/handlers/web-element-handler";
import { MESSAGES } from "../../support/constants/messages-constants";
import { ADD_USER_PAGE_LOCATORS, USER_PAGE_LOCATORS,} from "../../support/constants/locators-constants";
import WebTableHandler from "../../support/handlers/web-table-handler";
import { UserCredentials, UserInfo} from "../../support/enum/system-info-enums";
import { cleanupEmployee, prepareEmployee } from "../../support/utils/employee-utils";

describe("Admin - User Management Test Cases (UI)", () => {
    let createdEmpNumber: number;
    let createdEmployeeName: string;

    beforeEach(() => {
        LoginPage.visit();
        LoginPage.isLoaded();
        cy.login(UserCredentials.USERNAME, UserCredentials.PASSWORD);
        DashboardPage.isLoaded();
        AdminPage.openFromMenu(APP_MODULES.ADMIN);

        prepareEmployee().then((empData) => {
            createdEmpNumber = empData.createdEmpNumber;
            createdEmployeeName = empData.createdEmployeeName;
        });
    });

    afterEach(() => {
        cleanupEmployee(createdEmpNumber);
    })

    it("TC11: Should successfully add a new user with admin role", () => {
        AddUserPage.visit();
        AddUserPage.isLoaded();

        const user: User = {
            role: UserInfo.ROLE,
            employeeName: createdEmployeeName,
            status: UserInfo.STATUS,
            username: UserInfo.USERNAME,
            password: UserInfo.PASSWORD,
        };

        cy.addNewUser(user);

        WebElementHandler.assertContains(
            ADD_USER_PAGE_LOCATORS.toastMsg,
            MESSAGES.successfullySaved
        );

        WebTableHandler.assertRowContains(
            USER_PAGE_LOCATORS.usersTable,
            user.username,
            user.role,
            user.status,
            user.employeeName.split(" ")[0] +
            " " +
            user.employeeName.split(" ").slice(-1)
        );

    });

});
