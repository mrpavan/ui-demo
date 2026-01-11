import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer" id="contact">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Angular Demo</h3>
            <p>Building modern web applications with Angular framework.</p>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Contact</h4>
            <p>Email: demo&#64;angular.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Angular Landing Page Demo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #2c3e50;
      color: white;
      padding: 3rem 2rem 1rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section h3,
    .footer-section h4 {
      margin-bottom: 1rem;
      color: #3498db;
    }

    .footer-section p {
      color: #bdc3c7;
      line-height: 1.6;
      margin-bottom: 0.5rem;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
    }

    .footer-section ul li {
      margin-bottom: 0.5rem;
    }

    .footer-section a {
      color: #bdc3c7;
      text-decoration: none;
      transition: color 0.3s;
    }

    .footer-section a:hover {
      color: #3498db;
    }

    .footer-bottom {
      border-top: 1px solid #34495e;
      padding-top: 1rem;
      text-align: center;
      color: #95a5a6;
    }

    @media (max-width: 768px) {
      .footer {
        padding: 2rem 1rem 1rem;
      }

      .footer-content {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class FooterComponent {}

