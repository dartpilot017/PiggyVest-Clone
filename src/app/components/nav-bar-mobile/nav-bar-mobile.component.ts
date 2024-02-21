import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar-mobile.component.html',
  styleUrl: './nav-bar-mobile.component.scss',
})
export class NavBarMobileComponent {
  isNavbarOpen: boolean = false;
  isScrolled: boolean = false;
  isNavbarClosed: boolean = true; 


  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

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

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 0;
  }
  handleNavItemAction(item: {
    name: string;
    route?: string;
    action?: () => void;
  }) {
    if (item.action) {
      // Call the action if defined
      item.action();
      // Close the mobile navigation after the action (optional)
      this.isNavbarOpen = false;
    } else if (item.route) {
      // Navigate to the route if defined
      // Close the mobile navigation after navigating (optional)
      this.isNavbarOpen = false;
    }
  }
}
