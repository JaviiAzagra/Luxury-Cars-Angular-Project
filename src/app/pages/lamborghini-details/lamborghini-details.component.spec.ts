import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamborghiniDetailsComponent } from './lamborghini-details.component';

describe('LamborghiniDetailsComponent', () => {
  let component: LamborghiniDetailsComponent;
  let fixture: ComponentFixture<LamborghiniDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamborghiniDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LamborghiniDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
