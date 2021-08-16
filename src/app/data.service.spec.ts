import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataService } from './data.service';
import { QouteResults } from '../core/model/qouteResults';

describe('DataService', () => {
  let httpTestingController: HttpTestingController;
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(DataService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getRandomQoute should return expected data', (done) => {
    const qouteUrl = "http://www.dragonball.com";
    const expectedData: QouteResults[] = [
      { text: "Spirit Bomb", author: "Goku" },
      { text: "Masenko", author: "Gohan"},
      { text: "Final Flash", author: "Vegeta" },
    ];

    service.getRandomQoute(qouteUrl).subscribe((qouteResults: QouteResults[]) => {
      expect(qouteResults).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(qouteUrl);

    testRequest.flush(expectedData);
  });

});
