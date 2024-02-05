import { Component } from '@angular/core';

@Component({
  selector: 'app-advantages',
  standalone: true,
  imports: [],
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.scss',
})
export class AdvantagesComponent {
  advantages = [
    {
      id: 1,
      icon: 'local_mall',
      title: 'المشتريات والمصروفات',
      description: 'إدارة الفواتير وأوامر الشراء والمصروفات من مكان واحد.',
    },
    {
      id: 2,
      icon: 'payments',
      title: 'الرواتب والموظفون',
      description:
        'إعداد صرف رواتب الموظفين ودعوتهم لإرسال المطالبات المالية لاعتمادها.',
    },
    {
      id: 3,
      icon: 'verified_user',
      title: 'إقرار ضريبة القيمة المضافة',
      description: 'إنشاء نموذج إقرار ضريبي مُفصل وسهل التعبئة.',
    },
    {
      id: 4,
      icon: 'deployed_code',
      title: 'الخدمات والمنتجات',
      description: 'إدارة مخزون منتجاتك/خدماتك تلقائياً مع كل فاتورة جديدة.',
    },
    {
      id: 5,
      icon: 'group',
      title: 'العملاء والموردون',
      description:
        'إنشاء قائمة جهات اتصال للعملاء والموردين بحيث يمكنك استخدامها في أي فواتير لاحقاً.',
    },
    {
      id: 6,
      icon: 'monitoring',
      title: 'التقارير والتحليلات',
      description: 'إنشاء تقارير شاملة تغطي جميع الجوانب المحاسبية لأعمالك.',
    },
  ];
}
