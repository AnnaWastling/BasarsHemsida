import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktivitetsSchemaComponent } from './aktivitets-schema.component';

describe('AktivitetsSchemaComponent', () => {
  let component: AktivitetsSchemaComponent;
  let fixture: ComponentFixture<AktivitetsSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AktivitetsSchemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AktivitetsSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
