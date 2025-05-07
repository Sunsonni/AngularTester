import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule], 
  template: `
    <main>
      <nav>
        <a routerLink="/">Home</a>
        <a routerLink="/about">about</a>
      </nav>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
}
