import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-team',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './manage-team.component.html',
  styleUrl: './manage-team.component.scss',
})
export class ManageTeamComponent {
  teamItems = [
    {
      id: 1,
      icon: 'lock_open',
      title: 'تحكم كامل',
      description:
        'يمنحك وافِق أكثر من 60 أذناً مختلفاً للأدوار التي يمكن لفريق عملك الحصول عليها.',
      img: 'assets/images/team/1.webp',
    },
    {
      id: 2,
      icon: 'paid',
      title: 'صرف مطالبات الموظفين',
      description:
        'يمكن للموظفين لديك تقديم مطالباتهم وتصنيفها بسهولة لتقوم بالموافِقة عليها وإرسالها.',
      img: 'assets/images/team/2.webp',
    },
    {
      id: 3,
      icon: 'forum',
      title: 'تواصل داخل التطبيق',
      description:
        'يمكنك الدردشة مباشرة مع فريقك من داخل وافِق دون الحاجة لاستخدام وسيلة تواصل خارجية.',
      img: 'assets/images/team/3.webp',
    },
  ];
  activeTeamItem = 0;
  setActiveTeamItem(itemID: number) {
    this.activeTeamItem === itemID
      ? (this.activeTeamItem = 0)
      : (this.activeTeamItem = itemID);
  }

  businessItems = [
    {
      id: 1,
      icon: 'account_tree',
      title: 'إضافة أي عدد من الفروع',
      description:
        'يمكنك إضافة فروع أعمالك مهما كان عددها على حساب وافِق نفسه دون عناء.',
      img: 'assets/images/business/1.webp',
    },
    {
      id: 2,
      icon: 'widgets',
      title: 'مؤسسات متعددة',
      description:
        'حساب وافِق واحد يجمع كل مؤسساتك، حتى لو كانت في عدة دول، مع التوافق مع متطلبات الهيئات الضريبية في كل دولة منها.',
      img: 'assets/images/business/2.webp',
    },
  ];
  activeBusinessItem = 0;
  setActiveBusinessItem(itemID: number) {
    this.activeBusinessItem === itemID
      ? (this.activeBusinessItem = 0)
      : (this.activeBusinessItem = itemID);
  }
}
