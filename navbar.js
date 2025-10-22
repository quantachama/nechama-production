class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 1rem 1.25rem;
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
          transition: all .3s ease;
        }
        .container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: .75rem;
        }
        .logo {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a3b2b;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: .5rem;
          white-space: nowrap;
        }
        .logo .small { font-weight: 600; color: #5a9b7d; }
        .nav-links {
          display: flex; gap: 1.25rem; list-style: none; margin: 0; padding: 0; align-items: center;
        }
        .nav-link {
          color: #1f2937; text-decoration: none; font-weight: 500; position: relative;
        }
        .nav-link:hover { color: #5a9b7d; }
        .contact-btn {
          background-color: #1a3b2b; color: white; padding: .6rem 1.1rem; border-radius: 9999px; font-weight: 500;
          transition: all .3s ease; box-shadow: 0 4px 6px -1px rgba(26,59,43,0.25), 0 2px 4px -1px rgba(26,59,43,0.1);
        }
        .contact-btn:hover { background-color: #5a9b7d; transform: translateY(-2px); }
        .mobile-menu-btn { display: none; background: none; border: none; cursor: pointer; color: #1f2937; }
        @media (max-width: 820px) {
          .nav-links { display: none; }
          .mobile-menu-btn { display: block; }
        }
      </style>
      <nav>
        <div class="container">
          <a href="#top" class="logo">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#5a9b7d"/>
              <circle cx="12" cy="12" r="7" fill="white"/>
              <circle cx="12" cy="12" r="4" fill="#1a3b2b"/>
            </svg>
            Nechama&nbsp;Production <span class="small">by JP</span>
          </a>

          <button class="mobile-menu-btn" aria-label="Open menu">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>

          <ul class="nav-links">
            <li><a href="#portfolio" class="nav-link">Work</a></li>
            <li><a href="#about" class="nav-link">About</a></li>
            <li><a href="#contact" class="contact-btn">Contact</a></li>
          </ul>
        </div>
      </nav>
    `;

    // Mobile menu toggle
    const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navLinks = this.shadowRoot.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener('click', () => {
        const isOpen = navLinks.style.display === 'flex';
        navLinks.style.display = isOpen ? 'none' : 'flex';

        if (!isOpen) {
          navLinks.style.position = 'absolute';
          navLinks.style.top = '100%';
          navLinks.style.left = '0';
          navLinks.style.right = '0';
          navLinks.style.backgroundColor = 'rgba(255,255,255,0.98)';
          navLinks.style.backdropFilter = 'blur(10px)';
          navLinks.style.padding = '1.25rem 1rem';
          navLinks.style.flexDirection = 'column';
          navLinks.style.alignItems = 'center';
          navLinks.style.gap = '1rem';
          navLinks.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,.1)';
        } else {
          navLinks.style = '';
        }
      });
    }
  }
}
customElements.define('custom-navbar', CustomNavbar);
