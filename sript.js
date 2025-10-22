// Smooth scrolling for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form progressive enhancement (works with Formspree)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formStatus.textContent = 'Sending...';
    try {
      const data = new FormData(contactForm);
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        formStatus.textContent = 'Thank you! I will get back to you soon.';
        contactForm.reset();
      } else {
        formStatus.textContent = 'Hmm, something went wrong. You can also email me at jp.idisegno@gmail.com';
      }
    } catch (err) {
      formStatus.textContent = 'Network error — please try again or email me directly.';
    }
  });
}

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  if (!('IntersectionObserver' in window)) return;
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  lazyImages.forEach(img => imageObserver.observe(img));
});

// --------------------
// Lightbox Preview System (Images + PDFs)
// --------------------
document.addEventListener('DOMContentLoaded', () => {
  const portfolioLinks = document.querySelectorAll('#portfolio a[target="_blank"]');
  portfolioLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const fileUrl = this.getAttribute('href');
      createLightbox(fileUrl);
    });
  });
});

function createLightbox(fileUrl) {
  const overlay = document.createElement('div');
  overlay.classList.add('lightbox-overlay');

  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('lightbox-content');

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('lightbox-close');
  closeBtn.innerHTML = '&times;';
  closeBtn.setAttribute('aria-label', 'Close preview');

  // Determine type
  let content;
  if (fileUrl.toLowerCase().endsWith('.pdf')) {
    content = document.createElement('iframe');
    content.src = fileUrl;
    content.classList.add('lightbox-iframe');
  } else {
    content = document.createElement('img');
    content.src = fileUrl;
    content.alt = 'Preview';
    content.classList.add('lightbox-image');
  }

  contentWrapper.appendChild(closeBtn);
  contentWrapper.appendChild(content);
  overlay.appendChild(contentWrapper);
  document.body.appendChild(overlay);

  document.body.style.overflow = 'hidden'; // prevent scroll

  // Close handlers
  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeLightbox();
  });
  document.addEventListener('keydown', escHandler);

  function closeLightbox() {
    overlay.classList.add('fade-out');
    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = '';
      document.removeEventListener('keydown', escHandler);
    }, 200);
  }

  function escHandler(e) {
    if (e.key === 'Escape') closeLightbox();
  }
}
