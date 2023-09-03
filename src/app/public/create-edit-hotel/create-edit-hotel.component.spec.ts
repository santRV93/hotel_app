import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditHotelComponent } from './create-edit-hotel.component';

describe('CreateEditHotelComponent', () => {
  let component: CreateEditHotelComponent;
  let fixture: ComponentFixture<CreateEditHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
