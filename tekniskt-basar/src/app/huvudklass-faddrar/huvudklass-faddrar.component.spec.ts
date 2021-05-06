import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuvudklassFaddrarComponent } from './huvudklass-faddrar.component';

describe('HuvudklassFaddrarComponent', () => {
  let component: HuvudklassFaddrarComponent;
  let fixture: ComponentFixture<HuvudklassFaddrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuvudklassFaddrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuvudklassFaddrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
