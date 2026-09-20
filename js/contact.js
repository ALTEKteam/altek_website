/**
 * ALTEK UAV - Versatile Contact & Telemetry Messaging Protocol Script
 */

const PRIMARY_EMAIL = 'altektakimi@gmail.com';
const METU_EMAIL = 'altek@metu.edu.tr';

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  handleUrlParameters();
});

function handleUrlParameters() {
  const params = new URLSearchParams(window.location.search);
  const konu = params.get('konu');
  const hash = window.location.hash;
  const form = document.getElementById('contact-form');

  if ((konu === 'katilim' || hash === '#katilim') && form) {
    const subjectSelect = form.querySelector('[name="subject"]');
    if (subjectSelect) {
      subjectSelect.value = 'Takıma Katılım / Başvuru';
    }
    setTimeout(() => {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const nameInput = form.querySelector('[name="name"]');
      if (nameInput) nameInput.focus();
    }, 250);
  }
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const modal = document.getElementById('contact-dispatch-modal');
  if (!form) return;

  let currentPayload = null;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const subject = form.querySelector('[name="subject"]').value;
    const message = form.querySelector('[name="message"]').value.trim();

    const bodyLines = [
      `Gönderen: ${name}`,
      `E-Posta: ${email}`,
      phone ? `Telefon: ${phone}` : null,
      `Konu: ${subject}`,
      '----------------------------------------',
      message
    ].filter(line => line !== null);

    const bodyText = bodyLines.join('\n');
    const fullSubject = `[ALTEK İletişim] ${subject}`;

    currentPayload = {
      name,
      email,
      phone,
      subject: fullSubject,
      body: bodyText
    };

    if (modal) {
      openModal(modal);
    } else {
      // Fallback direct mailto if modal not present
      dispatchMailto(currentPayload);
    }
  });

  // Modal setup
  if (modal) {
    const closeBtn = document.getElementById('modal-close-btn');
    const btnGmail = document.getElementById('btn-open-gmail');
    const btnClient = document.getElementById('btn-open-client');
    const btnCopy = document.getElementById('btn-copy-msg');

    if (closeBtn) closeBtn.addEventListener('click', () => closeModal(modal));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });

    if (btnGmail) {
      btnGmail.addEventListener('click', () => {
        if (!currentPayload) return;
        const toList = `${PRIMARY_EMAIL},${METU_EMAIL}`;
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(toList)}&su=${encodeURIComponent(currentPayload.subject)}&body=${encodeURIComponent(currentPayload.body)}`;
        window.open(gmailUrl, '_blank');
        closeModal(modal);
        if (window.showTacticalToast) {
          window.showTacticalToast('Gmail Web taslağı yeni sekmede açıldı.', 'success');
        }
      });
    }

    if (btnClient) {
      btnClient.addEventListener('click', () => {
        if (!currentPayload) return;
        dispatchMailto(currentPayload);
        closeModal(modal);
      });
    }

    if (btnCopy) {
      btnCopy.addEventListener('click', () => {
        if (!currentPayload) return;
        const copyText = `Alıcılar: ${PRIMARY_EMAIL}, ${METU_EMAIL}\nKonu: ${currentPayload.subject}\n\n${currentPayload.body}`;
        navigator.clipboard.writeText(copyText).then(() => {
          closeModal(modal);
          if (window.showTacticalToast) {
            window.showTacticalToast('Mesaj metni ve iletişim bilgileri panoya kopyalandı!', 'success');
          }
        }).catch(() => {
          if (window.showTacticalToast) {
            window.showTacticalToast('Panoya kopyalama izni verilemedi, lütfen metni el ile kopyalayın.', 'error');
          }
        });
      });
    }
  }
}

function openModal(modal) {
  modal.classList.remove('hidden');
  requestAnimationFrame(() => {
    modal.classList.remove('opacity-0');
    modal.classList.add('opacity-100');
  });
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.remove('opacity-100');
  modal.classList.add('opacity-0');
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 250);
}

function dispatchMailto(payload) {
  const mailtoUrl = `mailto:${PRIMARY_EMAIL}?cc=${METU_EMAIL}&subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(payload.body)}`;
  window.location.href = mailtoUrl;
  if (window.showTacticalToast) {
    window.showTacticalToast('E-posta istemciniz açılıyor. Onaylayarak gönderebilirsiniz.', 'success');
  }
}
