import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangesComponent } from './on-changes.component';

describe('OnChangesComponent', () => {
  let component: OnChangesComponent;
  let fixture: ComponentFixture<OnChangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnChangesComponent]
    });
    fixture = TestBed.createComponent(OnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
