import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeesDatatableComponent } from './attendees-datatable.component';

describe('AttendeesDatatableComponent', () => {
  let component: AttendeesDatatableComponent;
  let fixture: ComponentFixture<AttendeesDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendeesDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeesDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
