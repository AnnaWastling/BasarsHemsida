import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlassSchemaComponent } from './klass-schema.component';

describe('KlassSchemaComponent', () => {
  let component: KlassSchemaComponent;
  let fixture: ComponentFixture<KlassSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlassSchemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlassSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
