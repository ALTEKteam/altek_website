/**
 * ALTEK UAV - Contact & Telemetry Messaging Protocol Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initSponsorForm();
});

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="inline-block animate-spin material-symbols-outlined text-sm mr-2">sync</span>
      <span>GÖNDERİLİYOR...</span>
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();

      if (window.showTacticalToast) {
        window.showTacticalToast('Mesajınız başarıyla iletildi. En kısa sürede geri dönüş yapacağız.', 'success');
      } else {
        alert('Mesajınız başarıyla iletildi.');
      }
    }, 1200);
  });
}

function initSponsorForm() {
  const sponsorForm = document.getElementById('sponsor-modal-form');
  if (!sponsorForm) return;

  sponsorForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = sponsorForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="inline-block animate-spin material-symbols-outlined text-sm mr-2">sync</span>
      <span>SPONSORLUK DOSYASI OLUŞTURULUYOR...</span>
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      sponsorForm.reset();

      // Close modal if open
      const modal = document.getElementById('sponsor-modal');
      if (modal) {
        modal.classList.add('opacity-0');
        setTimeout(() => modal.classList.add('hidden'), 200);
      }

      if (window.showTacticalToast) {
        window.showTacticalToast('Sponsorluk Başvurunuz Alındı. Detaylı Sponsorluk Dosyası Gönderilecektir.', 'success');
      }
    }, 1200);
  });
}
