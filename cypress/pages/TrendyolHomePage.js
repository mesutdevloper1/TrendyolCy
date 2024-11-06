import selectors from '../fixtures/selectors.json';

class TrendyolHomePage {
    visit() {
        cy.visit('/');
    }

    goToComputersCategory() {
        cy.xpath(selectors.homePage.electronicsCategory).click();
        cy.xpath(selectors.homePage.computersSubcategory).click();
    }
}

export default new TrendyolHomePage();
