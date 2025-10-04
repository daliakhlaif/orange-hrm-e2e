import { BUZZ_PAGE_LOCATORS } from "../constants/locators-constants";
import { MESSAGES } from "../constants/messages-constants";
import { APP_MODULES } from "../enum/modules-enum";
import WebElementHandler from "../handlers/web-element-handler";


class BuzzPage {
    visit() {
        WebElementHandler.click(BUZZ_PAGE_LOCATORS.buzzTab)
    }
    isLoaded() {
        WebElementHandler.assertContains(BUZZ_PAGE_LOCATORS.headerBuzz, APP_MODULES.BUZZ)
    }
    typePost(content: string) {
        WebElementHandler.type(BUZZ_PAGE_LOCATORS.postTextArea, content)
    }
    submitPost() {
        WebElementHandler.click(BUZZ_PAGE_LOCATORS.postButton)
    }

    assertSuccessfullySaved() {
        WebElementHandler.assertContains(BUZZ_PAGE_LOCATORS.toastMsg, MESSAGES.successfullySaved)
    }

    assertPostCreated(message: string) {
        cy.get(BUZZ_PAGE_LOCATORS.postFeed).eq(0).should("contain", message);
    }
}

export default new BuzzPage()