import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  aboutMeDescription: string = "Welcome to my Angular Portfolio Page! " + 
                              "My name is Aaron Fung and I am a " +
                              "Full Stack Developer " +
                              "specializing in Java and JavaScript. " +
                              "I currently reside in the Greater " + 
                              "Seattle Washington Area.";

  constructor() { }

  ngOnInit(): void {
  }

}
