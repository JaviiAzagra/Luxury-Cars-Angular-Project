import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamborghiniComponent } from './lamborghini.component';

describe('LamborghiniComponent', () => {
  let component: LamborghiniComponent;
  let fixture: ComponentFixture<LamborghiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamborghiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LamborghiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
