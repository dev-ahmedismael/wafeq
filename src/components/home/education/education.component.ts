import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  items = [
    {
      id: 1,
      icon: 'tv',
      title: 'تدريب مجاني',
      description:
        'تعلّم كيفية استخدام نظام وافِق في دقائق من خلال التدريب العملي مع أحد خبرائنا.',
      button: 'سجل مجاناً',
      path: '',
    },
    {
      id: 2,
      icon: 'support',
      title: 'دعم كامل',
      description:
        'فريق الدعم لدينا جاهز لخدمتك على مدار الساعة يومياً من خلال خدمة الدردشة المباشرة أو الاتصال الهاتفي.',
      button: 'تحدث مع خدمة العملاء',
      path: '',
    },
    {
      id: 3,
      icon: 'description',
      title: 'مركز الدعم',
      description:
        'كل ما تريد معرفته عن استخدام نظام وافِق في سلسلة من المقالات البسيطة المناسبة للخبراء والمبتدئين.',
      button: 'مركز المساعدة',
      path: '',
    },
  ];
}
