import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/top-panel/top-bar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
      RouterOutlet,
      MatButtonModule,
      TopBarComponent,
    ],
    template: `
        <app-top-bar (menuToggled)="toggleMenu($event)"></app-top-bar>
        <main class="p-4 w-full md:w-10/12 lg:w-8/12 mx-auto">
            <router-outlet></router-outlet>
        </main>
    `,
    styles: [],
})
export class AppComponent {
    isMenuOpen = false;

    toggleMenu(isOpen: boolean) {
        this.isMenuOpen = isOpen;
    }
}
