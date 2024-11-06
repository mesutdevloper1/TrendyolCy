import selectors from '../fixtures/selectors.json';

class TrendyolBasketPage {
    sortByHighestPrice() {
        cy.get(selectors.productPage.sortDropdown).click();
        cy.xpath(selectors.productPage.highestPriceOption).click();
    }

    addFirstTwoProductsToBasket() {
        cy.xpath(selectors.productPage.addToBasketButtons).each((btn, index) => {
            if (index < 2) cy.wrap(btn).click();
        });
    }

    removeSecondProduct() {
        cy.xpath(selectors.basketPage.deleteSecondProduct).click();
    }

    verifySuccessMessage() {
        cy.xpath(selectors.basketPage.successMessage).should('be.visible');
    }

    verifyFreeShippingText() {
        cy.xpath(selectors.basketPage.freeShippingText).should('be.visible');
    }

    verifyTotalPrice() {
        cy.xpath(selectors.basketPage.totalPrice).invoke('text').then((price) => {
            cy.xpath(selectors.basketPage.orderSummaryTotal).should('have.text', price);
        });
    }

    confirmBasket() {
        cy.xpath(selectors.basketPage.confirmBasketButton).click();
    }
}

export default new TrendyolBasketPage();
