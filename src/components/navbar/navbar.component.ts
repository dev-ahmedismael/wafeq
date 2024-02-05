import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  // Navbar
  navItems = [
    { id: 1, title: 'المزايا', path: '/home', section: 'advantages' },
    { id: 2, title: 'الأسعار', path: '/home', section: 'prices' },
    { id: 3, title: 'للمحاسبين', path: '/accountants', section: undefined },
  ];

  helpMenu = [
    {
      id: 1,
      title: 'الدعم',
      items: [
        {
          id: 1,
          icon: 'assets/images/help_menu/ebill.svg',
          title: 'API الفوترة الإلكترونية',
          description: 'استخدم API وافق لتطوير أعمالك',
        },
        {
          id: 2,
          icon: 'assets/images/help_menu/help_center.svg',
          title: 'مركز المساعدة',
          description: 'مقالات توضح كيفية استخدام وافق',
        },
      ],
    },
    {
      id: 2,
      title: 'التعلم',
      items: [
        {
          id: 1,
          icon: 'assets/images/help_menu/academy.svg',
          title: 'تعلم المحاسبة',
          description: 'تعلم أساسيات المحاسبة لإدارة أفضل لأعمالك',
        },
        {
          id: 2,
          icon: 'assets/images/help_menu/business.svg',
          title: 'مركز الأعمال',
          description: 'مقالات تساعدك على إدارة أعمالك وزيادة أرباحك',
        },
      ],
    },
    {
      id: 3,
      title: 'مستجدات المحاسبة والضرائب',
      items: [
        {
          id: 1,
          icon: 'assets/images/help_menu/vat.svg',
          title: 'الفوترة الإلكترونية وضريبة القيمة المضافة',
          description: 'كل ما تريد معرفته عن الفوترة الإلكترونية في السعودية',
        },
      ],
    },
    {
      id: 4,
      title: 'أدوات مجانية',
      items: [
        {
          id: 1,
          icon: 'assets/images/help_menu/templates.svg',
          title: 'النماذج',
          description: 'تنزيل نماذج المحاسبة التي تريدها',
        },
      ],
    },
  ];

  // Handle Sidebar
  isSidebarActive: boolean = false;
  openSidebar() {
    this.isSidebarActive = true;
  }
  closeSidebar() {
    this.isSidebarActive = false;
  }

  isAccordionActive: boolean = false;
  toggleAccordion() {
    this.isAccordionActive = !this.isAccordionActive;
  }
}
