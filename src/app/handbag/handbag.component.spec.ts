import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandbagComponent } from './handbag.component';

describe('HandbagComponent', () => {
  let component: HandbagComponent;
  let fixture: ComponentFixture<HandbagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandbagComponent]
    });
    fixture = TestBed.createComponent(HandbagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
