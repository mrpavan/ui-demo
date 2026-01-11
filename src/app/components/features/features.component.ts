import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  template: `
    <section class="features" id="features">
      <div class="container">
        <h2 class="section-title">Key Features</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Fast Performance</h3>
            <p>Optimized for speed with lazy loading and efficient change detection strategies.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🧩</div>
            <h3>Component-Based</h3>
            <p>Reusable standalone components that follow Angular best practices and patterns.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Fully responsive layout that adapts beautifully to all screen sizes and devices.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .features {
      padding: 5rem 2rem;
      background-color: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #2c3e50;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      text-align: center;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .feature-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #2c3e50;
    }

    .feature-card p {
      color: #666;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .features {
        padding: 3rem 1rem;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class FeaturesComponent {}

