import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbillComponent } from './ebill.component';

describe('EbillComponent', () => {
  let component: EbillComponent;
  let fixture: ComponentFixture<EbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EbillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
