import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFerrariComponent } from './update-ferrari.component';

describe('UpdateFerrariComponent', () => {
  let component: UpdateFerrariComponent;
  let fixture: ComponentFixture<UpdateFerrariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFerrariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFerrariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
