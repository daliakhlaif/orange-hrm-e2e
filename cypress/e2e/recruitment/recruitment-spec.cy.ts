import LoginPage from "../../support/pages/login/login-page";
import DashboardPage from "../../support/pages/dashboard/dashboard-page";
import { UserCredentials } from "../../support/enum/system-info-enums";
import { cleanupEntities, PreparedVacancyData, prepareVacancy } from "../../support/utils/recruitment-utils";
import AddCandidatePage from "../../support/pages/recruitment/add-candidate-page";
import { CANDIDATE_DETAILS } from "../../support/constants/test-data-constants";
import CandidatesPage from "../../support/pages/recruitment/candidates-page";


describe('Recruitment - Candidates Page Test Cases', () => {
    let preparedData: PreparedVacancyData;

    beforeEach(() => {
        LoginPage.visit();
        LoginPage.isLoaded();
        cy.login(UserCredentials.USERNAME, UserCredentials.PASSWORD);
        DashboardPage.isLoaded();

        return prepareVacancy().then((data) => {
            preparedData = data;
        });
    });

    afterEach(() => {
        if (preparedData) {
            return cleanupEntities(
                preparedData.employeeData.empNumber,
                preparedData.vacancyData.id,
                preparedData.jobData.id
            );
        }
    });

    it('TC20: Should add, search, shortlist and interview a candidate', () => {
        const [first, middle, last] = CANDIDATE_DETAILS.name.split(" ");

        AddCandidatePage.visit();
        AddCandidatePage.isLoaded();

        AddCandidatePage.typeFirstName(first);
        AddCandidatePage.typeMiddleName(middle);
        AddCandidatePage.typeLastName(last);
        AddCandidatePage.typeEmail(CANDIDATE_DETAILS.email);

        AddCandidatePage.selectVacancy(preparedData.vacancyData.name)

        AddCandidatePage.uploadResume(CANDIDATE_DETAILS.resume)
        AddCandidatePage.save()

        AddCandidatePage.assertCandidateSaved()

        CandidatesPage.visit();
        CandidatesPage.isLoaded();
        CandidatesPage.searchAndAssert(
            CANDIDATE_DETAILS.name,
            preparedData.vacancyData.name
        );

        CandidatesPage.clickEyeIconForCandidate(CANDIDATE_DETAILS.name)
        CandidatesPage.shortlistCandidate()
        CandidatesPage.addCommentAndSave(CANDIDATE_DETAILS.comment);
        CandidatesPage.scheduleInterview(
            preparedData.employeeData.fullName,
            CANDIDATE_DETAILS.interviewTitle,
            CANDIDATE_DETAILS.interviewDate
        )
        CandidatesPage.markInterviewPassed()
    })
})