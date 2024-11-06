import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TrendyolHomePage from "../pages/TrendyolHomePage";
import TrendyolBasketPage from "../pages/TrendyolBasketPage";
import TrendyolCheckoutPage from "../pages/TrendyolCheckoutPage";

Given("Kullanıcı Trendyol ana sayfasına gider", () => {
    TrendyolHomePage.visit();
});

When("Elektronik kategorisi altındaki Bilgisayar bölümüne gider", () => {
    TrendyolHomePage.goToComputersCategory();
});

When("Ürünleri en yüksek fiyata göre sıralar", () => {
    TrendyolBasketPage.sortByHighestPrice();
});

When("İlk 2 ürünü sepete ekler", () => {
    TrendyolBasketPage.addFirstTwoProductsToBasket();
});

When("Sepetime gider", () => {
    cy.visit('/basket');
});

When("İkinci ürünü sepetten siler", () => {
    TrendyolBasketPage.removeSecondProduct();
});

Then("Sepet başarıyla güncellendi mesajı görünür olmalı", () => {
    TrendyolBasketPage.verifySuccessMessage();
});

Then("Sepette kalan üründe Kargo Bedava! yazısı görünür olmalı", () => {
    TrendyolBasketPage.verifyFreeShippingText();
});

Then("Ürün fiyatı ile Sipariş Özeti bölümündeki toplam aynı olmalı", () => {
    TrendyolBasketPage.verifyTotalPrice();
});

When("Sepeti onaylar", () => {
    TrendyolBasketPage.confirmBasket();
});

When("Üye olmadan devam eder", () => {
    TrendyolCheckoutPage.proceedAsGuest();
});

Then("E-posta doğrulama ekranı görünür olmalı", () => {
    TrendyolCheckoutPage.verifyEmailVerificationScreen();
});
