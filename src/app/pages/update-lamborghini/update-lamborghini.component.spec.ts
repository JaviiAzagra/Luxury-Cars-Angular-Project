import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLamborghiniComponent } from './update-lamborghini.component';

describe('UpdateLamborghiniComponent', () => {
  let component: UpdateLamborghiniComponent;
  let fixture: ComponentFixture<UpdateLamborghiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLamborghiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLamborghiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
