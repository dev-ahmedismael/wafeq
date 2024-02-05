import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  appItems = [
    { id: 1, title: 'المزايا', path: '/', section: 'advantages' },
    { id: 2, title: 'الأسعار', path: '/', section: 'prices' },
    { id: 3, title: 'للمحاسبين', path: '/accountants', section: undefined },
  ];

  helpItems = [
    { id: 1, title: 'تعلم المحاسبة', path: '' },
    { id: 1, title: 'مركز الأعمال', path: '' },
    { id: 1, title: 'API الفوترة الإلكترونية', path: '' },
    { id: 1, title: 'النماذج', path: '' },
    { id: 1, title: 'الفوترة الإلكترونية وضريبة القيمة المضافة', path: '' },
    { id: 1, title: 'مركز المساعدة', path: '' },
  ];
}
