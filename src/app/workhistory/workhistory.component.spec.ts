import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkhistoryComponent } from './workhistory.component';

describe('WorkhistoryComponent', () => {
  let component: WorkhistoryComponent;
  let fixture: ComponentFixture<WorkhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display Work History header', () => {
    expect(component.workHistoryHeader).toMatch("Work History");
  });

  it('should contain a list of Work History items', () => {
    expect(component.workHistory).not.toBeLessThanOrEqual(0);
  });

  it('should render work history items', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('ul li h4')?.textContent).toContain('SOFTWARE ENGINEER II');
  });
});
