import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NollebokenComponent } from './nolleboken.component';

describe('NollebokenComponent', () => {
  let component: NollebokenComponent;
  let fixture: ComponentFixture<NollebokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NollebokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NollebokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
