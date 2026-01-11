import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about" id="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="section-title">About This Project</h2>
            <p class="about-description">
              This landing page demonstrates modern Angular development practices using standalone components,
              TypeScript, and responsive design. Each section is built as an independent, reusable component
              that follows Angular's component-based architecture.
            </p>
            <p class="about-description">
              The implementation showcases best practices including proper component structure, styling isolation,
              and accessibility considerations. All components are independently testable and maintainable.
            </p>
            <ul class="about-list">
              <li>Standalone Angular components</li>
              <li>TypeScript with strict typing</li>
              <li>Responsive CSS design</li>
              <li>Component reusability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 5rem 2rem;
      background-color: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .about-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: #2c3e50;
      text-align: center;
    }

    .about-description {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #555;
      margin-bottom: 1.5rem;
    }

    .about-list {
      list-style: none;
      padding: 0;
      margin-top: 2rem;
    }

    .about-list li {
      padding: 0.75rem 0;
      padding-left: 2rem;
      position: relative;
      color: #555;
      font-size: 1.1rem;
    }

    .about-list li::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #3498db;
      font-weight: bold;
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      .about {
        padding: 3rem 1rem;
      }

      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class AboutComponent {}

