import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  navItems: { name: string; link: string }[] = [
    {
      name: 'Save',
      link: 'https://www.piggyvest.com/#save',
    },
    {
      link: 'https://www.piggyvest.com/invest',
      name: 'Invest',
    },
    {
      name: 'Stories',
      link: 'https://www.piggyvest.com/stories',
    },
    {
      name: 'FAQs',
      link: 'https://www.piggyvest.com/faq',
    },
    {
      name: 'Resources',
      link: '',
    },
  ];

  isScrolled: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isScrolled = scrollPosition > 0;
  }
}
