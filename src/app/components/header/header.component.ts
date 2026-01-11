import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <nav class="nav">
        <div class="logo">Angular Demo</div>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background-color: #2c3e50;
      color: white;
      padding: 1rem 2rem;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;
    }

    .nav-links a {
      color: white;
      text-decoration: none;
      transition: color 0.3s;
    }

    .nav-links a:hover {
      color: #3498db;
    }

    @media (max-width: 768px) {
      .nav {
        flex-direction: column;
        gap: 1rem;
      }

      .nav-links {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }
  `]
})
export class HeaderComponent {}

