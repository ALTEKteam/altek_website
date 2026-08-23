/**
 * ALTEK UAV - Gallery Filtering and Enhanced Media/Video Lightbox Modal
 */

document.addEventListener('DOMContentLoaded', () => {
  initGalleryFilter();
  initGalleryLightbox();
});

function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!filterBtns.length || !galleryItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active filter style
      filterBtns.forEach(b => {
        b.classList.remove('bg-primary-container', 'text-on-primary-container', 'border-primary-container');
        b.classList.add('bg-surface-container', 'text-on-surface-variant', 'border-outline-variant/30');
      });
      btn.classList.add('bg-primary-container', 'text-on-primary-container', 'border-primary-container');
      btn.classList.remove('bg-surface-container', 'text-on-surface-variant', 'border-outline-variant/30');

      const filterCategory = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterCategory === 'all' || itemCategory === filterCategory) {
          item.style.display = '';
          item.classList.add('revealed');
          item.style.animation = 'pageEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function initGalleryLightbox() {
  const lightbox = document.getElementById('gallery-lightbox');
  if (!lightbox) return;

  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxVideo = document.getElementById('lightbox-video');
  const lightboxVideoSource = document.getElementById('lightbox-video-source');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCategory = document.getElementById('lightbox-category');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const items = Array.from(document.querySelectorAll('.gallery-item'));

  let currentIndex = 0;

  const getVisibleItems = () => items.filter(item => item.style.display !== 'none');

  const openLightbox = (index) => {
    const visibleItems = getVisibleItems();
    if (!visibleItems[index]) return;

    currentIndex = index;
    const currentItem = visibleItems[currentIndex];
    const mediaType = currentItem.getAttribute('data-type') || 'image';
    const mediaSrc = currentItem.getAttribute('data-src') || (currentItem.querySelector('img') ? currentItem.querySelector('img').src : '');
    const title = currentItem.getAttribute('data-title') || 'ALTEK Teknoloji Takımı Medyası';
    const category = currentItem.getAttribute('data-category-name') || 'Genel';

    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxCategory) lightboxCategory.textContent = category;

    if (mediaType === 'video') {
      if (lightboxImg) lightboxImg.classList.add('hidden');
      if (lightboxVideo) {
        lightboxVideo.classList.remove('hidden');
        if (lightboxVideoSource) lightboxVideoSource.src = mediaSrc;
        else lightboxVideo.src = mediaSrc;
        lightboxVideo.load();
        lightboxVideo.play().catch(() => {});
      }
    } else {
      if (lightboxVideo) {
        lightboxVideo.pause();
        lightboxVideo.classList.add('hidden');
      }
      if (lightboxImg) {
        lightboxImg.classList.remove('hidden');
        lightboxImg.src = mediaSrc;
      }
    }

    lightbox.classList.remove('hidden');
    setTimeout(() => {
      lightbox.classList.remove('opacity-0');
    }, 10);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (lightboxVideo) {
      lightboxVideo.pause();
    }
    lightbox.classList.add('opacity-0');
    setTimeout(() => {
      lightbox.classList.add('hidden');
      if (lightboxVideo) lightboxVideo.classList.add('hidden');
      if (lightboxImg) lightboxImg.classList.remove('hidden');
      document.body.style.overflow = '';
    }, 200);
  };

  const nextMedia = () => {
    const visibleItems = getVisibleItems();
    if (!visibleItems.length) return;
    currentIndex = (currentIndex + 1) % visibleItems.length;
    openLightbox(currentIndex);
  };

  const prevMedia = () => {
    const visibleItems = getVisibleItems();
    if (!visibleItems.length) return;
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    openLightbox(currentIndex);
  };

  items.forEach((item) => {
    item.addEventListener('click', () => {
      const visibleItems = getVisibleItems();
      const visibleIndex = visibleItems.indexOf(item);
      if (visibleIndex !== -1) {
        openLightbox(visibleIndex);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', nextMedia);
  if (prevBtn) prevBtn.addEventListener('click', prevMedia);

  // Background click to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop')) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextMedia();
    if (e.key === 'ArrowLeft') prevMedia();
  });
}
