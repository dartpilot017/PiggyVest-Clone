import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  onCardMouseEnter(card: any): void {
    card.isHovered = true;
  }

  onCardMouseLeave(card: any): void {
    card.isHovered = false;
  }

  constructor(private router: Router) {}

  handleCardClick(link: string): void {
    if (link) {
      window.open(link, '_blank'); // Opens the link in a new tab/window
    }
  }

  cardItems: {
    header: string;
    paragraph: string;
    bottom: string;
    imgPATH: string;
    bg: string;
    isHovered: boolean;
    link: string;
  }[] = [
    {
      header: 'Automated Savings',
      paragraph:
        'Build a dedicated savings faster on your terms, automatically or manually.',
      bottom: 'Piggybank',
      imgPATH: '../../../assets/home/hover-img/piggy.avif',
      bg: '#0f60d6',
      isHovered: false,
      link: 'https://www.piggyvest.com/piggybank',
    },
    {
      header: 'Fixed Savings',
      paragraph:
        "Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.",
      bottom: 'Safelock',
      imgPATH: '../../../assets/home/hover-img/save.avif',
      bg: '#2296F2',
      isHovered: false,
      link: 'https://www.piggyvest.com/safelock',
    },
    {
      header: 'Goal-Oriented \nSavings',
      paragraph:
        'Reach all your savings goals faster. Save towards multiple goals on your own or with a group.',
      bottom: 'Target Savings',
      imgPATH: '../../../assets/home/hover-img/safelock.avif',
      bg: '#39c277',
      isHovered: false,
      link: 'https://www.piggyvest.com/targets',
    },
    {
      header: 'Flex Naira',
      paragraph:
        'Save, transfer, manage, organise, and withdraw your money at any time.',
      bottom: 'Flex Naira',
      imgPATH: '../../../assets/home/hover-img/flex.avif',
      bg: '#e5489b',
      isHovered: false,
      link: 'https://www.piggyvest.com/flex-naira',
    },
    {
      header: 'Flex Dollar',
      paragraph:
        'Save and grow your money in foreign currencies such as Dollars.',
      bottom: 'Flex Dollar',
      imgPATH: '../../../assets/home/hover-img/flex-d.avif',
      bg: '#0c1825',
      isHovered: false,
      link: 'https://www.piggyvest.com/flex-dollar',
    },
  ];
}
