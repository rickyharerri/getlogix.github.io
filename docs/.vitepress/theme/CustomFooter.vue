<template>
  <footer class="combined-footer">
    <!-- Contact Info Section -->
    <div class="contact-section">
      <div class="footer-container">
        <div class="contact-grid">
          <!-- Contact & Connect Combined Section -->
          <div class="footer-section">
            <h3>Contact Us</h3>
            <div class="contact-info">
              <div class="contact-item">
                <span class="contact-icon">📧</span>
                <a href="mailto:info@getlogix.com">info@getlogix.com</a>
              </div>
            </div>
            <div class="social-links">
              <a href="https://github.com/getlogix" target="_blank" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/getlogix" target="_blank" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/getlogix47" target="_blank" aria-label="X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
            </div>
            
          </div>

          <!-- Services Section -->
          <div class="footer-section">
            <h3>Web & Mobile</h3>
            <ul class="footer-links">
              <li><a href="/services/web-development">Web Development</a></li>
              <li><a href="/services/mobile-development">Mobile Apps</a></li>
              <li><a href="/services/ui-ux-design">UI/UX Design</a></li>
              <li><a href="/services/progressive-web-apps">Progressive Web Apps</a></li>
            </ul>
          </div>

          <!-- IT Solutions Section -->
          <div class="footer-section">
            <h3>IT Solutions</h3>
            <ul class="footer-links">
              <li><a href="/services/cloud-solutions">Cloud Solutions</a></li>
              <li><a href="/services/ai-solutions">AI & Machine Learning</a></li>
              <li><a href="/services/devops">DevOps & Automation</a></li>
              <li><a href="/services/it-consulting">IT Consulting</a></li>
            </ul>
          </div>

          <!-- Company Section -->
          <div class="footer-section">
            <h3>Company</h3>
            <ul class="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright Section -->
    <div class="footer-bottom">
      <div class="footer-container">
        <div class="footer-bottom-content">
          <p>&copy; {{ new Date().getFullYear() }} GetLogix Inc. Canada Trusted development partner.</p>
          <div class="copyright-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <span>|</span>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.combined-footer {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #e0e0e0;
  position: relative;
  z-index: 10;
  clear: both;
  width: 100%;
  box-sizing: border-box;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Contact Section */
.contact-section {
  padding: 3rem 0;
  background: rgba(0, 0, 0, 0.2);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  text-align: center;
}

.footer-section h3 {
  color: #ed691c;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  align-items: center;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
}

.contact-icon {
  font-size: 1.1rem;
}

.contact-item a {
  color: #e0e0e0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: #ed691c;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #e0e0e0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #ed691c;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: center;
}

.social-links a {
  color: #e0e0e0;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #ed691c;
}

/* Copyright Section */
.footer-bottom {
  border-top: 1px solid #333;
  padding: 2rem 0;
  background: rgba(0, 0, 0, 0.4);
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  margin: 0;
  color: #a0a0a0;
  font-size: 0.9rem;
}

.copyright-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.copyright-links a {
  color: #a0a0a0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.copyright-links a:hover {
  color: #ed691c;
}

.copyright-links span {
  color: #666;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
