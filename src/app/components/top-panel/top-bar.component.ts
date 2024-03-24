import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-top-bar',
    standalone: true,
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
    @Output() menuToggled = new EventEmitter<boolean>();
    isMenuOpen = false;

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        this.menuToggled.emit(this.isMenuOpen);
    }
}
