import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreamDetailComponent } from './icecream-detail.component';

describe('IcecreamDetailComponent', () => {
  let component: IcecreamDetailComponent;
  let fixture: ComponentFixture<IcecreamDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcecreamDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcecreamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
