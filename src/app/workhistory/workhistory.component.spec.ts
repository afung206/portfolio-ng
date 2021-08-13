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

  it('should render first work history items', () => {
    let expectOverview: string = "The Boeing Company is a leader in aerospace and engineering. " +
    "In the Digital Transformation Environment Team, we focused on changing the " +
    "software development culture within Boeing."
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('ul li h4')?.textContent).toContain('SOFTWARE ENGINEER II');
    expect(compiled.querySelector('ul li b')?.textContent).toContain('The Boeing Company');

    let workItems = compiled.querySelectorAll('ul li p');

    expect(workItems[0].textContent).toContain('Bellevue, WA');
    expect(workItems[1].textContent).toContain('August 2018 - Present');
    expect(workItems[2].textContent).toEqual(expectOverview);
  });
});
