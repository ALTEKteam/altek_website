/**
 * ALTEK Teknoloji Takımı - Main Application & Tactical Interaction Script
 */

// Immediate Theme Detection (runs before DOM is parsed)
(function() {
  function getStoredTheme() {
    try {
      var match = document.cookie.match(new RegExp('(^| )altek_theme=([^;]+)'));
      if (match && match[2]) return match[2];
      var ls = localStorage.getItem('altek_theme');
      if (ls) return ls;
    } catch(e) {}
    return 'dark';
  }
  var theme = getStoredTheme();
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
  document.documentElement.setAttribute('data-theme', theme);
})();

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initActiveNavLink();
  initStatsCounters();
  initSponsorModal();
  initNavbarScrollEffect();
  initScrollReveal();
  initPageTransitions();
  initHeroReveal();
  initHashScrollAndHighlight();
});

/**
 * Hero Photo Reveal — tıklayınca fotoğraf öne çıkar, yazı & karartma soluklaşır
 */
function initHeroReveal() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  hero.addEventListener('click', (e) => {
    // Buton / bağlantılara tıklanınca normal davran, toggle etme
    if (e.target.closest('a, button')) return;
    hero.classList.toggle('hero-revealed');
  });
}

/**
 * Theme Switcher (Dark / Light Mode)
 */
function initTheme() {
  const toggleBtns = document.querySelectorAll('#theme-toggle-btn, .btn-theme-toggle');
  
  function getTheme() {
    try {
      var match = document.cookie.match(new RegExp('(^| )altek_theme=([^;]+)'));
      if (match && match[2]) return match[2];
      var ls = localStorage.getItem('altek_theme');
      if (ls) return ls;
    } catch(e) {}
    return 'dark';
  }

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    document.documentElement.setAttribute('data-theme', theme);

    try {
      localStorage.setItem('altek_theme', theme);
      document.cookie = 'altek_theme=' + theme + '; path=/; max-age=31536000; SameSite=Lax';
    } catch(e) {}

    // Update icons in toggle buttons
    toggleBtns.forEach(btn => {
      const lightIcon = btn.querySelector('.light-icon');
      const darkIcon = btn.querySelector('.dark-icon');
      const label = btn.querySelector('.theme-label');
      
      if (isDark) {
        if (lightIcon) lightIcon.classList.remove('hidden');
        if (darkIcon) darkIcon.classList.add('hidden');
        if (label) label.textContent = 'Aydınlık Mod';
      } else {
        if (lightIcon) lightIcon.classList.add('hidden');
        if (darkIcon) darkIcon.classList.remove('hidden');
        if (label) label.textContent = 'Karanlık Mod';
      }
    });
  }

  // Initial update of UI icons
  applyTheme(getTheme());

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = getTheme();
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  });

  // Cross-tab theme synchronization
  window.addEventListener('storage', (e) => {
    if (e.key === 'altek_theme') {
      applyTheme(e.newValue || 'dark');
    }
  });
}

/**
 * Scroll Reveal Animation Observer
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.tactical-reveal, .tactical-reveal-left, .tactical-reveal-right, .tactical-reveal-scale');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/**
 * Smooth Page Transition Handler for Internal Links
 */
function initPageTransitions() {
  // Add page-enter to body / main
  const main = document.querySelector('main');
  if (main) {
    main.classList.add('page-enter');
  }

  // Intercept internal page navigation links
  const links = document.querySelectorAll('a[href$=".html"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      // If same page or anchor or modal button, ignore
      if (!href || href.startsWith('#') || href === window.location.pathname.split('/').pop() || link.target === '_blank') {
        return;
      }

      e.preventDefault();
      if (main) {
        main.classList.remove('page-enter');
        main.classList.add('page-exit');
      }

      setTimeout(() => {
        window.location.href = href;
      }, 200);
    });
  });
}

/**
 * Mobile Navigation Menu Handler
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileBackdrop = document.getElementById('mobile-backdrop');

  if (!toggleBtn || !mobileMenu) return;

  const openMenu = () => {
    mobileMenu.classList.remove('translate-x-full');
    if (mobileBackdrop) {
      mobileBackdrop.classList.remove('opacity-0', 'pointer-events-none');
      mobileBackdrop.classList.add('opacity-100', 'pointer-events-auto');
    }
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu.classList.add('translate-x-full');
    if (mobileBackdrop) {
      mobileBackdrop.classList.add('opacity-0', 'pointer-events-none');
      mobileBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
    }
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMenu);

  // Close when clicking any link inside mobile menu
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/**
 * Highlight Current Active Navigation Link
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Navbar Background Blur on Scroll
 */
function initNavbarScrollEffect() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      nav.classList.add('bg-surface/95', 'shadow-lg');
      nav.classList.remove('bg-surface/80');
    } else {
      nav.classList.remove('bg-surface/95', 'shadow-lg');
      nav.classList.add('bg-surface/80');
    }
  });
}

/**
 * Animated Numerical Counters for Stats
 */
function initStatsCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetValue = parseInt(target.getAttribute('data-counter'), 10);
        const suffix = target.getAttribute('data-suffix') || '';
        const duration = 1500; // ms
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out expo
          const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentValue = Math.floor(easeOutProgress * targetValue);

          target.textContent = `${currentValue}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            target.textContent = `${targetValue}${suffix}`;
          }
        };

        requestAnimationFrame(updateCounter);
        obs.unobserve(target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(counter => observer.observe(counter));
}

/**
 * Sponsor Modal Trigger
 */
function initSponsorModal() {
  const sponsorButtons = document.querySelectorAll('.btn-sponsor-modal');
  const modal = document.getElementById('sponsor-modal');
  if (!modal) return;

  const closeBtn = document.getElementById('close-sponsor-modal');
  const backdrop = modal.querySelector('.modal-backdrop');

  const openModal = () => {
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.remove('opacity-0');
      modal.querySelector('.modal-card')?.classList.remove('scale-95');
    }, 10);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.add('opacity-0');
    modal.querySelector('.modal-card')?.classList.add('scale-95');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 200);
  };

  sponsorButtons.forEach(btn => btn.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

/**
 * Global HUD Toast Notification
 */
window.showTacticalToast = function(message, type = 'success') {
  let toastContainer = document.getElementById('tactical-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'tactical-toast-container';
    toastContainer.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 items-center pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const isSuccess = type === 'success';
  const borderColor = isSuccess ? 'border-[#ff8a00]' : 'border-[#ffb4ab]';
  const iconColor = isSuccess ? 'text-[#ff8a00]' : 'text-[#ffb4ab]';
  const icon = isSuccess ? 'check_circle' : 'error';

  toast.className = `animate-toast pointer-events-auto bg-[#1c1b1b]/95 backdrop-blur-md border ${borderColor} px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 text-sm text-[#e3e2e2]`;
  toast.innerHTML = `
    <span class="material-symbols-outlined ${iconColor}">${icon}</span>
    <span class="font-medium font-mono-data tracking-wide">${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translate(-50%, 15px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
};

/**
 * Deep Linking, Target Section Scrolling & Tactical Highlight Effect
 * Handles direct anchors like #talon or #altek-2026 across pages and in-page
 */
function initHashScrollAndHighlight() {
  function handleHashScroll() {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    try {
      const targetEl = document.querySelector(hash);
      if (!targetEl) return;

      // Ensure smooth scroll accounting for fixed navbar height
      setTimeout(() => {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Trigger tactical highlight glow
        targetEl.classList.remove('target-highlight-pulse');
        // Force reflow
        void targetEl.offsetWidth;
        targetEl.classList.add('target-highlight-pulse');

        setTimeout(() => {
          targetEl.classList.remove('target-highlight-pulse');
        }, 2600);
      }, 150);
    } catch (err) {
      console.warn('Hash scroll error:', err);
    }
  }

  // Handle on page load (with small delay for entrance animations)
  if (window.location.hash) {
    setTimeout(handleHashScroll, 200);
  }

  // Handle hash changes (e.g. browser forward/back or URL changes)
  window.addEventListener('hashchange', handleHashScroll);

  // Intercept in-page anchor clicks for smooth scrolling and glow
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href) return;

      const [path, hash] = href.split('#');
      if (!hash) return;

      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      // If the link is on current page
      if (!path || path === currentPath || path === '') {
        const targetEl = document.getElementById(hash);
        if (targetEl) {
          e.preventDefault();
          history.pushState(null, '', '#' + hash);
          handleHashScroll();
        }
      }
    });
  });
}
