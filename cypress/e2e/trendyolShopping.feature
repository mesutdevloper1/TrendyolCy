Feature: Trendyol Shopping Flow

  Scenario: User adds products to the basket and proceeds to checkout
    Given Kullanıcı Trendyol ana sayfasına gider
    When "Elektronik" kategorisi altındaki "Bilgisayar" bölümüne gider
    And Ürünleri en yüksek fiyata göre sıralar
    And İlk 2 ürünü sepete ekler
    And Sepetime gider
    And İkinci ürünü sepetten siler
    Then "Sepet başarıyla güncellendi" mesajı görünür olmalı
    And Sepette kalan üründe "Kargo Bedava!" yazısı görünür olmalı
    And Ürün fiyatı ile "Sipariş Özeti" bölümündeki toplam aynı olmalı
    When Sepeti onaylar
    And Üye olmadan devam eder
    Then E-posta doğrulama ekranı görünür olmalı
