import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vat',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './vat.component.html',
  styleUrl: './vat.component.scss',
})
export class VatComponent {}
