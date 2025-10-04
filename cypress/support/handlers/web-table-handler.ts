import WebElementHandler from "./web-element-handler";
class WebTableHandler {

  search(inputLocator: string, searchBtnLocator: string, value: string) {
    WebElementHandler.type(inputLocator, value)
    WebElementHandler.click(searchBtnLocator)
  }

  assertRowContains(tableLocator: string, ...values: string[]) {
    cy.get(tableLocator).first().within(() => {
      values.forEach(value => {
        cy.contains(value).should('exist');
      });
    });
  }

  searchAndValidate(inputLocator: string, searchBtnLocator: string, value: string, tableLocator: string, ...expectedValues: string[]) {
    this.search(inputLocator, searchBtnLocator, value);
    this.assertRowContains(tableLocator, ...expectedValues);
  }

  clickActionInRow(
    tableSelector: string,
    rowSelector: string,
    cellSelector: string,
    text: string,
    actionSelector: string
  ) {
    cy.get(tableSelector).within(() => {
      cy.contains(cellSelector, text)
        .parents(rowSelector)
        .find(actionSelector)
        .click();
    });
  }
}

export default new WebTableHandler();