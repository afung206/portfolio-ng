import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../data.service';
import { QouteResults } from '../../core/model/qouteResults';

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {

  qouteUrl: string = "https://type.fit/api/quotes";
  randomQoute: string = "";
  qouteAuthor: string = "";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRandomQoute(this.qouteUrl).subscribe({
        next: (data: QouteResults[]) => {
          let randomIndex: number = this.generateRandomInt();
          this.randomQoute = data[randomIndex].text;
          this.qouteAuthor = data[randomIndex].author;
        },
        error: (error: Error) => {
            console.error('Error fetching qoute. Error message=', error);
        }
      });
  }

  generateRandomInt(max?: number): number {
    if (!max) {
      max = 100;
    }
    return Math.floor(Math.random() * max);
  }
}