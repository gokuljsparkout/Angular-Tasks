import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicExplorerComponent } from './topic-explorer.component';

describe('TopicExplorerComponent', () => {
  let component: TopicExplorerComponent;
  let fixture: ComponentFixture<TopicExplorerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicExplorerComponent]
    });
    fixture = TestBed.createComponent(TopicExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
