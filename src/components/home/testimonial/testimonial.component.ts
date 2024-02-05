import { NgOptimizedImage } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialComponent {
  firstRowCompanies = [
    {
      id: 1,
      title: 'شركة تكنولوجيا',
      icon: 'assets/images/companies/1/1.webp',
    },
    { id: 2, title: 'متجر إلكتروني', icon: 'assets/images/companies/1/2.webp' },
    {
      id: 3,
      title: 'منصة بيع تذاكر',
      icon: 'assets/images/companies/1/3.webp',
    },
    {
      id: 4,
      title: 'مزود خدمات التلفزيون',
      icon: 'assets/images/companies/1/4.webp',
    },
    {
      id: 5,
      title: 'شركة تكنولوجيا',
      icon: 'assets/images/companies/1/5.webp',
    },
    {
      id: 6,
      title: 'وكالة دعاية وإعلان',
      icon: 'assets/images/companies/1/6.webp',
    },
    {
      id: 7,
      title: 'شركة تكنولوجيا',
      icon: 'assets/images/companies/1/7.webp',
    },
    {
      id: 8,
      title: 'شركة تكنولوجيا',
      icon: 'assets/images/companies/1/8.webp',
    },
    {
      id: 9,
      title: 'شركة تكنولوجيا',
      icon: 'assets/images/companies/1/1.webp',
    },
    {
      id: 10,
      title: 'متجر إلكتروني',
      icon: 'assets/images/companies/1/2.webp',
    },
    {
      id: 11,
      title: 'منصة بيع تذاكر',
      icon: 'assets/images/companies/1/3.webp',
    },
    {
      id: 12,
      title: 'مزود خدمات التلفزيون',
      icon: 'assets/images/companies/1/4.webp',
    },
    {
      id: 13,
      title: 'شركة تكنولوجيا',
      icon: 'assets/images/companies/1/5.webp',
    },
    {
      id: 14,
      title: 'وكالة دعاية وإعلان',
      icon: 'assets/images/companies/1/6.webp',
    },
    {
      id: 15,
      title: 'شركة تكنولوجيا',
      icon: 'assets/images/companies/1/7.webp',
    },
    {
      id: 16,
      title: 'شركة تكنولوجيا',
      icon: 'assets/images/companies/1/8.webp',
    },
  ];
}
