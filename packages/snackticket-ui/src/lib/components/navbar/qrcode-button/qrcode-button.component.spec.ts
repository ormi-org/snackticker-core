import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeButtonComponent } from './qrcode-button.component';

describe('QrcodeButtonComponent', () => {
  let component: QrcodeButtonComponent;
  let fixture: ComponentFixture<QrcodeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QrcodeButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QrcodeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
