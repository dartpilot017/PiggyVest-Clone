import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  featured: { img: string }[] = [
    {
      img: '../../../assets/footer/brand3.png',
    },
    {
      img: '../../../assets/footer/brand2.png',
    },
    {
      img: '../../../assets/footer/brand1.png',
    },
    {
      img: '../../../assets/footer/pym-removebg-preview.svg',
    },
    {
      img: '../../../assets/footer/fast.svg',
    },
    {
      img: '../../../assets/footer/cio.svg',
    },
  ];

  products: { text: string }[] = [
    {
      text: 'Piggybank',
    },
    {
      text: 'Invest',
    },
    {
      text: 'Safelock',
    },
    {
      text: 'Target Savings',
    },
    {
      text: 'Flex Naira',
    },
    {
      text: 'Flex Dollar',
    },
  ];
  company: { text: string }[] = [
    {
      text: 'About',
    },
    {
      text: 'FAQs',
    },
    {
      text: 'Blog',
    },
  ];
  legal: { text: string }[] = [
    {
      text: 'Terms',
    },
    {
      text: 'Privacy',
    },
    {
      text: 'Security',
    },
  ];
  contacts: { contact: { text: string }[]; social: { img: string }[] }[] = [
    {
      contact: [
        {
          text: 'Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.',
        },
        {
          text: 'contact@piggyvest.com',
        },
        {
          text: '+234 700 933 933 933',
        },
      ],

      social: [
        {
          img: '../../../assets/footer/fb.svg',
        },
        {
          img: '../../../assets/footer/ig.svg',
        },
        {
          img: '../../../assets/footer/tw.svg',
        },
        {
          img: '../../../assets/footer/tt.svg',
        },
        {
          img: '../../../assets/footer/yt.svg',
        },
      ],
    },
  ];

  bottom: {text:string}[] = [
    {
      text: 'Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 7 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.'
    },
    {
      text: 'PV Capital Limited is a fund manager duly licensed by the Securities and Exchange Commission (SEC) of Nigeria.'
    },
    {
      text: '2016 - 2023 PiggyTech Global Limited - RC 1405222'
    },
  ]
}
