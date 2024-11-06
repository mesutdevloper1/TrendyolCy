import selectors from '../fixtures/selectors.json';

class TrendyolCheckoutPage {
    proceedAsGuest() {
        cy.xpath(selectors.checkoutPage.guestCheckoutButton).click();
    }

    verifyEmailVerificationScreen() {
        cy.xpath(selectors.checkoutPage.emailVerificationText).should('be.visible');
    }
}

export default new TrendyolCheckoutPage();
