import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeComponent } from './cree.component';

describe('CreeComponent', () => {
  let component: CreeComponent;
  let fixture: ComponentFixture<CreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
