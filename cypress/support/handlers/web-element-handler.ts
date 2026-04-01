class WebElementHandler {

  type(locator: string, text: string) {
    cy.get(locator).clear({ force: true }).type(text);
  }

  click(locator: string) {
    cy.get(locator).click();
  }

  clearInput(locator: string) {
    cy.get(locator).clear({ force: true });
  }

  assertContains(locator: string, text: string) {
    cy.get(locator).should('contain.text', text);
  }

  assertVisible(locator: string) {
    cy.get(locator).should('be.visible');
  }

  assertHasAttr(locator: string, attr: string, notValue?: string) {
    if (notValue) {
      cy.get(locator).should('have.attr', attr).and('not.contain', notValue);
    } else {
      cy.get(locator).should('have.attr', attr);
    }
  }

  selectFromDropdown(dropdownLocator: string, optionLocator: string, optionText: string) {
    cy.get(dropdownLocator).click();
    cy.contains(optionLocator, optionText).click();
  }

  getText(locator: string) {
    return cy.get(locator).invoke("text")
  }
}

export default new WebElementHandler();