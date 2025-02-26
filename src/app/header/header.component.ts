import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;

  ngOnInit() {
    const btn = document.querySelector(".mobile-menu-button");
    const closeBtn = document.querySelector(".close-menu-button");
    const menu = document.querySelector(".mobile-menu");
    const menuLinks = document.querySelectorAll(".mobile-menu a");

    if (btn && menu) {
      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    }

    if (closeBtn && menu) {
      closeBtn.addEventListener("click", () => {
        menu.classList.add("hidden");
      });
    }

    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (menu) {
          menu.classList.add("hidden");
        }
      });
    });

    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 0;
    });
  }

}
