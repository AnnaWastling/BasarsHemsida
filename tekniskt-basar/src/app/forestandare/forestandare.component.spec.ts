import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestandareComponent } from './forestandare.component';

describe('ForestandareComponent', () => {
  let component: ForestandareComponent;
  let fixture: ComponentFixture<ForestandareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestandareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestandareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
