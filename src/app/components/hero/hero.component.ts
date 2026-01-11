import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero" id="home">
      <div class="hero-content">
        <h1 class="hero-title">Welcome to Angular</h1>
        <p class="hero-subtitle">Building modern web applications with powerful components</p>
        <div class="hero-buttons">
          <button class="btn btn-primary">Get Started</button>
          <button class="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 8rem 2rem;
      text-align: center;
      min-height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-content {
      max-width: 800px;
    }

    .hero-title {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .hero-subtitle {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      padding: 0.75rem 2rem;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }

    .btn-primary {
      background-color: white;
      color: #667eea;
    }

    .btn-secondary {
      background-color: transparent;
      color: white;
      border: 2px solid white;
    }

    @media (max-width: 768px) {
      .hero {
        padding: 4rem 1rem;
        min-height: 400px;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.2rem;
      }
    }
  `]
})
export class HeroComponent {}

