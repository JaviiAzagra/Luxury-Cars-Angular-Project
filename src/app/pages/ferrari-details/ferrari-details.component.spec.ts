import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerrariDetailsComponent } from './ferrari-details.component';

describe('FerrariDetailsComponent', () => {
  let component: FerrariDetailsComponent;
  let fixture: ComponentFixture<FerrariDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerrariDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FerrariDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
