import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlasschemaComponent } from './klasschema.component';

describe('KlasschemaComponent', () => {
  let component: KlasschemaComponent;
  let fixture: ComponentFixture<KlasschemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlasschemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlasschemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
