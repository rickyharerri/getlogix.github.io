<template>
  <section class="testimonials-section">
    <div class="footer-container">
      <!-- Testimonials Section Header -->
      <div class="testimonials-header">
        <h2>What Our Clients Say</h2>
        <p>Trusted by businesses worldwide to deliver exceptional digital solutions</p>
      </div>

      <!-- Testimonials Grid -->
      <div class="testimonials-grid">
        <!-- Testimonial 1 -->
        <div class="testimonial-card">
          <div class="testimonial-content">
            <div class="quote-icon">"</div>
            <p>"GetLogix transformed our outdated website into a modern, responsive platform that increased our online sales by 150%. Their attention to detail and technical expertise is unmatched."</p>
          </div>
          <div class="testimonial-author">
            <div class="author-avatar">
              <span>DT</span>
            </div>
            <div class="author-info">
              <h4>Deep Toor</h4>
              <span>CEO, Dr. Fix. It All.</span>
            </div>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="testimonial-card">
          <div class="testimonial-content">
            <div class="quote-icon">"</div>
            <p>"The mobile app GetLogix developed for us has been a game-changer. User engagement increased by 200% and the app runs flawlessly across all devices. Highly recommended!"</p>
          </div>
          <div class="testimonial-author">
            <div class="author-avatar">
              <span>MD</span>
            </div>
            <div class="author-info">
              <h4>Michael Davis</h4>
              <span>Founder, Dollarsave Hongkong</span>
            </div>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="testimonial-card">
          <div class="testimonial-content">
            <div class="quote-icon">"</div>
            <p>"Working with GetLogix was seamless from start to finish. They delivered our AI-powered analytics dashboard on time and exceeded our expectations in every way."</p>
          </div>
          <div class="testimonial-author">
            <div class="author-avatar">
              <span>KS</span>
            </div>
            <div class="author-info">
              <h4>K Shira</h4>
              <span>CTO, YuzuCo.com</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="testimonials-cta">
        <h3>Ready to Join Our Success Stories?</h3>
        <p>Let's discuss how we can help transform your digital presence</p>
        <div class="cta-buttons">
          <a href="mailto:info@getlogix.com" class="cta-primary">Get Started</a>
          <a href="/portfolio" class="cta-secondary">View Portfolio</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Testimonials section - always show for now to debug
</script>

<style scoped>
.testimonials-section {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #e0e0e0;
  padding: 4rem 0;
  margin-top: 4rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.testimonials-header {
  text-align: center;
  margin-bottom: 2rem;
}

.testimonials-header h2 {
  color: #ed691c;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
  background: linear-gradient(120deg, #ed691c 0%, #f97316 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.testimonials-header p {
  font-size: 1.2rem;
  color: #b0b0b0;
  max-width: 600px;
  margin: 0 auto;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(237, 105, 28, 0.2);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(237, 105, 28, 0.2);
}

.testimonial-content {
  margin-bottom: 2rem;
}

.quote-icon {
  font-size: 4rem;
  color: #ed691c;
  font-family: Georgia, serif;
  line-height: 1;
  margin-bottom: 1rem;
}

.testimonial-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #e0e0e0;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(120deg, #ed691c 0%, #f97316 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
}

.author-info h4 {
  color: #ed691c;
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
}

.author-info span {
  color: #b0b0b0;
  font-size: 0.9rem;
}

.testimonials-cta {
  text-align: center;
  padding: 3rem 0;
}

.testimonials-cta h3 {
  color: #ed691c;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.testimonials-cta p {
  font-size: 1.1rem;
  color: #b0b0b0;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-primary, .cta-secondary {
  padding: 12px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.cta-primary {
  background: linear-gradient(120deg, #ed691c 0%, #f97316 100%);
  color: white;
  border: 2px solid transparent;
}

.cta-primary:hover {
  background: linear-gradient(120deg, #dc2626 0%, #ed691c 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(237, 105, 28, 0.3);
}

.cta-secondary {
  background: transparent;
  color: #ed691c;
  border: 2px solid #ed691c;
}

.cta-secondary:hover {
  background: #ed691c;
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .testimonials-header h2 {
    font-size: 2rem;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonial-card {
    padding: 1.5rem;
  }
  
  .testimonials-cta h3 {
    font-size: 1.5rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
