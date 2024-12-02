import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OublieeComponent } from './oubliee.component';

describe('OublieeComponent', () => {
  let component: OublieeComponent;
  let fixture: ComponentFixture<OublieeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OublieeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OublieeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
