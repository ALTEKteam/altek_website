/**
 * ALTEK UAV - Contact & Telemetry Messaging Protocol Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});

const CONTACT_EMAIL = 'altektakimi@gmail.com';

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const subject = form.querySelector('[name="subject"]').value;
    const message = form.querySelector('[name="message"]').value.trim();

    const bodyLines = [
      `Ad Soyad: ${name}`,
      `E-Posta: ${email}`,
      phone ? `Telefon: ${phone}` : null,
      '',
      message
    ].filter(line => line !== null);

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`[ALTEK İletişim] ${subject}`)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    window.location.href = mailtoUrl;

    if (window.showTacticalToast) {
      window.showTacticalToast('E-posta uygulamanız açılıyor, göndermek için orada onaylayın.', 'success');
    }
  });
}
