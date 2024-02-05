import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  rightSide = [
    {
      id: 1,
      comment: 'سهل الاستخدام، واجهة بسيطة و بأسعار في متناول الجميع!',
      author: 'ريما خالد - جدة',
      rating: 5,
    },
    {
      id: 2,
      comment: 'يجمع كل المميزات المطلوبة مع سهولة الاستخدام.',
      author: 'مؤسسة قصوة - الرياض',
      rating: 4,
    },
    {
      id: 3,
      comment:
        'برنامج قوي وممتاز جدا في إنشاء التقارير والفواتير لكل الشركات في مؤسستك من مكان واحد.',
      author: 'فيصل الحوكمي - الرياض',
      rating: 5,
    },
  ];

  leftSide = [
    {
      id: 1,
      comment: 'تطبيق برمجيات خدمية أكثر من رائع للمحاسبة والفوترة الإلكترونية',
      author: 'عبدالرحمن الشهري - الخبر',
      rating: '',
    },
    {
      id: 2,
      comment: 'الفوترة الإلكترونية صارت سهلة وسريعة باستخدام هذا البرنامج',
      author: 'فيصل الحوكمي - الرياض',
      rating: '',
    },
    {
      id: 3,
      comment: 'برنامج سريع جدا',
      author: 'رياس نافاس - الدمام',
      rating: '',
    },
  ];
}
