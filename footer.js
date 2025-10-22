class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer { background-color:#1a1a1a; color:white; padding:3rem 1.5rem; }
        .footer-container { max-width:1280px; margin:0 auto; display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:2rem; }
        .footer-logo { font-size:1.25rem; font-weight:700; color:#5a9b7d; margin-bottom:1rem; display:inline-block; }
        .footer-description { color:#c8c8c8; margin-bottom:1rem; line-height:1.6; }
        .footer-heading { font-size:1.125rem; font-weight:600; margin-bottom:1rem; color:white; }
        .footer-links { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:.5rem; }
        .footer-link { color:#c8c8c8; text-decoration:none; transition:color .3s ease; }
        .footer-link:hover { color:#5a9b7d; }
        .footer-bottom { max-width:1280px; margin:2rem auto 0; padding-top:1rem; border-top:1px solid #2a2a2a; text-align:center; color:#b0b0b0; font-size:.9rem; }
      </style>

      <footer>
        <div class="footer-container">
          <div>
            <a href="#top" class="footer-logo">Nechama Production</a>
            <p class="footer-description">
              Design meets empathy, precision, and curiosity — from objects and systems to visual narratives.
            </p>
          </div>

          <div>
            <h3 class="footer-heading">Quick Links</h3>
            <ul class="footer-links">
              <li><a href="#portfolio" class="footer-link">Work</a></li>
              <li><a href="#about" class="footer-link">About</a></li>
              <li><a href="#contact" class="footer-link">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 class="footer-heading">Contact</h3>
            <ul class="footer-links">
              <li>📍 Tel Aviv / Berlin</li>
              <li>📞 <a class="footer-link" href="tel:+972549175734">+972 54 917 5734</a></li>
              <li>📧 <a class="footer-link" href="mailto:jp.idisegno@gmail.com">jp.idisegno@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          © <span id="year"></span> Nechama Production — All rights reserved.
        </div>
      </footer>
      <script>this.querySelector && (this.getRootNode().host || this).querySelector; </script>
    `;

    // Set year
    const yearSpan = this.shadowRoot.querySelector('#year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  }
}
customElements.define('custom-footer', CustomFooter);
