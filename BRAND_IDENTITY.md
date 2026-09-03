# ALTEK Teknoloji Takımı - Kurumsal Kimlik & Tasarım Sistemi (Brand Identity)

Bu doküman, **ALTEK Teknoloji Takımı** web sitesinde ve dijital materyallerinde kullanılan resmi logo renklerini, tipografi standartlarını ve tasarım bileşenlerini tanımlar.

---

## 🎨 1. Resmi Renk Paleti (Logo Color Palette)

ALTEK logosundaki renkler piksel seviyesinde analiz edilmiş ve web standartlarına (RGB, HEX, HSL) dönüştürülmüştür.

### 🌟 Ana Renkler (Siyah & Havacılık Turuncusu Önceliği)

Sitede kurumsal öncelik **Siyah ve Taktik Turuncu** kombinasyonudur.

| Renk Adı | Görsel | HEX | RGB | HSL | Kullanım Alanı |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **ALTEK Orange (Birincil Taktik Turuncu)** | ![#F7980F](https://via.placeholder.com/24/F7980F/000000?text=+) | `#F7980F` | `247, 152, 15` | `35°, 93%, 51%` | **Birincil Vurgu Rengi:** Tüm aktif butonlar, navlink vurguları, radar indikatörleri, başlık vurguları. |
| **Tactical Black (Gece Siyahı / Derin Zemin)** | ![#000000](https://via.placeholder.com/24/000000/FFFFFF?text=+) | `#000000` / `#121414` | `0, 0, 0` | `0°, 0%, 0%` | **Birincil Zemin:** Kokpit zemin görünümü, HUD kartları, ana gövde. |
| **Mission White (Saf Beyaz)** | ![#FFFFFF](https://via.placeholder.com/24/FFFFFF/000000?text=+) | `#FFFFFF` | `255, 255, 255` | `0°, 0%, 100%` | Turuncu buton üzerindeki yüksek kontrastlı metinler ve koyu mod ana tipografi. |

---

### 🚀 ALTEK Turuncu Degradesi (Tactical Orange Gradient)

```css
/* CSS Gradient Kodu */
background: linear-gradient(135deg, #F7980F 0%, #FF8A00 100%);

/* Metinler için degrade efekti */
background: linear-gradient(135deg, #F7980F 0%, #FF8A00 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

### 🛡️ Taktik Telemetri & Destek Renkleri

| Renk Adı | HEX | RGB | Kullanım Alanı |
| :--- | :---: | :---: | :--- |
| **Koyu Zemin (Matte Surface)** | `#121414` | `18, 20, 20` | Lights-out kokpit arka planı, HUD kartları. |
| **Konteyner Zemin (HUD Container)** | `#1E2020` | `30, 32, 32` | Bilgi modülleri, telemetri kutuları. |
| **Telemetri Mavisi (Telemetry Cyan)** | `#88CEFF` | `136, 206, 255` | RF link, Wi-Fi telemetri, veri akış göstergeleri. |
| **Görev Hazır Yeşili (Mission Green)** | `#4CAF50` | `76, 175, 80` | "GÖREVE HAZIR / OK" sistem durumu rozetleri. |
| **Kritik Durum Kırmızısı (Abort Red)** | `#D32F2F` | `211, 47, 47` | Acil durum, iptal protokolü, kritik uyarılar. |

---

## ✍️ 2. Tipografi ve Yazı Tipleri (Typography System)

Logodaki `ALTEK` yazısı incelendiğinde; geniş gövdeli, geometrik, güçlü ve keskin hatlara sahip havacılık sans-serif karakteristiği görülmektedir.

### 1. Ana Marka ve Başlık Yazı Tipi: **Montserrat**
* **Kaynak:** Google Fonts (`family=Montserrat:wght@400;500;600;700;800;900`)
* **Neden Montserrat?**
  * Logodaki `A`, `L`, `T`, `E`, `K` harflerinin geometrisiyle birebir örtüşür.
  * Kalın ağırlıklarda (`800 ExtraBold` ve `900 Black`) logodaki güçlü ve otoriter havacılık hissini sayfaya taşır.
  * Mükemmel Türkçe karakter desteğine (`ğ, ü, ş, ı, ö, ç`) sahiptir.
* **Kullanım Alanları:**
  * Logo yanı marka adı (`ALTEK Teknoloji Takımı`)
  * Sayfa ana başlıkları (`H1`, `H2`, `H3`)
  * Butonlar, navlink'ler ve ana aksiyon metinleri

### 2. Telemetri ve Sayısal Veri Yazı Tipi: **Space Grotesk / Space Mono**
* **Kaynak:** Google Fonts (`Space Grotesk` & `Space Mono`)
* **Kullanım Alanları:**
  * İrtifa, hız, koordinatlar (`LAT / LON`)
  * Sistem durum etiketleri (`STATUS: ONLINE`)
  * Sayaçlar ve telemetri veri listeleri

### 3. Gövde & Açıklama Yazı Tipi: **Montserrat / Plus Jakarta Sans**
* **Ağırlıklar:** 400 (Regular), 500 (Medium), 600 (SemiBold)
* **Kullanım Alanları:**
  * Paragraflar, proje teknik açıklamaları, takım biyografileri.

---

## 💻 3. CSS Değişkenleri ve Tailwind Entegrasyonu

```css
:root {
  /* ALTEK Logo Renkleri */
  --altek-gold: #FBBF09;       /* rgb(251, 191, 9) */
  --altek-orange: #F7980F;     /* rgb(247, 152, 15) */
  --altek-black: #000000;
  --altek-white: #FFFFFF;

  /* Temaya Göre Primary Değişkenleri (Tailwind RGB kanalları) */
  --color-primary: 251 191 9;          /* Gold */
  --color-primary-container: 247 152 15;/* Orange */
  --color-primary-gold: 251 191 9;
  --color-primary-orange: 247 152 15;

  /* Font Ailesi */
  --font-brand: 'Montserrat', sans-serif;
  --font-mono: 'Space Mono', monospace;
}
```
