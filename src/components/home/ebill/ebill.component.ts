import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ebill',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './ebill.component.html',
  styleUrl: './ebill.component.scss',
})
export class EbillComponent {
  ebillItems = [
    {
      id: 1,
      icon: 'grid_on',
      title: 'تغيير تسميات الأعمدة',
      description: 'يمكنك تغيير عنوان العمود لأي نص يتماشى مع مجال أعمالك.',
    },
    {
      id: 2,
      icon: 'edit_note',
      title: 'تغيير لون النصوص',
      description: 'يمكنك تغيير الألوان لتناسب شكل ماركتك التجارية.',
    },
    {
      id: 3,
      icon: 'collections_bookmark',
      title: 'حفظ نماذج الفواتير',
      description: 'لتوفير وقتك واستخدامها بشكل أسرع لاحقاً.',
    },
    {
      id: 4,
      icon: 'approval',
      title: 'إضافة ختم شركتك',
      description:
        'حمّل ختم الشركة لوضعه على الفواتير وعروض الأسعار وأوامر الشراء.',
    },
  ];
}
