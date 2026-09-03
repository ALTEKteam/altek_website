# Agent Operating Guidelines & Rules

Bu dosya, bu depoda çalışan yapay zeka ajanları (Antigravity / Gemini) için zorunlu çalışma kurallarını ve tasarım standartlarını içerir.

---

## 📌 1. Temel Çalışma Kuralları

1. **Her Zaman Commit At:**
   - Yapılan her anlamlı değişiklik veya geliştirme adımından sonra değişiklikleri mutlaka `git commit` ile kaydet.
   - Commit mesajları net, açıklayıcı ve Türkçe/İngilizce standartlarına uygun olmalıdır.

2. **Kullanıcı İstemeden Tarayıcıda İnceleme Yapma:**
   - Kullanıcı açıkça talep etmedikçe (`browser_subagent` vb. araçlarla) tarayıcıya girip kendi kendine sayfayı incelemeye çalışma. Bu süreç çok uzun sürdüğü için kullanıcı deneyimini aksatır.
   - Doğrulamaları yerel dosya ve kod kontrolleri üzerinden hızlıca yap, sonucu doğrudan kullanıcıya bildir.

---

## 🎨 2. Tasarım & Renk Standartları

1. **Öncelikli Renk Paleti (Siyah & Turuncu):**
   - Sitede öncelik her zaman **Siyah** zemin/gövde ve **Taktik Turuncu (`#F7980F` / RGB: `247, 152, 15`)** vurgudur.
   - Sitede **sarı renk kullanılmaz**. Sarı görünen her yer taktik turuncuya dönüştürülmelidir.
   - Turuncu buton ve rozetler üzerindeki yazı rengi net okunabilirlik için **saf beyaz (`#FFFFFF`)** olmalıdır.

2. **Tipografi Standartları:**
   - **Logo & Başlık Yazı Tipi:** Google Fonts **Montserrat** (`font-brand`, ağırlıklar: `600`, `700`, `800`, `900`). Logodaki "ALTEK" yazısının geometrisiyle birebir uyumludur.
   - **Teknik Veri & Telemetri Yazı Tipi:** Google Fonts **Space Mono** / **Space Grotesk** (`font-mono`). İrtifa, koordinat, radar ve sayaç verileri için kullanılır.

3. **Navbar & Logo Orantısı:**
   - Sol üstteki `ALTEK TEKNOLOJİ TAKIMI` başlığı gereğinden büyük ve kaba olmamalıdır (`text-base sm:text-lg md:text-xl`).
   - Navbar yüksekliği (`h-20 sm:h-24`) ve logo yüksekliği (`max-h-[64px]`) menü linkleriyle dengeli ve zarif tutulmalıdır.
