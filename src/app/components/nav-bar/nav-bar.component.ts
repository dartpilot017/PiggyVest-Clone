import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: [
    './nav-bar.component.scss',
  ],
})
export class NavBarComponent {
  navItems: { name: string }[] = [
    {
      name: 'Save',
    },
    {
      name: 'Invest',
    },
    {
      name: 'Stories',
    },
    {
      name: 'FAQs',
    },
    {
      name: 'Resources',
    },
  ];

  isScrolled: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 0;
  }
}
