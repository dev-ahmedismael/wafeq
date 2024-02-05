import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { EbillComponent } from './ebill/ebill.component';
import { ReportsComponent } from './reports/reports.component';
import { VatComponent } from './vat/vat.component';
import { ManageTeamComponent } from './manage-team/manage-team.component';
import { SaveTimeComponent } from './save-time/save-time.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { EducationComponent } from './education/education.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    TestimonialComponent,
    AdvantagesComponent,
    EbillComponent,
    ReportsComponent,
    VatComponent,
    ManageTeamComponent,
    SaveTimeComponent,
    TestimonialsComponent,
    EducationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
