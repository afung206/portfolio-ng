import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QouteComponent } from './qoute.component';
import { DataService } from '../data.service';

describe('QouteComponent', () => {
  let component: QouteComponent;
  let fixture: ComponentFixture<QouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QouteComponent ],
      imports: [HttpClientTestingModule],
      providers: [DataService],
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the data service on init and assign randomQoute and qouteAuthor',  async () => {
    let qouteResults = { text: "Hello World", author: "Goku"};


  });
});
