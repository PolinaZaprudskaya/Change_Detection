import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectChangesComponent } from './detect-changes.component';

describe('DetectChangesComponent', () => {
  let component: DetectChangesComponent;
  let fixture: ComponentFixture<DetectChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
